import { Butterfly } from "./Butterfly";
import { Eyebrow, Heading, Section } from "./Section";

const steps = [
  {
    n: "01",
    title: "Bring your list",
    body: "Import contacts and past coverage. Convix de-duplicates and enriches every record overnight.",
  },
  {
    n: "02",
    title: "Pitch in flight",
    body: "Send tailored pitches from the inbox, track opens and let the team pick up any thread.",
  },
  {
    n: "03",
    title: "Report without the scramble",
    body: "Coverage lands in the client portal automatically, with targets updating as you go.",
  },
];

export function WorkflowSection() {
  return (
    <Section id="how">
      <div className="relative overflow-hidden rounded-[28px] bg-[#f5f2ee] p-6 sm:rounded-[36px] sm:p-12">
        <Butterfly className="absolute -right-6 -top-6 h-32 w-32 rotate-12" opacity={0.12} />
        <Butterfly
          className="absolute bottom-4 left-4 h-16 w-16 -rotate-12"
          color="#0b0f1a"
          opacity={0.06}
        />

        <div className="relative">
          <Eyebrow>How it works</Eyebrow>
          <Heading plain="From first pitch to final" italic="report" />

          <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-6 text-left">
                <span
                  className="text-[#ef4d23]"
                  style={{ fontSize: 13, letterSpacing: "0.08em" }}
                >
                  {s.n}
                </span>
                <h3
                  className="mt-3 text-neutral-900"
                  style={{ fontSize: 18, fontWeight: 500 }}
                >
                  {s.title}
                </h3>
                <p
                  className="mt-2 text-neutral-600"
                  style={{ fontSize: 14, lineHeight: 1.6 }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default WorkflowSection;
