import { notFound } from "next/navigation";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { getThought, getAdjacentThoughts, getAllThoughtSlugs } from "@/lib/mdx";
import { mdxComponents } from "@/components/MdxComponents";
import { TOC } from "@/components/TOC";
import { PrevNext } from "@/components/PrevNext";
import { Footer } from "@/components/Footer";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return getAllThoughtSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const thought = await getThought(slug);
  if (!thought) return {};
  return { title: `${thought.frontmatter.title} — Prince Asiedu` };
}

export default async function ThoughtPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const thought = await getThought(slug);
  if (!thought) notFound();

  const { content } = await compileMDX({
    source: thought.content,
    components: mdxComponents,
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    },
  });

  const { prev, next } = getAdjacentThoughts(slug);
  const { frontmatter } = thought;
  const toc = frontmatter.toc ?? [];

  return (
    <div className="main-inner main-inner--wide">
      <div className="thought-page">
        <article className="prose thought-article">
          <Link href="/thoughts" className="back-link">
            ← thoughts
          </Link>

          <header className="thought-header">
            <h1 className="thought-h1">{frontmatter.title}</h1>
            <div className="thought-meta">
              <span>{frontmatter.date.replace(/\./g, " · ")}</span>
              <span className="sep">·</span>
              <span>{frontmatter.readMin} min read</span>
            </div>
          </header>

          <div className="thought-body">{content}</div>

          <PrevNext prev={prev} next={next} />
        </article>
        <TOC items={toc} />
      </div>
      <Footer />
    </div>
  );
}
