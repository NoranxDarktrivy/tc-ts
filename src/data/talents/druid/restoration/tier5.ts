import { Talent } from "../../Classes";

const tier5 = [
  new Talent(
    "Nature's Swiftness",
    "spell_nature_ravenform",
    ["When activated, your next Nature spell becomes an instant cast spell."],
    1,
    [[]],
    [
      {
        x: 1,
        y: 0,
      },
    ],
    null,
    null,
    null,
    "Instant",
    "3 min cooldown"
  ),
  null,
  new Talent(
    "Gift of Nature",
    "spell_nature_protectionformnature",
    ["Increases the effect of all healing spells by ", "%."],
    5,
    [[2, 4, 6, 8, 10]],
    [{ x: 2, y: 2 }]
  ),
  new Talent(
    "Revive",
    "ability_druid_lunarguidance",
    [
      "Brings a dead player back to life with 270 health and 440 mana. Cannot be cast when in combat.",
    ],
    1,
    [[]],
    null,
    null,
    "80% of base mana",
    "30 yd range",
    "10 sec cast",
    null,
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
];

export default tier5;
