import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Magic Attunement",
    "spell_nature_abolishmagic",
    [
      "Increases the effect of your Amplify Magic and Dampen Magic spells by ",
      "%.",
    ],
    2,
    [[25, 50]]
  ),
  new Talent(
    "Improved Arcane Explosion",
    "spell_nature_wispsplode",
    [
      "Increases the critical strike chance of your Arcane Explosion spell by ",
      "%.",
    ],
    3,
    [[2, 4, 6]]
  ),
  new Talent(
    "Wizard Armor",
    "spell_arcane_prismaticcloak",
    [
      "Increases your resistance to all magic by 10 and allows 30% of your mana regeneration to continue while casting. This effect is increased to up to 100% the lower your mana. Only one type of Armor spell can be active on the Mage at any time. Replaces Mage Armor. Lasts 30 min.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    "170 Mana",
    null,
    "Instant",
    null,
    ["D2"],
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
];

export default tier3;
