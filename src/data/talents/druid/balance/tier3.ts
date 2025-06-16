import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Improved Thorns",
    "spell_nature_thorns",
    ["Increases the damage caused by your Thorns spell by ", "%."],
    3,
    [[25, 50, 75]]
  ),
  null,
  new Talent(
    "Omen of Clarity",
    "spell_nature_crystalball",
    [
      "Imbues the Druid with natural energy. Each of the Druid's offensive spells and melee attacks has a chance of causing the caster to enter a Clearcasting state. The Clearcasting state reduces the Mana, Rage or Energy cost of your next damage or healing spell or offensive ability by 100%. Lasts 10 min.",
    ],
    1,
    [[1]],
    [{ x: 1, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Nature's Reach",
    "spell_nature_naturetouchgrow",
    [
      "Increases the range of your Wrath, Entangling Roots, Faerie Fire, Moonfire, Starfire and Hurricane spells by ",
      "%.",
    ],
    2,
    [[10, 20]]
  ),
];

export default tier3;
