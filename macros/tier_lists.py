from macros.paths import build_site_path
from macros.styles import render_style_card
from macros.templates import render_template


def render_tier_list(
    env,
    tier_list_id,
):
    tier_lists = env.variables[
        "tier_lists"
    ]

    if tier_list_id not in tier_lists:
        raise ValueError(
            f"Unknown Tier List: '{tier_list_id}'"
        )

    data = tier_lists[
        tier_list_id
    ]


    # =====================================================
    # Prepare columns
    # =====================================================

    columns = []

    for column in data["columns"]:

        columns.append({
            "id": column["id"],
            "name": column["name"],

            "icon_url": build_site_path(
                env,
                (
                    "assets/icons/"
                    f'{column["icon"]}.webp'
                ),
            ),
        })


    # =====================================================
    # Prepare tiers and cards
    # =====================================================

    tiers = []

    for tier in data["tiers"]:

        rendered_cells = []

        cells = tier.get(
            "cells",
            {},
        )

        for column in columns:

            style_ids = cells.get(
                column["id"],
                [],
            )

            cards = [
                render_style_card(
                    env,
                    style_id,
                )
                for style_id in style_ids
            ]

            rendered_cells.append({
                "cards": cards,
            })

        tiers.append({
            "id": tier["id"],
            "name": tier["name"],
            "cells": rendered_cells,
        })


    # =====================================================
    # Render
    # =====================================================

    return render_template(
        "tier-list.html",
        columns=columns,
        tiers=tiers,
    )


def register_tier_list_macros(env):

    @env.macro
    def tier_list(tier_list_id):
        return render_tier_list(
            env,
            tier_list_id,
        )