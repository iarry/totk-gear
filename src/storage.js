const storageKey = "progress";

// Function to save gear data to local storage
export function Save(gear) {
  const progress = gear.map((gear) => ({
    name: gear.name,
    acquired: gear.acquired,
    currLevel: gear.currLevel,
  }));

  localStorage.setItem(storageKey, JSON.stringify(progress));
}

// Function to load gear data from local storage and update the gear list
export function Load(gear) {
  const savedProgress = JSON.parse(localStorage.getItem(storageKey));

  if (savedProgress) {
    gear.forEach((gear) => {
      const savedGear = savedProgress.find((g) => g.name === gear.name);
      if (savedGear) {
        gear.acquired = savedGear.acquired;
        gear.currLevel = savedGear.currLevel;
      }
    });
  }
  return gear;
}
