import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export",
  trailingSlash: true, // GitHub Pages requires this
  basePath: "/blog", //
};
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-math")],
    rehypePlugins: [require("rehype-katex")],
  },
});

export default withMDX(nextConfig);
