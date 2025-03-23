import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Tranquil Spirit",
    "spell_holy_elunesgrace",
    [
      "Reduces the mana cost of your Healing Touch and Tranquility spells by ",
      "%.",
    ],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D3"]
  ),
  null,
  new Talent(
    "Improved Tranquility",
    "spell_nature_tranquility",
    [
      "Reduces threat caused by Tranquility by ",
      "% and reduces its cooldown by ",
      " minute(s).",
    ],
    2,
    [
      [50, 100],
      [1, 2],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
];

export default tier4;
