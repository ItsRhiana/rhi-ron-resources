const redGlovesAceAttorney = {
  id: "red-gloves-ace-attorney",

  characterName: "Red Gloves",
  styleName: "Ace Attorney",

  rarity: 5,
  class: "vanguard",
  desire: "sloth",

  kit: {
    tags: ["knockback", "movement", "self-heal"],

    actionFocus: {
      intel: 2,
      supplies: 1,
      execution: 2,
      strategy: 2,
    },

    stats: {
      hp: 43388,
      atk: 7770,
      def: 14169,
    },

    deepening: [
      {
        stat: "hp",
        value: "+42%",
      },
      {
        stat: "def",
        value: "+84%",
      },
    ],

    reconstruction: [
      "endless-vitality",
      "biding-time",
      "guilty-verdict",
      "evasion-rate",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Slow",
        range: "Close",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} DEF to an enemy.",
            multiplier: 54,
          },
        ],
      },

      passive: {
        tags: ["def-up", "self-heal"],

        effects: [
          {
            description:
              "Per 30% Max HP lost, +{multiplier%} DEF for 10s, up to 4 stacks. At battle start, gains {stack:bloodyGale}.",
            multiplier: 15,
          },
          {
            description:
              "{stack:bloodyGale}: When <30% HP, restores to full HP. 1x/battle.",
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["knockback", "movement", "aoe"],

        effects: [
          {
            description:
              "Charges to a target location, deals DMG equal to {multiplier%} DEF in a circular area, and knocks targets back.",
            multiplier: 288,
          },
        ],
      },
    },

    awakening: [
      {
        level: 1,

        effects: [
          {
            description: "DEF +2.7%",
          },
          {
            description: "DMG Reduction +7.4%",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "DEF +5.5%",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "skillModifier",
            target: "passive",
            description: "Passive DEF increase +5%.",
          },
          {
            description: "HP +2.7%",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "DEF +5.5%",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            type: "actionFocusModifier",
            target: "execution",
            description: "✧Execution 2 → 3.",
          },
          {
            description: "DEF +2.7%",
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
        effect: "evasion-rate",
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
      text: "Simple DEF-scaling defensive tank.\nPassive stacks DEF as HP drops + one-time full heal below 30% HP\n→ synergizes well with Healers.\nULT provides movement and Knockback, not required for survival\n→ Flame-efficient.\nCompared with 6★ Vanguards: less utility, but reaches sufficient survivability at much lower investment → invest the saved resources into DPS.",
    },
  ],
};

export default redGlovesAceAttorney;
