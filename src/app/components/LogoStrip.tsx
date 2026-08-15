const logos = ["Meadowline", "Northgate PR", "Lumen & Co", "Perch Media", "Aster Group"];

export function LogoStrip() {
  return (
    <div className="px-3 pt-10 sm:px-4 sm:pt-14">
      <div className="mx-auto w-full max-w-[1100px] text-center">
        <p className="text-neutral-500" style={{ fontSize: 13 }}>
          Trusted by communications teams in 24 countries
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-14">
          {logos.map((l) => (
            <span
              key={l}
              className="text-neutral-500"
              style={{ fontSize: "clamp(14px, 3.2vw, 18px)", letterSpacing: "-0.01em" }}
            >
              {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LogoStrip;
