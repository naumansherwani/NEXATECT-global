import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/nexatect-logo.jpg.asset.json";

const NAVY = "#1F385C";
const GOLD = "#CBB393";
const BASE = "#121418";
const PANEL = "#1A1D24";

const industries = [
  { name: "Hospitality", line: "Hotels, resorts & tours" },
  { name: "Airlines", line: "Fleet & fare intelligence" },
  { name: "Car Rental", line: "Utilisation & dynamic pricing" },
  { name: "Healthcare", line: "Clinics & appointment flow" },
  { name: "Education", line: "Cohorts & scheduling" },
  { name: "Logistics", line: "Fleet, drivers & routes" },
  { name: "Events", line: "Venues, seats & ticketing" },
  { name: "Railways", line: "Routes, coaches & seats" },
];

const stack = [
  ["Runtime", "Bun — 3x faster, Node compatible"],
  ["Security", "Manual permission grants + Rust core + Supabase RLS"],
  ["Transport", "SSE today → WebTransport over QUIC"],
  ["API", "tRPC — end-to-end type safety"],
  ["Database", "Supabase SDK direct — no ORM overhead"],
];

const NexatectDemo = () => {
  useEffect(() => {
    document.title = "NEXATECT — Cinematic UI Demo";
  }, []);

  return (
    <div
      className="min-h-screen w-full font-sans antialiased"
      style={{ background: BASE, color: "#E7E9EE" }}
    >
      {/* demo badge */}
      <div
        className="w-full text-center text-[11px] tracking-[0.25em] uppercase py-2"
        style={{ background: NAVY, color: GOLD }}
      >
        Demo preview · not live · NEXATECT rebrand direction
      </div>

      {/* nav */}
      <header
        className="sticky top-0 z-40 backdrop-blur-xl border-b"
        style={{ background: "rgba(18,20,24,0.72)", borderColor: "rgba(203,179,147,0.14)" }}
      >
        <div className="mx-auto max-w-6xl px-6 h-[72px] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="NEXATECT logo" className="h-9 w-9 rounded-md object-cover" />
            <span className="text-lg tracking-[0.28em] font-semibold" style={{ color: GOLD }}>
              NEXATECT
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/60">
            {["Platform", "Industries", "Architecture", "Pricing"].map((i) => (
              <span key={i} className="hover:text-white transition-colors cursor-default">{i}</span>
            ))}
          </nav>
          <button
            className="rounded-md px-5 py-2 text-sm font-medium transition-shadow"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #E4D3B6)`,
              color: "#15181D",
              boxShadow: `0 0 24px rgba(203,179,147,0.28)`,
            }}
          >
            Get Started
          </button>
        </div>
      </header>

      {/* hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[560px] w-[900px] rounded-full blur-[130px] opacity-40"
          style={{ background: `radial-gradient(circle, ${NAVY} 0%, transparent 70%)` }}
        />
        <div
          className="pointer-events-none absolute top-24 right-[10%] h-[280px] w-[280px] rounded-full blur-[120px] opacity-25"
          style={{ background: GOLD }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] tracking-[0.22em] uppercase mb-8"
            style={{ border: `1px solid ${NAVY}`, color: GOLD, background: "rgba(31,56,92,0.25)" }}
          >
            Autonomous Revenue Operating System
          </span>
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            The operating layer
            <br />
            <span
              style={{
                background: `linear-gradient(120deg, ${GOLD} 0%, #FFF3DC 45%, ${GOLD} 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              for eight industries
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg text-white/55 leading-relaxed">
            One sovereign AI core. Isolated data per industry. Real-time scheduling,
            pricing and revenue intelligence — engineered end to end.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              className="rounded-md px-7 py-3 text-sm font-semibold"
              style={{
                background: `linear-gradient(135deg, ${GOLD}, #E4D3B6)`,
                color: "#15181D",
                boxShadow: "0 0 34px rgba(203,179,147,0.32)",
              }}
            >
              Start free trial
            </button>
            <button
              className="rounded-md px-7 py-3 text-sm font-medium text-white/80"
              style={{ border: `1px solid ${NAVY}`, background: "rgba(31,56,92,0.28)" }}
            >
              See the architecture
            </button>
          </div>

          {/* metrics strip */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px rounded-xl overflow-hidden"
            style={{ background: "rgba(203,179,147,0.12)" }}>
            {[
              ["8", "Industries"],
              ["3", "Isolated data cores"],
              ["<40ms", "Realtime sync"],
              ["24/7", "Autonomous agents"],
            ].map(([v, l]) => (
              <div key={l} className="px-6 py-7" style={{ background: PANEL }}>
                <div className="text-3xl font-semibold" style={{ color: GOLD }}>{v}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/45">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* industries */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Built for <span style={{ color: GOLD }}>eight</span> verticals
        </h2>
        <p className="mt-3 text-white/50 max-w-xl">
          Every industry runs its own isolated workspace. No shared rows, no mixed data.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industries.map((it) => (
            <div
              key={it.name}
              className="group relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: PANEL,
                border: `1px solid rgba(31,56,92,0.9)`,
                boxShadow: "0 18px 40px -28px rgba(0,0,0,0.9)",
              }}
            >
              <div
                className="absolute inset-x-0 top-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
              />
              <div className="text-base font-medium">{it.name}</div>
              <div className="mt-2 text-sm text-white/45">{it.line}</div>
              <div
                className="mt-6 text-xs tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: GOLD }}
              >
                Explore →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* architecture */}
      <section
        className="border-y"
        style={{ borderColor: "rgba(203,179,147,0.12)", background: "rgba(31,56,92,0.10)" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A stack with <span style={{ color: GOLD }}>no compromises</span>
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed">
              Sovereign infrastructure. Type-safe end to end. Memory-safe execution core.
              Nothing rented, nothing leaked.
            </p>
          </div>
          <div className="space-y-3">
            {stack.map(([k, v]) => (
              <div
                key={k}
                className="flex items-start gap-5 rounded-lg px-5 py-4"
                style={{ background: PANEL, border: "1px solid rgba(31,56,92,0.9)" }}
              >
                <span
                  className="mt-0.5 text-[10px] uppercase tracking-[0.18em] w-24 shrink-0"
                  style={{ color: GOLD }}
                >
                  {k}
                </span>
                <span className="text-sm text-white/70">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* pricing — no launch discount copy */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">
          Simple, honest pricing
        </h2>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {[
            { n: "Basic", p: "£25", f: ["1 industry", "Core scheduling", "Email support"] },
            { n: "Pro", p: "£52", f: ["3 industries", "AI pricing engine", "Priority support"], hot: true },
            { n: "Premium", p: "£108", f: ["All 8 industries", "Full AI advisor suite", "Dedicated line"] },
          ].map((t) => (
            <div
              key={t.n}
              className="rounded-2xl p-8 relative"
              style={{
                background: PANEL,
                border: t.hot ? `1px solid ${GOLD}` : "1px solid rgba(31,56,92,0.9)",
                boxShadow: t.hot ? "0 0 46px -12px rgba(203,179,147,0.3)" : "none",
              }}
            >
              {t.hot && (
                <span
                  className="absolute -top-3 left-8 rounded-full px-3 py-1 text-[10px] tracking-[0.2em] uppercase"
                  style={{ background: GOLD, color: "#15181D" }}
                >
                  Most chosen
                </span>
              )}
              <div className="text-sm uppercase tracking-[0.2em] text-white/45">{t.n}</div>
              <div className="mt-4 text-4xl font-semibold">
                {t.p}
                <span className="text-base font-normal text-white/40"> /mo</span>
              </div>
              <ul className="mt-7 space-y-3 text-sm text-white/60">
                {t.f.map((f) => (
                  <li key={f} className="flex gap-3">
                    <span style={{ color: GOLD }}>—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className="mt-8 w-full rounded-md py-3 text-sm font-medium"
                style={
                  t.hot
                    ? { background: `linear-gradient(135deg, ${GOLD}, #E4D3B6)`, color: "#15181D" }
                    : { border: `1px solid ${NAVY}`, background: "rgba(31,56,92,0.3)", color: "#fff" }
                }
              >
                Choose {t.n}
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer
        className="border-t"
        style={{ borderColor: "rgba(203,179,147,0.12)", background: "#0F1115" }}
      >
        <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="NEXATECT" className="h-8 w-8 rounded-md object-cover" />
            <span className="tracking-[0.28em] text-sm" style={{ color: GOLD }}>NEXATECT</span>
          </div>
          <p className="text-xs text-white/35">
            Demo direction only · live site untouched ·{" "}
            <Link to="/" className="underline">back to current site</Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default NexatectDemo;