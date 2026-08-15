import { Check } from "lucide-react";
import { Eyebrow, Heading, Section } from "./Section";

const plans = [
  {
    name: "Studio",
    price: "$79",
    note: "per seat / month",
    body: "For boutique teams of up to eight running a handful of retained clients.",
    features: ["Media database", "Shared pitch inbox", "2 client portals", "Monthly reporting"],
    featured: false,
  },
  {
    name: "Agency",
    price: "$149",
    note: "per seat / month",
    body: "For growing agencies that need workflows, targets and coverage analytics.",
    features: [
      "Everything in Studio",
      "Unlimited client portals",
      "Campaign workflows",
      "Share of voice analytics",
      "Assisted drafting",
    ],
    featured: true,
  },
  {
    name: "Network",
    price: "Let's talk",
    note: "custom",
    body: "For multi-office networks with bespoke security and reporting needs.",
    features: ["SSO & audit logs", "Custom integrations", "Dedicated success lead", "99.9% uptime SLA"],
    featured: false,
  },
];

export function Pricing() {
  return (
    <Section id="pricing">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Pricing</Eyebrow>
        <Heading plain="Simple plans, no" italic="surprises" />
        <p className="mt-4 max-w-xl text-neutral-600" style={{ fontSize: 15 }}>
          Every plan includes onboarding, data migration and unlimited coverage clips.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`flex flex-col rounded-3xl p-6 text-left sm:p-7 ${
              p.featured
                ? "bg-[#0b0f1a] text-white"
                : "border border-neutral-200/70 bg-white text-neutral-900"
            }`}
          >
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 15, fontWeight: 500 }}>{p.name}</span>
              {p.featured ? (
                <span
                  className="rounded-full bg-[#ef4d23] px-3 py-1"
                  style={{ fontSize: 11 }}
                >
                  Most popular
                </span>
              ) : null}
            </div>

            <div className="mt-5 flex items-end gap-2">
              <span style={{ fontSize: 34, fontWeight: 500, letterSpacing: "-0.02em" }}>
                {p.price}
              </span>
              <span className={p.featured ? "pb-1.5 opacity-60" : "pb-1.5 text-neutral-500"} style={{ fontSize: 12 }}>
                {p.note}
              </span>
            </div>

            <p
              className={p.featured ? "mt-3 opacity-75" : "mt-3 text-neutral-600"}
              style={{ fontSize: 14, lineHeight: 1.6 }}
            >
              {p.body}
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2" style={{ fontSize: 14 }}>
                  <Check
                    className={`mt-0.5 h-4 w-4 shrink-0 ${
                      p.featured ? "text-[#ef4d23]" : "text-[#ef4d23]"
                    }`}
                  />
                  <span className={p.featured ? "opacity-90" : "text-neutral-700"}>{f}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`mt-8 w-full rounded-full py-2.5 ${
                p.featured
                  ? "bg-[#ef4d23] text-white"
                  : "border border-neutral-300 text-neutral-900"
              }`}
              style={{ fontSize: 14 }}
            >
              {p.price === "Let's talk" ? "Contact sales" : "Start free trial"}
            </button>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Pricing;
