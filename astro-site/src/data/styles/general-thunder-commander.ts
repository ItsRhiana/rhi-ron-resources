const generalThunderCommander = {
  id: "general-thunder-commander",

  characterName: "General",
  styleName: "Thunder Commander",

  rarity: 6,
  class: "special-attack",
  desire: "sloth",

  kit: {
    tags: ["aoe", "def-down"],

    actionFocus: {
      intel: 3,
      supplies: 1,
      execution: 2,
      strategy: 2,
    },

    stats: {
      hp: 40945,
      atk: 14236,
      def: 13154,
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
      "combat-ready",
      "body-as-bastion",
      "chase-the-victory",
      "crimson-command",
    ],

    skills: {
      basicAttack: {
        tags: [],

        effects: [
          {
            description: "Deals {multiplier%} ATK as DMG to an enemy.",
            multiplier: 80,
          },
        ],
      },

      passive: {
        tags: ["atk-up"],

        effects: [
          {
            description:
              "While the ULT is available, each Basic Attack deals {multiplier%} ATK to the current target, then ricochets for 2 additional hits, +2 {stack:electrode} stacks.",
            multiplier: 118,
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["def-down", "aoe"],

        effects: [
          {
            description:
              "Deals {multiplier%} ATK ×7 in a circular area. At >=5 {stack:electrode} stacks, consumes all stacks; each hit reduces target DEF by 3.7%, up to 29.6%, for 20s.",
            multiplier: 93,
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
            description:
              "For every 5 Electrode stacks consumed, highest ATK ally gains +14% ATK for 10s.",
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
            target: "intel",
            description: "✧Intel 3 → 4.",
          },
          {
            description: "ATK +21%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 100,

    skillLevels: {
      basicAttack: 4,
      passive: 4,
      ultimate: 7,
    },

    position: {
      primary: "On-field",
    },

    reconstruction: [
      {
        effect: "chase-the-victory",
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
      text: "ATK-scaling AoE DEF shredder + AoE sub-DPS.\nStacks build through BA while ULT is available → requires on-field.\nAt 5+ stacks, ULT applies AoE DEF Down.\n→ Wants quick ULT cycling for more stack-building time and less DEF Down downtime.\nUniversal support:\n· for both ST and AoE content.\n· for ATK/HP + CRIT DPS (but not DoT).\n· for both on- and off-field DPS.\n→ Mandatory investment.\nS — Combat Ready accelerates first rotation.\nA — Body as Bastion increases max DEF Down.\nA — Crimson Command sacrifices team survivability for DMG support.",
    },
  ],
};

export default generalThunderCommander;
