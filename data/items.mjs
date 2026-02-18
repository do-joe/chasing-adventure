export const items = [
  // === Melee Weapons ===
  {
    name: "Unarmed",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate"]),
    description: "Your bare fists."
  },
  {
    name: "Brass Knuckles",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate", "1 Wealth"]),
    description: "Metal knuckles for close-quarters fighting."
  },
  {
    name: "Dagger",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate", "Close", "Near", "1 Wealth"]),
    description: "A short blade useful at multiple ranges. Also called a Knife or Dirk."
  },
  {
    name: "Hidden Knives",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate", "Near", "Infinite", "2 Wealth"]),
    description: "Concealed throwing knives. Too many to count."
  },
  {
    name: "Club",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "0 Wealth"]),
    description: "A simple bludgeon. Also called a Shillelagh."
  },
  {
    name: "Staff",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "1 Wealth"]),
    description: "A long wooden staff. Also called a Pike."
  },
  {
    name: "Sword",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate", "Close", "1 Wealth"]),
    description: "A standard one-handed blade. Also covers Axe or Mace."
  },
  {
    name: "Greatsword",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "Heavy", "Forceful", "2 Wealth"]),
    description: "A massive two-handed weapon. Also covers Glaive or Halberd."
  },
  {
    name: "Spiked Chain",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "Vicious", "Awkward", "1 Wealth"]),
    description: "A vicious chain weapon. Also called a Whip."
  },
  {
    name: "Rapier",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "Piercing", "2 Wealth"]),
    description: "A thin, precise thrusting sword."
  },
  {
    name: "Spear",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "Near", "1 Wealth"]),
    description: "A versatile polearm useful at close and near range."
  },
  {
    name: "Double-Bladed Staff",
    equipmentType: "weapon",
    tags: JSON.stringify(["Close", "Awkward", "1 Wealth"]),
    description: "A staff with blades on both ends."
  },
  {
    name: "Nunchaku",
    equipmentType: "weapon",
    tags: JSON.stringify(["Intimate", "Close", "Awkward", "1 Wealth"]),
    description: "Two connected sticks swung with skill. Also called a Setsukon."
  },
  // === Ranged Weapons ===
  {
    name: "Sling",
    equipmentType: "weapon",
    tags: JSON.stringify(["Near", "Awkward", "Reload", "0 Wealth"]),
    description: "A simple projectile launcher."
  },
  {
    name: "Simple Bow",
    equipmentType: "weapon",
    tags: JSON.stringify(["Near", "1 Wealth"]),
    description: "A basic bow for ranged combat."
  },
  {
    name: "Fine Bow",
    equipmentType: "weapon",
    tags: JSON.stringify(["Near", "Far", "2 Wealth"]),
    description: "A well-crafted bow with excellent range."
  },
  {
    name: "Crossbow",
    equipmentType: "weapon",
    tags: JSON.stringify(["Near", "Distinctive", "Reload", "1 Wealth"]),
    description: "A mechanical ranged weapon that must be reloaded between shots."
  },
  // === Armor ===
  {
    name: "Leather Armor",
    equipmentType: "armor",
    tags: JSON.stringify(["1 Armor", "2 Wealth"]),
    description: "Light protective armor. Also covers Chain Mail or Gambeson."
  },
  {
    name: "Scale Armor",
    equipmentType: "armor",
    tags: JSON.stringify(["2 Armor", "Clumsy", "3 Wealth"]),
    description: "Heavy protective armor that restricts movement. Also covers Plate Armor."
  },
  {
    name: "Shield",
    equipmentType: "armor",
    tags: JSON.stringify(["+1 Armor", "1 Wealth"]),
    description: "A defensive shield that adds to your existing Armor."
  },
  // === Equipment ===
  {
    name: "Adventuring Gear",
    equipmentType: "gear",
    tags: JSON.stringify(["5 Uses", "2 Wealth"]),
    uses: 5,
    description: "A collection of useful mundane items such as chalk, poles, spikes, ropes, a frying pan, etc. When you rummage through your adventuring gear for some useful mundane item, mark off a use and acquire what you need. You can keep the item for future use."
  },
  {
    name: "Bag of Books",
    equipmentType: "gear",
    tags: JSON.stringify(["5 Uses", "2 Wealth"]),
    uses: 5,
    description: "Anyone who thinks scholars are physically weak has obviously never carried a small library on their back while venturing into the depths. When your bag of books contains just the right book for the subject you're Pondering (your choice), mark off a use to acquire the book and use it to roll with Advantage. You can keep the book for future use."
  },
  {
    name: "Bandolier of Vials",
    equipmentType: "gear",
    tags: JSON.stringify(["5 Uses", "3 Wealth"]),
    uses: 5,
    description: "Some problems require unusual solutions. These vials are protected from ordinary spillage and breakage, while keeping them easily accessible. When you withdraw a vial, mark off one use and choose one type of vial below:<br>• Fiery - It can burst into flame.<br>• Acid - It can melt organic substances.<br>• Holy - It can cleanse corruption and undeath.<br>• Distinctive - It can make bright lights and loud noises."
  },
  {
    name: "Enchanted Arrows",
    equipmentType: "gear",
    tags: JSON.stringify(["3 Uses", "2 Wealth"]),
    uses: 3,
    description: "While adventurers are assumed to have as many ordinary arrows as they need, these arrows are exceptionally accurate and expensive. When you Let Fly using Enchanted Arrows, on a 7-9 you may spend 1 use to treat it as a 10+."
  },
  {
    name: "Flask of Whiskey",
    equipmentType: "gear",
    tags: JSON.stringify(["2 Uses", "1 Wealth"]),
    uses: 2,
    description: "A dose of liquid courage has saved many an adventurer (and slain even more). When you down a draught of whiskey, mark off a use to roll with Advantage to act boldly or face down terror."
  },
  {
    name: "Healing Potion",
    equipmentType: "gear",
    tags: JSON.stringify(["2 Wealth"]),
    uses: 1,
    description: "Though typically a flask or vial of thin red liquid, these potions can take many forms and flavors. When you drink an entire Healing Potion, immediately heal 3 conditions."
  },
  {
    name: "Hearty Feast",
    equipmentType: "gear",
    tags: JSON.stringify(["2 Wealth"]),
    uses: 1,
    description: "A warrior can endure hell itself if there's a good meal ready afterwards. When you share this feast with others while Settling In, every NPC who partakes Favors you, and every PC who partakes gains 1 Armor until they next Settle In or gains 1 XP, their choice."
  },
  {
    name: "Medicine",
    equipmentType: "gear",
    tags: JSON.stringify(["2 Uses", "Slow", "2 Wealth"]),
    uses: 2,
    description: "These might be poultices to heal wounds, herbal supplements to calm nerves, or similar remedies. When you take a few minutes to prepare and use Medicine, mark off a use and heal 2 conditions or another affliction on yourself or someone else."
  },
  {
    name: "Pipeleaf",
    equipmentType: "gear",
    tags: JSON.stringify(["3 Uses", "2 Wealth"]),
    uses: 3,
    description: "Pipe tobacco is typically shared among long-time friends or would-be-acquaintances. When you offer to share pipeleaf with someone, and they accept, mark off a use and gain their Favor."
  },
  {
    name: "Supplies",
    equipmentType: "gear",
    tags: JSON.stringify(["3 Uses", "Slow", "1 Wealth"]),
    uses: 3,
    description: "Food, water, bandages, anything that can offer relief during a moment of respite. When you spend a few minutes using your supplies, mark off a use and heal 1 condition on yourself or another."
  },
  {
    name: "Trap Kit",
    equipmentType: "gear",
    tags: JSON.stringify(["Dangerous", "Slow", "1 Wealth"]),
    description: "A bear trap, tripwire rig, bag of caltrops or marbles, or similar. When you spend time setting up your trap kit in advance, it becomes a dangerous, impeding hazard for anyone that enters its range."
  },
  // === Poisons ===
  {
    name: "Oil of Taggit",
    equipmentType: "gear",
    tags: JSON.stringify(["Dangerous", "2 Wealth"]),
    description: "Must be consumed. The target falls into a light sleep."
  },
  {
    name: "Bloodweed",
    equipmentType: "gear",
    tags: JSON.stringify(["Dangerous", "2 Wealth"]),
    description: "Requires contact. Until they are cured, the first time the target would hurt someone each scene, they inflict no conditions."
  },
  {
    name: "Goldenroot",
    equipmentType: "gear",
    tags: JSON.stringify(["Dangerous", "2 Wealth"]),
    description: "Must be consumed. The target treats the next person they see as a trusted ally, until proved otherwise."
  },
  {
    name: "Serpent's Tears",
    equipmentType: "gear",
    tags: JSON.stringify(["Dangerous", "3 Wealth"]),
    description: "Requires contact. The target takes 1 extra condition when hurt until they are cured."
  }
];
