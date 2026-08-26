from .loaders import (
    load_game,
    load_recon_traits,
    load_styles,
    load_tags,
    load_tier_lists,
)

from .validators import (
    validate_assets,
    validate_game,
    validate_recon_traits,
    validate_styles,
    validate_tags,
    validate_tier_lists,
)


def load_data(env):
    """
    Load, validate, and expose all structured game data.
    """

    # =====================================================
    # Load
    # =====================================================

    styles = load_styles()

    recon_traits = (
        load_recon_traits()
    )

    tags = load_tags()

    game = load_game()

    tier_lists = (
        load_tier_lists()
    )


    # =====================================================
    # Validate registries
    # =====================================================

    validate_game(
        game
    )

    validate_recon_traits(
        recon_traits
    )

    validate_tags(
        tags
    )


    # =====================================================
    # Validate references
    # =====================================================

    validate_styles(
        styles,
        recon_traits,
        tags,
        game,
    )

    validate_tier_lists(
        tier_lists,
        styles,
    )


    # =====================================================
    # Validate files
    # =====================================================

    validate_assets(
        styles,
        tier_lists,
        game,
    )


    # =====================================================
    # Expose to macros/templates
    # =====================================================

    # Remove private loader metadata before templates
    # receive Style objects.
    for style in styles.values():
        style.pop(
            "_source_file",
            None,
        )

    env.variables.update({
        "styles": styles,
        "recon_traits": recon_traits,
        "tags": tags,
        "game": game,
        "tier_lists": tier_lists,
    })