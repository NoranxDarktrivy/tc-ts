import { Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Living Bomb",
    "ability_mage_livingbomb",
    [
      "The target becomes a Living Bomb, taking 588 Fire damage over 12 sec. After 12 sec or when the spell is dispelled, the target explodes dealing 390 Fire damage to all enemies within 10 yards.",
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    "22% of base mana",
    null,
    "Instant",
    "30 yd range",
    null,
    {
      isChanged: false,
      isMoved: false,
      isNew: true,
    }
  ),
  null,
  null,
];

export default tier7;
