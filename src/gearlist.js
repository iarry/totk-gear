import "./gearlist.css";

import { Component } from "react";
import GearItem from "./gearitem";
import Costs from "./costs";
import { Save } from "./storage";
import { Gear } from "./types";

// GearList component as a smart (class-based) component
class GearList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gears: props.gears,
    };
  }

  upgradeGear = (gearName, inc) => {
    this.setState((prevState) => ({
      gears: prevState.gears.map((gear) =>
        gear.name === gearName
          ? Gear.from({
              ...gear,
              currLevel:
                inc > 0
                  ? gear.currLevel < gear.upgrades.length
                    ? gear.currLevel + inc
                    : gear.currLevel
                  : gear.currLevel > 0
                  ? gear.currLevel + inc
                  : gear.currLevel,
            })
          : gear
      ),
    }));
  };

  toggleAcquired = (gearName) => {
    this.setState((prevState) => ({
      gears: prevState.gears.map((gear) => {
        if (gear.name !== gearName) {
          return gear;
        }
        // if (gear.acquired && !window.confirm(`Delete ${gear.name}?`)) {
        //   return gear;
        // }
        return Gear.from({ ...gear, acquired: !gear.acquired });
      }),
    }));
  };

  componentDidUpdate() {
    Save(this.state.gears);
  }

  render() {
    return (
      <main>
        <section className="gear">
          <h2>
            Looted ({this.state.gears.filter((gear) => gear.acquired).length}/
            {this.state.gears.length})
          </h2>
          <ol>
            {this.state.gears
              .filter((gear) => gear.acquired)
              .sort(compare)
              .map((gear) => (
                <GearItem
                  key={gear.name}
                  gear={gear}
                  onUpgrade={this.upgradeGear}
                  onToggleAcquired={this.toggleAcquired}
                />
              ))}
          </ol>
          <h2>
            Unlooted ({this.state.gears.filter((gear) => !gear.acquired).length}
            /{this.state.gears.length})
          </h2>
          <ol>
            {this.state.gears
              .filter((gear) => !gear.acquired)
              .sort(compare)
              .map((gear) => (
                <GearItem
                  key={gear.name}
                  gear={gear}
                  onUpgrade={this.upgradeGear}
                  onToggleAcquired={this.toggleAcquired}
                />
              ))}
          </ol>
        </section>
        <Costs gears={this.state.gears} />
      </main>
    );
  }
}

export default GearList;

function compare(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
}

// import logo from './logo.svg';
// <img src={logo} className="App-logo" alt="logo" />;
