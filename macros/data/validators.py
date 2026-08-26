from .loaders import get_docs_root


# =========================================================
# Constants
# =========================================================

VALID_RARITIES = {
    4,
    5,
    6,
}

VALID_TAG_TARGETING = {
    "enemy",
    "ally",
}

VALID_RECON_GRADES = {
    "S-trait",
    "A-trait",
}


# =========================================================
# Styles
# =========================================================

def validate_styles(
    styles,
    recon_traits,
    tags,
    game,
):
    classes = game.get(
        "classes",
        {},
    )

    desires = game.get(
        "desires",
        {},
    )

    for style_id, style in styles.items():

        file_path = style.get(
            "_source_file"
        )

        filename = (
            file_path.name
            if file_path
            else f"{style_id}.yml"
        )


        # -------------------------------------------------
        # Required identity fields
        # -------------------------------------------------

        required_fields = [
            "id",
            "character",
            "style",
            "rarity",
            "class",
            "desire",
        ]

        for field in required_fields:

            if field not in style:
                raise ValueError(
                    f"{filename}: "
                    f"missing required field "
                    f"'{field}'."
                )


        # -------------------------------------------------
        # Filename
        # -------------------------------------------------

        if file_path:

            expected_filename = (
                f"{style_id}.yml"
            )

            if (
                file_path.name
                != expected_filename
            ):
                raise ValueError(
                    f"{file_path.name}: "
                    f"filename must match "
                    f"Style ID. Expected "
                    f"'{expected_filename}'."
                )


        # -------------------------------------------------
        # Names
        # -------------------------------------------------

        character = style[
            "character"
        ]

        if (
            not isinstance(
                character,
                dict,
            )
            or not character.get("en")
        ):
            raise ValueError(
                f"{filename}: "
                f"'character.en' "
                f"is required."
            )

        style_name = style[
            "style"
        ]

        if (
            not isinstance(
                style_name,
                dict,
            )
            or not style_name.get("en")
        ):
            raise ValueError(
                f"{filename}: "
                f"'style.en' "
                f"is required."
            )


        # -------------------------------------------------
        # Rarity
        # -------------------------------------------------

        if (
            style["rarity"]
            not in VALID_RARITIES
        ):
            raise ValueError(
                f"{filename}: "
                f"invalid rarity "
                f"'{style['rarity']}'."
            )


        # -------------------------------------------------
        # Class
        # -------------------------------------------------

        class_id = style[
            "class"
        ]

        if class_id not in classes:
            raise ValueError(
                f"Style '{style_id}': "
                f"unknown class "
                f"'{class_id}'."
            )


        # -------------------------------------------------
        # Desire
        # -------------------------------------------------

        desire_id = style[
            "desire"
        ]

        if desire_id not in desires:
            raise ValueError(
                f"Style '{style_id}': "
                f"unknown Desire "
                f"'{desire_id}'."
            )


        # -------------------------------------------------
        # Style-level tags
        # -------------------------------------------------

        for tag_id in style.get(
            "tags",
            [],
        ):

            if tag_id not in tags:
                raise ValueError(
                    f"Style '{style_id}': "
                    f"unknown tag "
                    f"'{tag_id}'."
                )


        # -------------------------------------------------
        # Kit
        # -------------------------------------------------

        kit = style.get(
            "kit",
            {},
        )

        for trait_id in kit.get(
            "recon_traits",
            [],
        ):

            if (
                trait_id
                not in recon_traits
            ):
                raise ValueError(
                    f"Style '{style_id}': "
                    f"unknown Reconstruction "
                    f"trait '{trait_id}'."
                )


        # -------------------------------------------------
        # Skill tags
        # -------------------------------------------------

        for (
            skill_id,
            skill,
        ) in kit.get(
            "skills",
            {},
        ).items():

            for tag_id in skill.get(
                "tags",
                [],
            ):

                if tag_id not in tags:
                    raise ValueError(
                        f"Style "
                        f"'{style_id}', "
                        f"skill "
                        f"'{skill_id}': "
                        f"unknown tag "
                        f"'{tag_id}'."
                    )


        # -------------------------------------------------
        # Guide
        # -------------------------------------------------

        guide = style.get(
            "guide",
            {},
        )

        for item in guide.get(
            "recon_priority",
            [],
        ):

            trait_id = item.get(
                "trait"
            )

            if (
                trait_id
                and trait_id
                not in recon_traits
            ):
                raise ValueError(
                    f"Style '{style_id}': "
                    f"Recon Priority "
                    f"references unknown "
                    f"trait '{trait_id}'."
                )

            for trait_id in item.get(
                "exclude",
                [],
            ):

                if (
                    trait_id
                    not in recon_traits
                ):
                    raise ValueError(
                        f"Style "
                        f"'{style_id}': "
                        f"Recon Priority "
                        f"excludes unknown "
                        f"trait "
                        f"'{trait_id}'."
                    )

            for grade in item.get(
                "grades",
                [],
            ):

                if (
                    grade
                    not in VALID_RECON_GRADES
                ):
                    raise ValueError(
                        f"Style "
                        f"'{style_id}': "
                        f"invalid Recon "
                        f"grade '{grade}'."
                    )


