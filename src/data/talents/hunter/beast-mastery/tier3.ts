import { Talent } from '../../Classes'

export default [
  new Talent(
    'Pathfinding',
    'ability_mount_jungletiger',
    ['Increases the speed bonus of your Aspect of the Cheetah and Aspect of the Pack by ', '% and increases the outdoor movement speed of your pets by ', '%.'],
    2,
    [
      [3, 6],
      [15, 30],
    ],
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    { isNew: false, isChanged: true, isMoved: false }
  ),
  new Talent(
    'Kill Command',
    'ability_hunter_killcommand',
    ['Give the command to kill, causing your pet to instantly attack for an additional 12 damage. Can only be used after the Hunter lands a critical strike on the target.'],
    1,
    [[]],
    null,
    null,
    '27 Mana',
    '45 yd range',
    'Instant',
    '5 sec cooldown',
    null,
    { isNew: true, isChanged: false, isMoved: false }
  ),
  new Talent('Unleashed Fury', 'ability_bullrush', ['Increases the damage done by your pets by ', '%.'], 5, [[4, 8, 12, 16, 20]]),
  null,
]
