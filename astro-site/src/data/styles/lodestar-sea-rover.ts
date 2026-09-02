const lodestarSeaRover = {
  id: 'lodestar-sea-rover',

  characterName: 'Lodestar',
  styleName: 'Sea Rover',

  rarity: 6,
  class: 'annihilation',
  desire: 'wrath',

  kit: {
    tags: [
      'single-target',
    ],

    actionFocus: {
      intel: 1,
      supplies: 2,
      execution: 3,
      strategy: 2,
    },

    stats: {
      hp: 33831,
      atk: 18755,
      def: 11061,
    },

    deepening: [
      {
        stat: 'atk',
        value: '42%',
      },
      {
        stat: 'crit-rate',
        value: '33.6%',
      },
      {
        stat: 'dmg',
        value: '36.48%',
      },
    ],

    reconstruction: [
      'raging-sea-assault',
      'tactical-balance',
      'all-or-nothing',
      'fleeting-brilliance',
    ],

    skills: {
      basicAttack: {
        shots: 1,
        speed: 'Slow',
        range: 'Mid',

        tags: [],

        effects: [
          {
            description:
              'Deals DMG equal to {multiplier%} ATK to an enemy.',
            multiplier: 126,
          },
        ],
      },

      passive: {
        trigger: '15s cooldown',

        tags: [
          'single-target',
        ],

        effects: [
          {
            description:
              'Fires 11 bullets toward the current target, each dealing DMG equal to {multiplier%} ATK.',
            multiplier: 31,
          },
        ],
      },

      ultimate: {
        flameCost: 3,

        tags: [
          'single-target',
        ],

        effects: [
          {
            description:
              'Deals DMG equal to {multiplier%} ATK ×12 to random enemies in a circular area.',
            multiplier: 95,
          },
          {
            description:
              'Each repeated hit on the same target increases CRIT DMG by 6% for 10s.',
          },
        ],
      },
    },

    awakening: [
      {
        level: 1,

        effects: [
          {
            type: 'skillModifier',
            target: 'ultimate',
            description: 'ULT hit count +4.',
          },
          {
            description: 'ATK Bonus increases by 7%.',
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: 'CRIT Rate increases by 10%.',
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: 'actionFocusModifier',
            target: 'execution',
            description: 'Execution 3 → 4.',
          },
          {
            description: 'ATK Bonus increases by 21%.',
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: 'CRIT Rate increases by 10%.',
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            description: 'ATK Bonus increases by 14%.',
          },
          {
            description: 'CRIT Rate increases by 15%.',
          },
        ],
      },
    ],
  },

  build: {
    styleLevel: 100,

    skillLevels: {
      basicAttack: 1,
      passive: 1,
      ultimate: 10,
    },

    position: {
      primary: "Off-field",
      secondary: "On-field",
    },

    description:
      "Lodestar's BA and Passive contribute little to his DMG, making him well suited to an off-field role, where neither can be used.\n\nThe drawback: off-field, he loses access to allied on-field-only buffs—notably CRIT Rate buffs, as CRIT consistency is his main weakness.",

    reconstruction: [
      {
        effect: "tactical-balance",
        recommendation: "",

        note:
          "With strong built-in CRIT DMG but only 38.6% CRIT Rate, trading 20% CRIT DMG for 20% CRIT Rate is favorable, making his ULT much more consistent.",
      },

      {
        effect: "fleeting-brilliance",
        recommendation: "Any effect except",

        note:
          "His Passive contributes little, and off-field he cannot trigger it at all.",
      },
    ],
genericTeam: {
    onField: [
        {
            styles: [
                "red-gloves-abyssal-judgment",
            ],
            role: "vanguard",
        },
        {
            styles: [
                "ghost-vengeful-nursery-rhyme",
            ],
            role: "aoe-dps",
        },
        {
            styles: [
                "nobody-seaside-holiday",
            ],
            role: "aoe-dps",
        },
        {
            styles: [
                "general-thunder-commander",
            ],
            role: "support",
        },
    ],

    offField: [
        {
            styles: [
                "laksa-spice-merchant",
            ],
            role: "healer",
        },
        {
            styles: [
                "lodestar-sea-rover",
            ],
            role: "st-dps",
        },
    ],
},
    specialSynergies: [
      {
        style: "gift-player-in-the-play",

        ability: {
          label: "Ultimate",

          description:
            "Increases the CRIT Rate of allies within a circular area by 17.5% for 30s.",
        },

        note:
          "The long duration reliably offsets Lodestar's low CRIT Rate, making his high CRIT DMG more consistent when played on-field.",
      },

      {
        style: "ng-dream-producer",

        ability: {
          label: "Ultimate",

          description:
            "Moves a selected ally's ULT to NG's current ULT position, increases their next ULT CRIT DMG by 58%, and grants +1 [Storyboard].",
        },

        note:
          "Lodestar's ULT builds up to 72% CRIT DMG for 10s. If NG pulls him forward for a second ULT before the self-buff expires, the new stacks can overlap with the first, reaching 144% CRIT DMG from Lodestar's own ULT effect.\n\nNG also adds another 58% CRIT DMG to the next ULT, although Lodestar is already heavily saturated with CRIT DMG at this point.\n\nThe main weakness is CRIT consistency: NG provides no CRIT Rate, so Lodestar still needs it from his build or another ally to reliably capitalize on the burst window.",
      },

      {
        style: "windward-money-loving-gentleman",

        ability: {
          label: "A ◆ Battle Spirit Relay",

          description:
            "ULT grants the target +10% CRIT Rate for 10s.",
        },
      },

      {
        style: "rainmaker-world-cleansing-rain",

        ability: {
          label: "Ultimate",

          description:
            "Performs 21 sacrifices, each consuming 1% of Rainmaker's current HP to heal allies within range — total 29.4% Rainmaker Max HP healed per ally.\n\nGrants a teamwide CRIT Rate buff based on each ally's remaining HP, reaching up to +18% CRIT Rate below 40% Max HP for 15s.",
        },

        note:
          "The healing initially appears anti-synergistic with the HP-based CRIT Rate buff, but it is not applied immediately and takes roughly 3s to complete.\n\nThis creates a short timing window: Let Lodestar's HP drop critically low, cast Rainmaker's ULT, then cast Lodestar's ULT immediately before the healing pushes him back above 40%. This lets him receive the maximum CRIT Rate bonus while still being healed to safety.",
      },
    ],
specialSynergyTeam: {
    onField: [
        {
            styles: [
                "red-gloves-ace-lawyer",
            ],
            role: "vanguard",
        },
        {
            styles: [
                "lodestar-sea-rover",
            ],
            role: "st-dps",
        },
        {
            styles: [
                "nobody-seaside-holiday",
            ],
            role: "aoe-dps",
        },
        {
            styles: [
                "ng-dream-producer",
            ],
            role: "support",
        },
    ],

    offField: [
        {
            styles: [
                "windward-money-loving-gentleman",
                "rainmaker-world-cleansing-rain",
            ],
            role: "healer",
        },
        {
            styles: [
                "gift-player-in-the-play",
            ],
            role: "support",
        },
    ],
},
  },
};

export default lodestarSeaRover;