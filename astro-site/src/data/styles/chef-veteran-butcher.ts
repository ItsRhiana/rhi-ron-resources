const chefVeteranButcher = {
  id: "chef-veteran-butcher",

  characterName: "Chef",
  styleName: "Veteran Butcher",

  rarity: 5,
  class: "annihilation",
  desire: "greed",

  kit: {
    tags: ["single-target"],

    actionFocus: {
      intel: 1,
      supplies: 2,
      execution: 1,
      strategy: 2,
    },

    stats: {
      hp: 28413,
      atk: 15532,
      def: 9076,
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
      "ultimate-burst",
      "asset-allocation",
      "all-or-nothing",
      "crit-dmg",
    ],

    skills: {
      basicAttack: {
        shots: 2,
        speed: "Fast",
        range: "Mid",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 36,
          },
        ],
      },

      passive: {
        trigger: "15s cooldown",

        tags: ["crit-up", "aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {dmg%} ATK in a circular area around the lowest-HP enemy, 5s +{crit%} CRIT Rate.",
            multipliers: {
              dmg: 400,
              crit: 50,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["ranged", "single-target"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} ATK to one enemy, and additionally deals DMG equal to 20% of the target's lost HP, capped at 400% of Chef’s ATK.",
            multiplier: 1050,
          },
        ],
      },
    },

    awakening: [
      {
        level: 1,

        effects: [
          {
            description: "ATK +2.7%",
          },
          {
            description: "CRIT DMG -16.4%",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "ATK +5.5%",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "skillModifier",
            target: "ultimate",
            description: "On ULT cast, 10s +30% ATK.",
          },
          {
            description: "ATK +2.7%",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "CRIT Rate +4.1%",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            type: "actionFocusModifier",
            target: "strategy",
            description: "✧Strategy 2 → 3.",
          },
          {
            description: "ATK +2.7%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 100,

    skillLevels: {
      basicAttack: 7,
      passive: 9,
      ultimate: 9,
    },

    position: {
      primary: "On-field",
    },

    reconstruction: [
      {
        effect: "ultimate-burst",
        recommendation: "",
      },
      {
        effect: "crit-dmg",
        recommendation: "",
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
          styles: ["general-thunder-commander"],
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
      text: "ATK-scaling burst finisher.\nPassive deals AoE DMG → helps deal with mobs.\nAlso grants a large 5s self-CRIT every 15s → aim to cast ULT within this window.\nULT has 2 components: normal ST DMG + a finisher that scales with missing enemy HP → strong in Infinite Stairway, but weaker in infinite-HP challenges.\nThis finisher ignores DEF and does not scale with DMG Bonus/CRIT DMG → in-combat ATK buffs are the main way to raise its cap.\nHigh self-CRIT, low CRIT DMG → prefers A ◇ Ultimate Burst and A ◇ CRIT DMG.\nA ◇ All or Nothing worsens his low 5★ durability.",
    },
  ],
};

export default chefVeteranButcher;
