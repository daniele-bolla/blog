import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc"; // yes, now works in App Router
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import CalloutBox from "@/components/CalloutBox";
import MathBlock from "@/components/MathBlock";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const filePath = path.join(process.cwd(), "src/posts", `${params.slug}.mdx`);
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
