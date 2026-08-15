import { Eyebrow, Heading, Section } from "./Section";

const quotes = [
  {
    quote:
      "We ran a product launch across nine markets without a single spreadsheet. The reporting alone won us the renewal.",
    name: "Marta Ellis",
    role: "Managing Director, Meadowline",
  },
  {
    quote:
      "Our juniors ramp in a week instead of a quarter. Everything a campaign needs lives in one calm place.",
    name: "Dev Raghunathan",
    role: "Head of Comms, Perch Media",
  },
  {
    quote:
      "Clients stopped asking for updates — they just open the portal. That changed the whole relationship.",
    name: "Sofie Lindqvist",
    role: "Partner, Northgate PR",
  },
];

export function Testimonials() {
  return (
    <Section id="stories">
      <div className="flex flex-col items-center text-center">
        <Eyebrow>Client stories</Eyebrow>
        <Heading plain="Agencies that feel" italic="lighter" after="already" />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-3 sm:mt-14 sm:gap-4 lg:grid-cols-3">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="flex flex-col justify-between rounded-3xl bg-[#0b0f1a] p-6 text-left text-white/90 first:bg-[#ef4d23] first:text-white"
          >
            <blockquote style={{ fontSize: 16, lineHeight: 1.6 }}>“{q.quote}”</blockquote>
            <figcaption className="mt-8" style={{ fontSize: 13 }}>
              <div style={{ fontWeight: 500 }}>{q.name}</div>
              <div className="opacity-70">{q.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

export default Testimonials;
