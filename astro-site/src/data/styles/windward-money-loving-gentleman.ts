const windwardMoneyLovingGentleman = {
    id: "windward-money-loving-gentleman",

    characterName: "Windward",
    styleName: "Money-Loving Gentleman",

    rarity: 6,
    class: "healer",
    desire: "greed",

    kit: {
        tags: [
            "healing",
            "atk",
            "def",
        ],


        /* =====================================================
           Action Focus
           ===================================================== */

        actionFocus: {
            intel: 2,
            supplies: 3,
            execution: 2,
            strategy: 1,
        },


        /* =====================================================
           Base Stats
           ===================================================== */

        stats: {
            hp: 51981,
            atk: 11671,
            def: 13176,
        },


        /* =====================================================
           Deepening
           ===================================================== */

        deepening: [
            {
                stat: "atk",
                value: "84%",
            },
            {
                stat: "healing",
                value: "38.4%",
            },
        ],


        /* =====================================================
           Reconstruction
           ===================================================== */

        reconstruction: [
            "like-spring-rain",
            "battle-spirit-relay",
            "all-or-nothing",
            "healing-enhancement",
        ],


        /* =====================================================
           Skills
           ===================================================== */

        skills: {
            basicAttack: {
                shots: 1,
                speed: "Very slow",
                range: "Long",

                tags: [],

                effects: [
                    {
                        description:
                            "Deals DMG equal to {multiplier%} ATK to an enemy.",
                        multiplier: 90,
                    },
                ],
            },


            passive: {
                trigger: "15s cooldown",

                tags: [
                    "hot",
                    "def-up",
                ],

                effects: [
                    {
                        description:
                            "Restores {m1%} HP to the lowest-HP ally, then grants {stack:hot} in a circular area around them, totaling {m2%} of Windward's ATK.",
                        multipliers: {
                            m1: 34.5,
                            m2: 36.6,
                        },
                    },
                    {
                        description:
                            "If the target is below 50% HP, they gain an 8% DEF increase for 12s.",
                    },
                ],
            },


            ultimate: {
                flameCost: 3,

                tags: [
                    "healing",
                    "atk-up",
                ],

                effects: [
                    {
                        description:
                            "Restores HP equal to {multiplier%} ATK to allies in a circular area, and increases the targets' ATK by 16% for 15s.",
                        multiplier: 182,
                    },
                ],
            },
        },


        /* =====================================================
           Awakening
           ===================================================== */

        awakening: [
            {
                level: 1,

                effects: [
                    {
                        type: "skillModifier",
                        target: "ultimate",
                        description:
                            "ULT ATK buff increases by 9.5%.",
                    },
                    {
                        description:
                            "ATK Bonus increases by 7%.",
                    },
                ],
            },


            {
                level: 2,

                effects: [
                    {
                        description:
                            "Healing Bonus increases by 12%.",
                    },
                ],
            },


            {
                level: 3,

                effects: [
                    {
                        type: "actionFocusModifier",
                        target: "supplies",
                        description:
                            "Supplies 3 → 4.",
                    },
                    {
                        description:
                            "ATK Bonus increases by 21%.",
                    },
                ],
            },


            {
                level: 4,

                effects: [
                    {
                        description:
                            "Healing Bonus increases by 12%.",
                    },
                ],
            },


            {
                level: 5,

                effects: [
                    {
                        description:
                            "ATK Bonus increases by 14%.",
                    },
                    {
                        description:
                            "Healing Bonus increases by 17%.",
                    },
                ],
            },
        ],
    },
};

export default windwardMoneyLovingGentleman;