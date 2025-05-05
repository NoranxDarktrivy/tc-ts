import { Talent } from "../../Classes";

export default [
  new Talent(
    "Improved Concussive Shot",
    "spell_frost_stun",
    ["Gives your Concussive Shot a ", "% chance to stun the target for 3 sec."],
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
    "Resurgence",
    "ability_mage_arcanebarrage",
    [
      "When you deal Arcane damage with one of your abilities, you gain mana equal to ",
      "% of the damage dealt.",
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
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Mortal Shots",
    "ability_piercedamage",
    ["Increases your ranged critical strike damage bonus by ", "%."],
    3,
    [[10, 20, 30]],
    [{ x: 0, y: 2 }],
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: true }
  ),
  null,
];
