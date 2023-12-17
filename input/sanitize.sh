#!/bin/bash

# Check if a file argument is provided
if [ "$#" -ne 1 ]; then
    echo "Usage: $0 filename"
    exit 1
fi

awk '{
    for (i = 1; i <= length($0); i++) {
        char = substr($0, i, 1)
        if (char == "\"")
            in_quote = !in_quote
        if (in_quote && char == "\n")
            print("\"+\"")
        if (in_quote && char == "\n")
            continue
        printf("%s", char)
    }
    if (!in_quote)
        printf("\n")
}' RS= ORS= "$1"
