from .data import load_data
from .paths import register_path_macros
from .styles import register_style_macros
from .tier_lists import register_tier_list_macros


def define_env(env):
    """
    Entry point for mkdocs-macros-plugin.
    """

    load_data(env)

    register_path_macros(env)
    register_style_macros(env)
    register_tier_list_macros(env)