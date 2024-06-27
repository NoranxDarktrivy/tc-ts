import { Talent } from '../../Classes'

const tier5 = [
  new Talent('Storm Reach', 'spell_nature_stormreach', ['Increases the range of your Lightning Bolt and Chain Lightning spells by ', ' yards.'], 2, [[3, 6]]),
  new Talent(
    'Elemental Fury',
    'spell_fire_volcano',
    ['Increases the critical strike damage bonus of your Searing, Magma and Fire Nova Totems and your Fire, Frost and Nature spells by 100%.'],
    1,
    [[]],
    [{ x: null, y: null }],
    [{ x: 6, y: 1 }],
    null,
    null,
    null,
    null,
    ['D2']
  ),
  null,
  new Talent(
    'Static Impact',
    'spell_nature_unrelentingstorm',
    ['Your critical strikes from Lightning spells have a ', '% change to add a static charge to the target. Static targets take up to 142 additional Nature damage when they take direct spell damage.'],
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
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
]

export default tier5
