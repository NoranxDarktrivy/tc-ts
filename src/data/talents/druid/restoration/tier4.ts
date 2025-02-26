import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Tranquil Spirit",
    "spell_holy_elunesgrace",
    ["Reduces the mana cost of your healing spells by ", "%."],
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
    "Abundance",
    "ability_druid_empoweredrejuvination",
    [
      "Reduces the chance your damage over time and healing over time effects are dispelled by ",
      "%.",
    ],
    2,
    [[15, 30]],
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
];

export default tier4;
