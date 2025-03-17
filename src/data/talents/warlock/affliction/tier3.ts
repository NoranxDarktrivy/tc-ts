import { Talent } from "../../Classes";

const tier3 = [
  null,
  new Talent(
    "Fel Concentration",
    "spell_shadow_fingerofdeath",
    [
      "Gives you a ",
      "% chance to avoid interruption caused by damage while casting Drain Life, Drain Mana and Drain Soul spells.",
    ],
    5,
    [[14, 28, 42, 56, 70]]
  ),
  new Talent(
    "Amplify Affliction",
    "spell_shadow_contagion",
    [
      "Increases the effect of your next Curse of Weakness or Curse of Agony by 50%, or your next Curse of Exhaustion by 20%. Lasts 30 sec.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    "Instant",
    "3 min cooldown",
    ["D2"]
  ),
  null,
];

export default tier3;
