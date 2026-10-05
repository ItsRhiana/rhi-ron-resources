const wolfPatrolGuard = {
  id: "wolf-patrol-guard",

  characterName: "Wolf",
  styleName: "Patrol Guard",

  rarity: 6,
  class: "annihilation",
  desire: "greed",

  kit: {
    tags: ["aoe", "self-heal"],

    actionFocus: {
      intel: 3,
      supplies: 1,
      execution: 1,
      strategy: 2,
    },

    stats: {
      hp: 49508,
      atk: 12011,
      def: 8458,
    },

    deepening: [
      {
        stat: "hp",
        value: "+42%",
      },
      {
        stat: "crit-rate",
        value: "+33.6%",
      },
      {
        stat: "crit-dmg",
        value: "+67.2%",
      },
    ],

    reconstruction: [
      "bloodbath",
      "against-adversity",
      "offense-to-defense",
      "asset-allocation",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Fast",
        range: "Mid",

        tags: [],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} Max HP to an enemy. Each BA -5% current HP, but will not kill self.",
            multiplier: 60,
          },
        ],
      },

      passive: {
        trigger: "Every 4 BAs",

        tags: ["aoe", "self-heal"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} Max HP in a fan-shaped area and restores 3% HP per target hit.",
            multiplier: 68,
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["aoe", "hp-loss"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} Max HP in a fan-shaped area, with CRIT DMG +2% per 3% missing Max HP.",
            multiplier: 305,
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
            description: "ULT HP-loss requirement is reduced to 1.2%.",
          },
          {
            description: "HP +7%",
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
            target: "intel",
            description: "✧Intel 3 → 4.",
          },
          {
            description: "HP +21%",
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
            description: "HP +14%",
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
      basicAttack: 7,
      passive: 9,
      ultimate: 10,
    },

    position: {
      primary: "On-field",
    },

    reconstruction: [
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
          styles: ["wolf-patrol-guard"],
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
      text: "HP-scaling berserker.\nBasic drains own HP → requires a Healer.\nPassive heals per enemy hit, but triggers infrequently (every ~14s) → mostly maintains HP rather than providing strong recovery.\nULT gains CRIT DMG as HP drops → aim to stay <50% HP before casting, then heal afterward.\nFan-shaped Passive + ULT → position farther from enemies and/or use enemy grouping to improve AoE hit consistency; 6★ Nobody enables both.\nHigh Max HP but low DEF → still vulnerable under heavy pressure.\nHuge self-CRIT DMG but low CRIT Rate → prioritize CRIT Rate; missed CRITs gain no value from the CRIT DMG buff.\n3+ A ◇ Crimson Command users strain team survivability → aim for ~2.\nCrimson Command doesn't stack → stagger ULTs to extend uptime.",
    },

    {
      type: "styles",
      styleIds: [
        "red-gloves-abyssal-judgment",
        "general-thunder-commander",
        "gift-player-in-the-play",
        "rainmaker-world-cleansing-rain",
        "nobody-hidden-brilliance-in-a-cup",
      ],
    },
  ],
};

export default wolfPatrolGuard;
