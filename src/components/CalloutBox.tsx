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
    header: "bg-blue-500",
    icon: "📘",
    label: "Definition",
  },
  proposition: {
    bg: "bg-purple-50",
    title: "text-purple-500",
    border: "border-purple-500",
    header: "bg-purple-500",
    icon: "📐",
    label: "Proposition",
  },
  theorem: {
    bg: "bg-green-50",
    title: "text-green-500",
    border: "border-green-500",
    header: "bg-green-500",
    icon: "📌",
    label: "Theorem",
  },
  note: {
    bg: "bg-yellow-50",
    title: "text-yellow-500",
    border: "border-yellow-500",
    header: "bg-yellow-500",
    icon: "📝",
    label: "Note",
  },
  example: {
    bg: "bg-orange-50",
    title: "text-orange-500",
    border: "border-orange-500",
    header: "bg-orange-500",
    icon: "📝",
    label: "Example",
  },
  remark: {
    bg: "bg-red-50",
    title: "text-red-500",
    border: "border-red-500",
    header: "bg-red-500",
    icon: "📝",
    label: "Remark",
  },
};

export default function CalloutBox({ type, title, children }: Props) {
  const style = styles[type];

  return (
    <div className={`shadow  my-6  ${style.bg} ${style.border}`}>
      <div
        className={`text-sm font-bold text-white p-4 ${style.header} mb-2 flex items-center gap-2`}
      >
        {/* <span>{style.icon}</span>  */}
        {title ? (
          <span>
            {style.label}: {title}
          </span>
        ) : (
          style.label
        )}
      </div>
      <div className="text-gray-800 text-base p-4">{children}</div>
    </div>
  );
}
