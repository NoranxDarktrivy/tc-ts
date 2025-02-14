import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Cauterize",
    "spell_fire_rune",
    [
      "You have a ",
      "% chance that an attack which would otherwise kill you will instead bring you to 40% of your maximum health. However, you will burn for 12% of your maximum health every 1.5 sec for the next 6 sec. This effect cannot occur more than once per minute.",
    ],
    2,
    [[50, 100]],
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
    "Fire power",
    "spell_fire_immolation",
    ["Increases the damage fone by your Fire spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  null,
];

export default tier6;
