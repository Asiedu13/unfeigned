import Link from "next/link";
import { THOUGHTS } from "@/data/thoughts";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Thoughts — Prince Asiedu",
};

export default function ThoughtsPage() {
  return (
    <div className="main-inner">
      <article className="prose">
        <h2 className="section-title">Thoughts</h2>
        <p className="dim small">
          Mostly drafts in public — engineering, building in Ghana, working with
          small teams. Read more on{" "}
          <a
            href="https://substack.com/@princeasiedu"
            target="_blank"
            rel="noreferrer"
          >
            Substack
          </a>
          .
        </p>

        <ul className="thoughts-list">
          {THOUGHTS.map((t) => (
            <li key={t.slug} className="thought-row">
              <Link href={`/thoughts/${t.slug}`} className="thought-title">
                {t.title}
              </Link>
              <span className="leader" aria-hidden="true" />
              <span className="thought-date">{t.date}</span>
            </li>
          ))}
        </ul>
      </article>
      <Footer />
    </div>
  );
}
