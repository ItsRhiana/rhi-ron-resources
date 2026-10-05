const ghostCovertInvestigator = {
  id: "ghost-covert-investigator",

  characterName: "Ghost",
  styleName: "Covert Investigator",

  rarity: 5,
  class: "special-attack",
  desire: "pride",

  kit: {
    tags: ["dispel", "flame"],

    actionFocus: {
      intel: 2,
      supplies: 2,
      execution: 1,
      strategy: 1,
    },

    stats: {
      hp: 33760,
      atk: 11974,
      def: 10973,
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
      "aid-the-strong",
      "unstoppable-force",
      "noose",
      "crit-dmg",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Very slow",
        range: "Very long",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 64,
          },
        ],
      },

      passive: {
        tags: [],

        effects: [
          {
            description:
              "Battle Start: +1 Flame, then restores 1 Flame to the team every {multiplier}s.",
            multiplier: 20,
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["dispel", "aoe"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} ATK in a medium circular area and dispels 1 buff. On successful dispel, +1 Flame.",
            multiplier: 360,
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
            description: "CRIT Rate +8.2%",
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
            description: "ULT dispels +1 buff.",
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
            target: "intel",
            description: "✧Intel 2 → 3.",
          },
          {
            description: "ATK +2.7%",
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
        effect: "unstoppable-force",
        recommendation: "",
      },
      {
        effect: "crit-dmg",
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
          styles: ["nobody-seaside-holiday"],
          role: "aoe-dps",
        },
        {
          styles: ["ghost-covert-investigator"],
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
      text: "AoE dispeller + Flame battery.\nPassive provides minor Flame Recovery Speed (~7.5% team Flame Recovery Speed increase).\nULT provides AoE dispel → main reason to use him.\nSuccessful dispel restores 1 Flame.\nA ◇ Unstoppable Force adds another dispel.",
    },
  ],
};

export default ghostCovertInvestigator;
