import { ChevronDown, TrendingDown, TrendingUp, X } from "lucide-react";
import { Gauge } from "./Gauge";

function Toggle({ active, inactive }: { active: string; inactive: string }) {
  return (
    <div className="mt-4 flex rounded-full bg-neutral-100 p-1" style={{ fontSize: 12 }}>
      <span className="flex-1 rounded-full bg-white px-3 py-1.5 text-center shadow-sm">
        {active}
      </span>
      <span className="flex-1 px-3 py-1.5 text-center text-neutral-500">{inactive}</span>
    </div>
  );
}

function Select({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-neutral-700" style={{ fontSize: 12 }}>
        {label}
      </div>
      <button
        type="button"
        className="mt-1 flex w-full items-center justify-between rounded-lg border border-neutral-200 px-3 py-2 text-left"
        style={{ fontSize: 13 }}
      >
        <span>{value}</span>
        <ChevronDown className="h-4 w-4 text-neutral-500" />
      </button>
    </div>
  );
}

function NumberField({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="text-neutral-700" style={{ fontSize: 12 }}>
        {label}
      </div>
      <div className="mt-1 flex items-center gap-2 rounded-lg border border-neutral-200 px-3 py-2">
        <span className="text-neutral-400">#</span>
        <input
          type="text"
          defaultValue={value}
          className="w-full bg-transparent outline-none"
          style={{ fontSize: 13 }}
        />
      </div>
    </div>
  );
}

export function DashboardPreview() {
  return (
    <div className="px-3 sm:px-4">
      <div className="mx-auto w-full max-w-[880px] rounded-3xl bg-[#f5f2ee] p-4 sm:p-6">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-5 text-left">
            <div className="flex items-center justify-between" style={{ fontSize: 13 }}>
              <span className="text-[#ef4d23]">Clicks</span>
              <span className="text-neutral-500">This Month</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span style={{ fontSize: 28, fontWeight: 600 }}>6,896</span>
              <span
                className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-red-600"
                style={{ fontSize: 11 }}
              >
                <TrendingDown className="h-3 w-3" />
                -3,382 (33%)
              </span>
            </div>
            <div className="mt-1 text-neutral-500" style={{ fontSize: 11 }}>
              Compared to yesterday
            </div>
            <div className="mt-4 text-center text-neutral-500" style={{ fontSize: 12 }}>
              Month Target achieved
            </div>
            <Gauge value={92} color="#ef4d23" showLabels min="389K" max="425K" />
            <Toggle active="Impressions" inactive="Clicks" />
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-5 text-left">
            <Select label="Show figures for" value="This month" />
            <Select label="Compare period by" value="Month-to-date (MTD)" />
            <NumberField label="Ste targets (This month)" value={10} />
            <NumberField label="Ste targets (This year)" value={100} />
            <div className="mt-1 flex items-center gap-4" style={{ fontSize: 13 }}>
              <button
                type="button"
                className="rounded-lg bg-[#ef4d23] px-5 py-2 text-white"
              >
                Save
              </button>
              <button type="button" className="underline text-neutral-700">
                Cancel
              </button>
              <button type="button" aria-label="Close" className="ml-auto text-neutral-500">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-5 text-left">
            <div className="flex items-center justify-between" style={{ fontSize: 13 }}>
              <span className="text-[#ef4d23]">Video Starts</span>
              <span className="text-neutral-500">today</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span style={{ fontSize: 28, fontWeight: 600 }}>0</span>
              <span
                className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-600"
                style={{ fontSize: 11 }}
              >
                <TrendingUp className="h-3 w-3" />0
              </span>
            </div>
            <div className="mt-1 text-neutral-500" style={{ fontSize: 11 }}>
              Compared to yesterday
            </div>
            <div className="mt-6">
              <Gauge value={68} color="#9ca3af" />
            </div>
            <Toggle active="Video Clicks" inactive="Video Starts" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;
