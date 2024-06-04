import { Talent } from '../../Classes'

const tier3 = [
  new Talent(
    'Elemental Focus',
    'spell_shadow_manaburn',
    ['Gives you a 10% chance to enter a Clearcasting state after casting any Fire, Frost or Nature damage spell. The Clearcasting state reduces the mana cost of your next damage spell by 100%.'],
    1,
    [[]]
  ),
  new Talent('Reverberation', 'spell_frost_frostward', ['Reduces the cooldown of your Shock spells by ', ' sec.'], 5, [[0.2, 0.4, 0.6, 0.8, 1]]),
  new Talent(
    'Call of Thunder',
    'spell_nature_callstorm',
    ['Increases the critical strike chance of your Lightning Bolt and Chain Lightning spells by an additional ', '%.'],
    5,
    [[1, 2, 3, 4, 6]],
    [{ x: null, y: null }],
    [{ x: 4, y: 2 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  new Talent('Ice and Fire', 'spell_fire_masterofelements', ['Increases critical strike chance and damage of your Fire and Frost spells and effects by ', '%.'], 5, [[1, 2, 3, 4, 5]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
]

export default tier3
