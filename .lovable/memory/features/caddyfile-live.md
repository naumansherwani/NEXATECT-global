---
name: Live Caddyfile map (Hetzner, LOCKED)
description: Authoritative /etc/caddy/Caddyfile domain → localhost port map for nexatect.com, anexvotpay.com, axonetis.com and industry workspaces. Read before proposing any subdomain/route.
type: feature
---
# /etc/caddy/Caddyfile — Hetzner 88.198.208.90 (snapshot Aug 2026)

Global: `email admin@nexatect.com`, `on_demand_tls { ask http://localhost:8088/check-domain }`

## nexatect.com
| Host | Upstream |
|---|---|
| nexatect.com, www | :4173 |
| app.nexatect.com | :3002 |
| aicrm.nexatect.com | :3009 |
| foundermail.nexatect.com | :8081 |
| docs / status / admin / settings | :3003 / :3004 / :3007 / :3008 |
| preview.nexatect.com | :3001 (on-demand TLS) |
| auth.nexatect.com | :54321 |
| storage.nexatect.com | :8091 |
| cdn.nexatect.com | file_server /var/www/nexatect-cdn |
| api.nexatect.com | :8088 — **founder IP allowlist only**, else 403 |
| foundercrm.nexatect.com | :3000 (+ /hf/* → :8080, /ssh* → :8092) founder-IP only |
| foundercommandcenter / founderdashboard | :3005 / :3006 |

Industry workspaces → all :3002 —
`tth`, `airline`, `carrental`, `healthcare`, `education`, `logistics`, `railways`, `ee` (.nexatect.com)

## anexvotpay.com
Static file_server `/var/www/anexvotpay` (SPA try_files).

## axonetis.com (temporary until Server 3)
root+www → :3000 · api → :8088 · sandbox & `*.preview` → :3001 (on-demand TLS) · app → :3002 · docs → :3003 · status → :3004 · auth → :54321 · cdn → /var/www/axonetis-cdn · founderbuilder → :3000 founder-IP only

Founder IP allowlist: `39.40.0.0/13 182.176.0.0/12 119.160.0.0/13 127.0.0.1 ::1`

DKIM keys live at `/etc/opendkim/keys/foundermail.nexatect.com`.