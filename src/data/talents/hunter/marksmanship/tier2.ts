import { Talent } from "../../Classes";

export default [
  new Talent(
    "Improved Stings",
    "spell_nature_nullifypoison",
    ["Increases the effect of your Stings by ", "%."],
    3,
    [[3, 6, 9]],
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
    "Swift Shots",
    "ability_hunter_zenarchery",
    ["Your Arcane Shot reduces the cooldown of your Rapid Fire by ", " sec."],
    2,
    [[1, 2]],
    [{ x: 0, y: 1 }],
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
    "Lethal Shots",
    "ability_searingarrow",
    ["Increases your critical strike chance with ranged weapons by ", "%."],
    5,
    [[1, 2, 3, 4, 5]],
    [{ x: null, y: null }],
    [{ x: 2, y: 2 }],
    null,
    null,
    null,
    null,
    ["D1"]
  ),
  null,
];
