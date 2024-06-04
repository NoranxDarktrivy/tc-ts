import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Two-Handed Weapon Specialization', 'inv_hammer_04', ['Increases the damage you deal with two-handed melee weapons by ', '%.'], 3, [[2, 4, 6]]),
  null,
  new Talent(
    'Repentance',
    'spell_holy_prayerofhealing',
    ['Puts the enemy target in a state of meditation, incapacitating them for up to 6 sec. Any damage caused will awaken the target. Only works against Humanoids.'],
    1,
    [[]],
    null,
    null,
    '60 Mana',
    '20 yd range',
    'Instant',
    '60 sec cooldown',
    null,
    {
      isNew: false,
      isChanged: false,
      isMoved: true,
    }
  ),
  new Talent('Holy Fervor', 'spell_holy_blessedresillience', ['Your melee critical strikes increase physical damage taken by the target by ', '% for 6 sec.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier5
