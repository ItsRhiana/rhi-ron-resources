const redGlovesAbyssalJudgment = {
  id: "red-gloves-abyssal-judgment",

  characterName: "Red Gloves",
  styleName: "Abyssal Judgment",

  rarity: 6,
  class: "vanguard",
  desire: "lust",

  kit: {
    tags: ["dot", "atk-down", "control"],

    actionFocus: {
      intel: 3,
      supplies: 2,
      execution: 2,
      strategy: 2,
    },

    stats: {
      hp: 52258,
      atk: 9525,
      def: 16731,
    },

    deepening: [
      {
        stat: "hp",
        value: "+84%",
      },
      {
        stat: "def",
        value: "+42%",
      },
    ],

    reconstruction: [
      "scarlet-mist",
      "against-all-odds",
      "no-pardon",
      "crimson-command",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Very slow",
        range: "Close",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} Max HP to an enemy.",
            multiplier: 27.5,
          },
        ],
      },

      passive: {
        trigger: "Every 20 hits received",

        tags: ["def-up", "self-heal"],

        effects: [
          {
            description:
              "Restores {m1%} of missing HP, increases DEF by {m2%} for 10s; 10s cooldown.",
            multipliers: {
              m1: 35,
              m2: 20,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["dot", "taunt", "atk-down"],

        effects: [
          {
            description:
              "Charges to a target location and inflicts a 10s DoT in a circular area, dealing total DMG equal to {multiplier%} Max HP.",
            multiplier: 20.6,
          },
          {
            description:
              "On-field: Also inflicts a 5s Taunt, gains a 14s 20% DMG reduction, with an additional 5% per target hit, up to 40%.",
          },
          {
            description: "Off-field: Reduces enemy ATK by 23.5% for 10s.",
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
            description: "Passive additionally restores 7% HP.",
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
            description: "DEF +14%",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "actionFocusModifier",
            target: "strategy",
            description: "✧Strategy 2 → 3.",
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
            description: "DEF +14%",
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
            description: "DMG Reduction +14.4%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 1,
      passive: 7,
      ultimate: 1,
    },

    position: {
      primary: "On-field",
    },

    reconstruction: [
      {
        effect: "no-pardon",
        recommendation: "Anything except",
      },
    ],

    genericTeam: {
      onField: [
        {
          styles: ["red-gloves-abyssal-judgment"],
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
      text: "HP-scaling defensive tank.\nPassive heals + raises DEF every 20 hits received → excels vs mobs, solid vs bosses.\nULT provides movement, applies DoT + Taunt → somewhat improves AoE hit consistency and protects the team.\nULT is not required for survival → Flame-efficient.\nTankiest Vanguard, but requires high investment.\nA ◇ Crimson Command sacrifices team survivability for DMG support.",
    },
  ],
};

export default redGlovesAbyssalJudgment;
