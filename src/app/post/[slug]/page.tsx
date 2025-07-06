import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc"; // yes, now works in App Router
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    },
  });

  return <article className="prose prose-lg mx-auto">{content}</article>;
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
