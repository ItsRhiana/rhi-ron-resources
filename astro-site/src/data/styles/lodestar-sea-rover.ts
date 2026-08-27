const lodestarSeaRover = {
  id: 'lodestar-sea-rover',

  character: 'Lodestar',
  style: 'Sea Rover',

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

    reflection: [
      {
        stat: 'ATK',
        value: '+42%',
      },
      {
        stat: 'CRIT Rate',
        value: '+33.6%',
      },
      {
        stat: 'DMG',
        value: '+36.48%',
      },
    ],

    reconTraits: [
      'raging-sea-assault',
      'tactical-balance',
      'all-or-nothing',
      'fleeting-brilliance',
    ],

    skills: {
      basic: {
        name: 'Basic',

        attack: {
          weapon: 'gunblade',
          hitCount: 1,
          speed: 'slow',
          range: 'mid',
        },

        tags: [],

        effects: [
          {
            text:
              'Deals {multiplier} ATK as DMG to an enemy.',
            multiplier: 126,
          },
        ],
      },

      passive: {
        name: 'Passive',

        trigger: '15s cooldown',

        tags: [
          'single-target',
        ],

        effects: [
          {
            text:
              'Fires 11 bullets toward the current target, each dealing {multiplier} ATK DMG.',
            multiplier: 31,
          },
        ],
      },

      ultimate: {
        name: 'Ultimate',

        cost: 3,

        tags: [
          'single-target',
        ],

        effects: [
          {
            text:
              'Deals {multiplier} ATK ×12 to random enemies in a circular area.',
            multiplier: 95,
          },
          {
            text:
              'Each repeated hit on the same target grants +6% CRIT DMG for 10s.',
          },
        ],
      },
    },

    dupes: [
      {
        dupe: 1,

        effects: [
          {
            type: 'skill',
            target: 'ultimate',
            field: 'hitCount',
            amount: 4,
            text: 'ULT hit count +4.',
          },
          {
            text: 'ATK +7%.',
          },
        ],
      },

      {
        dupe: 2,

        effects: [
          {
            text: 'CRIT Rate +10%.',
          },
        ],
      },

      {
        dupe: 3,

        effects: [
          {
            type: 'actionFocus',
            target: 'execution',
            amount: 1,
            text: 'Execution +1.',
          },
          {
            text: 'ATK +21%.',
          },
        ],
      },

      {
        dupe: 4,

        effects: [
          {
            text: 'CRIT Rate +10%.',
          },
        ],
      },

      {
        dupe: 5,

        effects: [
          {
            text: 'ATK +14%.',
          },
          {
            text: 'CRIT Rate +15%.',
          },
        ],
      },
    ],
  },
};

export default lodestarSeaRover;