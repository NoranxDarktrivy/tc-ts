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
      "Increases the effect of your next damage over time or drain effect by 100%. Lasts 30 sec.",
    ],
    1,
    [[]],
    null,
    null,
    null,
    null,
    "Instant",
    "3 min cooldown",
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
];

export default tier3;
