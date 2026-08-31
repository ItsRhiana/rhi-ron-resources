const reconstructionEffects = {
    "raging-sea-assault": {
        rank: "S",
        name: "Raging Sea Assault",
        description: "ULT's CRIT DMG gain increases to 11%.",
        target: "ultimate",
    },

    "tactical-balance": {
        rank: "A",
        name: "Tactical Balance",
        description: "CRIT Rate increases by 20%, CRIT DMG decreases by 20%.",
    },

    "all-or-nothing": {
        rank: "A",
        name: "All or Nothing",
        description: "ATK increases by 25%, HP decreases by 12%.",
    },

    "fleeting-brilliance": {
        rank: "A",
        name: "Fleeting Brilliance",
        description: "Passive cooldown -5s.",
        target: "passive",
    },
    "aid-the-strong": {
        rank: "A",
        name: "Aid the Strong",
        description:
            "Passive grants highest ATK ally 30% increased ATK for 5s.",
        target: "passive",
    },

    "crimson-command": {
        rank: "A",
        name: "Crimson Command",
        description:
            "ULT deducts 10% HP from the team, granting allies a 12% DMG increase for 10s.",
        target: "ultimate",
    },

    "scorch-to-the-bone": {
        rank: "A",
        name: "Scorch to the Bone",
        description:
            "BA inflicts {stack:dot} equal to 100% ATK for 10s, 30s cooldown.",
        target: "basicAttack",
    },

    "crit-rate-8": {
        rank: "A",
        name: "CRIT Rate",
        description:
            "CRIT Rate +8%.",
    },
};

export default reconstructionEffects;

const rankOrder = {
    S: 1,
    A: 2,
};

export function sortReconstruction(effectIds: any[]) {
    return [...effectIds].sort((a, b) => {
        const effectA = reconstructionEffects[a];
        const effectB = reconstructionEffects[b];

        const rankDifference =
            rankOrder[effectA.rank] -
            rankOrder[effectB.rank];

        if (rankDifference !== 0) {
            return rankDifference;
        }

        return effectA.name.localeCompare(
            effectB.name,
        );
    });
}