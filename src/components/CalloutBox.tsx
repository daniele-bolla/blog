// src/components/CalloutBox.tsx
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
type Props = {
  type:
    | "definition"
    | "theorem"
    | "proposition"
    | "note"
    | "example"
    | "remark";
  title?: string;
  children: React.ReactNode;
};

const styles = {
  definition: {
    bg: "bg-blue-50",
    border: "border-blue-500",
    icon: "📘",
    label: "Definition",
  },
  theorem: {
    bg: "bg-purple-50",
    border: "border-purple-500",
    icon: "📐",
    label: "Theorem",
  },
  proposition: {
    bg: "bg-green-50",
    border: "border-green-500",
    icon: "📌",
    label: "Proposition",
  },
  note: {
    bg: "bg-yellow-50",
    border: "border-yellow-500",
    icon: "📝",
    label: "Note",
  },
  example: {
    bg: "bg-orange-50",
    border: "border-orange-500",
    icon: "📝",
    label: "Example",
  },
  remark: {
    bg: "bg-red-50",
    border: "border-red-500",
    icon: "📝",
    label: "Remark",
  },
};

export default function CalloutBox({ type, title, children }: Props) {
  const style = styles[type];

  return (
    <div
      className={`border-l-4 p-4 my-6 rounded-md ${style.bg} ${style.border}`}
    >
      <div className="text-sm font-semibold  text-gray-700 mb-2 flex items-center gap-2">
        {/* <span>{style.icon}</span>  */} {style.label} {title}
      </div>
      <div className="text-gray-800 text-base">{children}</div>
    </div>
  );
}
