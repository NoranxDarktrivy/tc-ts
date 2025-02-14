import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Exculpation",
    "spell_holy_serendipity",
    [
      "Your offensive spell criticals have a ",
      "% chance to heal a party member within 40 yard range by 30% of the damage dealt. Prioritizes party members with low health.",
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
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent(
    "Inner Focus",
    "spell_frost_windwalkon",
    [
      "When activated, reduces the mana cost of your next spell by 100% and increases its critical strike chance by 25%.",
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "3 min cooldown"
  ),
  new Talent(
    "Meditation",
    "spell_nature_sleep",
    ["Allows ", "% of your mana regeneration to continue while casting."],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  null,
];

export default tier3;
