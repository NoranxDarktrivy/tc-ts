import { Talent } from "../../Classes";

export default [
  new Talent(
    "Primalist",
    "ability_druid_predatoryinstincts",
    [
      "Reduces the cooldown and focus cost of your pet's family abilities by ",
      "%.",
    ],
    2,
    [[20, 40]],
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
    "Frenzy",
    "inv_misc_monsterclaw_03",
    [
      "Gives your pet a ",
      "% chance to gain 30% attack speed increase for 8 sec after dealing a critical strike.",
    ],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: 3, y: 2 }]
  ),
  null,
];
