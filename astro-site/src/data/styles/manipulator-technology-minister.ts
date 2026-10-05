const manipulatorTechnologyMinister = {
  id: "manipulator-technology-minister",

  characterName: "Manipulator",
  styleName: "Technology Minister",

  rarity: 6,
  class: "annihilation",
  desire: "lust",

  kit: {
    tags: ["aoe", "flame"],

    actionFocus: {
      intel: 2,
      supplies: 3,
      execution: 1,
      strategy: 2,
    },

    stats: {
      hp: 34103,
      atk: 18810,
      def: 11054,
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
      "efficient-principle",
      "optimal-solution",
      "ultimate-burst",
      "all-or-nothing",
    ],

    skills: {
      basicAttack: {
        shots: 3,
        speed: "Fast",
        range: "Long",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 52.5,
          },
        ],
      },

      passive: {
        trigger: "Every 10 Basic Attacks",

        tags: ["single-target"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} ATK to the current target. Every 4th Passive activation, ULT cost -1.",
            multiplier: 290,
          },
        ],
      },

      ultimate: {
        flameCost: 8,

        tags: ["aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} ATK in a circular area. +4% DMG per ULT cost reduced. Every allied ULT cast, Manipulator’s ULT cost -1.",
            multiplier: 672,
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
            description: "Passive activation requirement -2.",
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
            target: "supplies",
            description: "✧Supplies 3 → 4.",
          },
          {
            description: "ATK +21%",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "CRIT Rate +10%",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            description: "ATK +14%",
          },
          {
            description: "CRIT Rate +15%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 100,

    skillLevels: {
      basicAttack: 1,
      passive: 1,
      ultimate: 10,
    },

    position: {
      primary: "Off-field",
    },

    reconstruction: [
      {
        effect: "efficient-principle",
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
          styles: ["manipulator-technology-minister"],
          role: "aoe-dps",
        },
      ],
    },
  },

  analysis: [
    {
      type: "paragraph",
      text: "ATK-scaling sub-DPS reliant on team ULT cycling.\nPassive cost reduction is extremely slow → prefers off-field, even at Dup I.\nULT starts at 8 Flames and costs 1 less per allied ULT. → accelerates ULT cycling, mandatory investment for infinite-HP challenges.\nReduced ULT cost also increases ULT DMG, but with diminishing value → in Infinite Stairway, cast at 3–4 Flames instead of waiting for 0.\nS ◇ Efficient Principle significantly improves the first rotation.",
    },

    {
      type: "styles",
      styleIds: [
        "headmistress-scorching-sands-knight",
        "ghost-covert-investigator",
        "ng-dream-producer",
      ],
    },
  ],
};

export default manipulatorTechnologyMinister;
