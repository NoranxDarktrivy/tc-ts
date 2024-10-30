import { Talent } from "../../Classes";

export default [
  new Talent(
    "Improved Hunter's Mark",
    "ability_hunter_snipershot",
    [
      "Causes ",
      "% of your Hunter's Mark ability to apply to melee attack power as well.",
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
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    "Improved Arcane Shot",
    "ability_impalingbolt",
    [
      "Your Auto Shot hits reduce the cooldown of your Arcane Shot by ",
      " sec.",
    ],
    5,
    [[0.1, 0.2, 0.3, 0.4, 0.5]],
    null,
    [{ x: 1, y: 1 }],
    null,
    null,
    null,
    null,
    ["D1"],
    {
      isNew: false,
      isChanged: true,
      isMoved: true,
    }
  ),
  new Talent(
    "Improved Concussive Shot",
    "spell_frost_stun",
    ["Gives your Concussive Shot a ", "% chance to stun the target for 3 sec."],
    5,
    [[4, 8, 12, 16, 20]]
  ),

  null,
];
