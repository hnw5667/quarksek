import { ChevronRight } from "lucide-react";
import { Butterfly } from "./Butterfly";

export function CTA() {
  return (
    <div className="px-3 pb-6 sm:px-4 sm:pb-8">
      <div className="relative mx-auto w-full max-w-[1100px] overflow-hidden rounded-[28px] bg-[#0b0f1a] px-6 py-14 text-center sm:rounded-[36px] sm:px-10 sm:py-20">
        <Butterfly className="absolute -left-8 top-6 h-36 w-36 -rotate-12" opacity={0.18} />
        <Butterfly className="absolute -bottom-8 right-2 h-40 w-40 rotate-12" opacity={0.12} />

        <div className="relative flex flex-col items-center">
          <h2
            className="max-w-2xl text-white"
            style={{
              fontSize: "clamp(28px, 6vw, 52px)",
              lineHeight: 1.08,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Give your agency room to{" "}
            <span
              style={{
                fontFamily: "'Instrument Serif', serif",
                fontStyle: "italic",
                fontWeight: 400,
              }}
            >
              breathe
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-white/70" style={{ fontSize: 15 }}>
            Start a 14-day trial. No card, no setup fee, and your data migrated for free.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full bg-[#ef4d23] py-2.5 pl-6 pr-2 text-white"
              style={{ fontSize: 14 }}
            >
              Get early access
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
                <ChevronRight className="h-4 w-4" />
              </span>
            </button>
            <button
              type="button"
              className="rounded-full border border-white/25 px-6 py-2.5 text-white"
              style={{ fontSize: 14 }}
            >
              Book a walkthrough
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
