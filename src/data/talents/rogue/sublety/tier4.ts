import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Phantom Echo",
    "spell_deathknight_scourgestrike",
    [
      "7 sec after using Ghsotly Strike, attack your current target for ",
      "% weapon damage and adds ",
      " combo point(s).",
    ],
    2,
    [
      [63, 125],
      [1, 2],
    ],
    [{ x: 2, y: 1 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Serrated Blades",
    "inv_sword_17",
    [
      "Your attacks ignore an amount of your target's armor and increases the damage dealt by your rupture ability by ",
      "%. The amount of armor ignored increases with your level.",
    ],
    3,
    [[10, 20, 30]],
    null,
    [{ x: 4, y: 3 }],
    null,
    null,
    null,
    null,
    ["R1D1"]
  ),
  null,
];

export default tier4;
