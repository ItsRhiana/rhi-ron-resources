export const tags = {
    "single-target": {
        name: "Single-Target",
        type: "enemy",
    },

    "aoe": {
        name: "AoE",
        type: "enemy",
    },

    "atk-down": {
        name: "ATK Down",
        type: "enemy",
    },

    "crit-up": {
        name: "CRIT Up",
        type: "ally",
    },

    "crit": {
        name: "CRIT",
        type: "ally",
    },
    "crit-dmg": {
        name: "CRIT DMG",
        type: "ally",
    },

    "support": {
        name: "Support",
        type: "ally",
    },
    "healing": {
        name: "Healing",
        type: "ally",
    },

    "atk": {
        name: "ATK",
        type: "ally",
    },

    "def": {
        name: "DEF",
        type: "ally",
    },

    "hot": {
        name: "HoT",
        type: "ally",
    },

    "def-up": {
        name: "DEF Up",
        type: "ally",
    },

    "atk-up": {
        name: "ATK Up",
        type: "ally",
    },
};

export const tagTypes = {
    ally: {
        order: 1,
        color: "var(--color-tag-ally)",
    },

    enemy: {
        order: 2,
        color: "var(--color-tag-enemy)",
    },
};

export function sortTags(tagIds: any[]) {
    return [...tagIds].sort((a, b) => {
        const tagA = tags[a];
        const tagB = tags[b];

        const typeDifference =
            tagTypes[tagA.type].order -
            tagTypes[tagB.type].order;

        if (typeDifference !== 0) {
            return typeDifference;
        }

        return tagA.name.localeCompare(tagB.name);
    });
}