import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Guardian Totems",
    "spell_nature_stoneskintotem",
    [
      "Increases the effect of your Stoneskin Totem by ",
      "% and reduces the cooldown of your Grounding Totem by ",
      " sec.",
    ],
    2,
    [
      [10, 20],
      [1, 2],
    ]
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
    [{ x: null, y: null }],
    [{ x: 3, y: 1 }],
    null,
    null,
    null,
    null,
    ["D2"],
    { isChanged: false, isNew: false, isMoved: true }
  ),
  new Talent(
    "Improved Ghost Wolf",
    "spell_nature_spiritwolf",
    ["Reduces the cast time of your Ghost Wolf spell by ", " sec."],
    2,
    [[1, 2]]
  ),
  new Talent(
    "Improved Lightning Shield",
    "spell_nature_lightningshield",
    ["Increases the damage done by your Lightning Shield orbs by ", "%."],
    3,
    [[5, 10, 15]]
  ),
];

export default tier2;
