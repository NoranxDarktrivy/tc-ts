import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Icy Veins",
    "spell_frost_coldhearted",
    [
      "Hastens your spellcasting, increasing spell casting speed by 20%. For the duration, your Frostbolt hits up to 5 targets affected by your Chill effects. Lasts 20 sec.",
    ],
    1,
    [[]],
    null,
    null,
    "3% of base mana",
    null,
    "Instant",
    "3 min cooldown",
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Ice Block",
    "spell_frost_frost",
    [
      "You become encased in a block of ice, protecting you from all physical attacks and spells for 10 sec, but during that time you cannot attack, move or cast spells.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [
      {
        x: 6,
        y: 1,
      },
    ],
    "15 Mana",
    null,
    "Instant",
    "5 min cooldown",
    ["D2"]
  ),
  new Talent(
    "Improved Cone of Cold",
    "spell_frost_glacier",
    ["Increases the damage done by your Cone of Cold spell by ", "%."],
    3,
    [[15, 30, 45]]
  ),
  null,
];

export default tier5;
