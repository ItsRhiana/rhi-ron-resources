const giftPlayerInThePlay = {
    id: "gift-player-in-the-play",

    characterName: "Gift",
    styleName: "Player in the Play",

    rarity: 5,
    class: "special-attack",
    desire: "gluttony",

    kit: {
        tags: [
            "atk-down",
            "crit",
        ],


        /* =====================================================
           Action Focus
           ===================================================== */

        actionFocus: {
            intel: 1,
            supplies: 3,
            execution: 2,
            strategy: 1,
        },


        /* =====================================================
           Base Stats
           ===================================================== */

        stats: {
            hp: 33863,
            atk: 12042,
            def: 10942,
        },


        /* =====================================================
           Deepening
           ===================================================== */

        deepening: [
            {
                stat: "atk",
                value: "42%",
            },
            {
                stat: "crit-rate",
                value: "33.6%",
            },
            {
                stat: "dmg",
                value: "36.48%",
            },
        ],


        /* =====================================================
           Reconstruction
           ===================================================== */

        reconstruction: [
            "aid-the-strong",
            "crimson-command",
            "scorch-to-the-bone",
            "crit-rate-8",
        ],


        /* =====================================================
           Skills
           ===================================================== */

        skills: {
            basicAttack: {
                shots: 1,
                speed: "Very slow",
                range: "Very long",

                tags: [],

                effects: [
                    {
                        description:
                            "Deals DMG equal to {multiplier%} ATK to an enemy.",
                        multiplier: 140,
                    },
                ],
            },


            passive: {
                trigger: "Every 5 Basic Attacks",

                tags: [
                    "atk-down",
                    "aoe",
                ],

                effects: [
                    {
                        description:
                            "Deals DMG equal to {multiplier%} ATK in a circular area around the current target. If it CRITs, reduces targets' ATK by 6% for 8s.",
                        multiplier: 295,
                    },
                ],
            },


            ultimate: {
                flameCost: 3,

                tags: [
                    "crit-up",
                ],

                effects: [
                    {
                        description:
                            "Increases the CRIT Rate of allies within a circular area by {multiplier%} for 30s.",
                        multiplier: 17.5,
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
                        description:
                            "ATK Bonus increases by 2.7%.",
                    },
                    {
                        description:
                            "CRIT Rate increases by 8.2%.",
                    },
                ],
            },


            {
                level: 2,

                effects: [
                    {
                        description:
                            "ATK Bonus increases by 5.5%.",
                    },
                ],
            },


            {
                level: 3,

                effects: [
                    {
                        type: "skillModifier",
                        target: "ultimate",
                        description:
                            "ULT CRIT Rate buff duration is extended to 39s.",
                    },
                    {
                        description:
                            "ATK Bonus increases by 2.7%.",
                    },
                ],
            },


            {
                level: 4,

                effects: [
                    {
                        description:
                            "CRIT Rate increases by 4.1%.",
                    },
                ],
            },


            {
                level: 5,

                effects: [
                    {
                        type: "actionFocusModifier",
                        target: "strategy",
                        description:
                            "Strategy 1 → 2.",
                    },
                    {
                        description:
                            "ATK Bonus increases by 2.7%.",
                    },
                ],
            },
        ],
    },
};

export default giftPlayerInThePlay;