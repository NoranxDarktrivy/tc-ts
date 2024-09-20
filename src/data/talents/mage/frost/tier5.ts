import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Piercing Chill",
    "spell_frost_piercing-chill",
    [
      "Your Frostbolt criticals apply the chill effect to ",
      " additional nearby targets. In addition, increases your damage by ",
      "% for each of your active chill effects, up to 10%.",
    ],
    3,
    [
      [1, 2],
      [1, 2],
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
    ["D2"],
    { isNew: false, isChanged: false, isMoved: true }
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
