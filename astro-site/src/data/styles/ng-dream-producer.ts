const ngDreamProducer = {
  id: "ng-dream-producer",

  characterName: "NG",
  styleName: "Dream Producer",

  rarity: 6,
  class: "special-attack",
  desire: "greed",

  kit: {
    tags: ["crit-dmg", "support"],

    actionFocus: {
      intel: 1,
      supplies: 2,
      execution: 3,
      strategy: 2,
    },

    stats: {
      hp: 41010,
      atk: 14269,
      def: 13215,
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
      "into-the-frame",
      "aid-the-strong",
      "inspiring-horn",
      "asset-allocation",
    ],

    skills: {
      basicAttack: {
        tags: [],

        effects: [
          {
            description: "Deals {multiplier%} ATK as DMG to an enemy.",
            multiplier: 110,
          },
        ],
      },

      passive: {
        tags: ["single-target"],

        effects: [
          {
            description:
              "On team’s ULT order change, NG +1 {stack:storyboard} stack and deals {multiplier%} ATK to the nearest enemy.",
            multiplier: 160,
          },
          {
            description:
              "{stack:storyboard}: At 5 stacks, consumes all 5 stacks to reduce NG’s next ULT Flame cost by 1.",
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["crit-dmg"],

        effects: [
          {
            description:
              "Move a selected ally's ULT to NG’s current ULT position. The ally’s next ULT +{multiplier%} CRIT DMG, NG +1 {stack:storyboard}.",
            multiplier: 58,
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
            description: "The moved ULT +24% DMG.",
          },
          {
            description: "ATK +7%",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 4,
      passive: 4,
      ultimate: 9,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "into-the-frame",
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
          styles: ["ng-dream-producer"],
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
      text: "ULT advancer + ST CRIT DMG buffer.\nPassive builds stacks when allied ULT order changes; at 5 stacks, reduces NG’s next ULT cost by 1 Flame → ULT usually costs 1–2 Flames.\nULT advances one on-field ally’s ULT and grants it CRIT DMG → enables another burst inside short self-buff / vulnerability windows.\nULT buff only applies to direct ULT DMG and does not affect follow-up DMG during ULT-created states.\nFlexible target selection → use AoE DPS for mobs or ST DPS for bosses.\nGeneral rotation: DPS self-buff / enemy break → DPS ULT → NG ULT → DPS ULT again.\nS — Into the Frame speeds up stack building.\nA — Aid the Strong adds ATK support; requires on-field.\nWith all allied ULTs at ≤3 Flames, frequent Passive triggers can maintain near-permanent uptime.\nMay buff the wrong ally → check the highest-ATK ally, especially those with ATK-boosting dupes.\nA — Inspiring Horn adds DMG support.",
    },

    {
      type: "styles",
      styleIds: [
        "fool-card-table-seer",
        "chef-veteran-butcher",
        "lodestar-sea-rover",
      ],
    },
  ],
};

export default ngDreamProducer;
