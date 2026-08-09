---
name: AI house boundary (LOCKED)
description: Core NEXATECT agents are self-hosted; Lovable AI Gateway is builder-side helper only, never the core brain
type: constraint
---
# AI House Boundary — LOCKED

## House 1 — NEXATECT own brain (CORE, never replaced)
- Agents: Jimmy (CEO), Sherlock (auditor), 8 industry advisors, Trojan agents.
- Runtime: Hetzner (Bun/Rust, Caddy, systemd). Models: OpenRouter + Groq + Ollama (qwen3).
- Source of truth for routing: `agent_registry.routing_config` (Supabase #3 / AXONET).
- RAG: `hf_documents` + `match_hf_documents` on Supabase #3, OpenRouter embeddings only.
- **Lovable AI Gateway must NEVER be used for these.** No migration of core agents to the gateway, ever.

## House 2 — Lovable AI Gateway (builder-side only)
- Allowed ONLY for frontend helper tasks: copy suggestions, UI microtext, design placeholder text.
- Optional, runs on Lovable credits. If credits are off, the app must degrade silently — no core feature depends on it.

## Hard rules
- No provider key (OpenRouter, Groq, Gemini, Polar) ever in frontend code or `VITE_*`. Server-only.
- Model choice per situation lives in `agent_registry.routing_config`, not hardcoded in React.
- Any new agent = registered in `agent_registry` first, then wired in UI.

**Why:** owner runs a sovereign AI stack; a stray gateway call in the core path breaks sovereignty, cost model, and Sherlock's audit chain.
