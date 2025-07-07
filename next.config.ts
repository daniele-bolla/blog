/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true, // GitHub Pages requires this
  basePath: "/blog", //
};
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [require("remark-math")],
    rehypePlugins: [
      [
        require("rehype-katex"),
        {
          output: "mathml",
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
