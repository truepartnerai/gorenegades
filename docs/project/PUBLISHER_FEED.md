# Renegade Publisher Feed

The website exposes a machine-readable distribution feed at:

`https://gorenegades.com/publisher.json`

## Purpose

This endpoint is the bridge between the canonical website and downstream automation.

The website remains the source of truth. A downstream agent or workflow can poll `publisher.json`, remember the last processed `key`, and act only on new content.

## Every item includes

- stable `key`
- content `type` (article or podcast)
- title
- description
- publish date
- canonical URL
- image URL
- editorial metadata
- ready-to-use Community payload
- ready-to-use email seed payload
- RSS feed/GUID information

## Community publishing

Use:

- `community.title` → required HighLevel Community title
- `community.body` → post body / intro
- `community.linkUrl` → canonical article or episode page
- `community.imageUrl` → branded 1200×630 article image or podcast artwork

This removes the manual title-entry step.

## Smart copy overrides

Blog and podcast frontmatter support:

`socialTitle`
`socialSummary`

If omitted, the publisher feed falls back to the normal content title and description.

That means normal publishing is automatic, while an important piece can have a custom Community/social headline or teaser without changing the article title.

## Recommended automation pattern

1. Poll `publisher.json` on a schedule or after a site deploy.
2. Read `latest.key`.
3. Compare with the last processed key stored by the automation.
4. If new:
   - create the HighLevel Community post from `community.*`
   - optionally hand `email.*` to Claude for a richer subscriber email
5. Save the processed key.
6. Do not republish a key already processed.

## Division of responsibility

- Astro/GitHub: canonical content + metadata + image generation
- RSS Posts: standard social distribution
- Claude/GHL: richer email + Community publishing
- Publisher feed: normalized handoff between systems
