import { Talent } from "../../Classes";

const tier4 = [
  new Talent(
    "Eye for an Eye",
    "spell_holy_eyeforaneye",
    [
      "All spell criticals against you cause ",
      "% of the damage to be taken by the caster as well. The damage caused by Eye for an Eye will not exceed more than 50% of the Paladin's total health.",
    ],
    2,
    [[25, 50]]
  ),
  null,
  new Talent(
    "Improved Retribution Aura",
    "spell_holy_auraoflight",
    ["Increases the damage done by your Retribution Arua by ", "%."],
    2,
    [[25, 50]]
  ),
  new Talent(
    "Crusade",
    "spell_holy_crusade",
    [
      "Your Judgement of any seal has a ",
      "% chance to apply Judgement of the Crusader in addition to its usual effect.",
    ],
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
];

export default tier4;
