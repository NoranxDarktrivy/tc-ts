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
    "Cold Snap",
    "spell_frost_wizardmark",
    [
      "When activated, this spell finishes the cooldown on all of your Frost spells.",
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
    null,
    null,
    "Instant",
    "10 min cooldown",
    null
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
