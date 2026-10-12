"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { id: "about", label: "about", href: "/" },
  { id: "now", label: "now", href: "/now" },
  { id: "thoughts", label: "thoughts", href: "/thoughts" },
  { id: "projects", label: "projects", href: "/projects" },
  { id: "reading", label: "reading", href: "/reading" },
];

const SHORTCUTS = [
  { keys: ["g", "a"], desc: "about" },
  { keys: ["g", "n"], desc: "now" },
  { keys: ["g", "t"], desc: "thoughts" },
  { keys: ["g", "p"], desc: "projects" },
  { keys: ["g", "r"], desc: "reading" },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "";
    return pathname.startsWith(href);
  };

  return (
    <nav className="sidebar" aria-label="Primary">
      <ul className="nav-list">
        {NAV.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`nav-item${isActive(item.href) ? " is-active" : ""}`}
              style={{ display: "block" }}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="sidebar-foot">
        <div className="kbd-hint">
          <div className="kbd-hint-title">Keyboard</div>
          <ul className="kbd-list">
            {SHORTCUTS.map((s) => (
              <li key={s.desc}>
                {s.keys.map((k) => (
                  <span key={k} className="kbd">
                    {k}
                  </span>
                ))}
                <span className="kbd-desc">{s.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
