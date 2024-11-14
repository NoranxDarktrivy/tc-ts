import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Puncturing Wounds",
    "ability_druid_ravage",
    [
      "Increases the critical strike chance of your Backstab ability by ",
      "% and the critical strike chance of you Mutilate by ",
      "%.",
    ],
    3,
    [
      [10, 20, 30],
      [5, 10, 15],
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
    "Deflection",
    "ability_parry",
    ["Increases your parry chance by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  new Talent(
    "Precision",
    "ability_marksmanship",
    ["Increases your chance to hit with melee weapons by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  new Talent(
    "Endurance",
    "spell_shadow_shadowward",
    ["Reduces the cooldown of your Evasion and Sprint abilities by ", " sec."],
    2,
    [[45, 90]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
];

export default tier2;
