---
name: NEXATECT credit business model (relaunch, Sept 2026)
description: New plan tiers with AI credits, top-up ladder with hidden per-credit rates, Supabase ledger as source of truth, single launch industry
type: feature
---
# NEXATECT Business Model (owner-locked, relaunch next month)

## Plans (GBP/month → included AI credits)
ONLY 4 PLANS. Enterprise tier is DEAD (removed Aug 2026, owner decision) — no "Contact Sales" card anywhere.

| Plan | Price/mo | Credits |
|---|---|---|
| Basic | £25 | 100 |
| Pro | £52 | 250 |
| Premium | £110 | 600 |
| Business | £1,000 | 5,000 |

No free AI for anyone. Credits are the only AI currency.

## AI Top-up ladder (one-off purchases)
| Top-up | Credits | Effective rate (INTERNAL ONLY) |
|---|---|---|
| £15 | 40 | £0.375 |
| £30 | 75 | £0.400 |
| £60 | 170 | £0.353 |
| £120 | 360 | £0.333 |
| £250 | 800 | £0.313 |
| £500 | 1,800 | £0.278 |
| £1,000 | 4,000 | £0.250 |
| £2,000 | 9,000 | £0.222 |
| £5,000 | 21,500 | £0.233 |  <- owner raised 21,000 -> 21,500 (jitna meetha utna naachna)

**Per-credit rate is NEVER shown to users.** UI shows only £ price + credit count. Rates live in the internal ledger only.

## Ledger
- Supabase = source of truth for balances, grants, debits, top-ups, expiry.
- Automatic: every AI call debits credits per `CREDITS` map in the master model registry (standard 0.5 / advanced 2 / vision 3 / bulk 5).
- Never hardcode plan prices/credits in TS — read from SQL.

## Launch scope
- Only ONE industry live at relaunch: **Travel / Tourism / Hospitality** (Aria).
- Other 7 industries = "Coming soon" with waitlist. No half-built dashboards.
