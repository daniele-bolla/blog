import fs from "fs";
import path from "path";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from 'remark-frontmatter'

import CalloutBox from "@/components/CalloutBox";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "src/posts", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    components: {
      CalloutBox,
    },
    options: {
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath, remarkFrontmatter],
        rehypePlugins: [rehypeSlug, rehypeKatex],
      },
    },
  });

  return (
    <>
      <div className="bg-white  sticky top-0 px-4   z-60 ">
        <div className=" prose lg:prose-xl mx-auto ">
          <Link className="" href="/">
            ← Back to Posts
          </Link>
        </div>
      </div>
      <article className="prose lg:prose-xl px-4 lg:px-0 mx-auto text-justify">
        {content}
      </article>
    </>
  );
}

export async function generateStaticParams() {
  const fs = require("fs");
  const path = require("path");
  const postsDir = path.join(process.cwd(), "src/posts");

  const files = fs.readdirSync(postsDir);

  interface StaticParam {
    slug: string;
  }

  return files
    .filter((file: string) => file.endsWith(".mdx"))
    .map(
      (file: string): StaticParam => ({
        slug: file.replace(/\.mdx$/, ""),
      })
    );
}
