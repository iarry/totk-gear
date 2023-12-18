import "./gearlist.css";

import React, { Component } from "react";
import GearItem from "./gearitem";
import originalGear from "./data";
import Costs from "./costs";
import { Save, Export, FromString } from "./storage";
import { Gear, NormalizeName } from "./types";
import { MdFileCopy } from "react-icons/md";

// GearList component as a smart (class-based) component
class GearList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gears: props.gears,
      search: "",
      exported: "",
      imported: "",
      showGear: true,
      screenWidth: window.innerWidth,
      searchMaterials: false,
    };
    this.exportRef = React.createRef(0);
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({ screenWidth: window.innerWidth });
  };

  toggleComponent = () => {
    this.setState((prevState) => ({ showGear: !prevState.showGear }));
  };

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
    const { showGear, screenWidth } = this.state;
    const isMobile = screenWidth < 720;
    const searchResults = this.state.gears.filter(
      (g) =>
        !this.state.search ||
        g.normalizedName.includes(NormalizeName(this.state.search)) ||
        (this.state.searchMaterials &&
          g.upgrades.some((u) =>
            u.costs.some((uc) =>
              uc.normalizedMaterial.includes(NormalizeName(this.state.search))
            )
          ))
    );
    return (
      <>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={this.state.search}
            onChange={(event) => {
              this.setState({ search: event.target.value });
            }}
          />
          <label>
            <input
              type="checkbox"
              checked={this.state.searchMaterials}
              onChange={() => {
                this.setState((prevState) => ({
                  searchMaterials: !prevState.searchMaterials,
                }));
              }}
            />
            Search materials
          </label>
        </div>
        <header>
          {isMobile && (
            <button onClick={this.toggleComponent} className="toggle">
              {showGear ? "Show costs" : "Show gear"}
            </button>
          )}
        </header>
        <main>
          {(!isMobile || (isMobile && this.state.showGear)) && (
            <section className="gear">
              <h2>
                Looted (
                {this.state.gears.filter((gear) => gear.acquired).length}/
                {this.state.gears.length})
              </h2>
              <ol>
                {searchResults
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
                {searchResults
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
          )}
          {(!isMobile || (isMobile && !this.state.showGear)) && (
            <Costs
              gears={this.state.gears}
              search={
                this.state.searchMaterials && NormalizeName(this.state.search)
              }
              className={isMobile ? "mobile" : ""}
            />
          )}
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
