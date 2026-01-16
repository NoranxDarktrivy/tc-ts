import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Abundance",
    "ability_druid_naturalperfection",
    [
      "Increases your healing over time by ",
      "% and your damage over time by ",
      "%.",
    ],
    2,
    [
      [3, 6],
      [6, 12],
    ],
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
  null,
  new Talent(
    "Improved Regrowth",
    "spell_nature_resistnature",
    ["Increases the critical effect chance of your Regrowth spell by ", "%."],
    5,
    [[10, 20, 30, 40, 50]]
  ),
  null,
];

export default tier6;