# =========================================================
# Reconstruction Traits
# =========================================================

def validate_recon_traits(
    recon_traits,
):
    for trait_id, trait in (
        recon_traits.items()
    ):

        if not isinstance(
            trait,
            dict,
        ):
            raise ValueError(
                f"Reconstruction trait "
                f"'{trait_id}' must "
                f"be an object."
            )

        grade = trait.get(
            "grade"
        )

        if (
            grade
            not in VALID_RECON_GRADES
        ):
            raise ValueError(
                f"Reconstruction trait "
                f"'{trait_id}': "
                f"invalid grade "
                f"'{grade}'."
            )

        name = trait.get(
            "name"
        )

        if (
            not isinstance(
                name,
                dict,
            )
            or not name.get("en")
        ):
            raise ValueError(
                f"Reconstruction trait "
                f"'{trait_id}' is "
                f"missing 'name.en'."
            )

        if not trait.get(
            "description"
        ):
            raise ValueError(
                f"Reconstruction trait "
                f"'{trait_id}' is "
                f"missing "
                f"'description'."
            )


# =========================================================
# Tags
# =========================================================

def validate_tags(tags):
    for tag_id, tag in (
        tags.items()
    ):

        if not isinstance(
            tag,
            dict,
        ):
            raise ValueError(
                f"Tag '{tag_id}' "
                f"must be an object."
            )

        if not tag.get(
            "name"
        ):
            raise ValueError(
                f"Tag '{tag_id}' "
                f"is missing 'name'."
            )

        targeting = tag.get(
            "targeting"
        )

        if (
            targeting
            not in VALID_TAG_TARGETING
        ):
            raise ValueError(
                f"Tag '{tag_id}': "
                f"invalid targeting "
                f"'{targeting}'. "
                f"Expected 'enemy' "
                f"or 'ally'."
            )


# =========================================================
# Game metadata
# =========================================================

def validate_game(game):
    classes = game.get(
        "classes",
        {},
    )

    desires = game.get(
        "desires",
        {},
    )

    if not classes:
        raise ValueError(
            "game.yml: "
            "no classes defined."
        )

    if not desires:
        raise ValueError(
            "game.yml: "
            "no Desires defined."
        )


    for class_id, data in (
        classes.items()
    ):

        if not isinstance(
            data,
            dict,
        ):
            raise ValueError(
                f"Class '{class_id}' "
                f"must be an object."
            )

        if not data.get("name"):
            raise ValueError(
                f"Class '{class_id}' "
                f"is missing 'name'."
            )

        if not data.get("icon"):
            raise ValueError(
                f"Class '{class_id}' "
                f"is missing 'icon'."
            )


    for desire_id, data in (
        desires.items()
    ):

        if not isinstance(
            data,
            dict,
        ):
            raise ValueError(
                f"Desire '{desire_id}' "
                f"must be an object."
            )

        if not data.get("name"):
            raise ValueError(
                f"Desire '{desire_id}' "
                f"is missing 'name'."
            )

        if not data.get("icon"):
            raise ValueError(
                f"Desire '{desire_id}' "
                f"is missing 'icon'."
            )


# =========================================================
# Tier Lists
# =========================================================

