import { Talent } from "../../Classes";

const tier6 = [
  new Talent(
    "Unfair Advantage",
    "ability_rogue_unfairadvantage",
    [
      "Whenever you dodge an attack you gain an Unfair Advantage, striking back for ",
      "% of your main hand weapon's damage. This cannot occur more than once per second.",
    ],
    2,
    [[50, 100]],
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
    "Weapon Expertise",
    "spell_holy_blessingofstrength",
    [
      "Increases your skill with Swords, Maces, Daggers and Fist Weapons by ",
      ".",
    ],
    2,
    [[2, 5]],
    [{ x: 4, y: 1 }],
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
    "Aggression",
    "ability_racial_avatar",
    [
      "Increases the damage of your Sinister strike and Eviscerate abilites by ",
      "%.",
    ],
    3,
    [[2, 4, 6]]
  ),
  null,
];

export default tier6;
