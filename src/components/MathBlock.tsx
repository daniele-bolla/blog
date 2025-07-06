"use client";

import katex from "katex";
import { useMemo } from "react";

type Props = {
  latex: string;
  displayMode?: boolean; // true for block, false for inline
};

export default function MathBlock({ latex, displayMode = true }: Props) {
  const rendered = useMemo(() => {
    try {
      return katex.renderToString(latex, {
        output: "mathml", // also supports 'htmlAndMathml'
        displayMode,
        throwOnError: false,
      });
    } catch {
      return "<math><merror>Invalid LaTeX</merror></math>";
    }
  }, [latex, displayMode]);

  return (
    <span
      className={displayMode ? "block my-4 overflow-x-auto" : ""}
      dangerouslySetInnerHTML={{ __html: rendered }}
    />
  );
}
