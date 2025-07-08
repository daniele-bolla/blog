"use client";

import katex from "katex";
import { Fragment } from "react";

type Props = {
  children: string;
};

export default function MathText({ children }: Props) {
  const parts = parseMath(children);

  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          <Fragment key={index}>{part}</Fragment>
        ) : (
          <span
            key={index}
            className={part.display ? "block my-4 overflow-x-auto" : ""}
            dangerouslySetInnerHTML={{
              __html: katex.renderToString(part.latex, {
                output: "mathml",
                throwOnError: false,
                displayMode: part.display,
              }),
            }}
          />
        )
      )}
    </>
  );
}

type MathPart = string | { latex: string; display: boolean };

function parseMath(text: string): MathPart[] {
  const result: MathPart[] = [];
  let currentIndex = 0;

  const regex = /\${1,2}([^$]+?)\${1,2}/g;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchStart = match.index;
    const matchEnd = regex.lastIndex;

    if (matchStart > currentIndex) {
      result.push(text.slice(currentIndex, matchStart));
    }

    const latex = match[1].trim();
    const isDisplay = match[0].startsWith("$$");

    result.push({ latex, display: isDisplay });
    currentIndex = matchEnd;
  }

  if (currentIndex < text.length) {
    result.push(text.slice(currentIndex));
  }

  return result;
}
