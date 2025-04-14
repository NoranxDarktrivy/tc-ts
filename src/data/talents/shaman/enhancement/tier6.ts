import { Talent } from "../../Classes";

const tier6 = [
  null,
  null,
  new Talent(
    "Ancestral Fury",
    "spell_nature_ancestralguardian",
    [
      "Increases your attack power by ",
      "% and increases your spell damage by up to ",
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
    { isNew: true, isChanged: false, isMoved: false }
  ),
  null,
];

export default tier6;
