---
name: GitHub push/pull delivery rule (LOCKED Aug 2026)
description: All Lovable website code changes are pushed to GitHub by Lovable; owner pulls on Hetzner. Always end work by giving the exact git pull command.
type: preference
---
From Aug 2026 onwards: Lovable pushes all website code to GitHub (Git sync). Owner never copy-pastes website files anymore — he runs `git pull` on the Hetzner box.

**How to apply:** After every batch of website code changes, end the reply with the copy-paste pull command, e.g.
```bash
cd /var/www/nexatect && git pull origin main && bun install && bun run build && systemctl reload caddy
```
Copy-paste handoff stays only for non-Lovable systems (Supabase #2/#3/#4 edge functions, Caddyfile, systemd units).