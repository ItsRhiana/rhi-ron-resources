const theRefSilentVerdict = {
  id: "the-ref-silent-verdict",

  characterName: "The Ref",
  styleName: "Silent Verdict",

  rarity: 6,
  class: "special-attack",
  desire: "wrath",

  kit: {
    tags: ["single-target", "def-down"],

    actionFocus: {
      intel: 3,
      supplies: 2,
      execution: 2,
      strategy: 2,
    },

    stats: {
      hp: 41076,
      atk: 14366,
      def: 13163,
    },

    deepening: [
      {
        stat: "atk",
        value: "+42%",
      },
      {
        stat: "crit-rate",
        value: "+33.6%",
      },
      {
        stat: "dmg",
        value: "+36.48%",
      },
    ],

    reconstruction: [
      "fatal-prelude",
      "before-the-storm",
      "smooth-sailing",
      "silent-verdict",
    ],

    skills: {
      basicAttack: {
        tags: [],

        effects: [
          {
            description:
              "Deals {multiplier%} ATK as DMG to an enemy and has a 65% chance to apply {stack:sensoryDeprivation}.",
            multiplier: 120,
          },
        ],
      },

      passive: {
        tags: ["def-down"],

        effects: [
          {
            description:
              "Whenever an ally receives a debuff, its applier gains 1 {stack:sensoryDeprivation} stack. When an enemy is Judged, consume stacks to apply the matching 30s effect:\n· 5: DEF −{def5%}\n· 10: DEF −{def10%}\n· 15: DEF −{def15%}\n· 20: DEF −{def20%}\n· 30: DEF −{def30}%, teamwide +{dmg30%} DMG",
            multipliers: {
              def5: 15,
              def10: 22,
              def15: 30,
              def20: 40,
              def30: 40,
              dmg30: 8,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["single-target", "silence"],

        effects: [
          {
            description:
              "+5 {stack:sensoryDeprivation} and 10s Silence, performs Judgment, and deals {dmg%} ATK. Judgment consumes the corresponding number of stacks and triggers the Passive effect.\nOff-field: Target DEF −{def%} for 30s after Judgment.",
            multipliers: {
              dmg: 925,
              def: 15,
            },
          },
        ],
      },
    },

    awakening: [
      {
        level: 1,

        effects: [
          {
            type: "skillModifier",
            target: "passive",
            description:
              "Judgment’s DEF-down and DMG-up effects +10s; first ULT +10 stacks.",
          },
          {
            description: "ATK +7%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 4,
      passive: 9,
      ultimate: 7,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "silent-verdict",
        recommendation: "",
      },
      {
        recommendation: "Anything",
      },
    ],

    genericTeam: {
      onField: [
        {
          styles: ["red-gloves-ace-attorney"],
          role: "vanguard",
        },
        {
          styles: ["chef-veteran-butcher"],
          role: "st-dps",
        },
        {
          styles: ["nobody-seaside-holiday"],
          role: "aoe-dps",
        },
        {
          styles: ["the-ref-silent-verdict"],
          role: "support",
        },
      ],

      offField: [
        {
          styles: ["laksa-spice-merchant"],
          role: "healer",
        },
        {
          styles: ["gift-player-in-the-play"],
          role: "support",
        },
      ],
    },
  },

  analysis: [
    {
      type: "paragraph",
      text: "ATK-scaling debuff-dependent ST DEF shredder.\nStacks build through BA + enemy debuffs → prefers on-field and debuff-heavy enemies; allied CC can slow stack building.\nAt 15+ stacks, ULT applies large ST DEF Down.\nExtra DMG buff at 25+ stacks is not worth waiting for.\nWithout frequent enemy debuffs, stack building is extremely slow → long DEF Down downtime; use 6★ General instead.\nST application + slow setup → poor fit for wave-based content; specializes in lone, debuff-heavy bosses.\nA — Silent Verdict speeds up stack building.\nS — Fatal Prelude is better for burst DPS, while other Recons provide longer buffs.",
    },

    {
      type: "styles",
      styleIds: ["general-thunder-commander"],
    },
  ],
};

export default theRefSilentVerdict;
