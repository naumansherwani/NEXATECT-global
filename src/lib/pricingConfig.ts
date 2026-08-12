/**
 * Central pricing configuration for NEXATECT.
 * Base currency: GBP (£). Polar prices created in GBP.
 *
 * Business model (owner-locked): AI credits are the only AI currency.
 * No free AI for anyone. Per-credit rates are INTERNAL ONLY — never shown in UI.
 */

export const LAUNCH_DISCOUNT = {
  campaignStart: "2026-04-24T00:00:00Z",
  campaignEnd: "2026-07-31T23:59:59Z",
  capPerPlan: 100,
  // 12-month price lock for users who claim during the window
  lockMonths: 12,
} as const;

export type PlanKey = "basic" | "pro" | "premium" | "business";

export interface PlanPricing {
  key: PlanKey;
  name: string;
  basePriceGBP: number;
  /** Included AI credits per month */
  credits: number;
  discountPercent: number;
}

export const PLAN_PRICING: Record<PlanKey, PlanPricing> = {
  basic:    { key: "basic",    name: "Basic",    basePriceGBP: 25,   credits: 100,  discountPercent: 12 },
  pro:      { key: "pro",      name: "Pro",      basePriceGBP: 52,   credits: 250,  discountPercent: 15 },
  premium:  { key: "premium",  name: "Premium",  basePriceGBP: 110,  credits: 600,  discountPercent: 20 },
  business: { key: "business", name: "Business", basePriceGBP: 1000, credits: 5000, discountPercent: 0  },
};

export function discountedPrice(plan: PlanKey): number {
  const p = PLAN_PRICING[plan];
  return Math.round(p.basePriceGBP * (1 - p.discountPercent / 100) * 100) / 100;
}

/** One-off AI credit top-ups. Only £ price + credits are shown to users. */
export interface TopUp {
  id: string;
  priceGBP: number;
  credits: number;
}

export const TOP_UPS: TopUp[] = [
  { id: "topup_15",   priceGBP: 15,   credits: 40 },
  { id: "topup_30",   priceGBP: 30,   credits: 75 },
  { id: "topup_60",   priceGBP: 60,   credits: 170 },
  { id: "topup_120",  priceGBP: 120,  credits: 360 },
  { id: "topup_250",  priceGBP: 250,  credits: 800 },
  { id: "topup_500",  priceGBP: 500,  credits: 1800 },
  { id: "topup_1000", priceGBP: 1000, credits: 4000 },
  { id: "topup_2000", priceGBP: 2000, credits: 9000 },
  { id: "topup_5000", priceGBP: 5000, credits: 21500 },
];

export type LaunchPlanStatus = "upcoming" | "active" | "sold_out" | "expired";

export interface LaunchDiscountStatus {
  campaign_start: string;
  campaign_end: string;
  now: string;
  cap_per_plan: number;
  plans: Record<PlanKey, {
    discount_percent: number;
    redeemed: number;
    remaining: number;
    status: LaunchPlanStatus;
  }>;
}
