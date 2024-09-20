import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Tidal Mastery",
    "spell_nature_tranquility",
    [
      "Increases the critical effect chance of your Healing and Lightning spells by ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  new Talent(
    "Restorative Totems",
    "spell_nature_manaregentotem",
    [
      "Increases the effect of your Mana Spring and Healing Stream Totems by ",
      "%.",
    ],
    3,
    [[10, 20, 30]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ["D3"],
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Water Shield",
    "ability_shaman_watershield",
    [
      "Your critical strikes from attacks and heals have a ",
      "% chance to trigger one of your Water Shield globes.",
    ],
    2,
    [[50, 100]],
    [{ x: 2, y: 2 }],
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
  null,
];

export default tier4;
