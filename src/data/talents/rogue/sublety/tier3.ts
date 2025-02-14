import { Talent } from "../../Classes";

const tier3 = [
  new Talent(
    "Enveloping Shadows",
    "ability_rogue_envelopingshadows",
    [
      "Reduces the damage taken by area of effect attacks by ",
      "% and reduces the energy cost of your Feint ability by ",
      " .",
    ],
    2,
    [
      [20, 40],
      [5, 10],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: true, isMoved: false, isChanged: false }
  ),
  new Talent(
    "Ghostly Strike",
    "spell_shadow_curse",
    [
      "A strike that deals 125% weapon damage and increases your chance to dodge by 15% for 7 sec. Awards 1 combo point.",
    ],
    1,
    [[]],
    null,
    null,
    "40 Energy",
    "Melee Range",
    "Instant",
    "20 sec cooldown"
  ),
  new Talent(
    "Initiative",
    "spell_shadow_fumble",
    [
      "Gives you a ",
      "% chance to add an additional combo point to your target when using your Ambush, Garrote or Cheap Shot ability.",
    ],
    3,
    [[25, 50, 75]]
  ),
  null,
];

export default tier3;
