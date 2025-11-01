import { Talent } from "../../Classes";

export default [
  new Talent(
    "Kill Command",
    "ability_hunter_killcommand",
    [
      "Give the command to kill, causing your pet to instantly attack for an additional 33 damage. Can only be used after the Hunter lands a critical strike on the target.",
    ],
    1,
    [[]],
    null,
    null,
    "16 Mana",
    "45 yd range",
    "Instant",
    "5 sec cooldown",
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent(
    "Intimidation",
    "ability_devour",
    [
      "Command your pet to intimidate the target on the next succesful melee attack, causing a high amount of threat and stunning the target for 3 sec.",
    ],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    "8% of base mana",
    "100 yd range",
    "Instant",
    "1 min cooldown",
    ["D2"]
  ),
  null,
  new Talent(
    "Bestial Discipline",
    "spell_nature_abolishmagic",
    ["Increases the Focus generation of your pets by ", "%."],
    2,
    [[10, 20]]
  ),
];
