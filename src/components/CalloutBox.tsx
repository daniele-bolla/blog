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
    bg: "bg-teal-light",
    title: "text-teal",
    border: "border-teal",
    header: "bg-teal",
    icon: "📘",
    label: "Definition",
  },
  proposition: {
    bg: "bg-purple-light",
    title: "text-purple",
    border: "border-purple",
    header: "bg-purple",
    icon: "📐",
    label: "Proposition",
  },
  theorem: {
    bg: "bg-green-light",
    title: "text-green",
    border: "border-green",
    header: "bg-green",
    icon: "📌",
    label: "Theorem",
  },
  note: {
    bg: "bg-brown-light",
    title: "text-brown",
    border: "border-brown",
    header: "bg-brown",
    icon: "📝",
    label: "Note",
  },
  example: {
    bg: "bg-orange-light",
    title: "text-orange",
    border: "border-orange",
    header: "bg-orange",
    icon: "📝",
    label: "Example",
  },
  remark: {
    bg: "bg-red-light",
    title: "text-red",
    border: "border-red",
    header: "bg-red",
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
      <div className="text-gray-800 p-4">{children}</div>
    </div>
  );
}
