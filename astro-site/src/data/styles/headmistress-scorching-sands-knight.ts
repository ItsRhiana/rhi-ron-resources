const headmistressScorchingSandsKnight = {
  id: "headmistress-scorching-sands-knight",

  characterName: "Headmistress",
  styleName: "Scorching Sands Knight",

  rarity: 6,
  class: "special-attack",
  desire: "gluttony",

  kit: {
    tags: [],

    actionFocus: {
      intel: 2,
      supplies: 2,
      execution: 1,
      strategy: 3,
    },

    stats: {
      hp: 40972,
      atk: 14218,
      def: 13267,
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
      "training-time",
      "asset-allocation",
      "tactical-balance",
      "see-you-at-the-end",
    ],

    skills: {
      basicAttack: {
        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 58,
          },
        ],
      },

      passive: {
        tags: ["single-target"],

        effects: [
          {
            description:
              "After every 8 Basic Attacks, deals DMG equal to {multiplier%} ATK to the current target and gains 1 stack of {stack:draft}. If the attack CRITs, gains 1 additional stack of {stack:draft}.",
            multiplier: 165,
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["atk-up", "aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {dmg%} ATK to enemies in a straight-line area. The next allied ULT costs 1 less Flame to cast. Then consumes all {stack:draft} stacks, increasing the ATK of allies within a circular area around Headmistress by {atk%} per Draft stack for 15s.",
            multipliers: {
              dmg: 230,
              atk: 15,
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
            target: "ultimate",
            description: "When ULT consumes Draft, counts 1 extra stack.",
          },
          {
            description: "ATK +7%",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "CRIT Rate +10%",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "actionFocusModifier",
            target: "strategy",
            description: "✧Strategy 3 → 4.",
          },
          {
            description: "ATK +21%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 4,
      passive: 4,
      ultimate: 9,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "training-time",
        recommendation: "",
      },
      {
        effect: "tactical-balance",
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
          styles: ["headmistress-scorching-sands-knight"],
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
      text: "AoE ATK buffer + Flame support.\nPassive deals AoE DMG and builds stacks; CRITs grant extra stacks.\nULT grants AoE ATK scaling with stacks, but has limited range.\nAlso reduces the next allied ULT cost by 1 Flame → main reason to use her.\nS — Training Time extends ATK buff duration.\nA — Tactical Balance improves stack-building consistency.",
    },
  ],
};

export default headmistressScorchingSandsKnight;
