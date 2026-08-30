export const tags = {
    "single-target": {
        name: "Single-Target",
        type: "enemy",
    },
};

export const tagTypes = {
    enemy: {
        color: "var(--color-tag-enemy)",
    },

    ally: {
        color: "var(--color-tag-ally)",
    },
};

export function sortTags(tagIds: any[]) {
    return [...tagIds].sort((a, b) => {
        const tagA = tags[a];
        const tagB = tags[b];

        const typeOrderA =
            tagTypes[tagA.type].order;

        const typeOrderB =
            tagTypes[tagB.type].order;

        if (typeOrderA !== typeOrderB) {
            return typeOrderA - typeOrderB;
        }

        return tagA.name.localeCompare(tagB.name);
    });
}