import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Sacred Seals",
    "spell_holy_divinepurpose",
    [
      "Increases the range of your Judgement by ",
      " yards. In addition, your Judgement reduces the mana cost of your next Seal spell by ",
      "%.",
    ],
    2,
    [
      [5, 10],
      [35, 70],
    ],
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
    "Divine Favor",
    "spell_holy_heal",
    [
      "When activated, gives your next Flash of Light, Holy Light, Exorcism, Holy Wrath or Holy Shock spell a 100% critical effect chance.",
    ],
    1,
    [[1]],
    [{ x: 3, y: 1 }],
    [{ x: 6, y: 1 }],
    "4% of base mana",
    null,
    "Instant",
    "2 min cooldown",
    ["D2"],
    {
      isChanged: true,
      isMoved: false,
      isNew: false,
    }
  ),
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
  null,
];

export default tier5;
