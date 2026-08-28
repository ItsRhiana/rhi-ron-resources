export function getAwakeningModifiers(
    awakening: any[],
    type: string,
) {
    return awakening.flatMap((awakeningLevel) =>
        awakeningLevel.effects
            .filter(
                (effect: any) =>
                    effect.type === type,
            )
            .map((effect: any) => ({
                ...effect,
                level: awakeningLevel.level,
            })),
    );
}


export function getAwakeningModifiersForTarget(
    awakening: any[],
    type: string,
    target: string,
) {
    return getAwakeningModifiers(
        awakening,
        type,
    ).filter(
        (effect) =>
            effect.target === target,
    );
}


export function formatAwakeningLevel(
    level: number,
) {
    const roman = [
        "I",
        "II",
        "III",
        "IV",
        "V",
    ];

    return roman[level - 1] ?? String(level);
}