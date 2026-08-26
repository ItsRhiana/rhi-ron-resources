from macros.data import load_data
from macros.paths import register_path_macros
from macros.styles import register_style_macros
from macros.tier_lists import register_tier_list_macros


def define_env(env):
    """
    Main entry point used by mkdocs-macros-plugin.

    Keep this file small:
    - load data
    - register helpers/macros
    """

    load_data(env)

    register_path_macros(env)
    register_style_macros(env)
    register_tier_list_macros(env)