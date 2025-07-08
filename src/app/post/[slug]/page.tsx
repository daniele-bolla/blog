import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
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
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [rehypeSlug, rehypeKatex],
      },
    },
  });

  return <article className="prose prose-lg mx-auto">{content}</article>;
}
// export default async function Page({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   const { default: Post } = await import(`@/posts/${slug}.mdx`);

//   return <Post />;
// }

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
