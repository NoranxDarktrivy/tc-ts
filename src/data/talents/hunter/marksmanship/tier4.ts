import { Talent } from "../../Classes";

export default [
  null,
  new Talent(
    "Improved Serpent Sting",
    "ability_hunter_quickshot",
    ["Increases the damage done by your Serpent Sting by ", "%."],
    5,
    [[2, 4, 6, 8, 10]]
  ),
  new Talent(
    "Efficiency",
    "spell_frost_wizardmark",
    ["Reduces the Mana cost of your Shots and Stings by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  null,
];
