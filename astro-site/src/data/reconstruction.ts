const reconstructionEffects = {
    "raging-sea-assault": {
        rank: "S",
        name: "Raging Sea Assault",
        description: "ULT's CRIT DMG gain increases to 11%.",
        target: "ultimate",
    },
    "into-the-frame": {
        rank: "S",
        name: "Into the Frame",
        description:
            "ULT +2 {stack:storyboard}.",
        target: "ultimate",
    },
    "like-spring-rain": {
        rank: "S",
        name: "Like Spring Rain",
        description:
            "ULT additionally heals the target for 10% HP.",
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
            "ULT deducts 10% HP from the team, granting teamwide 12% DMG increase for 10s.",
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
    "inspiring-horn": {
        rank: "A",
        name: "Inspiring Horn",
        description:
            "Every 25s, increases team DMG dealt by 8% for 10s.",
    },

    "asset-allocation": {
        rank: "A",
        name: "Asset Allocation",
        description:
            "Reduces the first ULT Flame cost by 1.",
        target: "ultimate",
    },

    "battle-spirit-relay": {
        rank: "A",
        name: "Battle Spirit Relay",
        description:
            "ULT grants the target a 10% CRIT Rate increase for 10s.",
        target: "ultimate",
    },

    "healing-enhancement": {
        rank: "A",
        name: "Healing Enhancement",
        description:
            "Each ULT increases own Healing Recovery Rate by 8%, stacking up to 24%.",
        target: "ultimate",
    },
    "rain-once-fell": {
        rank: "S",
        name: "Rain Once Fell",
        description:
            "ULT grants the target {stack:hot} for 20s, totaling 12% of Rainmaker's Max HP.",
        target: "ultimate",
    },

    "guard-all-realms": {
        rank: "A",
        name: "Guard All Realms",
        description:
            "ULT grants teamwide shield equal to 7% HP for 35s.",
        target: "ultimate",
    },

    "against-all-odds": {
        rank: "A",
        name: "Against All Odds",
        description:
            "When below 40% HP, restores 20% HP. 30s cooldown.",
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