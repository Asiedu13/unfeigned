import { Footer } from "@/components/Footer";
import { PROJECTS } from "@/data/projects";

export const metadata = {
  title: "Projects — Prince Asiedu",
};

export default function ProjectsPage() {
  return (
    <div className="main-inner">
      <article className="prose">
        <h2 className="section-title">Projects</h2>
        <p className="dim small">
          A few things I&apos;ve built or led. Not exhaustive — just the ones
          I&apos;m still proud of.
        </p>

        <div className="project-list">
          {PROJECTS.map((p) => (
            <div key={p.name} className="project">
              <div className="project-head">
                <span className="project-name">
                  {p.href ? (
                    <a href={p.href} target="_blank" rel="noreferrer">
                      {p.name}
                    </a>
                  ) : (
                    p.name
                  )}
                </span>
                <span className="project-year">{p.year}</span>
              </div>
              <p className="project-blurb">{p.blurb}</p>
            </div>
          ))}
        </div>
      </article>

      <Footer />
    </div>
  );
}
