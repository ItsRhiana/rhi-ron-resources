const reconstructionEffects = {
    "raging-sea-assault": {
        rank: "S",
        name: "Raging Sea Assault",
        nameZh: "",
        description: "ULT's CRIT DMG gain increases to 11%.",
    },

    "tactical-balance": {
        rank: "A",
        name: "Tactical Balance",
        nameZh: "战术均衡",
        description: "CRIT Rate +20%, CRIT DMG -20%.",
    },

    "all-or-nothing": {
        rank: "A",
        name: "All or Nothing",
        nameZh: "孤注一掷",
        description: "ATK +25%, HP -12%.",
    },

    "fleeting-brilliance": {
        rank: "A",
        name: "Fleeting Brilliance",
        nameZh: "一瞬灿烂",
        description: "Passive cooldown -5s.",
    },
} as const;

export default reconstructionEffects;