import { Footer } from "@/components/Footer";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/princek-asiedu/" },
  { label: "Substack", href: "https://substack.com/@princeasiedu" },
  { label: "X/Twitter", href: "https://x.com/Prince_KAsiedu" },
  { label: "Email", href: "mailto:princekofasiedu@gmail.com" },
];

export default function AboutPage() {
  return (
    <div className="main-inner">
      <article className="prose">
        <h1 className="name">Prince Asiedu</h1>
        <p className="role-line">
          Software Engineer · CTO at{" "}
          <a
            href="https://www.talktoyourmidwife.com/"
            target="_blank"
            rel="noreferrer"
          >
            TTYM Global
          </a>
          <span className="dot">·</span>
          Accra, Ghana
        </p>

        <p>
          Hi, I&apos;m Prince. I build software for the small, stubborn problems
          that teams and communities run into — payments between friends,
          finding a midwife at 2am, the kind of thing that should already exist
          but somehow doesn&apos;t.
        </p>

        <p>
          I started out as a backend intern at <em>Vibrainiuum Technologies</em>
          , then a Junior Software Engineer at <em>ReneboaITS</em>. I joined{" "}
          <em>TTYM Global</em> &nbsp;as Lead Engineer and now serve as CTO,
          where I&apos;m rebuilding our midwife matching platform. On the side I
          run{" "}
          <a href="https://repcollect.app/" target="_blank" rel="noreferrer">
            Repcollect
          </a>
          , a tool for the way social groups in Ghana actually handle dues.
        </p>

        <p>
          I like systems that quietly do their job, code I can come back to in a
          year and still understand, and conversations that go a little longer
          than they need to. Outside of shipping, I write occasionally on{" "}
          <a
            href="https://substack.com/@princeasiedu"
            target="_blank"
            rel="noreferrer"
          >
            Substack
          </a>
          .
        </p>

        <p className="dim">
          You can find me on{" "}
          {SOCIALS.map((s, i) => (
            <span key={s.label}>
              <a href={s.href} target="_blank" rel="noreferrer">
                {s.label}
              </a>
              {i < SOCIALS.length - 1 && <span>, </span>}
            </span>
          ))}
          .
        </p>
      </article>
      <Footer />
    </div>
  );
}
