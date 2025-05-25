import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Improved Innervate",
    "spell_nature_lightning",
    [
      "When you cast Innervate on a friendly target, you also receive Innervate at ",
      "% effectiveness.",
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
  null,
  new Talent(
    "Improved Regrowth",
    "spell_nature_resistnature",
    ["Increases the critical effect chance of your Regrowth spell by ", "%."],
    5,
    [[10, 20, 30, 40, 50]]
  ),
  null,
];

export default tier6;
