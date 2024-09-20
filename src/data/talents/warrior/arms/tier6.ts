import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Master at Arms",
    "ability_warrior_weaponmastery",
    [
      "Increases your skill with all weapons by ",
      " and increases your rage generated from damage dealt by ",
      "%.",
    ],
    5,
    [
      [3, 6, 9, 12, 15],
      [5, 10, 15, 20, 25],
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
