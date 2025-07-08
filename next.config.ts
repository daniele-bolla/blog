// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   trailingSlash: true, // GitHub Pages requires this
//   basePath: "/blog", //
// };
// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [require("remark-math")],
//     rehypePlugins: [
//       [
//         require("rehype-katex"),
//         {
//           output: "mathml",
//         },
//       ],
//     ],
//   },
// });

// export default withMDX(nextConfig);
import remarkGfm from "remark-gfm";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import rehypeSlug from "rehype-slug";
import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeKatex, { strict: true, throwOnError: true }]],
  },
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
