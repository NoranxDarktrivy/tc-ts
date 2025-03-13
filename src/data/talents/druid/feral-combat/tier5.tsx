import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Savage Fury",
    "ability_druid_ravage",
    [
      "Increases the damage caused by your Claw, Rake, Maul and Swipe abilites by ",
      "%.",
    ],
    2,
    [[10, 20]]
  ),
  null,
  new Talent(
    "Primal Aggression",
    "ability_druid_primalagression",
    [
      "You critical strikes while in Bear or Dire Bear form decrease the cooldown of your Frenzied Regeneration by ",
      " sec and your critical strikes from Cat Form abilities decrease the cooldown of your Tiger's Fury by ",
      " sec.",
    ],
    2,
    [
      [5, 10],
      [2, 4],
    ],
    [{ x: 3, y: 2 }],
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
    "Faerie Fire (Feral)",
    "spell_nature_faeriefire",
    [
      "Decrease the armor of the target by 175 for 40 sec.  While affected, the target cannot stealth or turn invisible.",
    ],
    1,
    [[]],
    null,
    null,
    "30 yd range",
    null,
    "Instant",
    "6 sec cooldown"
  ),
];

export default tier5;
