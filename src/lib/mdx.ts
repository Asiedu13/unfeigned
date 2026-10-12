import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { THOUGHTS, type Thought } from "@/data/thoughts";

const CONTENT_DIR = path.join(process.cwd(), "src/content/thoughts");

export type ThoughtFrontmatter = {
  title: string;
  date: string;
  readMin: number;
  toc?: { id: string; label: string }[];
};

export async function getThought(slug: string): Promise<{
  frontmatter: ThoughtFrontmatter;
  content: string;
} | null> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  return {
    frontmatter: data as ThoughtFrontmatter,
    content,
  };
}

export function getAdjacentThoughts(slug: string): {
  prev: Thought | null;
  next: Thought | null;
} {
  const idx = THOUGHTS.findIndex((t) => t.slug === slug);
  return {
    prev: idx > 0 ? THOUGHTS[idx - 1] : null,
    next: idx < THOUGHTS.length - 1 ? THOUGHTS[idx + 1] : null,
  };
}

export function getAllThoughtSlugs(): string[] {
  return THOUGHTS.map((t) => t.slug);
}
