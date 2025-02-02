import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Piercing Ice",
    "spell_frost_frostbolt",
    ["Increases the damage done by your Frost splls by ", "%."],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    "Icicles",
    "ability_mage_coldasice",
    [
      "Launches an icicle at up to 5 chilled or frozen enemies, dealing 84 to 92 Frost damage.",
    ],
    1,
    [[]],
    null,
    null,
    "110 mana",
    "30 yd range",
    "1.5 sec cast",
    "8 sec cooldown",
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
  new Talent(
    "Improved Blizzard",
    "spell_frost_icestorm",
    [
      "Adds a chill effect to your Blizzard spell. This effect lowers the target's movement speed by ",
      "%. Lasts 1.5 sec.",
    ],
    3,
    [[30, 50, 65]]
  ),
];
export default tier3;
