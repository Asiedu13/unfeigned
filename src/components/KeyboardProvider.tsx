"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ROUTES: Record<string, string> = {
  a: "/",
  n: "/now",
  t: "/thoughts",
  p: "/projects",
  r: "/reading",
};

export function KeyboardProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [pendingG, setPendingG] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (pendingG) {
        const route = ROUTES[e.key.toLowerCase()];
        if (route) router.push(route);
        setPendingG(false);
        return;
      }

      if (e.key === "g") {
        setPendingG(true);
        setTimeout(() => setPendingG(false), 1200);
        return;
      }

      if (/^[1-5]$/.test(e.key)) {
        const routes = Object.values(ROUTES);
        const route = routes[parseInt(e.key, 10) - 1];
        if (route) router.push(route);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pendingG, router]);

  return (
    <>
      {children}
      {pendingG && (
        <div className="g-indicator">
          <span className="kbd">g</span>
          <span className="dim"> — next: a / n / t / p / r</span>
        </div>
      )}
    </>
  );
}
