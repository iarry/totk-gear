import "./gearitem.css";
import {
  MdArrowUpward,
  MdArrowDownward,
  MdAddCircle,
  MdDelete,
  MdStar,
} from "react-icons/md";

// GearItem component as a functional component
function GearItem({ gear, onUpgrade, onToggleAcquired }) {
  let remainingUpgrades = gear.upgrades.filter(
    (_, index) => gear.currLevel <= index
  );
  return (
    <li className="item">
      <div className="description">
        {gear.name}
        <span className="level">
          {Array.from({ length: gear.currLevel }, (_, index) => (
            <MdStar key={index} />
          ))}
        </span>
        <button
          onClick={() => onUpgrade(gear.name, 1)}
          disabled={gear.currLevel === gear.upgrades.length}
        >
          <MdArrowUpward />
        </button>
        <button
          onClick={() => onUpgrade(gear.name, -1)}
          disabled={gear.currLevel === 0}
        >
          <MdArrowDownward />
        </button>
        <button onClick={() => onToggleAcquired(gear.name)}>
          {gear.acquired ? <MdDelete /> : <MdAddCircle />}
        </button>
      </div>
      <div className="upgrades">
        {!remainingUpgrades.length && (
          <p className="no-upgrades">
            {gear.upgrades.length ? "Fully Upgraded" : "No Upgrades"}
          </p>
        )}
        {!!remainingUpgrades.length &&
          gear.upgrades.map((upgrade, index) => {
            if (index < gear.currLevel) return null;
            return (
              <p key={index} className="upgrade">
                {Array.from({ length: index + 1 }, (_, index) => (
                  <MdStar key={index} />
                ))}
                {upgrade.costs.map((c, index) => {
                  return (
                    <span key={index} className="upgrade-cost">
                      {c.material} <span>x{c.quantity}</span>
                      {index < upgrade.costs.length - 1 ? "," : ""}
                    </span>
                  );
                })}
              </p>
            );
          })}
      </div>
    </li>
  );
}
export default GearItem;
