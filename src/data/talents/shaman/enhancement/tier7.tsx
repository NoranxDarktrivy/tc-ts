import { Talent } from "../../Classes";

const tier7 = [
  null,
  new Talent(
    "Stormstrike",
    "spell_holy_sealofmight",
    [
      <>
        Gives you an extra attack and grants your next Shock spell an additional
        effect:
        <br />
        <br />
        Earth Shock: Taunts the target to attack you.
        <br />
        <br />
        Flame Shock: Applies the damage over time effect to all enemies within
        10 yards of the target. <br />
        <br />
        Frost Shock: Roots the target in place for 5 sec. <br />
      </>,
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    "Melee range",
    "21% of base mana",
    "Instant",
    "20 sec cooldown",
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
];

export default tier7;
