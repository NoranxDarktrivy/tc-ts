import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Improved Hamstring",
    "ability_shockwave",
    ["Gives your Hamstring a ", "% chance to immobilize the target for 5 sec."],
    3,
    [[10, 20, 30]]
  ),
  null,
  new Talent(
    "Master at Arms",
    "ability_warrior_weaponmastery",
    [
      "Increases your skill with all weapons by ",
      " and increases your rage generated from damage dealt by ",
      "%.",
    ],
    3,
    [
      [3, 6, 9],
      [10, 20, 30],
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
];

export default tier6;
