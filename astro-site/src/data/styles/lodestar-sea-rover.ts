const lodestarSeaRover = {
  id: 'lodestar-sea-rover',

  characterName: 'Lodestar',
  styleName: 'Sea Rover',

  rarity: 6 as const,
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
        value: '+42%',
      },
      {
        stat: 'crit-rate',
        value: '+33.6%',
      },
      {
        stat: 'dmg',
        value: '+36.48%',
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
        weapon: 'gunblade',
        hitCount: 1,
        speed: 'slow',
        range: 'mid',

        tags: [],

        effects: [
          {
            description:
              'Deals {multiplier} ATK as DMG to an enemy.',
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
              'Fires 11 bullets toward the current target, each dealing {multiplier} ATK DMG.',
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
              'Deals {multiplier} ATK ×12 to random enemies in a circular area.',
            multiplier: 95,
          },
          {
            description:
              'Each repeated hit on the same target grants +6% CRIT DMG for 10s.',
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
            description: 'ATK +7%.',
          },
        ],
      },

      {
        level: 2,

        effects: [
          {
            description: 'CRIT Rate +10%.',
          },
        ],
      },

      {
        level: 3,

        effects: [
          {
            type: 'actionFocusModifier',
            target: 'execution',
            amount: 1,
            description: 'Execution +1.',
          },
          {
            description: 'ATK +21%.',
          },
        ],
      },

      {
        level: 4,

        effects: [
          {
            description: 'CRIT Rate +10%.',
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            description: 'ATK +14%.',
          },
          {
            description: 'CRIT Rate +15%.',
          },
        ],
      },
    ],
  },
};

export default lodestarSeaRover;