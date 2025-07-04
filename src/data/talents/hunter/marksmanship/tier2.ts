import { Talent } from "../../Classes";

export default [
  new Talent(
    "Swift Shots",
    "ability_hunter_zenarchery",
    ["Your Arcane Shot reduces the cooldown of your Rapid Fire by ", " sec."],
    2,
    [[2, 4]],
    [{ x: 1, y: 1 }],
    [{ x: null, y: null }],
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: false, isMoved: true }
  ),
  new Talent(
    "Improved Arcane Shot",
    "ability_impalingbolt",
    [
      "Your ranged attacks reduce the cooldown of your Arcane Shot by ",
      " sec.",
    ],
    3,
    [[0.3, 0.6, 1]],
    [{ x: null, y: null }],
    [{ x: 1, y: 0 }],
    null,
    null,
    null,
    null,
    ["L1"],
    { isNew: false, isChanged: true, isMoved: true }
  ),
  null,
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
  ,
];
