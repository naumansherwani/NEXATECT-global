---
name: Nexatect brand (HostFlow AI rebrand target)
description: HostFlow AI will be rebranded to NEXATECT. Domain nexatect.com (Caddy). Logo navy N + gold V monogram on slate. Asset at src/assets/nexatect-logo.jpg.asset.json. Do NOT rebrand until owner says "start nexatect migration".
type: design
---

NEXATECT MIGRATION IS STARTED (Aug 2026). hostflowai.net is RETIRED on Caddy. All new UI/copy/branding must be NEXATECT. Site stays founder-only (Maintenance gate) until every feature is verified working, then goes live on nexatect.com.

## Cinematic palette (LOCKED)
- Charcoal #121418 → hsl(220 9% 8%) — background
- Navy #1F385C → hsl(214 50% 24%) — secondary/accent
- Champagne Gold #CBB393 → hsl(35 34% 68%) — primary
Dark theme tokens in src/index.css already use these. Cinematic hero + Bun/Rust/tRPC/WebTransport stack messaging everywhere.

## Brand
- Name: NEXATECT (all caps wordmark)
- Domain: nexatect.com (owner hosts via Caddy on Hetzner)
- Logo asset: src/assets/nexatect-logo.jpg.asset.json (asset_id 1cc6210a-501a-435c-83a7-e01e6586a6a4)
- Monogram: interlocked N (navy) + V/chevron (gold)
- Wordmark: NEXATECT gold serif caps
- Palette:
  - Navy primary ~#1e3a5f (hsl 213 52% 25%)
  - Gold accent ~#c9a875 (hsl 36 40% 62%)
  - Slate black ~#1a1a1a
- Feel: premium luxury corporate — NOT current teal/cyan tech look

## Payments tie-in
Polar `product: "nexatect"` in polar-checkout metadata already refers to this SaaS. Do not rename that key.