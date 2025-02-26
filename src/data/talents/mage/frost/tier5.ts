import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Piercing Chill",
    "spell_frost_piercing-chill",
    [
      "Your Frostbolt criticals apply the chill effect to ",
      " additional nearby target(s). In addition, your chill effects also reduce the attack speed of the target by ",
      "%.",
    ],
    2,
    [
      [1, 2],
      [5, 10],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
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
