import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Enhancing Totems",
    "spell_nature_earthbindtotem",
    [
      "Increases the effect of your Grace of Air and Strength of Earth Totems by ",
      "%",
    ],
    2,
    [[8, 15]]
  ),
  null,
  new Talent(
    "Weapon Specialization",
    "inv_axe_10",
    [
      "Allows you to use Two-Handed Axes and Two-Handed Maces and allows you to parry enemy melee attacks.",
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: true,
      isMoved: false,
      isChanged: false,
    }
  ),
  new Talent(
    "Primal Devastation",
    "classic_spell_fire_elementaldevastation",
    [
      "Causes your offensive spell crits to increase your chance to get a critical strike with melee attacks by ",
      "% for 10 sec.",
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
    { isChanged: false, isNew: false, isMoved: true }
  ),
];

export default tier3;
