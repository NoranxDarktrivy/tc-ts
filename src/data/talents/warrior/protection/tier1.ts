import { Talent } from "../../Classes";

const tier1 = [
  new Talent(
    "Precision",
    "ability_marksmanship",
    ["Increases your chance to hit by ", "%."],
    3,
    [[1, 2, 3]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Shield Specialization",
    "inv_shield_06",
    [
      "Increases your chance to block by ",
      "% and gives you a ",
      "% chance to gain an additional rage point when a block occurs.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [20, 40, 60, 80, 100],
    ],
    [{ x: null, y: null }],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  new Talent(
    "Iron Will",
    "spell_magic_magearmor",
    ["Increases your chance to resist Charm and Fear effects by ", "%."],
    5,
    [[3, 6, 9, 12, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  null,
];

export default tier1;
