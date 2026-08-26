from pathlib import Path

import yaml


# =========================================================
# Project paths
# =========================================================

def get_project_root():
    return Path(__file__).resolve().parent.parent.parent


def get_docs_root():
    return get_project_root() / "docs"


# =========================================================
# Generic YAML loader
# =========================================================

def load_yaml(path):
    if not path.exists():
        return {}

    with path.open(
        "r",
        encoding="utf-8",
    ) as file:
        return yaml.safe_load(file) or {}


# =========================================================
# Styles
# =========================================================

def load_styles():
    styles_dir = (
        get_project_root()
        / "data"
        / "styles"
    )

    if not styles_dir.exists():
        raise ValueError(
            f"Style data directory does not exist: "
            f"{styles_dir}"
        )

    styles = {}

    for file_path in sorted(
        styles_dir.glob("*.yml")
    ):
        style = load_yaml(
            file_path
        )

        if not style:
            continue

        style_id = style.get(
            "id"
        )

        if not style_id:
            raise ValueError(
                f"{file_path.name}: "
                f"missing required field 'id'."
            )

        if style_id in styles:
            raise ValueError(
                f"Duplicate Style ID "
                f"'{style_id}'."
            )

        styles[style_id] = {
            **style,
            "_source_file": file_path,
        }

    return styles


# =========================================================
# Shared registries
# =========================================================

def load_recon_traits():
    return load_yaml(
        get_project_root()
        / "data"
        / "recon-traits.yml"
    )


def load_tags():
    return load_yaml(
        get_project_root()
        / "data"
        / "tags.yml"
    )


def load_game():
    return load_yaml(
        get_project_root()
        / "data"
        / "game.yml"
    )


# =========================================================
# Tier Lists
# =========================================================

def load_tier_lists():
    return load_yaml(
        get_project_root()
        / "data"
        / "tier-lists.yml"
    )