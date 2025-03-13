import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Abundance",
    "ability_druid_naturalperfection",
    [
      "Reduces the mana cost of Wrath by ",
      "% and increases your spell damage by up to ",
      "% of your bonus healing.",
    ],
    2,
    [
      [50, 100],
      [25, 50],
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
