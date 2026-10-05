const reconstructionEffects = {
  "raging-sea-assault": {
    rank: "S",
    name: "Raging Sea Assault",
    description: "ULT CRIT DMG effect increases to 11%.",
    target: "ultimate",
  },
  "into-the-frame": {
    rank: "S",
    name: "Into the Frame",
    description: "ULT +2 {stack:storyboard}.",
    target: "ultimate",
  },
  "like-spring-rain": {
    rank: "S",
    name: "Like Spring Rain",
    description: "ULT additionally heals the target for 10% HP.",
    target: "ultimate",
  },

  "tactical-balance": {
    rank: "A",
    name: "Tactical Balance",
    description: "CRIT Rate +20%; CRIT DMG -20%.",
  },

  "all-or-nothing": {
    rank: "A",
    name: "All or Nothing",
    description: "ATK +25%; HP -12%.",
  },

  "fleeting-brilliance": {
    rank: "A",
    name: "Fleeting Brilliance",
    description: "Passive cooldown -5s.",
    target: "passive",
  },
  "aid-the-strong": {
    rank: "A",
    name: "Aid the Strong",
    description: "Passive grants highest ATK ally 30% increased ATK for 5s.",
    target: "passive",
  },

  "crimson-command": {
    rank: "A",
    name: "Crimson Command",
    description: "On ULT cast, all allies -10% HP and 10s +12% DMG.",
    target: "ultimate",
  },

  "scorch-to-the-bone": {
    rank: "A",
    name: "Scorch to the Bone",
    description:
      "BA inflicts {stack:dot} equal to 100% ATK for 10s, 30s cooldown.",
    target: "basicAttack",
  },

  crit: {
    rank: "A",
    name: "CRIT",
    description: "CRIT Rate +8%.",
  },

  "inspiring-horn": {
    rank: "A",
    name: "Inspiring Horn",
    description: "Every 25s, increases team DMG dealt by 8% for 10s.",
  },

  "asset-allocation": {
    rank: "A",
    name: "Asset Allocation",
    description: "First ULT cost -1.",
    target: "ultimate",
  },

  "battle-spirit-relay": {
    rank: "A",
    name: "Battle Spirit Relay",
    description: "ULT grants the target a 10% CRIT Rate increase for 10s.",
    target: "ultimate",
  },

  "healing-enhancement": {
    rank: "A",
    name: "Healing Enhancement",
    description:
      "Each ULT increases own Healing Recovery Rate by 8%, stacking up to 24%.",
    target: "ultimate",
  },
  "rain-once-fell": {
    rank: "S",
    name: "Rain Once Fell",
    description:
      "ULT grants the target {stack:hot} for 20s, totaling 12% of Rainmaker's Max HP.",
    target: "ultimate",
  },

  "guard-all-realms": {
    rank: "A",
    name: "Guard All Realms",
    description: "ULT grants teamwide shield equal to 7% HP for 35s.",
    target: "ultimate",
  },

  "against-all-odds": {
    rank: "A",
    name: "Against All Odds",
    description: "When <40% HP, restores 20% HP; 30s cooldown.",
  },

  //nobody-hidden-brilliance-in-a-cup

  "unfinished-cup": {
    rank: "S",
    name: "Unfinished Cup",
    description: "On clone disappearance, 15s +16% DMG Reduction.",
    target: "ultimate",
  },

  "rich-in-life": {
    rank: "A",
    name: "Rich in Life",
    description: "Max HP +25%; ATK -12%.",
  },

  "no-time-to-lose": {
    rank: "A",
    name: "No Time to Lose",
    description: "Passive cooldown -5s.",
    target: "passive",
  },

  "unstoppable-force": {
    rank: "A",
    name: "Unstoppable Force",
    description: "When ULT deals DMG, dispels 1 enemy buff.",
    target: "ultimate",
  },

  //red-gloves-abyssal-judgement

  "scarlet-mist": {
    rank: "S",
    name: "Scarlet Mist",
    description: "ULT cost −1.",
    target: "ultimate",
  },

  "no-pardon": {
    rank: "A",
    name: "No Pardon",
    description: "ULT DoT duration +5s.",
    target: "ultimate",
  },

  //red-gloves-ace-attorney

  "endless-vitality": {
    rank: "A",
    name: "Endless Vitality",
    description: "Restores 1.5% HP/2s.",
  },

  "biding-time": {
    rank: "A",
    name: "Biding Time",
    description: "While >60% HP, +10% DMG Reduction.",
  },

  "guilty-verdict": {
    rank: "A",
    name: "Guilty Verdict",
    description: "Passive DEF increase stack limit +5.",
    target: "passive",
  },

  "evasion-rate": {
    rank: "A",
    name: "Evasion Rate",
    description: "Evasion +800.",
  },

  //tyrant-lord-of-terra
  dominator: {
    rank: "S",
    name: "Dominator",
    description: "ULT cost −1.",
    target: "ultimate",
  },

  unyielding: {
    rank: "A",
    name: "Unyielding",
    description: "While shielded, +25%.",
  },

  //chef-veteran-butcher
  "ultimate-burst": {
    rank: "A",
    name: "Ultimate Burst",
    description: "CRIT Rate -10%; CRIT DMG +40%.",
  },

  "crit-dmg": {
    rank: "A",
    name: "CRIT DMG",
    description: "CRIT DMG +16%.",
  },

  //ghost-covert-investigator
  noose: {
    rank: "A",
    name: "Noose",
    description: "Starting Flame from Passive +1.",
    target: "passive",
  },

  //laksa-spice-merchant
  "tactical-healing": {
    rank: "A",
    name: "Tactical Healing",
    description: "Healing an ally grants them +10% DMG for 10s.",
  },

  "enhanced-healing": {
    rank: "A",
    name: "Enhanced Healing",
    description: "Each ULT raises own healing rate by 8%, stacking up to 24%.",
    target: "ultimate",
  },

  healing: {
    rank: "A",
    name: "Healing",
    description: "Healing +8%.",
  },

  //ghost-vengeful-nursery-rhyme
  "moonlit-serenity": {
    rank: "S",
    name: "Moonlit Serenity",
    description:
      "ULT inflicts a 10s DoT on hit targets, dealing DMG equal to 30% ATK/2s.",
    target: "ultimate",
  },

  "weakness-insight": {
    rank: "A",
    name: "Weakness Insight",
    description:
      "CRIT DMG +8% per debuff on the most debuffed enemy, up to 40%.",
  },

  "attack-off-guard": {
    rank: "A",
    name: "Attack Off Guard",
    description: "DMG independently +10% against debuffed enemies.",
  },

  //manipulator-technology-minister
  "efficient-principle": {
    rank: "S",
    name: "Efficient Principle",
    description: "At battle start, ULT cost −2.",
    target: "ultimate",
  },

  "optimal-solution": {
    rank: "A",
    name: "Optimal Solution",
    description: "ULT DMG effect +2%.",
    target: "ultimate",
  },

  //general-thunder-commander
  "combat-ready": {
    rank: "S",
    name: "Combat Ready",
    description: "At battle start: +2 Flames.",
  },

  "body-as-bastion": {
    rank: "A",
    name: "Body as Bastion",
    description: "ULT +1 hit.",
    target: "ultimate",
  },

  "chase-the-victory": {
    rank: "A",
    name: "Chase the Victory",
    description:
      "When an ally kills an enemy, own ATK +60% for 3s; cannot stack.",
  },

  //headmistress-scorching-sands-knight
  "training-time": {
    rank: "S",
    name: "Training Time",
    description: "ULT ATK buff +10s.",
    target: "ultimate",
  },

  "see-you-at-the-end": {
    rank: "A",
    name: "See You at the End",
    description: "At Battle Start: +1 Draft.",
  },

  //fool-card-table-seer
  "decisive-victory": {
    rank: "S",
    name: "Decisive Victory",
    description: "On ULT cast, +20% DMG for 10s.",
    target: "ultimate",
  },

  "steadfast-strike": {
    rank: "A",
    name: "Steadfast Strike",
    description:
      "Each initial Passive trigger grants 4 Card Luck; while >50% HP, CRIT Rate +5%.",
    target: "passive",
  },

  //knight-swordman
  cleansing: {
    rank: "S",
    name: "Cleansing",
    description: "Severing Thought +1 additional cast, but -20% DMG.",
    target: "passive",
  },

  //wolf-patrol-guard
  bloodbath: {
    rank: "S",
    name: "Bloodbath",
    description: "On ULT cast, -10% current HP, DMG +30%.",
    target: "ultimate",
  },

  "against-adversity": {
    rank: "A",
    name: "Against Adversity",
    description: "While <50% HP, DMG +15%.",
  },

  "offense-to-defense": {
    rank: "A",
    name: "Offense to Defense",
    description: "Max HP +20%; ATK -10%.",
  },

  //the-ref-silent-verdict
  "fatal-prelude": {
    rank: "S",
    name: "Fatal Prelude",
    description: "ULT applies +10% VULN for 10s.",
    target: "ultimate",
  },

  "before-the-storm": {
    rank: "A",
    name: "Before the Storm",
    description: "On ULT cast, highest ATK ally +8% ATK for 30s.",
    target: "ultimate",
  },

  "smooth-sailing": {
    rank: "A",
    name: "Smooth Sailing",
    description: "Every 25s, teamwide +10% CRIT DMG for 20s.",
  },

  "silent-verdict": {
    rank: "A",
    name: "Silent Verdict",
    description:
      "Raises the Basic Attack’s chance to apply Sensory Deprivation to 100%.",
    target: "basicAttack",
  },
};

export default reconstructionEffects;

const rankOrder = {
  S: 1,
  A: 2,
};

export function sortReconstruction(effectIds: any[]) {
  return [...effectIds].sort((a, b) => {
    const effectA = reconstructionEffects[a];
    const effectB = reconstructionEffects[b];

    const rankDifference = rankOrder[effectA.rank] - rankOrder[effectB.rank];

    if (rankDifference !== 0) {
      return rankDifference;
    }

    return effectA.name.localeCompare(effectB.name);
  });
}
