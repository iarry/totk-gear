let dontNormalize = {
  Bones: true,
  Guts: true,
  Wings: true,
  Bass: true,
  Princess: true,
  Rupees: true,
};

export class UpgradeCost {
  constructor(quantity, material) {
    this.quantity = quantity;
    this.material = material;
    this.fixQuantity();
    this.normalizeMaterial();
    this.normalizedMaterial = NormalizeName(this.material);
  }

  // Chat GPT couldn't figure out this parsing in the bash script
  fixQuantity() {
    // Regular expression to match a number at the beginning of the string
    const regex = /^(\d+)\s*(.*)$/;

    const match = this.material.match(regex);
    if (match) {
      this.quantity = parseInt(match[1], 10);
      this.material = match[2];
    }
    // If no number is found, it's already defaulted to 1
  }

  // Some of the materials were plural
  normalizeMaterial() {
    this.material = this.material.replace("Shards", "Shard");
    this.material = this.material.replace(/ies$/, "y");
    this.material = this.material.replace(/sses$/, "ss");
    this.material = this.material.replace("rupees", "Rupees");
    if (dontNormalize[lastWord(this.material)]) return;
    this.material = this.material.replace(/s$/, "");
  }
}

function lastWord(str) {
  const words = str.trim().split(/\s+/);
  return words[words.length - 1];
}

export class Upgrade {
  constructor(level, costs) {
    this.level = level;
    // A bug in parsing logic put Upgrade types in here when there's no upgrades, filter them out
    this.costs = costs.filter((c) => c instanceof UpgradeCost); // Array of UpgradeCost objects
  }
}

export function NormalizeName(str) {
  if (!str) return str;
  return str.toLowerCase().replace(/[-']/g, "");
}

export class Gear {
  constructor(n, upgrades) {
    this.name = n;
    this.normalizedName = NormalizeName(n);
    this.acquired = false;
    this.currLevel = 0;
    this.upgrades = upgrades && upgrades.filter((c) => c.costs.length); // Array of Upgrade objects
  }
  static from(obj) {
    return Object.assign(new Gear(), obj);
  }

  upgrade(inc) {
    this.currLevel =
      inc > 0
        ? this.currLevel < this.upgrades.length
          ? this.currLevel + inc
          : this.currLevel
        : this.currLevel > 0
        ? this.currLevel + inc
        : this.currLevel;
  }

  getRemaining() {
    return this.upgrades.slice(this.currLevel).reduce((acc, upgrade) => {
      upgrade.costs.forEach((cost) => {
        const existing = acc.find((c) => c.material === cost.material);
        if (existing) {
          existing.quantity += cost.quantity;
        } else {
          acc.push(new UpgradeCost(cost.quantity, cost.material));
        }
      });
      return acc;
    }, []);
  }

  getSpent() {
    return this.upgrades
      .filter((u) => u.level < this.currLevel)
      .reduce((acc, upgrade) => {
        upgrade.costs.forEach((cost) => {
          const existing = acc.find((c) => c.material === cost.material);
          if (existing) {
            existing.quantity += cost.quantity;
          } else {
            acc.push(new UpgradeCost(cost.quantity, cost.material));
          }
        });
        return acc;
      }, []);
  }

  getTotal() {
    return this.upgrades.reduce((acc, upgrade) => {
      upgrade.costs.forEach((cost) => {
        const existing = acc.find((c) => c.material === cost.material);
        if (existing) {
          existing.quantity += cost.quantity;
        } else {
          acc.push(new UpgradeCost(cost.quantity, cost.material));
        }
      });
      return acc;
    }, []);
  }
}
