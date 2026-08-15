import { createFileRoute } from "@tanstack/react-router";
import { App } from "@/app/App";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Convix Software — All-In-One PR Agency Platform" },
      {
        name: "description",
        content:
          "Convix Software is the all-in-one platform powering the future of PR agencies: campaign clicks, targets and media performance in one dashboard.",
      },
      { property: "og:title", content: "Convix Software — Shaping Agencies of Tomorrow" },
      {
        property: "og:description",
        content:
          "The all-in-one software powering the future of PR agencies. Track clicks, targets and video performance in real time.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: App,
});
