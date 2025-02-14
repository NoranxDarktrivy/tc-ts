import { Talent } from "../../Classes";

const tier1 = [
  new Talent(
    "Holy Bulwark",
    "spell_holy_powerwordshield",
    ["Increases your spell damage and healing by ", "% of your total armor."],
    2,
    [[1, 2]],
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
    "Improved Devotion Aura",
    "spell_holy_devotionaura",
    ["Increases the armor bonus of your Devotion Aura by ", "%."],
    5,
    [[5, 10, 15, 20, 25]]
  ),
  new Talent(
    "Redoubt",
    "ability_defend",
    [
      "Increases your chance to block by ",
      "% after being the victim of a critical strike. Lasts 10 sec or 5 blocks.",
    ],
    5,
    [[6, 12, 18, 24, 30]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  null,
];

export default tier1;
