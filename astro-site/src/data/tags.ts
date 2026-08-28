export const tags = {
    "single-target": {
        name: "Single-Target",
        type: "enemy",
    },
} as const;

export const tagTypes = {
    enemy: {
        color: "#D23F25",
    },

    ally: {
        color: "#3F8865",
    },
} as const;