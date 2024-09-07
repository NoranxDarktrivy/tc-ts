import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Elemental Focus",
    "spell_shadow_manaburn",
    [
      "Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.",
    ],
    1,
    [[]]
  ),
  new Talent(
    "Reverberation",
    "spell_frost_frostward",
    ["Reduces the cooldown of your Shock spells by ", " sec."],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]]
  ),
  new Talent(
    "Call of Thunder",
    "spell_nature_callstorm",
    [
      "Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D3"]
  ),
  new Talent(
    "Focused Insight",
    "spell_shaman_measuredinsight",
    [
      "After casting any Shock spell, your next heal's mana cost is reduced by ",
      "% of the cost of the Shock spell, and its healing effectiveness is increased by ",
      "%.",
    ],
    3,
    [
      [25, 50, 75],
      [10, 20, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isChanged: false, isNew: true, isMoved: false }
  ),
];

export default tier3;
