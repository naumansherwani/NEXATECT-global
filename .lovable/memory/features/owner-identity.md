---
name: Owner identity + legal name (LOCKED)
description: Founder email naumansherwani.founder@nexatect.com, legacy hostflowai.net kept only for login, legal company name NEXATECT Global Pvt Limited
type: feature
---
- Founder/owner email everywhere in UI, signatures, notifications: **naumansherwani.founder@nexatect.com**
- Legacy `naumansherwani@hostflowai.net` is still the auth row email → kept ONLY inside `src/lib/ownerIdentity.ts` owner allow-list so login keeps working until the auth email is changed. Never show it in UI.
- Notifications mirror: naumankhansherwani@gmail.com
- Legal/company name in footer and all copy: **NEXATECT Global Pvt Limited** (was "NEXATECT Technologies" / "HostFlow AI Technologies").
- User-facing domain everywhere: **nexatect.com** (hostflowai.net retired; only `api.hostflowai.net` brain origin in `src/lib/replitBase.ts` stays until the brain moves).
