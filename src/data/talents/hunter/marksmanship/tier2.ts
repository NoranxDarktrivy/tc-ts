import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Improved Arcane Shot",
    "ability_impalingbolt",
    ["Reduces the cooldown of your Arcane Shot by ", " sec."],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]]
  ),
  new Talent(
    "Lethal Shots",
    "ability_searingarrow",
    ["Increases your critical strike chance with ranged weapons by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 3, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  null,
  null,
];
