---
name: Owner tech stack 2026 (LOCKED)
description: Final sovereign stack — tRPC primary, Bun+Rust/Tokio, Caddy HTTP/3, WebTransport primary transport, React 19 + Vite + Tailwind 4, Supabase, Redis, no Docker/Python. REST is optional legacy only.
type: constraint
---
# LOCKED STACK (Aug 2026)

Flow: **tRPC → Bun Runtime → Rust Workers → OpenRouter / Self-hosted models → Supabase + SDK → Reverse Proxy (Caddy)**

- **Reverse proxy / TLS:** Caddy only. HTTP/3 + QUIC, automatic HTTPS/TLS. No nginx, no Traefik, no Docker.
- **Backend comms:** tRPC is the primary interface. **REST is optional/legacy** — some systems still run on it out of necessity, so don't rip it out, but never add new REST as primary.
- **High-perf runtime:** Rust + Tokio workers. Bun for JS/TS services. **No Python.**
- **Frontend:** React 19, TypeScript, Vite, Tailwind CSS 4.
- **State:** TanStack Query + Zustand.
- **DB:** Supabase PostgreSQL (source of truth) + metadata.
- **Transport priority:** WebTransport (super primary) → WebSockets (fallback) → SSE (compatibility).
- **Infra:** Hetzner, Caddy, Bun, Rust, Redis, native Linux systemd services, Git/GitHub. No containers.