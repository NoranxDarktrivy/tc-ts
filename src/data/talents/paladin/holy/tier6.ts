import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Light's Grace",
    "spell_holy_lightsgrace",
    [
      "Gives your Holy Light spell a ",
      "% chance to reduce the cast time of your next Holy Light spell by 0.5 sec. This effect lasts 15 sec.",
    ],
    3,
    [[33, 67, 100]],
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
  new Talent(
    "Holy Power",
    "spell_holy_power",
    ["Increases the critical effect chance of your Holy spells by ", "%."],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
];

export default tier6;
