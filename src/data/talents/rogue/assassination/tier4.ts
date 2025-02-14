import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Toxicology",
    "ability_rogue_deviouspoisons",
    [
      "Gives your Deadly Poison, Wound Poison, Mind-numbing Poison and Crippling poison applications a ",
      "% chance to also apply Instant Poison.",
    ],
    2,
    [[25, 50]],
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
    "Vile Poisons",
    "ability_rogue_feigndeath",
    [
      "Increases the damage dealt by your poisons up to by ",
      "% of your attack power and gives your poisons an additional ",
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
