import { Talent } from "../../Classes";

export default [
  new Talent(
    "Bow Specialization",
    "inv_weapon_bow_03",
    [
      "Gives you a ",
      "% chance to trigger an additional attack against the same target when using bows.",
    ],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Crossbow Specialization",
    "inv_weapon_crossbow_04",
    ["Increases your attack speed with Crossbows by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Gun Specialization",
    "inv_weapon_rifle_02",
    [
      "Increases your critical strike chance and critical strike damage with Guns by ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 5]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
];
