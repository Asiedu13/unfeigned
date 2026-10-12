import Link from "next/link";
import { type Thought } from "@/data/thoughts";

export function PrevNext({
  prev,
  next,
}: {
  prev: Thought | null;
  next: Thought | null;
}) {
  return (
    <nav className="thought-nav" aria-label="Pagination">
      <div className="thought-nav-cell">
        {prev && (
          <Link href={`/thoughts/${prev.slug}`} className="nav-prev">
            <span className="nav-cap">← previous</span>
            <span className="nav-title">{prev.title}</span>
          </Link>
        )}
      </div>
      <div className="thought-nav-cell right">
        {next && (
          <Link href={`/thoughts/${next.slug}`} className="nav-next">
            <span className="nav-cap">next →</span>
            <span className="nav-title">{next.title}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}
