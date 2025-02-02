import { Talent } from "../../Classes";

const tier4 = [
  null,
  new Talent(
    "Holy Reach",
    "spell_holy_purify",
    [
      "ncreases the range of Smite and Holy Fire and the radius of Holy Nova and Prayer of Healing by ",
      "%.",
    ],
    2,
    [[10, 20]]
  ),
  new Talent(
    "Surge of Light",
    "spell_holy_surgeoflight",
    [
      "Your spell criticals have a ",
      "% chance to cause your next Smite spell to be instant cast and cost no mana. This effect lasts 10 sec.",
    ],
    2,
    [[25, 50]],
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

export default tier4;
