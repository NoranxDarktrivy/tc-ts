import { Talent } from '../../Classes'

const tier5 = [
  new Talent(
    'Fel Domination',
    'spell_nature_removecurse',
    ['Your next summon of Succubus, Incubus, Imp, Felhunter or Void Walker has its casting time reduced by 5.5 sec and Mana cost reduced by 50%.'],
    1,
    [[]],
    [{ x: 3, y: 0 }],
    null,
    null,
    null,
    'Instant',
    '15 min cooldown',
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent(
    'Demonic Empowerment',
    'ability_warlock_demonicempowerment',
    ['Makes your active demon immune to stun, snare and movement impairing effects and increases its damage by 20% for 15 sec.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    '6% of base mana',
    '100 yd range',
    'Instant',
    '1 min cooldown',
    ['D2'],
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  null,
  new Talent('Demonic Synergy', 'spell_shadow_demonicempathy', ['Damage done by you or your summoned demon has a ', '% chance to increase the damage done by the other by 10% for 15 sec.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier5
