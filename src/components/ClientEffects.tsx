"use client";

import dynamic from "next/dynamic";

// Neither affects first paint or LCP (both are no-ops until mounted), so keep
// their JS out of the initial bundle and load it once the page is idle.
const SmoothScroll = dynamic(() => import("./SmoothScroll").then((m) => m.SmoothScroll), {
  ssr: false,
});
const Cursor = dynamic(() => import("./Cursor").then((m) => m.Cursor), {
  ssr: false,
});

export function ClientEffects() {
  return (
    <>
      <SmoothScroll />
      <Cursor />
    </>
  );
}
