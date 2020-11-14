const venus = ["Flint", "Granite", "Quartz", "Vine", "Sap", "Ground", "Bane", "Echo", "Iron", "Steel", "Mud", "Flower", "Meld", "Petra", "Salt", "Geode", "Mold", "Crystal", "Bark", "Brick", "Gears", "Furrow", "Garland", "Pewter", "Chasm", "Chain", "Buckle", "Clover", "Magnet", "Ivy", "Hemlock"];
const mars = ["Forge", "Fever", "Corona", "Scorch", "Ember", "Flash", "Torch", "Cannon", "Spark", "Kindle", "Char", "Coal", "Reflux", "Core", "Tinder", "Shine", "Fury", "Fugue", "Cinder", "Lava", "Brand", "Glare", "Wrath", "Chili", "Glow", "Stoke", "Pepper", "Sizzle", "Flare", "Aurora"];
const jupiter = ["Gust", "Breeze", "Zephyr", "Smog", "Kite", "Squall", "Luff", "Breath", "Blitz", "Ether", "Waft", "Haze", "Wheeze", "Aroma", "Whorl", "Gasp", "Lull", "Gale", "Jolt", "Vortex", "Doldrum", "Sirocco", "Wisp", "Puff", "Fleet", "Swift", "Simoom"];
const mercury = ["Fizz", "Sleet", "Mist", "Spritz", "Hail", "Tonic", "Dew", "Fog", "Sour", "Spring", "Shade", "Chill", "Steam", "Rime", "Gel", "Eddy", "Balm", "Serac", "Surge", "Mellow", "Claw", "Dewdrop", "Torrent", "Coral", "Spout", "Teardrop", "Pincer", "Foam", "Geyser", "Shell"];
const darkDawnDjinn = [
  "Sap",
  "Spark",
  "Shine",
  "Torch",
  "Ground",
  "Granite",
  "Quartz",
  "Salt",
  "Flash",
  "Kindle",
  "Corona",
  "Flint",
  "Forge",
  "Gust",
  "Chill",
  "Fever",
  "Flower",
  "Jolt",
  "Sleet",
  "Cinder",
  "Bark",
  "Ether",
  "Steel",
  "Breath",
  "Surge",
  "Mist",
  "Mellow",
  "Claw",
  "Lava",
  "Vortex",
  "Brand",
  "Serac",
  "Brick",
  "Doldrum",
  "Fury",
  "Dewdrop",
  "Fleet",
  "Waft",
  "Bolt",
  "Breeze",
  "Haze",
  "Vine",
  "Torrent",
  "Spout",
  "Gears",
  "Sirocco",
  "Furrow",
  "Coral",
  "Garland",
  "Glare",
  "Wisp",
  "Pewter",
  "Teardrop",
  "Puff",
  "Chasm",
  "Pincer",
  "Reflux",
  "Wrath",
  "Chili",
  "Glow",
  "Stoke",
  "Spring",
  "Chain",
  "Sizzle",
  "Kite",
  "Buckle",
  "Clover",
  "Magnet",
  "Geode",
  "Pepper",
  "Swift",
  "Tinder",
  "Foam",
  "Rime",
  "Geyser",
  "Shell",
  "Flare",
  "Simoom",
  "Fugue",
  "Lull",
  "Ivy",
  "Hemlock",
  "Aurora"
];

const keepOnlyDarkDawnDjinn = (element) => {
  const onlyDarkDawnDjinn = [];
  for (let i = 0; i < element.length; i++) {
    const djinn = element[i];
    if (darkDawnDjinn.includes(djinn)) onlyDarkDawnDjinn.push(djinn);
  }
  return onlyDarkDawnDjinn;
};

// console.log(keepOnlyDarkDawnDjinn(venus));
// console.log(keepOnlyDarkDawnDjinn(mars));
// console.log(keepOnlyDarkDawnDjinn(jupiter));
// console.log(keepOnlyDarkDawnDjinn(mercury));