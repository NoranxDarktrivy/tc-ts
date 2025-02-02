import { Talent } from "../../Classes";

const tier3 = [
  null,
  new Talent(
    "Ghostly Strike",
    "spell_shadow_curse",
    [
      "A strike that deals 125% weapon damage and increases your chance to dodge by 25% for 7 sec. Awards 1 combo point.",
    ],
    1,
    [[]],
    null,
    [{ x: 3, y: 1 }],
    "40 Energy",
    "Melee Range",
    "Instant",
    "20 sec cooldown",
    ["D1"]
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
