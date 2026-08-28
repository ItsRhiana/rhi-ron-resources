const stats = {
    hp: {
        name: "HP",
        icon: "hugeicons:favourite",
    },

    atk: {
        name: "ATK",
        icon: "hugeicons:gun",
    },

    def: {
        name: "DEF",
        icon: "hugeicons:shield-half",
    },

    "crit-rate": {
        name: "CRIT Rate",
        icon: "hugeicons:arrow-down-left-01",
    },

    "crit-dmg": {
        name: "CRIT DMG",
        icon: "hugeicons:circle-arrow-down-left",
    },

    dmg: {
        name: "DMG",
        icon: "hugeicons:bullet",
    },

    healing: {
        name: "Healing",
        icon: "hugeicons:heart-add",
    },
} as const;

export default stats;