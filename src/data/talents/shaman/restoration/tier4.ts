import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Restorative Totems",
    "spell_nature_manaregentotem",
    [
      "Increases the effect of your Mana Spring and Healing Stream Totems by ",
      "%.",
    ],
    3,
    [[10, 20, 30]],
    null,
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
    "Tidal Mastery",
    "spell_nature_tranquility",
    [
      "Increases the critical effect chance of your Healing and Lightning spells by ",
      "%.",
    ],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 5, y: 2 }],
    null,
    null,
    null,
    null,
    ["D2"]
  ),
  null,
];

export default tier4;
