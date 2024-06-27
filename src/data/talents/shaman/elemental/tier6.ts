import { Talent } from '../../Classes'

const tier6 = [
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
  new Talent('Lightning Mastery', 'spell_lightning_lightningbolt01', ['Reduces the cast time of your Lightning Bolt and Chain Lightning spells by ', ' sec.'], 2, [[0.25, 0.5]], [{ x: 2, y: 2 }], null, null, null, null, null, null, {
    isNew: false,
    isChanged: true,
    isMoved: true,
  }),
  null,
]

export default tier6
