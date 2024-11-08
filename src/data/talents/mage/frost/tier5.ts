import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Flash Freeze",
    "spell_frost_chainsofice",
    [
      "Freezes you in place for up to 10 sec. While frozen, your critical strike chance and critical strike damage are increased by 30%.",
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "1 min cooldown",
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
