import { Talent } from "../../Classes";

const tier1 = [
  new Talent(
    "Armored to the Teeth",
    "inv_shoulder_22",
    ["Increases your attack power by ", " for every 100 armor value you have."],
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
      "% and gives you ",
      " additional rage point(s) when a block occurs.",
    ],
    5,
    [
      [1, 2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ],
    [{ x: null, y: null }],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
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
