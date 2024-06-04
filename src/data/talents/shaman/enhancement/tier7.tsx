import { Talent } from '../../Classes'

const tier7 = [
  null,
  new Talent(
    'Stormstrike',
    'spell_holy_sealofmight',
    [
      <>
        Gives you an extra attack and grants an additional effect depending on your active weapon enhancement: <br />
        <br />
        Rockbiter: Taunts the target to attack you. <br />
        <br />
        Windfury: Increases attack speed by 10% for 12 sec. <br />
        <br />
        Flametongue: Increases the damage done by your next spell by 50%. <br />
        <br />
        Frostbrand: Roots the target in place for 4 sec.
      </>,
    ],
    1,
    [[]],
    [{ x: 4, y: 1 }],
    null,
    'Melee range',
    '8% of base mana',
    'Instant',
    '12 sec cooldown',
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  null,
  null,
]

export default tier7
