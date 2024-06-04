import { Talent } from '../../Classes'

const tier6 = [
  new Talent('Telluric Currents', 'spell_shaman_tidalwaves', ['Causes your Lightning spells to restore mana equal to ', '% of the damage dealt.'], 2, [[20, 40]], null, null, null, null, null, null, null, {
    isNew: true,
    isChanged: false,
    isMoved: false,
  }),
  null,
  new Talent(
    'Purification',
    'spell_frost_wizardmark',
    ['Increases the effectiveness of your healing and lightning spells by ', '%.'],
    5,
    [[2, 4, 6, 8, 10]],
    null,
    null,
    null,
    null,
    null,
    null,

    null,
    {
      isChanged: true,
      isMoved: false,
      isNew: false,
    }
  ),
  null,
]

export default tier6
