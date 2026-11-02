# NEXATECT OS — Revival + Rust/Tokio/WebTransport Migration Plan

Owner: Muhammad Nauman Sherwani (naumansherwani.founder@nexatect.com)
Prepared: 2026-11-02 from a forensic audit of all live GitHub repos.
Executor: Claude (reads this repo, executes phase by phase). One phase per session — do not skip ahead.

---

## 1. Repo Inventory (what exists today)

| Repo | Language | Size | What it is |
|---|---|---|---|
| NEXATECT-global | TypeScript | 644 files / 29MB | Frontend (React 18 + Vite + Bun). 313 tsx (~56.6k lines src), 35 ts (~8.9k lines), 105 SQL migrations, 37 edge functions. Identical content to legacy repo smart-stay-automaton-b13989fa. |
| smart-stay-automaton-b13989fa | TypeScript | same | Legacy Lovable-synced repo — SAME code as NEXATECT-global. Do not develop here. |
| NEXATECT-Engine | Rust | 154 files, only 214 lines of actual .rs | Rust skeleton: Cargo.toml with tokio 1.35 + axum 0.7 + reqwest, `src/main.rs` + `src/discovery.rs` only. Plus ~146 checkpoint/merge md notes. Conversion has barely started. |
| hostflowai-brain | TypeScript | 205 files, ~24.9k lines TS (153 files) | Express 5 + Node 24 backend brain: AI advisors, Resolution Hub, Revenue Intelligence, payments, WhatsApp, 8-industry isolation. **This is the main conversion target.** |
| hostflowai-server | TypeScript | 34 files, 30 ts | Small server infra: gateway / bridge / integrations. |
| AXONETIS | — | — | Jimmy builder. Separate product; leave out of this migration. |
| founder-ai-builder | — | — | Deprecated builder. Archive only. |
| ANEXOMAIL-WORKSPACE | TypeScript | — | Separate product (email workspace). NOT part of this migration. |

**Answer to "how many NEXATECT repos / can they be one repo?"** — Two repos carry the NEXATECT name (global = frontend, Engine = Rust) plus two HostFlow-era server repos (brain, server). Yes, all of them can and should live in ONE monorepo (Phase 0 below). Do NOT merge them into the Lovable-synced repo's own history — create the monorepo by copying file trees, not by git-merging old repos.

## 2. Hard Constraints (LOCKED — never violate)

- **No Docker. No Python.** Runtime = Bun (TS side) + Rust/cargo. Process management = systemd. TLS/routing = Caddy.
- AI calls go to **OpenRouter / DeepInfra** per the master registry (`/opt/hostflowai-brain/backend/src/config/ai-models.ts`). Never route the brain through any third-party AI gateway.
- **Supabase is source of truth.** Credits ledger lives in Supabase; every credit debit/credit must be ledger-verified. No mock data anywhere in production UI — empty DB = empty state.
- Founder identity: `naumansherwani.founder@nexatect.com` + `naumankhansherwani@gmail.com` — owner check server-side, never client storage.
- Public site is **travel/hospitality only** at relaunch; other 7 industries = waitlist.
- Visual system: charcoal #121418 + navy #1F385C + champagne gold #CBB393, cinematic. Never touch landing colors without explicit owner approval.
- Caddy is already installed on Hetzner (ubuntu-24gb-nbg1-1). Existing Caddyfile must keep working — new Rust services are added as new blocks, never by rewriting the whole file.

## 3. Target Monorepo Layout

```
nexatect/                     <- ONE repo (new: NEXATECT-OS, or reuse NEXATECT-global)
  web/                        <- copy of NEXATECT-global src tree (React + Vite + Bun)
  services/brain/             <- copy of hostflowai-brain backend (TS, strangler-fig source)
  services/server/            <- copy of hostflowai-server
  engine/                     <- copy of NEXATECT-Engine (rust crate; grows into the Rust brain)
  supabase/                   <- migrations + edge functions (from NEXATECT-global)
  ops/                        <- systemd units, Caddyfile snippets, deploy scripts
  PHASES.md                   <- this file (Claude's execution guide)
```

Build order per deploy: `web` -> `bun run build` -> static to Caddy; `engine` -> `cargo build --release` -> systemd unit behind Caddy.

## 4. Phases

### Phase 0 — Consolidate (1 session)
1. Create monorepo with layout above. Copy trees with `rsync -a --exclude node_modules --exclude .git --exclude bun.lockb`.
2. Add root `README.md` (layout map) and `ops/` folder. Add `.gitignore` covering node_modules, target/, dist/.
3. Verify: `cd web && bun install && bun run build` passes; `cd engine && cargo check` passes.
4. Do not delete the old repos yet. Tag them `pre-monorepo-snapshot`.
Acceptance: one repo, both builds green, nothing lost (`diff -r` spot check).

### Phase 1 — Frontend Revival (2–3 sessions, no Rust)
The website is dead/broken; fix it BEFORE touching Rust.
1. Audit all routes: fix blank pages, broken auth (`unauthenticated` loops), dead links, 404s.
2. Restore founder gate + owner identity checks; founder sees real data only (no mock).
3. Apply NEXATECT branding + locked palette across public pages; pricing = 4 plans (Basic £25/100cr, Pro £52/250cr, Premium £110/600cr, Business £1000/5000cr) + top-up ladder.
4. Remove every mock/demo array from production components; demo only on /demo route with badge.
Acceptance: every public route returns real content with 200; login works end to end; `bun run build` green.

