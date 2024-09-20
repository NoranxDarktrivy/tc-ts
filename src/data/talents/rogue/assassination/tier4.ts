import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Vigor",
    "spell_nature_earthbindtotem",
    ["Increases your maximum Energy by ", "."],
    2,
    [[5, 10]],
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
  new Talent(
    "Vile Poisons",
    "ability_rogue_feigndeath",
    [
      "Increases the damage dealt by your poisons by ",
      "% and gives your poisons an additional ",
      "% increased chance to resist dispel effects.",
    ],
    3,
    [
      [10, 20, 30],
      [15, 30, 45],
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
      isMoved: false,
    }
  ),
  new Talent(
    "Improved Poisons",
    "ability_poisons",
    ["Increases the chance to apply poisons to your target by ", "%."],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
];

export default tier4;
