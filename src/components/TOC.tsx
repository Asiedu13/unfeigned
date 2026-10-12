"use client";

import { useEffect, useState } from "react";

type TocItem = { id: string; label: string };

export function TOC({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0% -70% 0%", threshold: 0 },
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const main = document.querySelector(".main");
    if (!main) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const top =
      el.getBoundingClientRect().top -
      main.getBoundingClientRect().top +
      main.scrollTop -
      80;
    main.scrollTo({ top, behavior: "smooth" });
  };

  if (!items.length) return null;

  return (
    <aside className="toc" aria-label="On this page">
      <div className="toc-label">On this page</div>
      <ul className="toc-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`toc-item${activeId === item.id ? " is-active" : ""}`}
          >
            <button
              type="button"
              className="toc-link"
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
