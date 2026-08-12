---
name: Master AI Model Registry (Hetzner)
description: Locked ai-models.ts registry at /opt/hostflowai-brain/backend/src/config/ai-models.ts — providers, keys, per-agent models, credit costs, rate limits
type: feature
---
# Master AI Model Registry (LOCKED, Aug 2026)

File (owner-managed, NOT in Lovable repo):
`/opt/hostflowai-brain/backend/src/config/ai-models.ts`
Single source for all agent→model mapping. Ek jagah update, sab jagah apply.

## Providers
- openrouter: https://openrouter.ai/api/v1/chat/completions
- deepinfra:  https://api.deepinfra.com/v1/openai/chat/completions

## Keys (env)
OPENROUTER_API_KEY_1/2/3 → or1/or2/or3 · DEEPINFRA_API_KEY_1/2 → di1/di2

## Agents → models
- **jimmy** (AXONETIS builder, awam): primary claude-sonnet-5 (di1) · code Qwen3-Coder-480B-A35B-Instruct · reason DeepSeek-R1-0528 · fallback DeepSeek-V4-Flash · free Llama-3.3-70B-Instruct-Turbo
- **jimmy_founder** (Nauman only): anthropic/claude-sonnet-5 (or1) · fallback anthropic/claude-sonnet-4-6
- **sherlock**: DeepSeek-R1-0528 (di1) · fallback DeepSeek-V4-Pro
- **leo** (ANEXOMAIL): claude-haiku-4-5 (di2) · fallback DeepSeek-V4-Flash · free Meta-Llama-3.1-8B-Instruct-Turbo
- **aria** Travel/Hospitality: gemini-2.5-flash · vision Qwen3-VL-235B-A22B-Instruct · fallback Llama-3.3-70B
- **orion** Airlines: gemini-2.5-flash · fallback DeepSeek-V4-Flash
- **rex** Car Rental: DeepSeek-V4-Pro · fallback V4-Flash
- **lyra** Healthcare (SAFETY CRITICAL): claude-sonnet-5 (di1) · fallback anthropic/claude-sonnet-4-6 (or1)
- **sage** Education: Qwen3-235B-A22B-Instruct-2507 · fallback V4-Flash
- **atlas** Logistics: DeepSeek-V4-Pro · fallback V4-Flash
- **vega** Events: gemini-2.5-flash · fallback V4-Flash
- **kai** Railways: gemini-2.5-flash · fallback V4-Flash

## Credit cost per call type
standard 0.5 · advanced 2 · vision 3 · bulk 5

## Rate limits (daily/monthly, -1 = unlimited)
free 5/50 · basic 50/1000 · pro 200/5000 · premium -1 · founder -1

## Helper
`getModelConfig(agent, tier="primary")` → { model, endpoint, apiKey, provider }

**Rule:** Model names/providers NEVER exposed to users in UI, logs, or API responses.
