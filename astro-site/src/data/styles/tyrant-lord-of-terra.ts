const tyrantLordOfTerra = {
  id: "tyrant-lord-of-terra",

  characterName: "Tyrant",
  styleName: "Lord of Terra",

  rarity: 6,
  class: "vanguard",
  desire: "pride",

  kit: {
    tags: ["control", "shield"],

    actionFocus: {
      intel: 3,
      supplies: 2,
      execution: 1,
      strategy: 2,
    },

    stats: {
      hp: 51323,
      atk: 9625,
      def: 16935,
    },

    deepening: [
      {
        stat: "atk",
        value: "+42%",
      },
      {
        stat: "def",
        value: "+84%",
      },
    ],

    reconstruction: [
      "dominator",
      "unyielding",
      "endless-vitality",
      "biding-time",
    ],

    skills: {
      basicAttack: {
        shots: 3,
        speed: "Fast",
        range: "Close",

        tags: [],

        effects: [
          {
            description:
              "Deals DMG equal to {def%} DEF + {atk%} ATK to an enemy.",
            multipliers: {
              def: 24,
              atk: 24,
            },
          },
        ],
      },

      passive: {
        trigger: "1s cooldown",

        tags: ["aoe", "cover"],

        effects: [
          {
            description:
              "On shield loss, deals DMG equal to {def%} DEF + {shield%} of the lost shield amount in a circular area around self and destroys targets’ cover.",
            multipliers: {
              def: 240,
              shield: 200,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["shield", "shield-piercing", "aoe", "control"],

        effects: [
          {
            description:
              "On-field: Deals shield-piercing DMG equal to {def%} DEF + {atk%} ATK around self, inflicts a 2s Stun, and grants self a 10s shield equal to {shieldDef%} DEF + {shieldAtk%} ATK.",
            multipliers: {
              def: 140,
              atk: 140,
              shieldDef: 115,
              shieldAtk: 115,
            },
          },
          {
            description:
              "Off-field: Grants one ally the same 10s shield, then deals the same shield-piercing DMG and Stun around that ally.",
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
            description: "ULT shield +37.5%.",
          },
          {
            description: "DEF +7%",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "HP +14%",
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
            description: "DEF +21%",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "HP +14%",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            description: "DEF +14%",
          },
          {
            description: "Shield Received +17%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 1,
      passive: 4,
      ultimate: 7,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "dominator",
        recommendation: "",
      },
      {
        recommendation: "Anything",
      },
    ],

    genericTeam: {
      onField: [
        {
          styles: ["tyrant-lord-of-terra"],
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
      text: "DEF + ATK-scaling offensive shield tank.\nPassive deals AoE DMG on shield loss → AoE sub-DPS.\nOther shields can overwrite his and affect Passive DMG.\nDestroys enemies’ cover → can substitute for dispel.\nULT shields → can be off-field.\nStun interrupts most enemy skills.\nRelies on a 4-Flame ULT for survival → Flame-hungry and less defensively reliable than other Vanguards.\nULT shield is a dispellable buff → ineffective sustain vs frequent enemy dispels.\nS ◇ Dominator reduces Flame pressure.",
    },

    {
      type: "styles",
      styleIds: ["windward-money-loving-gentleman"],
    },
  ],
};

export default tyrantLordOfTerra;