### Phase 2 — Contract Freeze (1–2 sessions)
1. Extract the TS brain's HTTP surface into an explicit contract doc `ops/api-contract.md` (method, path, auth, request/response JSON) — from hostflowai-brain routes + edge functions.
2. Write contract tests (bun test) that pin the TS brain's current behavior. These become the Rust acceptance tests later.
3. Define the new tRPC-style procedure names so web/ can be migrated to a typed client in Phase 6.
Acceptance: contract doc complete; tests run against live TS brain and pass.

### Phase 3 — Rust Skeleton (1–2 sessions)
1. Extend `engine/`: axum 0.7 + tokio full features, tracing, config from env (dotenvy), graceful shutdown.
2. `/healthz` + `/readyz`, request-ID middleware, structured logging to journald.
3. Supabase access in Rust: use `reqwest` against PostgREST with the service key via env; **no** direct DB drivers in Phase 3.
4. systemd unit `nexatect-engine.service` (User=nexatect, Restart=always) + Caddy block `api.nexatect.com` proxying to the unit.
Acceptance: curl /healthz through Caddy returns 200 from the Rust process.

### Phase 4 — Hot-Path Services in Rust (2–4 sessions, the real work begins)
Port from TS brain, in this order (highest value first):
1. **Auth/session verify**: validate Supabase JWTs (jwks), founder/owner role check server-side.
2. **Credits ledger**: debit/credit/balance endpoints, atomic Supabase RPC calls, idempotency keys. Every AI call routes through this.
3. **Double-booking guard / conflict detection**: this is latency-critical, perfect for async Rust.
4. Rate limits + tier enforcement (Basic/Pro/Premium/Business, unlimited for founder).
Each port: run TS + Rust side by side, mirror-traffic or canary, compare outputs in tests before switching web/ over.
Acceptance: contract tests from Phase 2 pass against the Rust implementation for the ported routes.

### Phase 5 — WebTransport + Realtime (2–3 sessions)
1. Rust side: `quinn` + h3/WebTransport crate; serve HTTP/3 on a dedicated UDP 443-capable port. **Caddy terminates normal HTTPS; WebTransport traffic should bypass Caddy's proxy and hit the Rust listener directly on its own port (Caddyfile: handle the UDP/h3 port pass-through or run the listener on a second port with its own cert) — do not assume Caddy can proxy WebTransport CONNECT/UDP flows.**
2. Fallbacks in order: WebTransport -> SSE (already streaming) -> WebSocket. Client feature-detects.
3. Migrate advisor streaming (token-by-token) and live dashboard updates onto this transport.
Acceptance: browser connects over WebTransport where supported; SSE fallback proven by forcing it off.

### Phase 6 — AI Advisor Services in Rust (3–5 sessions)
1. Port advisor orchestration: OpenRouter/DeepInfra calls via reqwest, streaming responses, model registry (same MODELS/CREDITS/LIMITS tables as the TS master registry — port it to `engine/src/models/registry.rs`).
2. Per-agent configs (aria/orion/rex/lyra/sage/atlas/vega/kai, jimmy, sherlock, leo) with credit costs (standard 0.5, advanced 2, vision 3, bulk 5).
3. Memory/RAG reads (hf_documents on SB3) stay Supabase-side; Rust calls the existing match_hf_documents RPC.
4. tRPC-style typed client in web/ replacing remaining direct TS-brain calls.
Acceptance: one full advisor conversation + streamed tool call works end-to-end via Rust engine; credits correctly debited in ledger.

### Phase 7 — Cutover & Decommission (1–2 sessions)
1. Move remaining brain endpoints or explicitly retire them; update Caddyfile so all /api/* hits the engine.
2. Stop/disable `hostflowai-brain` systemd units only after 48h clean logs.
3. Write `ops/runbook.md`: start/stop order, log locations, rollback (flip Caddyfile back to TS brain ports).
Acceptance: site fully served by web/ static + engine/ Rust; TS brain stopped; rollback procedure documented and tested once.

## 5. Effort Estimate (honest numbers)

- Frontend revival: **small-medium** — ~2–3 working days. 56k lines of tsx but revival is fixes, not rewrites.
- Rust/Tokio/async/WebTransport conversion: **the big one** — TS brain is ~25k lines / 153 files; the Rust engine today is 214 lines. Full conversion is realistically **6–10 weeks** of focused work (Phase 2–7). The strangler-fig order above means the site keeps working the whole time; only the hot path (auth, credits, booking guard, streaming) must be Rust before relaunch, the long tail can trail.
- Server files on Hetzner are intact — they are the reference implementation; nothing needs to be rebuilt from memory.

## 6. Session Discipline for Claude (executor)

- One phase per session. Start by re-reading this file and the previous phase's acceptance results.
- Never edit `supabase/` migrations destructively; new migrations only.
- Every phase ends with: build green (bun + cargo), tests run, a short report of what changed, and the deploy command block:
  ```bash
  cd /var/www/nexatect && git pull origin main && bun install && bun run build
  cd engine && cargo build --release && sudo systemctl restart nexatect-engine
  sudo systemctl reload caddy
  ```
