---
name: Infra stack rules (owner-locked)
description: Owner's server stack — NO Docker, NO Python. Caddy + systemd on Hetzner. AI via OpenRouter (owner's own key). Read before proposing any install/run command.
type: constraint
---

# Owner's real infrastructure (locked 2026-08-03)

- **NO Docker.** Never propose `docker run` / compose. Everything runs as a **systemd service**.
- **Reverse proxy = Caddy** (`/etc/caddy/Caddyfile`, auto TLS). Never nginx, never manual certbot.
- **NO Python.** Runtimes allowed: **Bun, Node, Rust**. (tRPC / WebTransport are the chosen transports.)
- **AI models = OpenRouter with the owner's own key** for anything new. Ollama/Qwen on Hetzner stays for Jimmy/Sherlock/advisors. Do not push Lovable AI Gateway for owner-side backend AI.
- Hetzner: `88.198.208.90`, API `https://api.hostflowai.net/api`, PM2 for legacy node processes.
- Anything on Hetzner / Supabase #2 / #3 = **copy-paste block for the owner's terminal**. Lovable has no access.

## Before asking the owner a question
Read `.lovable/memory/MEMORY-BOOK.md` first. Do not ask about things already locked there.