import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Mana Feed",
    "spell_shadow_manafeed",
    [
      "When you gain mana from any source, your active demon gains ",
      "% of the mana you gain.",
    ],
    3,
    [[30, 60, 90]],
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
    "Improved Master Demonologist",
    "spell_shadow_felmending",
    [
      "Grants party members within 40 yards ",
      "% of your active Master Demonologist effect.",
    ],
    2,
    [[50, 100]],
    [{ x: 4, y: 2 }],
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
