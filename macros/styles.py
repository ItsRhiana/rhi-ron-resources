from macros.paths import build_site_path
from macros.templates import render_template


def get_style(env, style_id):
    styles = env.variables["styles"]

    if style_id not in styles:
        raise ValueError(
            f"Unknown Style ID: '{style_id}'"
        )

    return styles[style_id]

def get_style_image(style):
    """
    Return the Style portrait filename.

    By default, portrait filenames match the Style ID:

        lodestar-sea-rover
        -> lodestar-sea-rover.png

    An explicit `image` field can still override this
    for exceptional cases.
    """

    return style.get(
        "image",
        f'{style["id"]}.png',
    )

# =========================================================
# Style card
# =========================================================

def render_style_card(env, style_id):
    style = get_style(
        env,
        style_id,
    )

    return render_template(
        "components/style-card.html",

        style=style,

        style_url=build_site_path(
            env,
            f"styles/{style_id}/",
        ),

portrait_url=build_site_path(
    env,
    f"assets/styles/{get_style_image(style)}",
),

        desire_url=build_site_path(
            env,
            f'assets/icons/{style["desire"]}.webp',
        ),
    )


# =========================================================
# Style header
# =========================================================

def render_style_header(env, style_id):
    style = get_style(
        env,
        style_id,
    )

def render_style_header(env, style_id):
    style = get_style(
        env,
        style_id,
    )

    game = env.variables[
        "game"
    ]

    class_data = (
        game["classes"][
            style["class"]
        ]
    )

    desire_data = (
        game["desires"][
            style["desire"]
        ]
    )

    return render_template(
        "styles/header.html",

        style=style,
        tags=env.variables["tags"],

        class_name=class_data["name"],
        desire_name=desire_data["name"],

        portrait_url=build_site_path(
            env,
            (
                "assets/styles/"
                f"{get_style_image(style)}"
            ),
        ),

        class_icon_url=build_site_path(
            env,
            (
                "assets/icons/"
                f'{class_data["icon"]}'
            ),
        ),

        desire_icon_url=build_site_path(
            env,
            (
                "assets/icons/"
                f'{desire_data["icon"]}'
            ),
        ),
    )

    return render_template(
    "styles/header.html",

    style=style,
    tags=env.variables["tags"],

    class_name=class_name,
    desire_name=desire_name,

portrait_url=build_site_path(
    env,
    f"assets/styles/{get_style_image(style)}",
),

    class_icon_url=build_site_path(
        env,
        f"assets/icons/{class_id}.webp",
    ),

    desire_icon_url=build_site_path(
        env,
        f"assets/icons/{desire_id}.webp",
    ),
)


# =========================================================
# Kit
# =========================================================

def render_style_kit(env, style_id):
    style = get_style(
        env,
        style_id,
    )

    return render_template(
        "styles/kit.html",
        style=style,
        recon_traits=env.variables["recon_traits"],
        tags=env.variables["tags"],
    )


# =========================================================
# Build
# =========================================================

def render_style_build(env, style_id):
    style = get_style(
        env,
        style_id,
    )

    return render_template(
        "styles/build.html",
        style=style,
        recon_traits=env.variables["recon_traits"],
    )

# =========================================================
# Review
# =========================================================

def render_style_review(env, style_id):
    style = get_style(
        env,
        style_id,
    )

    return render_template(
        "styles/review.html",
        style=style,
    )


# =========================================================
# Register macros
# =========================================================

def register_style_macros(env):

    @env.macro
    def style_card(style_id):
        return render_style_card(
            env,
            style_id,
        )

    @env.macro
    def style_header(style_id):
        return render_style_header(
            env,
            style_id,
        )

    @env.macro
    def style_kit(style_id):
        return render_style_kit(
            env,
            style_id,
        )

    @env.macro
    def style_build(style_id):
        return render_style_build(
            env,
            style_id,
        )

    @env.macro
    def style_review(style_id):
        return render_style_review(
            env,
            style_id,
        )