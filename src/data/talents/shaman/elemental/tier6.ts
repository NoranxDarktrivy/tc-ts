import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Chain Reaction",
    "spell_shaman_elementaloath",
    [
      "Reduces the penalty of your Chain Lightning and Chain heal jumps by ",
      "%.",
    ],
    2,
    [[35, 70]],
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
    "Overload",
    "spell_nature_lightningoverload",
    [
      "Gives your Lightning Bolt, Chain Lightning, Chain Heal and Healing Wave spells a ",
      "% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.",
    ],
    3,
    [[8, 17, 24]],
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
];

export default tier6;
