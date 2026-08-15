import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, ShoppingCart } from "lucide-react";

const PETALS = Array.from({ length: 8 }).map((_, i) => {
  const angle = (i / 8) * Math.PI * 2;
  return { cx: 16 + Math.cos(angle) * 10, cy: 16 + Math.sin(angle) * 10 };
});

function Logo() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" aria-hidden="true">
      {PETALS.map((p, i) => (
        <circle key={i} cx={p.cx} cy={p.cy} r={3.5} fill="#ef4d23" />
      ))}
      <circle cx={16} cy={16} r={3.5} fill="#ef4d23" />
    </svg>
  );
}

const links = [
  { label: "Home", dot: true },
  { label: "Features" },
  { label: "About" },
  { label: "Pages", caret: true },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center px-3 pt-4 sm:px-4 sm:pt-6">
      <nav className="relative w-full max-w-[760px] rounded-full border border-neutral-200 bg-white py-2 pl-2 pr-2 shadow-sm">
        <div className="flex items-center gap-4">
          <a href="#" aria-label="Convix Software home" className="shrink-0">
            <Logo />
          </a>

          <div className="hidden items-center gap-6 md:flex" style={{ fontSize: 14 }}>
            {links.map((l) => (
              <a
                key={l.label}
                href="#"
                className={`inline-flex items-center gap-1.5 ${
                  l.caret ? "text-[#ef4d23]" : "text-neutral-900"
                }`}
              >
                {l.dot ? (
                  <span className="inline-block h-[1.5px] w-[1.5px] rounded-full bg-black" />
                ) : null}
                {l.label}
                {l.caret ? <ChevronDown className="h-3.5 w-3.5" /> : null}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <ShoppingCart className="hidden h-4 w-4 text-neutral-800 sm:block" />
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#ef4d23] py-2 pl-4 pr-2 text-white"
              style={{ fontSize: 14 }}
            >
              <span className="hidden sm:inline">Get early access</span>
              <span className="sm:hidden">Early access</span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <ChevronRight className="h-3.5 w-3.5" />
              </span>
            </button>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-900 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {open ? (
          <div className="absolute left-2 right-2 top-full z-20 mt-2 rounded-2xl border border-neutral-200 bg-white p-3 shadow-lg md:hidden">
            <div className="flex flex-col" style={{ fontSize: 14 }}>
              {links.map((l) => (
                <a
                  key={l.label}
                  href="#"
                  className={`inline-flex items-center gap-1.5 rounded-lg px-2 py-2 ${
                    l.caret ? "text-[#ef4d23]" : "text-neutral-900"
                  }`}
                >
                  {l.dot ? (
                    <span className="inline-block h-[1.5px] w-[1.5px] rounded-full bg-black" />
                  ) : null}
                  {l.label}
                  {l.caret ? <ChevronDown className="h-3.5 w-3.5" /> : null}
                </a>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
}

export default Navbar;
