export function getAwakeningModifiersForTarget(
    awakening: any[],
    type: string,
    target: string,
) {
    return awakening.flatMap((awakeningLevel) =>
        awakeningLevel.effects
            .filter(
                (effect: any) =>
                    effect.type === type &&
                    effect.target === target,
            )
            .map((effect: any) => ({
                ...effect,
                level: awakeningLevel.level,
            })),
    );
}

const romanLevels = [
    "I",
    "II",
    "III",
    "IV",
    "V",
];

export function formatAwakeningLevel(
    level: number,
) {
    return romanLevels[level - 1];
}