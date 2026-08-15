import { useState } from "react";
import { Plus } from "lucide-react";
import { Eyebrow, Heading, Section } from "./Section";

const faqs = [
  {
    q: "How long does migration take?",
    a: "Most agencies are fully live within five working days. We import contacts, past coverage and client lists for you.",
  },
  {
    q: "Can clients log in directly?",
    a: "Yes. Each client gets a branded portal with live coverage, targets and reports — read-only and always current.",
  },
  {
    q: "Where is our data stored?",
    a: "In EU or US regions of your choosing, encrypted at rest, with audit logs available on the Network plan.",
  },
  {
    q: "Do you charge for extra clients?",
    a: "No. Pricing is per seat, so you can take on as many clients and campaigns as your team can handle.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <div className="text-left">
          <Eyebrow>Questions</Eyebrow>
          <Heading plain="Good to" italic="know" />
        </div>

        <div className="flex flex-col gap-2">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className="rounded-2xl border border-neutral-200/70 bg-white px-5 py-4 text-left"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 text-left"
                  style={{ fontSize: 15, fontWeight: 500 }}
                  aria-expanded={isOpen}
                >
                  {f.q}
                  <Plus
                    className={`h-4 w-4 shrink-0 text-[#ef4d23] ${isOpen ? "rotate-45" : ""}`}
                  />
                </button>
                {isOpen ? (
                  <p
                    className="mt-3 text-neutral-600"
                    style={{ fontSize: 14, lineHeight: 1.65 }}
                  >
                    {f.a}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

export default FAQ;
