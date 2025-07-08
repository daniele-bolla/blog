import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/blog",
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: true, throwOnError: true }]],
  },
});

export default withMDX(nextConfig);
