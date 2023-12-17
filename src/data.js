import { Gear, Upgrade, UpgradeCost } from "./types";

let gear = [
  new Gear("Hylian Hood", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Bokoblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Fangs"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Black Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Silver Bokoblin Horns"),
      new UpgradeCost(1, "5 Bokoblin Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Hylian Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Bokoblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Fangs"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Black Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Silver Bokoblin Horns"),
      new UpgradeCost(1, "5 Bokoblin Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Hylian Tunic", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Bokoblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Fangs"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Black Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Silver Bokoblin Horns"),
      new UpgradeCost(1, "5 Bokoblin Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of the Wild", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Acorns"),
      new UpgradeCost(1, "2 Farosh's Scales"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Courser Bee Honeys"),
      new UpgradeCost(1, "2 Farosh's Claws"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Energetic Rhino Beetles"),
      new UpgradeCost(1, "2 Shards of Farosh's Fang"),
      new UpgradeCost(1, "5 Shards of Farosh's Spike"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Star Fragments"),
      new UpgradeCost(1, "2 Farosh's Horns"),
      new UpgradeCost(1, "10 Shards of Farosh's Spike"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of the Wild", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Acorns"),
      new UpgradeCost(1, "2 Dinraal's Scales"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Courser Bee Honeys"),
      new UpgradeCost(1, "2 Dinraal's Claws"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Energetic Rhino Beetles"),
      new UpgradeCost(1, "2 Shards of Dinraal's Fang"),
      new UpgradeCost(1, "5 Shards of Dinraal's Spike"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Star Fragments"),
      new UpgradeCost(1, "2 Dinraal's Horns"),
      new UpgradeCost(1, "10 Shards of Dinraal's Spike"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of the Wild", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Acorns"),
      new UpgradeCost(1, "2 Naydra's Scales"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Courser Bee Honeys"),
      new UpgradeCost(1, "2 Naydra's Claws"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Energetic Rhino Beetles"),
      new UpgradeCost(1, "2 Shards of Naydra's Fang"),
      new UpgradeCost(1, "5 Shards of Naydra's Spike"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Star Fragments"),
      new UpgradeCost(1, "2 Naydra's Horns"),
      new UpgradeCost(1, "10 Shards of Naydra's Spike"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Zora Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Lizalfos Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Lizalfos Talons"),
      new UpgradeCost(1, "5 Hyrule Bass"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Lizalfos Horns"),
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hearty Bass"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Lizalfos Horns"),
      new UpgradeCost(1, "5 Blue Lizalfos Tails"),
      new UpgradeCost(1, "20 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Zora Greaves", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Lizalfos Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Lizalfos Talons"),
      new UpgradeCost(1, "5 Hyrule Bass"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Lizalfos Horns"),
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hearty Bass"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Lizalfos Horns"),
      new UpgradeCost(1, "5 Blue Lizalfos Tails"),
      new UpgradeCost(1, "20 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Zora Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Lizalfos Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Lizalfos Talons"),
      new UpgradeCost(1, "5 Hyrule Bass"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Lizalfos Horns"),
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hearty Bass"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Lizalfos Horns"),
      new UpgradeCost(1, "5 Blue Lizalfos Tails"),
      new UpgradeCost(1, "20 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Desert Voe Headband", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 White Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 White Chuchu Jellies"),
      new UpgradeCost(1, "3 Cool Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Keese Wings"),
      new UpgradeCost(1, "3 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Chillshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sapphires"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Desert Voe Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 White Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 White Chuchu Jellies"),
      new UpgradeCost(1, "3 Cool Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Keese Wings"),
      new UpgradeCost(1, "3 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Chillshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sapphires"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Desert Voe Spaulder", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 White Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 White Chuchu Jellies"),
      new UpgradeCost(1, "3 Cool Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Keese Wings"),
      new UpgradeCost(1, "3 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Chillshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sapphires"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Snowquill Headdress", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Red Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Red Chuchu Jellies"),
      new UpgradeCost(1, "3 Warm Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Keese Wings"),
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sunshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Rubies"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Snowquill Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Red Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Red Chuchu Jellies"),
      new UpgradeCost(1, "3 Warm Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Keese Wings"),
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sunshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Rubies"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Snowquill Tunic", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Red Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Red Chuchu Jellies"),
      new UpgradeCost(1, "3 Warm Safflinas"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Keese Wings"),
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Sunshrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "10 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Rubies"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Flamebreaker Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Moblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Moblin Fangs"),
      new UpgradeCost(1, "5 Fireproof Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Moblin Horns"),
      new UpgradeCost(1, "3 Smotherwing Butterflies"),
      new UpgradeCost(1, "15 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Moblin Horns"),
      new UpgradeCost(1, "5 Smotherwing Butterflies"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Flamebreaker Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Moblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Moblin Fangs"),
      new UpgradeCost(1, "5 Fireproof Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Moblin Horns"),
      new UpgradeCost(1, "3 Smotherwing Butterflies"),
      new UpgradeCost(1, "15 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Moblin Horns"),
      new UpgradeCost(1, "5 Smotherwing Butterflies"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Flamebreaker Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Moblin Horns"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Moblin Fangs"),
      new UpgradeCost(1, "5 Fireproof Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Moblin Horns"),
      new UpgradeCost(1, "3 Smotherwing Butterflies"),
      new UpgradeCost(1, "15 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Moblin Horns"),
      new UpgradeCost(1, "5 Smotherwing Butterflies"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Stealth Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Blue Nightshades"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Nightshades"),
      new UpgradeCost(1, "5 Sunset Fireflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Silent Shrooms"),
      new UpgradeCost(1, "5 Sneaky River Snails"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Stealthfin Trouts"),
      new UpgradeCost(1, "5 Silent Princesses"),
      new UpgradeCost(1, "10 Sundelions"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Stealth Tights", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Blue Nightshades"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Nightshades"),
      new UpgradeCost(1, "5 Sunset Fireflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Silent Shrooms"),
      new UpgradeCost(1, "5 Sneaky River Snails"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Stealthfin Trouts"),
      new UpgradeCost(1, "5 Silent Princesses"),
      new UpgradeCost(1, "10 Sundelions"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Stealth Chest Guard", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Blue Nightshades"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Blue Nightshades"),
      new UpgradeCost(1, "5 Sunset Fireflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Silent Shrooms"),
      new UpgradeCost(1, "5 Sneaky River Snails"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Stealthfin Trouts"),
      new UpgradeCost(1, "5 Silent Princesses"),
      new UpgradeCost(1, "10 Sundelions"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Climber's Bandanna", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "3 Rushrooms"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Keese Wings"),
      new UpgradeCost(1, "5 Hightail Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Ice Keese Wings"),
      new UpgradeCost(1, "10 Hot-Footed Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Fire Keese Wings"),
      new UpgradeCost(1, "20 Swift Violets"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Climbing Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "3 Rushrooms"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Keese Wings"),
      new UpgradeCost(1, "5 Hightail Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Ice Keese Wings"),
      new UpgradeCost(1, "10 Hot-Footed Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Fire Keese Wings"),
      new UpgradeCost(1, "20 Swift Violets"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Climbing Gear", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "3 Rushrooms"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Keese Wings"),
      new UpgradeCost(1, "5 Hightail Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "8 Ice Keese Wings"),
      new UpgradeCost(1, "10 Hot-Footed Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Fire Keese Wings"),
      new UpgradeCost(1, "20 Swift Violets"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Radiant Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "2 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "3 Horriblin Guts"),
      new UpgradeCost(1, "10 Gibdo Bones"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "3 Lynel Guts"),
      new UpgradeCost(1, "3 Molduga Jaws"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Radiant Tights", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "2 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "3 Horriblin Guts"),
      new UpgradeCost(1, "10 Gibdo Bones"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "3 Lynel Guts"),
      new UpgradeCost(1, "3 Molduga Jaws"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Radiant Shirt", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "2 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "3 Horriblin Guts"),
      new UpgradeCost(1, "10 Gibdo Bones"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "3 Lynel Guts"),
      new UpgradeCost(1, "3 Molduga Jaws"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Soldier's Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Chuchu Jellies"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "3 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Lynel Hoofs"),
      new UpgradeCost(1, "5 Lynel Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Soldier's Greaves", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Chuchu Jellies"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "3 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Lynel Hoofs"),
      new UpgradeCost(1, "5 Lynel Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Soldier's Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Chuchu Jellies"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "3 Moblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Lizalfos Tails"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "30 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Lynel Hoofs"),
      new UpgradeCost(1, "5 Lynel Guts"),
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Bokoblin Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Diamond Circlet", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Diamonds"),
      new UpgradeCost(1, "3 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Diamonds"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Diamonds"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "8 Diamonds"),
      new UpgradeCost(1, "2 Star Fragments"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Ruby Circlet", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Rubies"),
      new UpgradeCost(1, "3 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Rubies"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Rubies"),
      new UpgradeCost(1, "1 Star Fragments"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Rubies"),
      new UpgradeCost(1, "2 Star Fragments"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Sapphire Circlet", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Sapphires"),
      new UpgradeCost(1, "3 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Sapphires"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Sapphires"),
      new UpgradeCost(1, "1 Star Fragments"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Sapphires"),
      new UpgradeCost(1, "2 Star Fragments"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Topaz Earrings", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Topaz"),
      new UpgradeCost(1, "3 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Topaz"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Topaz"),
      new UpgradeCost(1, "1 Star Fragments"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Topaz"),
      new UpgradeCost(1, "2 Star Fragments"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Opal Earrings", [
    new Upgrade(0, [
      new UpgradeCost(1, "6 Opals"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "12 Opals"),
      new UpgradeCost(1, "10 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "18 Opals"),
      new UpgradeCost(1, "15 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Opals"),
      new UpgradeCost(1, "25 Flints"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Amber Earrings", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Ambers"),
      new UpgradeCost(1, "5 Flints"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "10 Flints"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "35 Ambers"),
      new UpgradeCost(1, "15 Flints"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "60 Ambers"),
      new UpgradeCost(1, "25 Flints"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Moblin Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Rubber Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Electric Lizalfos Horn"),
      new UpgradeCost(1, "3 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "8 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "5 Voltfruits"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Zapshrooms"),
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "8 Electric Safflinas"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "5 Topaz"),
      new UpgradeCost(1, "8 Electric Lizalfos Tails"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Rubber Tights", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Electric Lizalfos Horn"),
      new UpgradeCost(1, "3 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "8 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "5 Voltfruits"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Zapshrooms"),
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "8 Electric Safflinas"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "5 Topaz"),
      new UpgradeCost(1, "8 Electric Lizalfos Tails"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Rubber Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Electric Lizalfos Horn"),
      new UpgradeCost(1, "3 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "8 Yellow Chuchu Jellies"),
      new UpgradeCost(1, "5 Voltfruits"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Zapshrooms"),
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "8 Electric Safflinas"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "5 Topaz"),
      new UpgradeCost(1, "8 Electric Lizalfos Tails"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Barbarian Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Mighty Thistles"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "2 Lynel Saber Horns"),
      new UpgradeCost(1, "2 Lynel Mace Horns"),
      new UpgradeCost(1, "5 Razorshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Blue-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 Blue-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Razorclaw Crabs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 White-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 White-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Bladed Rhino Beetles"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Barbarian Leg Wraps", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Mighty Thistles"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "2 Lynel Saber Horns"),
      new UpgradeCost(1, "2 Lynel Mace Horns"),
      new UpgradeCost(1, "5 Razorshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Blue-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 Blue-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Razorclaw Crabs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 White-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 White-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Bladed Rhino Beetles"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Barbarian Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Mighty Thistles"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "2 Lynel Saber Horns"),
      new UpgradeCost(1, "2 Lynel Mace Horns"),
      new UpgradeCost(1, "5 Razorshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Blue-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 Blue-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Razorclaw Crabs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 White-Maned Lynel Saber Horns"),
      new UpgradeCost(1, "3 White-Maned Lynel Mace Horns"),
      new UpgradeCost(1, "3 Bladed Rhino Beetles"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Sand Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Hightail Lizards"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Gibdo Bones"),
      new UpgradeCost(1, "5 Swift Carrots"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Gibdo Guts"),
      new UpgradeCost(1, "10 Rushrooms"),
      new UpgradeCost(1, "5 Molduga Fins"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Molduga Guts"),
      new UpgradeCost(1, "10 Swift Violets"),
      new UpgradeCost(1, "5 Hearty Lizards"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Lizalfos Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Lynel Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Glide Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "6 Aerocuda Eyeballs"),
      new UpgradeCost(1, "5 Keese Wings"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Aerocuda Wings"),
      new UpgradeCost(1, "8 Aerocuda Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "12 Gleeok Wings"),
      new UpgradeCost(1, "10 Aerocuda Wings"),
      new UpgradeCost(1, "8 Gibdo Wings"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Glide Tights", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "6 Aerocuda Eyeballs"),
      new UpgradeCost(1, "5 Keese Wings"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Aerocuda Wings"),
      new UpgradeCost(1, "8 Aerocuda Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "12 Gleeok Wings"),
      new UpgradeCost(1, "10 Aerocuda Wings"),
      new UpgradeCost(1, "8 Gibdo Wings"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Glide Shirt", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Keese Wings"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "6 Aerocuda Eyeballs"),
      new UpgradeCost(1, "5 Keese Wings"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Aerocuda Wings"),
      new UpgradeCost(1, "8 Aerocuda Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "12 Gleeok Wings"),
      new UpgradeCost(1, "10 Aerocuda Wings"),
      new UpgradeCost(1, "8 Gibdo Wings"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Ancient Hero's Aspect", [
    new Upgrade(0, [
      new UpgradeCost(1, "9 Silver Bokoblin Horns"),
      new UpgradeCost(1, "9 Hinox Guts"),
      new UpgradeCost(1, "15 Zonaites"),
      new UpgradeCost(1, "30 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "9 Silver Moblin Horns"),
      new UpgradeCost(1, "9 Frox Guts"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "150 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "9 Silver Lizalfos Horns"),
      new UpgradeCost(1, "9 Molduga Guts"),
      new UpgradeCost(1, "15 Large Zonaites"),
      new UpgradeCost(1, "600 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "9 Silver Lynel Saber Horns"),
      new UpgradeCost(1, "9 Silver Lynel Mace Horns"),
      new UpgradeCost(1, "9 Gleeok Guts"),
      new UpgradeCost(1, "1500 rupees"),
    ]),
  ]),
  new Gear("Archaic Legwear", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Archaic Tunic", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Archaic Warm Greaves", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Froggy Hood", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Sticky Lizards"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Horriblin Horns"),
      new UpgradeCost(1, "10 Horriblin Guts"),
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Froggy Leggings", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Sticky Lizards"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Horriblin Horns"),
      new UpgradeCost(1, "10 Horriblin Guts"),
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Froggy Sleeve", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Sticky Lizards"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Lizards"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Blue Horriblin Horns"),
      new UpgradeCost(1, "5 Sticky Frogs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Black Horriblin Horns"),
      new UpgradeCost(1, "10 Horriblin Guts"),
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Miner's Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Brightbloom Seeds"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Brightbloom Seeds"),
      new UpgradeCost(1, "5 Brightcaps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "5 Glowing Cave Fish"),
      new UpgradeCost(1, "10 Deep Fireflies"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "20 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "3 Diamonds"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Miner's Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Brightbloom Seeds"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Brightbloom Seeds"),
      new UpgradeCost(1, "5 Brightcaps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "5 Glowing Cave Fish"),
      new UpgradeCost(1, "10 Deep Fireflies"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "20 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "3 Diamonds"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Miner's Top", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Brightbloom Seeds"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Brightbloom Seeds"),
      new UpgradeCost(1, "5 Brightcaps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "5 Glowing Cave Fish"),
      new UpgradeCost(1, "10 Deep Fireflies"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "20 Giant Brightbloom Seeds"),
      new UpgradeCost(1, "3 Diamonds"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Ember Headdress", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Fire Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Summerwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Like Stones"),
      new UpgradeCost(1, "5 Warm Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Flame Horns"),
      new UpgradeCost(1, "10 Sizzlefin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Ember Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Fire Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Summerwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Like Stones"),
      new UpgradeCost(1, "5 Warm Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Flame Horns"),
      new UpgradeCost(1, "10 Sizzlefin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Ember Shirt", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Fire Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Fire-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Summerwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Fire Like Stones"),
      new UpgradeCost(1, "5 Warm Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Flame Horns"),
      new UpgradeCost(1, "10 Sizzlefin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Charged Headdress", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Shock Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "3 Thunderwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Shock Like Stones"),
      new UpgradeCost(1, "5 Electric Darners"),
      new UpgradeCost(1, "3 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Thunder Horns"),
      new UpgradeCost(1, "10 Voltfin Trouts"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Charged Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Shock Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "3 Thunderwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Shock Like Stones"),
      new UpgradeCost(1, "5 Electric Darners"),
      new UpgradeCost(1, "3 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Thunder Horns"),
      new UpgradeCost(1, "10 Voltfin Trouts"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Charged Shirt", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Shock Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Electric Lizalfos Horns"),
      new UpgradeCost(1, "3 Thunderwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Shock Like Stones"),
      new UpgradeCost(1, "5 Electric Darners"),
      new UpgradeCost(1, "3 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Thunder Horns"),
      new UpgradeCost(1, "10 Voltfin Trouts"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Frostbite Headdress", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Ice Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Winterwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Like Stones"),
      new UpgradeCost(1, "5 Cold Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Frost Horns"),
      new UpgradeCost(1, "10 Chillfin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Frostbite Trousers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Ice Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Winterwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Like Stones"),
      new UpgradeCost(1, "5 Cold Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Frost Horns"),
      new UpgradeCost(1, "10 Chillfin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Frostbite Shirt", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Ice Fruits"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Horns"),
      new UpgradeCost(1, "5 Winterwing Butterflies"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice Like Stones"),
      new UpgradeCost(1, "5 Cold Darners"),
      new UpgradeCost(1, "5 Large Zonai Charges"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Gleeok Frost Horns"),
      new UpgradeCost(1, "10 Chillfin Trouts"),
      new UpgradeCost(1, "10 Large Zonai Charges"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cece Hat", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Mystic Headpiece", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Mystic Trousers", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Mystic Robe", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Zonaite Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Soldier Construct Horn"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Soldier Construct II Horns"),
      new UpgradeCost(1, "5 Captain Construct Horns"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Soldier Construct III Horns"),
      new UpgradeCost(1, "5 Captain Construct II Horns"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Soldier Construct IV Horns"),
      new UpgradeCost(1, "5 Captain Construct III Horns"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Zonaite Shin Guards", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Soldier Construct Horn"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Soldier Construct II Horns"),
      new UpgradeCost(1, "5 Captain Construct Horns"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Soldier Construct III Horns"),
      new UpgradeCost(1, "5 Captain Construct II Horns"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Soldier Construct IV Horns"),
      new UpgradeCost(1, "5 Captain Construct III Horns"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Zonaite Waistguard", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Soldier Construct Horn"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Soldier Construct II Horns"),
      new UpgradeCost(1, "5 Captain Construct Horns"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Soldier Construct III Horns"),
      new UpgradeCost(1, "5 Captain Construct II Horns"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Soldier Construct IV Horns"),
      new UpgradeCost(1, "5 Captain Construct III Horns"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Mask of Awakening", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of Awakening", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of Awakening", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "15 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "20 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "30 Luminous Stones"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Champion's Leathers", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Silent Princesses"),
      new UpgradeCost(1, "2 Light Dragon's Scales"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Silent Princesses"),
      new UpgradeCost(1, "2 Light Dragon's Talons"),
      new UpgradeCost(1, "10 Sundelions"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Silent Princesses"),
      new UpgradeCost(1, "2 Shards of Light Dragon's Fang"),
      new UpgradeCost(1, "15 Sundelions"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Silent Princesses"),
      new UpgradeCost(1, "2 Light Dragon's Horns"),
      new UpgradeCost(1, "20 Sundelions"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Horriblin Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Hood of the Depths", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Deep Fireflies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Frox Fangs"),
      new UpgradeCost(1, "5 Dark Clumps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Obsidian Frox Fangs"),
      new UpgradeCost(1, "20 Zonaites"),
      new UpgradeCost(1, "3 Frox Fingernails"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Blue-White Frox Fangs"),
      new UpgradeCost(1, "10 Large Zonaite"),
      new UpgradeCost(1, "3 Frox Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Gaiters of the Depths", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Deep Fireflies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Frox Fangs"),
      new UpgradeCost(1, "5 Dark Clumps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Obsidian Frox Fangs"),
      new UpgradeCost(1, "20 Zonaites"),
      new UpgradeCost(1, "3 Frox Fingernails"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Blue-White Frox Fangs"),
      new UpgradeCost(1, "10 Large Zonaite"),
      new UpgradeCost(1, "3 Frox Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of the Depths", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Deep Fireflies"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Frox Fangs"),
      new UpgradeCost(1, "5 Dark Clumps"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Obsidian Frox Fangs"),
      new UpgradeCost(1, "20 Zonaites"),
      new UpgradeCost(1, "3 Frox Fingernails"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Blue-White Frox Fangs"),
      new UpgradeCost(1, "10 Large Zonaite"),
      new UpgradeCost(1, "3 Frox Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Well-Worn Hair Band", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Lightning Helm", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Tunic of Memories", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Silent Princesses"),
      new UpgradeCost(1, "1 Light Dragon's Scale"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Silent Princesses"),
      new UpgradeCost(1, "1 Light Dragon's Talon"),
      new UpgradeCost(1, "2 Farosh's Horns"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Silent Princesses"),
      new UpgradeCost(1, "1 Shard of Light Dragon's Fang"),
      new UpgradeCost(1, "2 Naydra's Horns"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Silent Princesses"),
      new UpgradeCost(1, "1 Light Dragon's Horn"),
      new UpgradeCost(1, "2 Dinraal's Horns"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Yiga Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Octorok Eyeballs"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "3 Puffshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "3 Black Hinox Horns"),
      new UpgradeCost(1, "10 Mighty Bananas"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Yiga Tights", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Octorok Eyeballs"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "3 Puffshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "3 Black Hinox Horns"),
      new UpgradeCost(1, "10 Mighty Bananas"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Yiga Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "2 Octorok Eyeballs"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Fire-Breath Lizalfos Tails"),
      new UpgradeCost(1, "3 Puffshrooms"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Ice-Breath Lizalfos Tails"),
      new UpgradeCost(1, "5 Keese Eyeballs"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "5 Electric Lizalfos Tails"),
      new UpgradeCost(1, "3 Black Hinox Horns"),
      new UpgradeCost(1, "10 Mighty Bananas"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Snow Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Hightail Lizards"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Octorok Tentacles"),
      new UpgradeCost(1, "5 Swift Carrots"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "5 Octo Balloons"),
      new UpgradeCost(1, "20 Rushrooms"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "2 Naydra's Scales"),
      new UpgradeCost(1, "20 Swift Violets"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Dark Hood", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Dark Trousers", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Dark Tunic", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Phantom Helmet", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Phantom Greaves", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Phantom Armor", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Majora's Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Midna's Helmet", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Tingle's Hood", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Tingle's Tights", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Tingle's Shirt", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Island Lobster Shirt", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Korok Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Ravio's Hood", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Zant's Helmet", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Royal Guard Cap", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Blue Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Boss Bokoblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Black Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Silver Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Molduga Guts"),
      new UpgradeCost(1, "3 Gleeok Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Royal Guard Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Blue Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Boss Bokoblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Black Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Silver Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Molduga Guts"),
      new UpgradeCost(1, "3 Gleeok Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Royal Guard Uniform", [
    new Upgrade(0, [
      new UpgradeCost(1, "3 Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Bokoblin Guts"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "3 Blue Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Boss Bokoblin Guts"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "3 Black Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Hinox Guts"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "3 Silver Boss Bokoblin Horns"),
      new UpgradeCost(1, "3 Molduga Guts"),
      new UpgradeCost(1, "3 Gleeok Guts"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Evil Spirit Mask", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Evil Spirit Greaves", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Evil Spirit Armor", [
    new Upgrade(0, [new Upgrade(0, [])]),
    new Upgrade(1, [new Upgrade(1, [])]),
    new Upgrade(2, [new Upgrade(2, [])]),
    new Upgrade(3, [new Upgrade(3, [])]),
  ]),
  new Gear("Vah Ruta Divine Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Opals"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "10 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Opals"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "5 Dazzlefruits"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "25 Opals"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "10 Dazzlefruits"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Vah Medoh Divine Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Sapphire"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Sapphires"),
      new UpgradeCost(1, "10 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Sapphires"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "5 Dazzlefruits"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Sapphires"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "10 Dazzlefruits"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Vah Rudania Divine Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Ruby"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Rubies"),
      new UpgradeCost(1, "10 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Rubies"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "5 Dazzlefruits"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Rubies"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "10 Dazzlefruits"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Vah Naboris Divine Helm", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Topaz"),
      new UpgradeCost(1, "5 Zonaites"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Topaz"),
      new UpgradeCost(1, "10 Zonaites"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Topaz"),
      new UpgradeCost(1, "5 Large Zonaites"),
      new UpgradeCost(1, "5 Dazzlefruits"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Topaz"),
      new UpgradeCost(1, "10 Large Zonaites"),
      new UpgradeCost(1, "10 Dazzlefruits"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of Time", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "40 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of Time", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "40 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of Time", [
    new Upgrade(0, [
      new UpgradeCost(1, "10 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "20 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "30 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "40 Ambers"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of the Wind", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "25 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of the Wind", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "25 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of the Wind", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "10 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "15 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "25 Opals"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of Twilight", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of Twilight", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of Twilight", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Topaz"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of the Sky", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Sapphire"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of the Sky", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Sapphire"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of the Sky", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Sapphire"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Sapphires"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Sheik's Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Silent Princess"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "2 Silent Princesses"),
      new UpgradeCost(1, "2 Star Fragments"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "4 Silent Princesses"),
      new UpgradeCost(1, "3 Star Fragments"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "8 Silent Princesses"),
      new UpgradeCost(1, "4 Star Fragments"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Fierce Deity Mask", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Hinox Toenails"),
      new UpgradeCost(1, "1 Dinraal's Scale"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Hinox Teeth"),
      new UpgradeCost(1, "1 Dinraal's Claw"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "2 Hinox Guts"),
      new UpgradeCost(1, "1 Shard of Dinraal's Fang"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "2 Lynel Guts"),
      new UpgradeCost(1, "1 Dinraal's Horn"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Fierce Deity Boots", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Hinox Toenails"),
      new UpgradeCost(1, "1 Farosh's Scale"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Hinox Teeth"),
      new UpgradeCost(1, "1 Farosh's Claw"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "2 Hinox Guts"),
      new UpgradeCost(1, "1 Shard of Farosh's Fang"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "2 Lynel Guts"),
      new UpgradeCost(1, "1 Farosh's Horn"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Fierce Deity Armor", [
    new Upgrade(0, [
      new UpgradeCost(1, "5 Hinox Toenails"),
      new UpgradeCost(1, "1 Naydra's Scale"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "5 Hinox Teeth"),
      new UpgradeCost(1, "1 Naydra's Claw"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "2 Hinox Guts"),
      new UpgradeCost(1, "1 Shard of Naydra's Fang"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "2 Lynel Guts"),
      new UpgradeCost(1, "1 Naydra's Horn"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Cap of the Hero", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Ruby"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Trousers of the Hero", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Ruby"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
  new Gear("Tunic of the Hero", [
    new Upgrade(0, [
      new UpgradeCost(1, "1 Ruby"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "10 rupees"),
    ]),
    new Upgrade(1, [
      new UpgradeCost(1, "4 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "50 rupees"),
    ]),
    new Upgrade(2, [
      new UpgradeCost(1, "6 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "200 rupees"),
    ]),
    new Upgrade(3, [
      new UpgradeCost(1, "10 Rubies"),
      new UpgradeCost(1, "1 Star Fragment"),
      new UpgradeCost(1, "500 rupees"),
    ]),
  ]),
];

export default gear;