def validate_tier_lists(
    tier_lists,
    styles,
):
    for (
        tier_list_id,
        tier_list,
    ) in tier_lists.items():

        columns = tier_list.get(
            "columns",
            [],
        )

        if not columns:
            raise ValueError(
                f"Tier List "
                f"'{tier_list_id}' "
                f"has no columns."
            )

        column_ids = set()

        for column in columns:

            column_id = column.get(
                "id"
            )

            if not column_id:
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}' "
                    f"contains a column "
                    f"without an ID."
                )

            if (
                column_id
                in column_ids
            ):
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}' "
                    f"contains duplicate "
                    f"column "
                    f"'{column_id}'."
                )

            if not column.get(
                "name"
            ):
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}', "
                    f"column "
                    f"'{column_id}' "
                    f"is missing 'name'."
                )

            if not column.get(
                "icon"
            ):
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}', "
                    f"column "
                    f"'{column_id}' "
                    f"is missing 'icon'."
                )

            column_ids.add(
                column_id
            )


        tier_ids = set()

        for tier in tier_list.get(
            "tiers",
            [],
        ):

            tier_id = tier.get(
                "id"
            )

            if not tier_id:
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}' "
                    f"contains a tier "
                    f"without an ID."
                )

            if tier_id in tier_ids:
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}' "
                    f"contains duplicate "
                    f"tier '{tier_id}'."
                )

            tier_ids.add(
                tier_id
            )

            for (
                column_id,
                style_ids,
            ) in tier.get(
                "cells",
                {},
            ).items():

                if (
                    column_id
                    not in column_ids
                ):
                    raise ValueError(
                        f"Tier List "
                        f"'{tier_list_id}', "
                        f"tier "
                        f"'{tier_id}': "
                        f"unknown column "
                        f"'{column_id}'."
                    )

                if not isinstance(
                    style_ids,
                    list,
                ):
                    raise ValueError(
                        f"Tier List "
                        f"'{tier_list_id}', "
                        f"tier "
                        f"'{tier_id}', "
                        f"column "
                        f"'{column_id}' "
                        f"must contain "
                        f"a list."
                    )

                for style_id in style_ids:

                    if (
                        style_id
                        not in styles
                    ):
                        raise ValueError(
                            f"Tier List "
                            f"'{tier_list_id}', "
                            f"tier "
                            f"'{tier_id}': "
                            f"unknown Style ID "
                            f"'{style_id}'."
                        )


# =========================================================
# Assets
# =========================================================

def validate_assets(
    styles,
    tier_lists,
    game,
):
    docs_root = (
        get_docs_root()
    )

    style_assets = (
        docs_root
        / "assets"
        / "styles"
    )

    icon_assets = (
        docs_root
        / "assets"
        / "icons"
    )


    # -----------------------------------------------------
    # Style portraits
    # -----------------------------------------------------

    for style_id, style in (
        styles.items()
    ):

        filename = style.get(
            "image",
            f"{style_id}.png",
        )

        path = (
            style_assets
            / filename
        )

        if not path.exists():
            raise ValueError(
                f"Style '{style_id}': "
                f"missing portrait "
                f"'{path}'."
            )


    # -----------------------------------------------------
    # Class icons
    # -----------------------------------------------------

    for class_id, data in (
        game["classes"].items()
    ):

        path = (
            icon_assets
            / data["icon"]
        )

        if not path.exists():
            raise ValueError(
                f"Class '{class_id}': "
                f"missing icon "
                f"'{path}'."
            )


    # -----------------------------------------------------
    # Desire icons
    # -----------------------------------------------------

    for desire_id, data in (
        game["desires"].items()
    ):

        path = (
            icon_assets
            / data["icon"]
        )

        if not path.exists():
            raise ValueError(
                f"Desire "
                f"'{desire_id}': "
                f"missing icon "
                f"'{path}'."
            )


    # -----------------------------------------------------
    # Tier-list icons
    # -----------------------------------------------------

    for (
        tier_list_id,
        tier_list,
    ) in tier_lists.items():

        for column in tier_list.get(
            "columns",
            [],
        ):

            path = (
                icon_assets
                / f'{column["icon"]}.webp'
            )

            if not path.exists():
                raise ValueError(
                    f"Tier List "
                    f"'{tier_list_id}': "
                    f"missing column "
                    f"icon '{path}'."
                )