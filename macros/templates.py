from pathlib import Path

from jinja2 import Environment, FileSystemLoader, select_autoescape
from markupsafe import Markup


PROJECT_ROOT = Path(__file__).resolve().parent.parent

TEMPLATES_DIR = PROJECT_ROOT / "templates"


template_env = Environment(
    loader=FileSystemLoader(TEMPLATES_DIR),
    autoescape=select_autoescape(
        enabled_extensions=("html",),
        default_for_string=True,
    ),
    trim_blocks=True,
    lstrip_blocks=True,
)


def render_template(template_name, **context):
    template = template_env.get_template(template_name)

    return Markup(
        template.render(**context)
    )