import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Elemental Impact', 'spell_nature_unrelentingstorm', ['Your offensive spell critical strikes increase spell damage taken by the target by ', '% for 6 sec.'], 2, [[5, 10]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent(
    'Overload',
    'spell_nature_lightningoverload',
    ['Gives your Lightning Bolt, Chain Lightning, Chain Heal and Healing Wave spells a ', '% chance to cast a second, similar spell on the same target at no additional cost that causes half damage or healing and no threat.'],
    3,
    [[8, 16, 25]],
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
]

export default tier6
