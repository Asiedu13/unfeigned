import { Footer } from "@/components/Footer";

const NOW_ITEMS = [
  "Leading engineering at TTYM Global — rebuilding the midwife matching pipeline.",
  "Quietly shipping Repcollect updates on the side; the next one is about reconciliations.",
  "Reading more, tweeting less. Trying to write one essay a month.",
  "Based in Accra, Ghana. Open to interesting conversations.",
];

export const metadata = {
  title: "Now — Prince Asiedu",
};

export default function NowPage() {
  return (
    <div className="main-inner">
      <article className="prose">
        <div className="now-head">
          <h2 className="section-title">Now</h2>
          <span className="now-stamp">
            <span className="pulse" />
            updated this week
          </span>
        </div>

        <p className="dim small">
          A snapshot of what I&apos;m currently working on, thinking about, and
          avoiding. Inspired by{" "}
          <a href="https://degreat.co.uk/" target="_blank" rel="noreferrer">
            /notgrr
          </a>
          .
        </p>

        <ul className="now-list">
          {NOW_ITEMS.map((item, i) => (
            <li key={i}>
              <span className="now-dash">—</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
      <Footer />
    </div>
  );
}
