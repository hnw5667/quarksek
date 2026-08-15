const columns = [
  { title: "Product", links: ["Features", "Pricing", "Client portals", "Changelog"] },
  { title: "Company", links: ["About", "Careers", "Press kit", "Contact"] },
  { title: "Resources", links: ["Guides", "Media database", "Help centre", "Status"] },
];

export function Footer() {
  return (
    <footer className="px-3 pb-4 sm:px-4 sm:pb-6">
      <div className="mx-auto w-full max-w-[1100px] rounded-[28px] bg-[#f5f2ee] px-6 py-10 sm:rounded-[36px] sm:px-10 sm:py-12">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div
              className="text-neutral-900"
              style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}
            >
              Convix Software
            </div>
            <p className="mt-3 max-w-xs text-neutral-600" style={{ fontSize: 13, lineHeight: 1.6 }}>
              The all-in-one platform powering the future of PR agencies.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <div className="text-neutral-900" style={{ fontSize: 13, fontWeight: 500 }}>
                {c.title}
              </div>
              <ul className="mt-3 flex flex-col gap-2">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-neutral-600" style={{ fontSize: 13 }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-neutral-300/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-neutral-500" style={{ fontSize: 12 }}>
            © 2026 Convix Software. All rights reserved.
          </span>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Security"].map((l) => (
              <a key={l} href="#" className="text-neutral-500" style={{ fontSize: 12 }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
