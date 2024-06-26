import { Talent } from '../../Classes'

const tier6 = [
  new Talent(
    'Static Impact',
    'spell_nature_unrelentingstorm',
    ['Your critical strikes from Lightning spells have a ', '% change to add two static charges to the target. Static targets take up to 112 additional Nature damage when they take spell damage.'],
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
