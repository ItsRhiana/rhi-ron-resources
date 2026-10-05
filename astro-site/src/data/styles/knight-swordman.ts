const knightSwordman = {
  id: "knight-swordman",

  characterName: "Knight",
  styleName: "Swordman",

  rarity: 6,
  class: "annihilation",
  desire: "gluttony",

  kit: {
    tags: ["aoe"],

    actionFocus: {
      intel: 1,
      supplies: 2,
      execution: 3,
      strategy: 2,
    },

    stats: {
      hp: 34140,
      atk: 18968,
      def: 10882,
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
        stat: "crit-dmg",
        value: "+67.2%",
      },
    ],

    reconstruction: ["cleansing", "crit", "ultimate-burst", "all-or-nothing"],

    skills: {
      basicAttack: {
        shots: 1,
        speed: "Slow",
        range: "Long",

        tags: [],

        effects: [
          {
            description: "Deals DMG equal to {multiplier%} ATK to an enemy.",
            multiplier: 82,
          },
        ],
      },

      passive: {
        tags: ["crit-up", "aoe"],

        effects: [
          {
            description: "Gains CRIT Rate equal to 0.2× CRIT Rate.",
          },
          {
            description:
              "On-field: Casting ULT changes it to Severing Thought. Casting Severing Thought reverts it back.",
          },
          {
            description:
              "Severing Thought: Deals DMG equal to {inner%} ATK in the inner circle and {outer%} ATK in the outer ring.",
            multipliers: {
              inner: 1150,
              outer: 100,
            },
          },
        ],
      },

      ultimate: {
        flameCost: "3+2",

        tags: ["summon"],

        effects: [
          {
            description:
              "Summons a Greatsword at the center of a circular area for 70s.",
          },
          {
            description: "Max 1, treated as an enemy, cannot move or attack.",
          },
          {
            description:
              "Inherits HP equal to {multiplier%} ATK, gains HP Bonus equal to 0.7× CRIT Rate.",
            multiplier: 950,
          },
          {
            description:
              "Other stats are inherited from the highest-Max-HP on-field enemy.",
          },
          {
            description:
              "Transfers 30% of DMG received to enemies in the area.",
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
              "The Greatsword +10% HP, Severing Thought +22% ULT DMG.",
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
            description: "✧Intel 1 → 2.",
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
            description: "CRIT Rate +10%",
          },
        ],
      },

      {
        level: 5,

        effects: [
          {
            type: "skillModifier",
            target: "ultimate",
            description: "Severing Thought cost -1, +20% ULT DMG.",
          },
          {
            description: "ATK +14%",
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
      secondary: "Off-field",
    },

    reconstruction: [
      {
        effect: "cleansing",
        recommendation: "",
      },
      {
        effect: "crit",
        recommendation: "",
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
          styles: ["knight-swordman"],
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
      text: "ATK-scaling ST-oriented AoE DPS with a summon mechanic.\nTrades specialization for versatility across both ST and AoE content; should not be directly compared to dedicated ST or AoE DPS.\nHigh theoretical DMG, but reaching it requires substantial Flame, careful positioning and execution.\n1st-stage ULT — Giant Sword\nKnight summons a giant sword but deals no direct DMG → 6★ NG’s ULT buff does not affect this cast.\nThe giant sword:\n· Spreads DMG: transfers part of DMG received to nearby enemies, including DoT. Its limited HP caps the transfer, making it unreliable for converting high ST DMG into AoE DMG.\n· Does not reduce enemy Break bars.\n· Snapshots buffs and debuffs when summoned:\n· Its HP scales with Knight’s ATK and CRIT Rate → buff Knight before summoning it.\n· It also copies active debuffs from the enemy with the highest Max HP → apply important debuffs before summoning.\n· Copied debuffs persist until the Sword disappears; reapplying the same debuff stacks it, but also causes it to expire normally.\n· Counts as an enemy rather than an ally:\n· Enemies can shield it, and it does not count as an allied unit for 6★ Nobody’s Passive snapshot.\n· It can block allied BAs, projectiles and absorb ULT hits → place the sword behind the boss.\n· 5★ Doc Grim can extract its soul. DMG then bounces recursively between the Sword and souls, creating repeated AoE propagation until the transferred DMG falls to 0.\n2nd-stage ULT — Knight’s Burst\nIf Knight is on-field, casting the 1st-stage ULT replaces it with the 2nd-stage ULT → 6★ NG’s ULT advance is ineffective here.\nIt has two DMG zones:\n· Inner circle: Deals the vast majority of the DMG, ~12× the outer ring, but the area is extremely small.\n· 6★ Nobody’s grouping is required in AoE content to consistently hit priority targets with Knight’s full DMG.\n· Tip: Summon the sword first to establish a large kill zone, clear mobs with allied AoE ULTs, then finish any survivors with Knight's 2nd-stage ULT .\n· Outer ring: Deals very little DMG, not Knight's main AoE → Knight is less of a traditional wide-area AoE DPS and more of a ST / small-area AOE DPS\nS ◇ Cleansing provides a high theoretical ceiling but requires precise execution to fully capitalize on the additional cast.\nA ◇ All or Nothing raises DMG at the cost of durability.\nA ◇ Ultimate Burst provides higher ceiling at the cost of CRIT consistency.",
    },

    {
      type: "styles",
      styleIds: ["nobody-hidden-brilliance-in-a-cup"],
    },
  ],
};

export default knightSwordman;
