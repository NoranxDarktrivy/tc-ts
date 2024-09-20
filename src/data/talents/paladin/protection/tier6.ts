import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "One-Handed Weapon Specialization",
    "inv_sword_20",
    [
      "Increases all damage you deal while wielding One-Handed melee weapons by ",
      "% and increases your spell damage by ",
      "% of your attack power.",
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
