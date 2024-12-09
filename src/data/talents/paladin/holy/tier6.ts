import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Reprisal",
    "spell_holy_harmundeadaura",
    [
      "Your critical strikes have a ",
      "% chance to reset the cooldown of your Exorcism and Holy Wrath. This effect cannot occur more than once every 10 sec.",
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
    "Holy Power",
    "spell_holy_power",
    ["Increases the critical effect chance of your Holy spells by ", "%."],
    5,
    [[1, 2, 3, 4, 5]]
  ),
  null,
];

export default tier6;
