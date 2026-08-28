const reconTraits = {
    "raging-sea-assault": {
        rank: "S",
        name: "Raging Sea Assault",
        nameZh: "",
        effect: "ULT's CRIT DMG gain increases to 11%.",
    },

    "tactical-balance": {
        rank: "A",
        name: "Tactical Balance",
        nameZh: "战术均衡",
        effect: "CRIT Rate +20%, CRIT DMG -20%.",
    },

    "all-or-nothing": {
        rank: "A",
        name: "All or Nothing",
        nameZh: "孤注一掷",
        effect: "ATK +25%, HP -12%.",
    },

    "fleeting-brilliance": {
        rank: "A",
        name: "Fleeting Brilliance",
        nameZh: "一瞬灿烂",
        effect: "Passive cooldown -5s.",
    },

    // delete this later
        "crimson-command": {
        rank: "A",
        name: "Crimson Command",
        nameZh: "一瞬灿烂",
        effect: "Each initial Passive trigger grants 4 Card Luck; while above 50% HP, CRIT Rate +5%.",
    },
} as const;

export default reconTraits;