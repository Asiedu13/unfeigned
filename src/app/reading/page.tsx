import { Footer } from "@/components/Footer";
import { READING, GROUP_LABELS, type Book } from "@/data/reading";

export const metadata = {
  title: "Reading — Prince Asiedu",
};

const STATES: Book["state"][] = ["now", "rereading", "queued", "finished"];

export default function ReadingPage() {
  const groups = STATES.map((state) => ({
    state,
    label: GROUP_LABELS[state],
    books: READING.filter((b) => b.state === state),
  })).filter((g) => g.books.length > 0);

  return (
    <div className="main-inner">
      <article className="prose">
        <h2 className="section-title">Reading</h2>
        <p className="dim small">
          Books I&apos;m with right now, and ones I&apos;ve put down recently. I
          read slower than I&apos;d like.
        </p>

        <div className="reading-groups">
          {groups.map(({ state, label, books }) => (
            <div key={state} className="reading-group">
              <div className="reading-group-label">{label}</div>
              <ul className="reading-list">
                {books.map((b) => (
                  <li key={b.title}>
                    <span className="book-title">{b.title}</span>
                    <span className="book-author"> — {b.author}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
      <Footer />
    </div>
  );
}
