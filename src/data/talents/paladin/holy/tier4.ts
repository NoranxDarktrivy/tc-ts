import { Talent } from '../../Classes'

const tier4 = [
  new Talent(
    'Blessed Surge',
    'spell_holy_spellwarding',
    ['Critical hits with weapons, spells and abilities have a ', '% chance to reset the cooldown of your Exorcism and Holy Wrath and reduce their mana cost by 100%. 5 sec cooldown.'],
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
  new Talent(
    'Illumination',
    'spell_holy_greaterheal',
    ['After getting a critical effect from your Flash of Light, Holy Light or Holy Shock spell, gives you a ', '% chance to gain mana equal to the base cost of the spell.'],
    5,
    [[20, 40, 60, 80, 100]],
    [{ x: null, y: null }],
    [{ x: 4, y: 1 }],
    null,
    null,
    null,
    null,
    ['D1']
  ),
  new Talent('Improved Blessing of Wisdom', 'spell_holy_sealofwisdom', ['Increases the effect of your Blessing of Wisdom spell by ', '%.'], 2, [[10, 20]]),
  null,
]

export default tier4
