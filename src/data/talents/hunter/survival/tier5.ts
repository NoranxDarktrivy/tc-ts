import { Talent } from '../../Classes'

export default [
  new Talent(
    'Readiness',
    'ability_hunter_misdirection',
    ['Threat caused by your next 3 attacks is redirected to the target raid member. Caster and target can only be affected by one Misdirection spell at a time.  Effect lasts 30 sec.'],
    1,
    [[]],
    null,
    null,
    '9% of base mana',
    '100 yd range',
    'Instant',
    '2 min cooldown',
    null,
    {
      isNew: true,
      isChanged: false,
      isMoved: false,
    }
  ),
  new Talent('Killer Instinct', 'spell_holy_blessingofstamina', ['Increases your critical strike chance with all attacks by ', '%.'], 3, [[1, 2, 3]], [{ x: null, y: null }], [{ x: 6, y: 1 }], null, null, null, null, ['D2']),
  new Talent(
    'Counterattack',
    'ability_warrior_challange',
    ["A strike that becomes active after parrying an opponent's attack. This attack deals 40 damage and immobilizes the target for 5 sec. Counterattack cannot be blocked, dodged, or parried."],
    1,
    [[]],
    [{ x: 2, y: 2 }],
    null,
    '45 Mana',
    'Melee range',
    'Instant',
    '5 sec cooldown'
  ),
  null,
]
