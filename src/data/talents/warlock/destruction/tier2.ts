import { Talent } from "../../Classes";

const tier2 = [
  new Talent(
    "Malevolence",
    "spell_shadow_charm",
    ["Increases your chance to hit with Destruction spells by ", "%."],
    2,
    [[2, 4]],
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
    "Improved Shadow Bolt",
    "spell_shadow_shadowbolt",
    [
      "Your Shadow Bolt critical strikes increase the shadow damage taken by the target by ",
      "% until 4 non-periodic damage sources are applied. Lasts a maximum of 12 sec.",
    ],
    5,
    [[4, 8, 12, 16, 20]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Aftermath",
    "spell_fire_fire",
    [
      "Gives your Destruction spells a ",
      "% chance to daze the target for 5 sec.",
    ],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    "Shadow and Flame",
    "spell_shadow_shadowandflame",
    [
      "Gives your Shadowbolt a ",
      "% chance to increase the damage of your next Incinerate by 50% and gives your Incinerate a ",
      "% chance to increase the damage of your next Shadowbolt by 50%.",
    ],
    3,
    [
      [10, 20, 30],
      [10, 20, 30],
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
];

export default tier2;
