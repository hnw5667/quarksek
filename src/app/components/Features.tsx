import { BarChart3, Inbox, Newspaper, Sparkles, Users, Workflow } from "lucide-react";
import { Eyebrow, Heading, Section } from "./Section";

const features = [
  {
    icon: Newspaper,
    title: "Media database",
    body: "Two million journalists, editors and creators — filtered by beat, outlet and recent coverage.",
  },
  {
    icon: Inbox,
    title: "Pitch inbox",
    body: "Every reply, follow-up and embargo in one shared thread your whole team can see.",
  },
  {
    icon: BarChart3,
    title: "Coverage analytics",
    body: "Clips, reach and share of voice measured against the targets you set each month.",
  },
  {
    icon: Workflow,
    title: "Campaign workflows",
    body: "Templates for launches, funding news and crisis comms that keep everyone in step.",
  },
  {
    icon: Users,
    title: "Client portals",
    body: "A calm, branded space where clients see progress without another status call.",
  },
  {
    icon: Sparkles,
    title: "Assisted drafting",
    body: "Draft releases and tailored pitches in your agency's voice, then edit with a light touch.",
  },
];

export function Features() {
  return (
    <Section id="features">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Everything in one place</Eyebrow>
        <Heading plain="One quiet workspace for" italic="loud" after="results" />
        <p className="mt-4 max-w-xl text-neutral-600" style={{ fontSize: 15 }}>
          Replace the spreadsheet, the inbox rules and the three tools nobody logs into.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-3xl border border-neutral-200/70 bg-white p-6 text-left"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f2ee]">
              <f.icon className="h-5 w-5 text-[#ef4d23]" />
            </span>
            <h3 className="mt-4 text-neutral-900" style={{ fontSize: 17, fontWeight: 500 }}>
              {f.title}
            </h3>
            <p className="mt-2 text-neutral-600" style={{ fontSize: 14, lineHeight: 1.6 }}>
              {f.body}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Features;
