import { Talent } from "../../Classes";

const tier1 = [
  null,
  new Talent(
    "Master of Deception",
    "spell_shadow_charm",
    [
      "Reduces the chance enemies can detect you while in stealth. In addition, increases your chance to avoid area of effect damage by ",
      "%.",
    ],
    5,
    [[3, 6, 9, 12, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    {
      isNew: false,
      isChanged: true,
      isMoved: false,
    }
  ),
  new Talent(
    "Opportunity",
    "ability_warrior_warcry",
    [
      "Increases the damage when striking from behind with your Backstab, Ambush and Garrote abilities by ",
      "%.",
    ],
    5,
    [[4, 8, 12, 16, 20]]
  ),
  null,
];

export default tier1;
