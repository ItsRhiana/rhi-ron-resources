const nobodyHiddenBrillianceInACup = {
  id: "nobody-hidden-brilliance-in-a-cup",

  characterName: "Nobody",
  styleName: "Hidden Brilliance in a Cup",

  rarity: 6,
  class: "vanguard",

  // Crystal: Purple
  // Add the correct desire here once confirmed.
  desire: "envy",

  kit: {
    tags: ["summon", "support", "self-heal"],

    actionFocus: {
      intel: 2,
      supplies: 3,
      execution: 2,
      strategy: 1,
    },

    stats: {
      hp: 53088,
      atk: 9236,
      def: 16865,
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
      "unfinished-cup",
      "rich-in-life",
      "no-time-to-lose",
      "unstoppable-force",
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
            multiplier: 23,
          },
        ],
      },

      passive: {
        trigger: "20s cooldown",

        tags: ["support"],

        effects: [
          {
            description:
              "Allies gain a 10s DMG increase equal to {m1%} × number of on-field allied units (Styles + summons), up to {m2%}.",
            multipliers: {
              m1: 4.2,
              m2: 33.6,
            },
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["summon", "grouping"],

        effects: [
          {
            description:
              "Deals DMG equal to {multiplier%} Max HP to enemies in a circular area, pulling them to the center for 5s.",
            multiplier: 30,
          },
          {
            description:
              "Each target hit inflicts a 12s 1.5% DMG Taken increase, up to 8 stacks.",
          },
          {
            description:
              "Summons 1 clone at the center inheriting {multiplier%} Max HP for 10s.",
            multiplier: 40,
          },
          {
            description:
              "On clone disappearance, restores {multiplier%} Max HP + 60% of the clone's remaining HP.",
            multiplier: 10,
          },
          {
            description:
              "Off-field: Heals the lowest-HP on-field ally instead.",
          },
          {
            description: "Max 3 clones on-field at a time.",
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
              "Clone disappearance additionally heals the target for 8% of Nobody's Max HP.",
          },
          {
            type: "skillModifier",
            target: "passive",
            description:
              "Passive DMG effect increases by 1.5% per on-field allied unit, up to 45.6%.",
          },
          {
            description: "HP +7%.",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "HP +14%.",
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: "actionFocusModifier",
            target: "supplies",
            description: "✧Supplies 3 → 4.",
          },
          {
            description: "HP +21%.",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "HP +14%.",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            type: "skillModifier",
            target: "ultimate",
            description: "ULT DMG Taken effect increases to 5.5%.",
          },
          {
            description: "HP +14%.",
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 80,

    skillLevels: {
      basicAttack: 1,
      passive: 9,
      ultimate: 7,
    },

    position: {
      primary: "On-field",
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "no-time-to-lose",
        recommendation: "",
      },
      {
        effect: "",
        recommendation: "Anything",
      },
    ],

    genericTeam: {
      onField: [
        {
          styles: ["nobody-hidden-brilliance-in-a-cup"],
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
      text: "HP-scaling supportive tank specializing in AoE content.\nPassive snapshots the on-field ally count every 20s to grant corresponding DMG Bonus, up to 8 stacks. → time summoning ULTs before the Passive snapshot.\nULT Grouping greatly improves AoE hit consistency + protects backline units.\nULT DMG Taken scales with number of enemies hit and provides meaningful AoE DMG support.\nUniversal DMG buffs → broadly supports ATK/HP, CRIT/DoT DPS.\nDefensive performance comparable to other Vanguards.\nA ◇ No Time to Lose enables permanent Passive uptime.\nA ◇ Unstoppable Force provides dispel utility.\nWeak first dupe.",
    },

    {
      type: "styles",
      styleIds: ["nobody-seaside-holiday", "nobody-masked-gentleman"],
    },
  ],
};

export default nobodyHiddenBrillianceInACup;
