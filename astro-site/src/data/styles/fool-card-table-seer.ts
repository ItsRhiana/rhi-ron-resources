const foolCardTableSeer = {
  id: "fool-card-table-seer",

  characterName: "Fool",
  styleName: "Card Table Seer",

  rarity: 6,
  class: "annihilation",
  desire: "envy",

  kit: {
    tags: ["single-target"],

    actionFocus: {
      intel: 2,
      supplies: 1,
      execution: 1,
      strategy: 4,
    },

    stats: {
      hp: 34092,
      atk: 19062,
      def: 10879,
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
      "decisive-victory",
      "all-or-nothing",
      "ultimate-burst",
      "steadfast-strike",
    ],

    skills: {
      basicAttack: {
        shots: 2,
        speed: "Fast",
        range: "Mid",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 40,
          },
        ],
      },

      passive: {
        tags: ["crit-up"],

        effects: [
          {
            description:
              "Allied ULT casts convert the number of Flames spent into Fool's Card Luck.",
          },
          {
            description:
              "If Card Luck is 18–20: 18s +{critRate18%} CRIT Rate, +{critDmg18%} CRIT DMG.",
            multipliers: {
              critRate18: 32,
              critDmg18: 45,
            },
          },
          {
            description:
              "If Card Luck is 21: 18s +{critRate21%} CRIT Rate, +{critDmg21%} CRIT DMG.",
            multipliers: {
              critRate21: 45,
              critDmg21: 60,
            },
          },
          {
            description: "If Card Luck is 21+: immediately resets to 0.",
          },
          {
            description: "After any effect triggers, Card Luck is reset to 0.",
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["single-target"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} ATK to a target and draws a card; +10 Card Luck if currently <10, else sets it to 21.",
            multiplier: 1300,
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
            description:
              "Passive 21-Card-Luck effect: +6s, CRIT Rate +8%, CRIT DMG +35%.",
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
            description: "CRIT DMG +20%",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "actionFocusModifier",
            target: "strategy",
            description: "✧Strategy 4 → 5.",
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
      passive: 10,
      ultimate: 10,
    },

    position: {
      primary: "On-field",
    },

    reconstruction: [
      {
        effect: "all-or-nothing",
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
          styles: ["fool-card-table-seer"],
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
      text: "ATK-scaling burst DPS reliant on team ULT cycling.\nPassive grants large 18s self-CRIT after the team spends 10 Flames.\n→ consistent DMG even at low investment.\nSaturated CRIT Rate + CRIT DMG → allied buff priority:\nDMG > ATK > CRIT DMG.\nA ◇ Steadfast Strike prefers teaming with 6★ NG → improves ULT cycling efficiency, but has a lower DMG ceiling than other Recons.",
    },

    {
      type: "styles",
      styleIds: ["ng-dream-producer"],
    },
  ],
};

export default foolCardTableSeer;
