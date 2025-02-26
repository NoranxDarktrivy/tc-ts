import { Talent } from "../../Classes";

const tier5 = [
  null,
  new Talent(
    "Nature's Grace",
    "spell_nature_naturesblessing",
    [
      "All spell criticals grace you with a blessing of nature, reducing the casting time of your next spell by 0.5 sec and reduces its mana cost by 50%.",
    ],
    1,
    [[1]],
    [{ x: null, y: null }],
    [{ x: 5, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"],
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    "Moonglow",
    "spell_nature_sentinal",
    [
      "Reduces the mana cost of your Starfire, Moonfire, Wrath, Healing Touch, Rejuvenation and Regrowth spells by ",
      "%.",
    ],
    3,
    [[3, 6, 9]]
  ),
  null,
];

export default tier5;
