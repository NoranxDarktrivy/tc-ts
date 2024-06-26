import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Blazing Speed',
    'spell_fire_burningspeed',
    ['Gives you a ', '% chance when hit by a melee or ranged attack to increase your movement speed by 50% and dispel all movement impairing effects. Lasts 8 sec.'],
    2,
    [[5, 10]],
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
  null,
  new Talent('Fire power', 'spell_fire_immolation', ['Increases the damage fone by your Fire spells by ', '%.'], 5, [[2, 4, 6, 8, 10]]),
  null,
]

export default tier6
