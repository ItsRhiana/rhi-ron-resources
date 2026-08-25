from urllib.parse import urlsplit

from markupsafe import Markup, escape


def define_env(env):

    def get_style(style_id):
        return env.variables["styles"][style_id]


    # =========================================================
    # Site URL helper
    # =========================================================
    #
    # Example production site_url:
    # https://username.github.io/rhi-ron-resources/
    #
    # site_path("assets/icons/wrath.webp")
    # ->
    # /rhi-ron-resources/assets/icons/wrath.webp
    #
    # MkDocs also mounts `mkdocs serve` under the path contained
    # in site_url, so the same URL works locally.
    # =========================================================

    @env.macro
    def site_path(path):
        site_url = env.conf.get("site_url", "")

        base_path = urlsplit(site_url).path.rstrip("/")
        clean_path = str(path).lstrip("/")

        if base_path:
            return f"{base_path}/{clean_path}"

        return f"/{clean_path}"


    # =========================================================
    # Tier-list card
    # =========================================================

    @env.macro
    def style_card(style_id):
        s = get_style(style_id)

        character = escape(s["character"]["en"])
        style_name = escape(s["style"]["en"])
        rarity = s["rarity"]
        desire = escape(s["desire"])
        image = escape(s["image"])

        style_url = site_path(
            f"styles/{style_id}/"
        )

        portrait_url = site_path(
            f"assets/styles/{image}"
        )

        desire_url = site_path(
            f"assets/icons/{desire}.webp"
        )

        return Markup(
            f"""
<a
  class="style-card rarity-{rarity}"
  href="{style_url}"
  title="{character} — {style_name}"
>
  <img
    class="style-portrait"
    src="{portrait_url}"
    alt="{character} — {style_name}"
  >

  <div class="desire-badge">
    <img
      src="{desire_url}"
      alt="{str(desire).title()}"
    >
  </div>

  <div class="style-card-name">{character}</div>
  <div class="rarity-bar"></div>
</a>
"""
        )


    # =========================================================
    # Style page header
    # =========================================================

    @env.macro
    def style_header(style_id):
        s = get_style(style_id)

        character = escape(s["character"]["en"])
        character_zh = escape(
            s["character"].get("zh", "")
        )

        style_name = escape(s["style"]["en"])
        style_zh = escape(
            s["style"].get("zh", "")
        )

        rarity = s["rarity"]

        class_id = s["class"]
        class_name = (
            str(class_id)
            .replace("-", " ")
            .title()
        )

        desire_id = s["desire"]
        desire_name = str(desire_id).title()

        image = escape(s["image"])

        portrait_url = site_path(
            f"assets/styles/{image}"
        )

        class_icon_url = site_path(
            f"assets/icons/{class_id}.webp"
        )

        desire_icon_url = site_path(
            f"assets/icons/{desire_id}.webp"
        )

        tags_html = ""

        for tag in s.get("tags", []):
            tags_html += f"""
<span class="style-detail-tag">
  {escape(tag)}
</span>
"""

        return Markup(
            f"""
<div class="style-detail-header">

  <div class="style-detail-portrait-wrap rarity-{rarity}">

    <img
      class="style-detail-portrait"
      src="{portrait_url}"
      alt="{character} — {style_name}"
    >

    <div class="style-detail-header-rarity"></div>

  </div>


  <div class="style-detail-heading">

    <h1>
      <span title="{character_zh}">
        {character}
      </span>

      <span class="style-detail-name-separator">
        —
      </span>

      <span title="{style_zh}">
        {style_name}
      </span>
    </h1>


    <div class="style-detail-meta">

      <span
        class="style-detail-meta-item style-detail-rarity"
      >
        {rarity}★
      </span>

      <span class="style-detail-meta-item">
        <img
          src="{class_icon_url}"
          alt=""
        >
        {escape(class_name)}
      </span>

      <span class="style-detail-meta-item">
        <img
          src="{desire_icon_url}"
          alt=""
        >
        {escape(desire_name)}
      </span>

    </div>


    <div class="style-detail-tags">
      {tags_html}
    </div>

  </div>

</div>
"""
        )


    # =========================================================
    # KIT
    # =========================================================

    @env.macro
    def style_kit(style_id):
        s = get_style(style_id)

        stats = s["stats"]


        # =====================================================
        # Reflection rows
        # =====================================================

        reflection_rows = ""

        for item in s.get("reflection", []):
            reflection_rows += f"""
<div class="kit-stat-row">
  <span>{escape(item["stat"])}</span>
  <strong>{escape(item["value"])}</strong>
</div>
"""


        # =====================================================
        # Reconstruction traits
        # =====================================================

        recon_html = ""

        for trait in s.get("recon_traits", []):

            grade = escape(trait["grade"])
            name_en = escape(
                trait["name"]["en"]
            )
            name_zh = escape(
                trait["name"].get("zh", "")
            )
            description = escape(
                trait["description"]
            )

            tooltip = ""

            if name_zh:
                tooltip = f'title="{name_zh}"'

            grade_class = (
                "trait-s"
                if str(
                    trait["grade"]
                ).lower().startswith("s")
                else "trait-a"
            )

            recon_html += f"""
<div class="kit-recon-card">

  <div class="kit-recon-header">

    <div class="kit-recon-grade {grade_class}">
      {grade}
    </div>

    <div
      class="kit-recon-name"
      {tooltip}
    >
      {name_en}
    </div>

  </div>

  <div class="kit-recon-description">
    {description}
  </div>

</div>
"""


        # =====================================================
        # Skills
        # =====================================================

        skills_html = ""

        skill_order = [
            ("basic", "Basic"),
            ("passive", "Passive"),
            ("ultimate", "Ultimate"),
        ]

        for key, label in skill_order:

            ability = s["skills"][key]

            meta_parts = []

            if ability.get("weapon"):
                meta_parts.append(
                    escape(
                        ability["weapon"]
                    )
                )

            if ability.get("trigger"):
                meta_parts.append(
                    escape(
                        ability["trigger"]
                    )
                )

            tags = ""

            for tag in ability.get(
                "tags",
                []
            ):
                tags += f"""
<span class="skill-tag">
  {escape(tag)}
</span>
"""

            cost_html = ""

            if ability.get("cost"):
                cost_html = f"""
<div class="skill-cost">
  {escape(ability["cost"])}
</div>
"""

            meta_html = ""

            if meta_parts:
                meta_html = f"""
<div class="kit-skill-meta">
  {" · ".join(
      str(x)
      for x in meta_parts
  )}
</div>
"""

            skills_html += f"""
<div class="kit-skill-card skill-{key}">

  <div class="kit-skill-header">

    <div class="kit-skill-type">
      {label}
    </div>

    {cost_html}

  </div>

  {meta_html}

  <div class="kit-skill-tags">
    {tags}
  </div>

  <div class="kit-skill-description">
    {escape(ability["description"])}
  </div>

</div>
"""


        # =====================================================
        # Dupes
        # =====================================================

        dupes_html = ""

        for dupe in s.get("dupes", []):

            dupes_html += f"""
<div class="kit-dupe-card">

  <div class="kit-dupe-number">
    D{dupe["dupe"]}
  </div>

  <div class="kit-dupe-description">
    {escape(dupe["description"])}
  </div>

</div>
"""


        # =====================================================
        # Final Kit HTML
        # =====================================================

        return Markup(
            f"""
<div class="style-tab-content style-kit">


  <!-- =====================================================
       Compact top section
       ===================================================== -->

  <div class="kit-overview-grid">


    <!-- =====================
         Stats & Reflection
         ===================== -->

    <div class="kit-overview-column">

      <div class="style-section-title">
        <span></span>
        STATS & REFLECTION
      </div>


      <div class="kit-panel compact-panel">

        <div class="kit-panel-title">
          Lv.{stats["level"]} Base Stats
        </div>

        <div class="kit-stat-row">
          <span>HP</span>
          <strong>{stats["hp"]:,}</strong>
        </div>

        <div class="kit-stat-row">
          <span>ATK</span>
          <strong>{stats["atk"]:,}</strong>
        </div>

        <div class="kit-stat-row">
          <span>DEF</span>
          <strong>{stats["def"]:,}</strong>
        </div>


        <div class="kit-panel-subtitle">
          Reflection
        </div>

        {reflection_rows}

      </div>

    </div>


    <!-- =====================
         Reconstruction
         ===================== -->

    <div class="kit-overview-column">

      <div class="style-section-title">
        <span></span>
        RECONSTRUCTION TRAITS
      </div>

      <div class="kit-recon-list">
        {recon_html}
      </div>

    </div>


    <!-- =====================
         Dupes
         ===================== -->

    <div class="kit-overview-column">

      <div class="style-section-title">
        <span></span>
        DUPES
      </div>

      <div class="kit-dupe-list">
        {dupes_html}
      </div>

    </div>

  </div>


  <!-- =====================================================
       Skills
       ===================================================== -->

  <div class="style-section-title">
    <span></span>
    SKILLS
  </div>

  <div class="kit-skill-grid">
    {skills_html}
  </div>


</div>
"""
        )


    # =========================================================
    # BUILD
    # =========================================================

    @env.macro
    def style_build(style_id):
        s = get_style(style_id)

        skill = s["skill_target"]

        recon_priority_html = ""

        for trait in s.get(
            "recon_priority",
            []
        ):

            priority = trait["priority"]
            grade = escape(
                trait["grade"]
            )

            name = ""

            if trait.get("name"):
                name = escape(
                    trait["name"].get(
                        "en",
                        ""
                    )
                )

            note = escape(
                trait.get(
                    "note",
                    ""
                )
            )

            name_html = ""

            if name:
                name_html = f"""
<div class="recon-priority-name">
  {name}
</div>
"""

            note_html = ""

            if note:
                note_html = f"""
<div class="recon-priority-note">
  {note}
</div>
"""

            recon_priority_html += f"""
<div class="recon-priority-row">

  <div class="recon-priority-number">
    {priority}
  </div>

  <div class="recon-priority-body">

    <div class="recon-priority-grade">
      {grade}
    </div>

    {name_html}

    {note_html}

  </div>

</div>
"""

        return Markup(
            f"""
<div class="style-tab-content style-build">

  <h2>Recommended Investment</h2>

  <div class="style-build-summary">

    <div class="style-build-item">
      <span>Position</span>
      <strong>
        {escape(s["position"])}
      </strong>
    </div>

    <div class="style-build-item">
      <span>Skill Target</span>

      <strong>
        {skill["basic"]}/
        {skill["passive"]}/
        {skill["ultimate"]}
      </strong>
    </div>

  </div>


  <h2>Recon Priority</h2>

  <div class="recon-priority-list">
    {recon_priority_html}
  </div>

</div>
"""
        )


    # =========================================================
    # REVIEW
    # =========================================================

    @env.macro
    def style_review(style_id):
        s = get_style(style_id)

        review_html = ""

        for item in s.get(
            "review",
            []
        ):
            review_html += f"""
<li>{escape(item)}</li>
"""

        return Markup(
            f"""
<div class="style-tab-content style-review">

  <ul>
    {review_html}
  </ul>

</div>
"""
        )