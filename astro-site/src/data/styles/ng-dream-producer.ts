const ngDreamProducer = {
    id: "ng-dream-producer",

    characterName: "NG",
    styleName: "Dream Producer",

    rarity: 6,
    class: "special-attack",
    desire: "greed",

    kit: {
        tags: [
            "crit-dmg",
            "support",
        ],


        /* =====================================================
           Action Focus
           ===================================================== */

        actionFocus: {
            intel: 1,
            supplies: 2,
            execution: 3,
            strategy: 2,
        },


        /* =====================================================
           Base Stats
           ===================================================== */

        stats: {
            hp: 41010,
            atk: 14269,
            def: 13215,
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
            "into-the-frame",
            "aid-the-strong",
            "inspiring-horn",
            "asset-allocation",
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
                        multiplier: 110,
                    },
                ],
            },


            passive: {
                tags: [
                    "single-target",
                ],

                effects: [
                    {
                        description:
                            "On team’s ULT order change, +1 {stack:storyboard} and deals DMG equal to {multiplier%} ATK to the nearest enemy.",
                        multiplier: 160,
                    },
                ],
            },


            ultimate: {
                flameCost: 3,

                tags: [
                    "crit-dmg",
                ],

                effects: [
                    {
                        description:
                            "Moves a selected ally's ULT to NG's current ULT position, increases their next ULT CRIT DMG by {multiplier%}, +1 {stack:storyboard}.",
                        multiplier: 58,
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
                            "ATK Bonus increases by 7%.",
                    },
                    {
                        type: "skillModifier",
                        target: "ultimate",
                        description:
                            "ULT also increases the target's next ULT DMG by 24%.",
                    },
                ],
            },


            {
                level: 2,

                effects: [
                    {
                        description:
                            "ATK Bonus increases by 14%.",
                    },
                ],
            },


            {
                level: 3,

                effects: [
                    {
                        type: "actionFocusModifier",
                        target: "execution",
                        description:
                            "Execution 3 → 4.",
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
                            "CRIT Rate increases by 10%.",
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
                            "ULT CRIT DMG buff is additionally increased by 25%.",
                    },
                    {
                        description:
                            "ATK Bonus increases by 14%.",
                    },
                ],
            },
        ],
    },
};

export default ngDreamProducer;