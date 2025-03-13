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
    "Improved Arcane Shot",
    "ability_impalingbolt",
    ["Reduces the cooldown of your Arcane Shot by ", " sec."],
    5,
    [[0.2, 0.4, 0.6, 0.8, 1]],
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
  new Talent(
    "Improved Scorpid Sting",
    "ability_hunter_criticalshot",
    ["Increases the effect of your Scorpid Sting by ", "%."],
    2,
    [[8, 15]],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: true }
  ),
];
