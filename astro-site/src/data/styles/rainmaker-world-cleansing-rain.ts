const rainmakerWorldCleansingRain = {
  id: "rainmaker-world-cleansing-rain",

  characterName: "Rainmaker",
  styleName: "World-Cleansing Rain",

  rarity: 6,
  class: "healer",
  desire: "gluttony",

  kit: {
    tags: ["healing", "crit", "shield"],

    actionFocus: {
      intel: 3,
      supplies: 2,
      execution: 2,
      strategy: 1,
    },

    stats: {
      hp: 52447,
      atk: 12180,
      def: 11113,
    },

    deepening: [
      {
        stat: "hp",
        value: "+84%",
      },
      {
        stat: "healing",
        value: "+38.4%",
      },
    ],

    reconstruction: [
      "rain-once-fell",
      "guard-all-realms",
      "crimson-command",
      "against-all-odds",
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Slow",
        range: "Long",

        tags: [],

        effects: [
          {
            description: "Deals {multiplier%} ATK as DMG to an enemy.",
            multiplier: 90,
          },
        ],
      },

      passive: {
        trigger: "60s cooldown",

        tags: ["healing", "shield"],

        effects: [
          {
            description:
              "Every 5.4% of Rainmaker's Max HP lost by the team: +1 {stack:stigmata} (max 100).",
          },
          {
            intro: "On lethal DMG to an ally:",

            items: [
              {
                description: "Consumes all {stack:stigmata}.",
              },
              {
                description:
                  "Heals them {heal%} Rainmaker Max HP + {perStack%}/{stack:stigmata}.",
                multipliers: {
                  heal: 12,
                  perStack: 2,
                },
              },
              {
                description:
                  "Shields the lowest-HP ally for {shield%} Rainmaker Max HP (10s).",
                multiplier: 22,
              },
            ],

            footer: "Max 3 triggers/battle",
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: ["healing"],

        effects: [
          {
            description:
              "Performs 21 sacrifices (~3s), each consuming 1% of Rainmaker's current HP to heal allies in range — total {multiplier%} Rainmaker Max HP healed per ally.",
            multiplier: 29.4,
          },
          {
            description:
              "Grants teamwide 12% CRIT Rate, plus 0.1% CRIT Rate per 1% HP lost in real time (up to 6% additional), lasting 15s.",
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
              "On ULT cast, increases all allies' DMG Bonus by 10% for 15s.",
          },
          {
            description: "HP Bonus increases by 7.0%.",
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: "Healing Bonus increases by 14.0%.",
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
            description: "HP Bonus increases by 21.0%.",
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: "Flame Recovery Speed increases by 25.0%.",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            type: "skillModifier",
            target: "ultimate",
            description:
              "On ULT cast, increases all allies' DMG Bonus by 15% for 15s.",
          },
          {
            description: "HP Bonus increases by 14.0%.",
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
        effect: "against-all-odds",
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
          styles: ["rainmaker-world-cleansing-rain"],
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
      text: "HP-scaling Healer + CRIT Rate buffer → provides less off-field ATK to team stats than ATK-scaling Healers.\nPassive provides an emergency heal before lethal DMG:\n· Healing scales with accumulated team HP loss → synergizes with self-healing tanks.\n· 6★ Nobody's clone can consume the emergency heal.\n· If remaining HP + emergency heal < incoming DMG, the target still dies.\n· Long cooldown → usually triggers only 1–2×/battle.\nULT provides moderate, gradual healing + CRIT Rate based on target’s current HP → aim to cast the target's ULT while HP is low.\nAlso burns own HP if on-field → prefers off-field for now.\nBest Healer for 6★ Wolf, though not essential.\nCompared with other Healers: widest healing range, adequate healing output.\nA — Crimson Command adds DMG support + lowers ally HP → increases Rainmaker’s CRIT Rate buff.\nA — Guard All Realms adds shield support → useful for meeting shield requirements in some infinite-HP challenges.\nA — Against All Odds requires on-field use.\nWeak first dupe.",
    },

    {
      type: "styles",
      styleIds: [
        "red-gloves-abyssal-judgment",
        "red-gloves-ace-attorney",
        "wolf-patrol-guard",
        "lodestar-sea-rover",
      ],
    },
  ],
};

export default rainmakerWorldCleansingRain;
