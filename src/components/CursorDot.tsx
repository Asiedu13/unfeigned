"use client";

import { useEffect, useRef, useState } from "react";

export function CursorDot() {
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const t = e.target as Element | null;
      setHover(!!(t?.closest("a") || t?.closest("button")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className={`cursor-dot${hover ? " is-hover" : ""}`}
      aria-hidden="true"
    />
  );
}
