# VV Ultimatum Research Snapshot

Checked: 2026-06-12

## Source Findings

- Official Roblox page: `VV: ULTIMATUM` by Midnight Continent; describes a stylized fighting game with dangerous worlds, faction service, monsters, ancient threats, and 130+ skills. URL: https://www.roblox.com/games/6270290407/VV-ULTIMATUM
- vvultimatum.net: broad fan wiki architecture with Home, Races, Bosses, Guides, Codes, Tier List, Updates, map/area pages, builds, systems, gauntlets, and progression pages. URL: https://vvultimatum.net/
- vvultimatum.org: lighter source-labeled starter guide with race summaries, official links, videos, codes, clans, and source transparency. URL: https://www.vvultimatum.org/
- BloxInformer: useful race, Hollow, Quincy, and Spirit Charm source pages. URLs:
  - https://bloxinformer.com/wikis/vvultimatum/races/
  - https://bloxinformer.com/wikis/vvultimatum/hollow/
  - https://bloxinformer.com/wikis/vvultimatum/qunicy/
  - https://bloxinformer.com/wikis/vvultimatum/charms/
- Codes sources disagree on older launch codes. `FULLRELEASE` and `75KLIKES` have the strongest active consensus; `SDFIX`, `30KLIKES`, and `day1` need in-game recheck before being labeled active.

## SEO Direction

- Do not compete only as another copied wiki. Position as source-checked decision pages.
- First content cluster:
  - `/en/codes/`
  - `/en/races/`
  - `/en/guides/beginner-guide/`
  - `/en/guides/best-race/`
  - `/en/guides/hollow-progression/`
  - `/en/guides/quincy-progression/`
  - `/en/guides/sanrei-glove/`
  - `/en/guides/spirit-charms/`
  - `/en/bosses/`
  - `/en/sources/`
- Each high-intent page should include:
  - canonical URL with trailing slash
  - Month Year title freshness
  - BreadcrumbList JSON-LD
  - FAQPage JSON-LD
  - VideoGame JSON-LD on hub pages
  - source confidence and checked date
  - internal links to the next route decision

## Implementation Notes

- Built the project as a focused Next.js static export inspired by `/Users/coolbat/subnautica2guide`.
- Kept the Subnautica pattern of structured content, metadata helpers, JSON-LD helpers, `robots.ts`, `sitemap.ts`, and `llms.txt`.
- Avoided copying Subnautica-only tools such as interactive maps, crafting calculators, and progression checklist local state until VV-specific data exists.
