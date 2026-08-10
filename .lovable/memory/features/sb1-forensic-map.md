---
name: SB1 forensic map + NEXATECT rebrand SQL (LOCKED)
description: Supabase 1 forensic inventory (611 tables, layer ownership, do-not-touch rules) + the successful 20260810 NEXATECT rebrand/hard-heal migration
type: feature
---

## SB1 rebrand + hard heal — SUCCESS (10 Aug 2026)
File: `sql/supabase1-nexatect/20260810000000_supabase1_nexatect_rebrand_hard_heal.sql` (owner ran it himself, idempotent, public schema only).
What it did:
1. `public.nexatect_brand` + `public.nexatect_products` registry + read-only view `public.nexatect_identity` (security_invoker) — single source of truth for every AI agent.
2. Data-level rebrand: "HostFlow AI Technologies"→"NEXATECT Global", "HostFlow AI"→"NEXATECT", `hostflow-ai`→`nexatect`, AXOMAIL→ANEXOMAIL. Audit rows in `public.nexatect_rebrand_log` (service_role only).
3. RLS enabled on EVERY public table + grants (authenticated full, anon revoked, service_role all). Policy naming: `nexatect_service_all`, `nexatect_owner_all` (owner col scoped, ::text cast both sides), else `nexatect_auth_select` + `nexatect_auth_write`.
4. All functions pinned `search_path = public, extensions, pg_temp`.
5. All views → `security_invoker = true`; materialized views revoked from anon/authenticated.
6. Extensions moved out of `public` into `extensions` schema.
Remaining (dashboard-only): leaked password protection ON, OTP expiry <3600s, Postgres upgrade.

Brand registry rows: parent `nexatect_global` (NEXATECT™ Global, legacy "HostFlow AI Technologies", nexatect.com).
Products: AANRIS™ (runtime, live), AXONETIS™ AI Builder (live, axonetis.com), ANEXOMAIL™ (building, anexomail.com), ANEXVOT™ AI Pay (future, anexvotpay.com).
Industry agents: Aria (travel/hospitality), Orion (airlines), Rex (car rental), Lyra (healthcare), Sage (education), Atlas (logistics), Vega (events), Kai (railways).

## SB1 forensic inventory (Jimmy-verified)
Total public tables: **611**. Breakdown: Rex/car-rental 259 · Orion/airlines 85 · Runtime engine 66 · Aria/hospitality 49 · Nervous system (AANRIS) 44 · CRM+Enterprise 18 · Founder core 14 · Kai/railways 11 · Lyra/healthcare 3 · Jimmy memory 2 · others 60.
Largest tables: `nervous_system_priority_scores` 294MB, `nervous_system_decisions` 245MB, `nervous_system_autonomous_actions` 241MB, `nervous_system_decision_history` 219MB, `rex_world_model_core` (largest Rex).

### Rules from the forensic map
- `nervous_system_*`, `runtime_*`, `arc_*` = AANRIS runtime → **DO NOT TOUCH**, inspect wiring first.
- Industry tables (`airlines_*`, `hospitality_*`, `rex_*`, `railway_*`, ...) → KEEP and connect, never recreate.
- `ai_memory_vectors`, `ai_memories`, founder tables → AXONETIS/founder AI layer, keep and connect.
- Auth snapshot still carries the legacy founder row `naumansherwani@hostflowai.net` (id 20fe0110-4a01-467b-99be-7d419dbacdaa) — migrate to `naumansherwani.founder@nexatect.com`.
