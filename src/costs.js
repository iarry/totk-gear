import "./costs.css";
import { UpgradeCost } from "./types";

// Costs component as a functional component
function Costs({ gears, className, search }) {
  let remaining = remainingCosts(gears);
  let total = totalCosts(gears).sort(compare);
  let freeToUse = total
    .filter((t) => {
      let found = remaining.find((r) => r.material === t.material);
      return !found || found.quantity === 0;
    })
    .sort(compare);
  return (
    <section className={`costs ${className ? className : ""}`}>
      <h2>Free to use:</h2>
      <ol>
        {freeToUse
          .filter((c) => !search || c.normalizedMaterial.includes(search))
          .map((c, index) => {
            return (
              <li key={index} className="remaining no-remaining">
                <span className="remaining-name">{c.material} </span>
                <span>0/{c.quantity}</span>
              </li>
            );
          })}
      </ol>
      <h2>Needed:</h2>
      <ol>
        {total
          .filter((c) => !search || c.normalizedMaterial.includes(search))
          .map((t, index) => {
            let r = remaining.find((r) => r.material === t.material);
            return (
              r && (
                <li key={index} className="remaining">
                  <span className="remaining-name">{t.material} </span>
                  <span>
                    {r.quantity}/{t.quantity}
                  </span>
                </li>
              )
            );
          })}
      </ol>
    </section>
  );
}
export default Costs;

function sumCosts(items, costMethod) {
  let totalCosts = [];

  items.forEach((gear) => {
    const gearCosts = gear[costMethod]();
    gearCosts.forEach((cost) => {
      const existing = totalCosts.find((c) => c.material === cost.material);
      if (existing) {
        existing.quantity += cost.quantity;
      } else {
        totalCosts.push(new UpgradeCost(cost.quantity, cost.material));
      }
    });
  });

  return totalCosts;
}

function remainingCosts(items) {
  return sumCosts(items, "getRemaining");
}

function totalCosts(items) {
  return sumCosts(items, "getTotal");
}

function compare(a, b) {
  if (a.material < b.material) {
    return -1;
  }
  if (a.material > b.material) {
    return 1;
  }
  return 0;
}
