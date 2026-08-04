---
name: MEMORY BOOK — read this first
description: Single consolidated ledger of the owner's system. ALWAYS read before asking the owner any question.
type: preference
---

# MEMORY BOOK (read before every question)

## 1. Products
| # | Product | Domain | Status |
|---|---------|--------|--------|
| 1 | HostFlow AI → rebranding to **NEXATECT** | hostflowai.net (+ industry subdomains) | Live |
| 2 | **ANEXVOT AI PAY** — payment brain | Supabase #2 edge functions | Live |
| 3 | **AXONET / AXONETIS** builder | aiaxonet.hostflowai.net / founderbuilder.axonetis.com | Building |
| 4 | **ANEXOMAIL** (ex AxoMail Workspace) | anexomail.com | Separate Lovable project, Supabase #4 |

## 2. Supabase map (never confuse)
- **#1 Operations** `qsfmsjyorhicydtoiluk` — this Lovable project. Users, CRM, bookings, subscriptions **mirror**.
- **#2 Payment brain** `yinpfejochafukrwmkgg` — ALL Polar (`polar-checkout`, `polar-webhook`). **Already migrated & deployed.**
- **#3 AXONET builder** — builder data, agents, AI/vector workloads.
- **#4 ANEXOMAIL** — mail workspace data. Separate project, never mixed with #1/#2/#3.
- Rust bridge syncs Polar sub status from #2 → #1 / #3 via `metadata.product` (`nexatect` | `axonetis`).

## 3. Polar (DONE — do not re-ask)
- Product IDs: Basic `8f3ead9d…`, Pro `e0d06a0b…`, Premium `91c1a68a…`.
- Frontend: `src/lib/api.ts → createPolarCheckoutViaCloud()` → `https://yinpfejochafukrwmkgg.supabase.co/functions/v1/polar-checkout` with SB#1 JWT + `product: "nexatect"`.
- Polar rejects `null` metadata → build metadata conditionally.
- Never create polar functions in Lovable Cloud.

## 4. Infra (see constraints/infra-stack-rules.md)
No Docker. Caddy + systemd. Bun/Node/Rust only, no Python. OpenRouter key = owner's.

## 5. AI brains
Hetzner `api.hostflowai.net` — Jimmy (CEO, qwen3:8b, 3M ctx), Sherlock (audit, qwen3:8b, 1M ctx), 8 industry advisors (qwen3:4b, 100K each). SSE + `tool_call` → Supabase RPC dispatch.

## 6. Hard rules
SQL = truth · No mock data · Strict industry isolation (8 industries) · 7-day trial · Copy-paste handoff for non-Lovable systems · Nexatect colours (Charcoal #121418 / Navy #1F385C / Gold #CBB393) not applied to live pages until owner says go.

## 7. Open decisions
- Vector store → **Supabase #3 (AXONET)** — recommended, keeps RAG/AI data out of the operations DB.

## 8. Domains owned (Namecheap)
anexvotpay.com · anexomail.com · nexatect.com (pointed to Caddy) · axonetis.com · hostflowai.net

## 9. Nexatect migration order (owner-locked, starts next month)
1. Polar payments made fully working (Supabase #2) — blocker, must be green first.
2. Full frontend recolour to Nexatect palette (Charcoal #121418 / Navy #1F385C / Gold #CBB393).
3. Footer gets full brand/company info block.
4. Rebrand HostFlow AI → NEXATECT + domain cutover to nexatect.com via Caddy.
Site has been dormant ~4 months; rebrand is the relaunch.