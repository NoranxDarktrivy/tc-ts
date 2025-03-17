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
    "Hunger For Mana",
    "spell_shadow_manafeed",
    ["Increases your mana gained from all sources by 10%."],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
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
