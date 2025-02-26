import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Ardent Defender",
    "spell_holy_ardentdefender",
    [
      "When you have less than 35% health, all damage taken is reduced by ",
      "%.",
    ],
    2,
    [[10, 20]],
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
    "One-Handed Weapon Specialization",
    "inv_sword_20",
    [
      "Increases all damage you deal while wielding One-Handed melee weapons by ",
      "% and increases your spell damage by ",
      "% of your attack power while wielding One-Handed melee weapons.",
    ],
    5,
    [
      [2, 4, 6, 8, 10],
      [6, 12, 18, 24, 30],
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
  null,
];

export default tier6;
