export const tags = {
    "single-target": {
        name: "Single-Target",
        type: "enemy",
    },

    //delete these later
        "knockback": {
        name: "Knockback",
        type: "enemy",
    },
        "reposition": {
        name: "Reposition",
        type: "enemy",
    },
        "self-heal": {
        name: "Self-Heal",
        type: "ally",
    },
        "shield": {
        name: "Shield",
        type: "ally",
    },
        "shield-piercing": {
        name: "Shield-Piercing",
        type: "enemy",
    },
        "aoe": {
        name: "AoE",
        type: "enemy",
    },
        "crowd-control": {
        name: "Crowd Control",
        type: "enemy",
    },
} as const;

export const tagTypes = {
    enemy: {
        color: "var(--color-tag-enemy)",
    },

    ally: {
        color: "var(--color-tag-ally)",
    },
} as const;