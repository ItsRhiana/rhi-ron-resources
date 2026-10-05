const laksaSpiceMerchant = {
  id: "laksa-spice-merchant",

  characterName: "Laksa",
  styleName: "Spice Merchant",

  rarity: 5,
  class: "healer",
  desire: "lust",

  kit: {
    tags: ["healing", "support"],

    actionFocus: {
      intel: 1,
      supplies: 1,
      execution: 2,
      strategy: 2,
    },

    stats: {
      hp: 43297,
      atk: 9854,
      def: 10837,
    },

    deepening: [
      {
        stat: "atk",
        value: "+84%",
      },
      {
        stat: "healing",
        value: "+38.4%",
      },
    ],

    reconstruction: [
      "tactical-healing",
      "enhanced-healing",
      "asset-allocation",
      "healing",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Very slow",
        range: "Very long",

        tags: [],

        effects: [
          {
            description: "Deals {multiplier%} ATK as DMG to an enemy.",
            multiplier: 155,
          },
        ],
      },

      passive: {
        trigger: "15s cooldown",

        tags: ["healing", "ranged", "aoe"],

        effects: [
          {
            description:
              "Creates a spice bomb that slowly travels toward the farthest enemy for 10s. Each second, it heals allies in a circular area for {heal%} ATK and deals {dmg%} ATK to enemies.",
            multipliers: {
              heal: 8.5,
              dmg: 30,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 4,

        tags: ["healing", "crit-dmg-up"],

        effects: [
          {
            description:
              "Restores HP equal to {multiplier%} ATK to allies in a circular area and grants +16.5% CRIT DMG for 15s.",
            multiplier: 240,
          },
        ],
      },
    },

    awakening: [
      {
        level: 1,

        effects: [
          {
            description: "ATK Bonus increases by 2.7%.",
          },
          {
            description: "Healing Bonus increases by 9%.",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "ATK Bonus increases by 5.5%.",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "skillModifier",
            target: "ultimate",
            description: "ULT CRIT DMG buff increases by 6%.",
          },
          {
            description: "ATK Bonus increases by 2.7%.",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "ATK Bonus increases by 4.5%.",
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
            description: "ATK Bonus increases by 2.7%.",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 1,
      passive: 1,
      ultimate: 7,
    },

    position: {
      primary: "Off-field",
      secondary: "On-field",
    },

    reconstruction: [
      {
        effect: "tactical-healing",
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
      text: "ATK-scaling Healer + CRIT DMG buffer.\nPassive provides moving AoE healing → unreliable because allies may not stay in range.\nULT provides strong, immediate healing + CRIT DMG.\nCompared with 6★ Healers: highest healing ouput, but shorter range + expensive 4-Flame cost.\nA — Tactical Healing adds DMG support.",
    },
  ],
};

export default laksaSpiceMerchant;
