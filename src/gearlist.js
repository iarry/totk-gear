import "./gearlist.css";

import React, { Component } from "react";
import GearItem from "./gearitem";
import originalGear from "./data";
import Costs from "./costs";
import { Save, Export, FromString } from "./storage";
import { Gear } from "./types";
import { MdFileCopy } from "react-icons/md";

// GearList component as a smart (class-based) component
class GearList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gears: props.gears,
      exported: "",
      imported: "",
    };
    this.exportRef = React.createRef(0);
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
        return Gear.from({ ...gear, acquired: !gear.acquired });
      }),
    }));
  };

  export = () => {
    this.setState(
      () => ({
        exported: Export(),
      }),
      this.copy
    );
  };

  import = () => {
    let gear = FromString(originalGear, this.state.imported);
    this.setState({ gear: gear });
    Save(gear);
  };

  copy = async () => {
    this.exportRef.current.select();
    try {
      await navigator.clipboard.writeText(this.state.exported);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  componentDidUpdate() {
    Save(this.state.gears);
  }

  render() {
    return (
      <>
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
              Unlooted (
              {this.state.gears.filter((gear) => !gear.acquired).length}/
              {this.state.gears.length})
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
        <footer>
          <div className="export">
            <button onClick={this.export}>Export</button>
            {this.state.exported && (
              <>
                <textarea
                  ref={this.exportRef}
                  value={this.state.exported}
                  readOnly
                ></textarea>
                <button onClick={this.copy}>
                  <MdFileCopy />
                </button>
              </>
            )}
          </div>
          <div className="import">
            <input
              type="text"
              value={this.state.imported}
              onChange={(event) => {
                this.setState({ imported: event.target.value });
              }}
            />
            <button onClick={this.import} disabled={!this.state.imported}>
              Import
            </button>
          </div>
        </footer>
      </>
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
