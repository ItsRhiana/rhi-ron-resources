const infiniteStairway = {
  columns: [
    {
      id: 'vanguard',
      name: 'Vanguard',
      icon: 'vanguard',
    },
    {
      id: 'st-dps',
      name: 'Boss Killer',
      icon: 'annihilation',
    },
    {
      id: 'aoe-dps',
      name: 'Mob Clearer',
      icon: 'annihilation',
    },
    {
      id: 'support',
      name: 'Support',
      icon: 'special-attack',
    },
    {
      id: 'healer',
      name: 'Healer',
      icon: 'healer',
    },
  ],

  tiers: [
    {
      rank: 'T0',

      cells: {
        vanguard: [
          'nobody-hidden-brilliance-in-a-cup',
        ],

        'st-dps': [
          'fool-card-table-seer',
        ],

        'aoe-dps': [
          'wolf-patrol-guard',
        ],

        support: [
          'general-thunder-commander',
        ],

        healer: [
          'windward-money-loving-gentleman',
        ],
      },
    },

    {
      rank: 'T1',

      cells: {
        vanguard: [
          'red-gloves-abyssal-judgment',
        ],

        'st-dps': [
          'chef-veteran-butcher',
          'lodestar-sea-rover',
        ],

        'aoe-dps': [
          'ghost-vengeful-nursery-rhyme',
        ],

        support: [
          'ng-dream-producer',
        ],

        healer: [
          'rainmaker-world-cleansing-rain',
        ],
      },
    },

    {
      rank: 'T2',

      cells: {
        vanguard: [
          'red-gloves-ace-attorney',
        ],

        'st-dps': [
          'knight-swordman',
        ],

        'aoe-dps': [
          'nobody-seaside-holiday',
          'manipulator-technology-minister',
        ],

        support: [
          'headmistress-scorching-sands-knight',
          'gift-player-in-the-play',
        ],

        healer: [
          'laksa-spice-merchant',
        ],
      },
    },

    {
      rank: 'T3',

      cells: {
        vanguard: [
          'tyrant-lord-of-terra',
        ],

        'st-dps': [],

        'aoe-dps': [
          'knight-swordman',
        ],

        support: [
          'ghost-covert-investigator',
          'the-ref-silent-verdict',
        ],

        healer: [],
      },
    },
  ],
};

export default infiniteStairway;