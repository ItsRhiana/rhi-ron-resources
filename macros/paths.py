def get_site_base_path(env):
    """
    Return the configured base path for custom URLs.

    Example:
        /rhi-ron-resources
    """

    base_path = env.variables.get(
        "site_base_path",
        "",
    )

    return str(base_path).rstrip("/")


def build_site_path(env, path):
    """
    Convert:

        assets/icons/wrath.webp

    into:

        /rhi-ron-resources/assets/icons/wrath.webp

    This works with:
        mkdocs serve
        GitHub Pages
    """

    base_path = get_site_base_path(env)

    clean_path = (
        str(path)
        .lstrip("/")
    )

    if base_path:
        return f"{base_path}/{clean_path}"

    return f"/{clean_path}"


def register_path_macros(env):

    @env.macro
    def site_path(path):
        return build_site_path(
            env,
            path,
        )