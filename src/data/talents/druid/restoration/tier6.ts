import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Abundance",
    "ability_druid_naturalperfection",
    [
      "Reduces the mana cost of Wrath by ",
      "% and each time you deal damage with Wrath you have a ",
      "% chance to reduce the cooldown of your Innervate by 2 sec.",
    ],
    2,
    [
      [50, 100],
      [50, 100],
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
