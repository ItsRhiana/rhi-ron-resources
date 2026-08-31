const rainmakerWorldCleansingRain = {
    id: "rainmaker-world-cleansing-rain",

    characterName: "Rainmaker",
    styleName: "World-Cleansing Rain",

    rarity: 6,
    class: "healer",
    desire: "gluttony",

    kit: {
        tags: [
            "healing",
            "crit",
            "shield",
        ],


        /* =====================================================
           Action Focus
           ===================================================== */

        actionFocus: {
            intel: 3,
            supplies: 2,
            execution: 2,
            strategy: 1,
        },


        /* =====================================================
           Base Stats
           ===================================================== */

        stats: {
            hp: 52447,
            atk: 12180,
            def: 11113,
        },


        /* =====================================================
           Deepening
           ===================================================== */

        deepening: [
            {
                stat: "hp",
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
            "rain-once-fell",
            "guard-all-realms",
            "crimson-command",
            "against-all-odds",
        ],


        /* =====================================================
           Skills
           ===================================================== */

        skills: {
            basicAttack: {
                shots: 3,
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
                trigger: "60s cooldown",

                tags: [
                    "healing",
                    "shield",
                ],

                effects: [
                    {
                        description:
                            "Every 5.4% of Rainmaker's Max HP lost by the team, +1 {stack:stigmata}.",
                    },
                    {
                        intro:
                            "On lethal DMG to an ally:",

                        items: [
                            {
                                description:
                                    "Consumes all {stack:stigmata}.",
                            },
                            {
                                description:
                                    "Heals them {m1%} of Rainmaker's Max HP + {m2%} per {stack:stigmata}.",
                                multipliers: {
                                    m1: 12,
                                    m2: 2,
                                },
                            },
                            {
                                description:
                                    "Lowest-HP ally gains a shield equal to {m3%} of Rainmaker's Max HP for 10s.",
                                multipliers: {
                                    m3: 22,
                                },
                            },
                        ],

                        footer:
                            "Max 3 triggers/battle",
                    },
                ],
            },


            ultimate: {
                flameCost: 3,

                tags: [
                    "healing",
                ],

                effects: [
                    {
                        description:
                            "Performs 21 sacrifices, each consuming 1% of Rainmaker's current HP to heal allies within range — total {multiplier%} Rainmaker Max HP healed per ally.",
                        multiplier: 29.4,
                    },
                    {
                        description:
                            "Grants teamwide CRIT Rate buff. The lower their HP, the greater the buff, up to 18% CRIT Rate increase when below 40% Max HP, lasting 15s.",
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
                            "ULT increases team DMG Bonus by 10% for 15s.",
                    },
                    {
                        description:
                            "HP Bonus increases by 7%.",
                    },
                ],
            },


            {
                level: 2,

                effects: [
                    {
                        description:
                            "HP Bonus increases by 14%.",
                    },
                ],
            },


            {
                level: 3,

                effects: [
                    {
                        type: "actionFocusModifier",
                        target: "intel",
                        description:
                            "Intel 3 → 4.",
                    },
                    {
                        description:
                            "HP Bonus increases by 21%.",
                    },
                ],
            },


            {
                level: 4,

                effects: [
                    {
                        description:
                            "Flame Recovery Speed increases by 25%.",
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
                            "ULT increases team DMG Bonus by 15% for 15s.",
                    },
                    {
                        description:
                            "HP Bonus increases by 14%.",
                    },
                ],
            },
        ],
    },
};

export default rainmakerWorldCleansingRain;