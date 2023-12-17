#!/bin/bash

# Path to the CSV file
FILE="sanitized_gear.csv"

# Function to convert a string to camelCase for JavaScript variable naming
toCamelCase() {
    echo "$1" | awk '{gsub(/ /, "", $0); print tolower(substr($0,1,1)) substr($0,2)}'
}

# Function to process each gear item and its upgrades
processGearItem() {
    local gear_name=$1
    shift
    local upgrades=("$@")

    local gear_var_name=$(toCamelCase "$gear_name")

    echo -n "    new Gear(\"$gear_name\", ["

    for i in "${!upgrades[@]}"; do
        echo -n "new Upgrade($i, ["
        local upgrade=${upgrades[$i]}

        if [ -n "$upgrade" ]; then
            IFS='+' read -r -a costs <<< "$upgrade"
            for cost in "${costs[@]}"; do
                # Default quantity to 1 if not specified
                qty=1
                material="$cost"

                # Check if the cost string starts with a number
                if [[ "$cost" =~ ^[0-9]+ ]]; then
                    qty=$(echo "$cost" | awk '{print $1}')
                    material=$(echo "$cost" | awk '{$1=""; print substr($0,2)}')
                fi

                # Remove any leading or trailing spaces
                material=$(echo "$material" | xargs)

                echo -n "new UpgradeCost($qty, \"$material\"), "
            done
        else
            echo -n "new Upgrade($i, []), "
        fi

        echo -n "]),"
    done

    echo "]),"
}

echo "import { Gear, Upgrade, UpgradeCost } from "./types";"
echo ""

# Start the gear array
echo "let gear = ["

# Read the CSV file
while IFS= read -r line || [[ -n $line ]]; do
    # Read gear name and upgrades into an array
    IFS=, read -r gear_name upgrade1 upgrade2 upgrade3 upgrade4 <<< "$line"
    processGearItem "$gear_name" "$upgrade1" "$upgrade2" "$upgrade3" "$upgrade4"
done < "$FILE"

# Close the gear array
echo "];"
echo ""
echo "export default gear;"
