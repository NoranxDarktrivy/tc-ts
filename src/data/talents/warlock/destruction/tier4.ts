import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Intensity",
    "spell_fire_lavaspawn",
    [
      "Gives you a ",
      "% chance to avoid interruption caused by damage while casting Rain of Fire, Hellfire or Soul Fire.",
    ],
    2,
    [[35, 70]],
    [{ x: null, y: null }],
    [{ x: 4, y: 0 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  new Talent(
    "Improved Immolate",
    "spell_fire_immolation",
    [
      "Increases the initial damage of your Immolate by ",
      "% and an additional ",
      "% if the target is already affected by Immolate.",
    ],
    5,
    [
      [6, 12, 18, 24, 30],
      [6, 12, 18, 24, 30],
    ],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D3"],
    { isNew: false, isChanged: true, isMoved: true }
  ),
  null,
  new Talent(
    "Improved Searing Pain",
    "spell_fire_soulburn",
    [
      "Increases the critical strike chance of your Searing Pain spell by ",
      "%.",
    ],
    3,
    [[3, 6, 9]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isMoved: false,
      isChanged: true,
      isNew: false,
    }
  ),
];

export default tier4;
