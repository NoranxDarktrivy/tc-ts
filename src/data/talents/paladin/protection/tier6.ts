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
      "%.",
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
];

export default tier6;
