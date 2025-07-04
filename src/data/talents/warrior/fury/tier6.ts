import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Flurry",
    "ability_ghoulfrenzy",
    [
      "Increases your attack speed by ",
      "% for your next 3 swings after dealing a melee critical strike.",
    ],
    5,
    [[10, 15, 20, 25, 30]],
    [{ x: 3, y: 2 }]
  ),
  null,
];

export default tier6;
