// src/components/CalloutBox.tsx
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
    title: "text-blue-500",
    border: "border-blue-500",
    icon: "📘",
    label: "Definition",
  },
  proposition: {
    bg: "bg-purple-50",
    title: "text-purple-500",
    border: "border-purple-500",
    icon: "📐",
    label: "Proposition",
  },
  theorem: {
    bg: "bg-green-50",
    title: "text-green-500",
    border: "border-green-500",
    icon: "📌",
    label: "Theorem",
  },
  note: {
    bg: "bg-yellow-50",
    title: "text-yellow-500",
    border: "border-yellow-500",
    icon: "📝",
    label: "Note",
  },
  example: {
    bg: "bg-orange-50",
    title: "text-orange-500",
    border: "border-orange-500",
    icon: "📝",
    label: "Example",
  },
  remark: {
    bg: "bg-red-50",
    title: "text-red-500",
    border: "border-red-500",
    icon: "📝",
    label: "Remark",
  },
};

export default function CalloutBox({ type, title, children }: Props) {
  const style = styles[type];

  return (
    <div className={`border-b-4 p-4 my-6  ${style.bg} ${style.border}`}>
      <div
        className={`text-sm font-bold  ${style.title} mb-2 flex items-center gap-2`}
      >
        {/* <span>{style.icon}</span>  */} {style.label} {title}
      </div>
      <div className="text-gray-800 text-base">{children}</div>
    </div>
  );
}
