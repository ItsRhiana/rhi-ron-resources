const ghostVengefulNurseryRhyme = {
  id: "ghost-vengeful-nursery-rhyme",

  characterName: "Ghost",
  styleName: "Vengeful Nursery Rhyme",

  rarity: 6,
  class: "annihilation",
  desire: "envy",

  kit: {
    tags: ["aoe", "dot"],

    actionFocus: {
      intel: 3,
      supplies: 2,
      execution: 1,
      strategy: 3,
    },

    stats: {
      hp: 34114,
      atk: 18534,
      def: 11216,
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
      "moonlit-serenity",
      "weakness-insight",
      "attack-off-guard",
      "asset-allocation",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Very slow",
        range: "Very Long",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 172,
          },
        ],
      },

      passive: {
        trigger: "Every 4 BAs",

        tags: ["dot", "aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {dmg%} ATK in a circular area and inflicts a 10s DoT dealing {dot%} ATK total.",
            multipliers: {
              dmg: 200,
              dot: 24.8,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["dot", "aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {dmg%} ATK in a circular area and creates a Ghostflame zone for 6s, dealing {zone%} ATK/s. Each DoT stack on the target independently +{perStack%} DMG, up to 5 stacks.",
            multipliers: {
              dmg: 405,
              zone: 55,
              perStack: 8,
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
            description: "ULT zone +5s, DMG effect +5%.",
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
            description: "✧Supplies 2 → 3.",
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
            description: "CRIT DMG +20%",
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
            description: "DMG +17%",
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
      ultimate: 10,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "moonlit-serenity",
        recommendation: "",
      },
      {
        effect: "asset-allocation",
        recommendation: "Anything except",
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
          styles: ["ghost-vengeful-nursery-rhyme"],
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
      text: "ATK-scaling DoT-based DPS.\nPassive applies AoE DoT → builds DoT stacks for ULT.\nULT creates an AoE DMG zone → prefers enemy grouping to improve AoE hit consistency.\nZone DMG scales with enemy DoT stacks in real time → DoT mainly serves as setup for direct DMG rather than the main DMG source.\nS ◇ Moonlit Serenity adds another DoT source.\nOther Recons further reward attacking debuffed enemies.",
    },

    {
      type: "styles",
      styleIds: [
        "red-gloves-abyssal-judgment",
        "nobody-hidden-brilliance-in-a-cup",
        "candela-morning",
        "manipulator-study-tour-day-off",
      ],
    },
  ],
};

export default ghostVengefulNurseryRhyme;
