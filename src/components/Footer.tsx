import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#35363E] text-white p-4 mt-8">
      <div className="container mx-auto text-center prose  text-white">
        <p>
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://daniele-bolla.github.io/"
            className="underline text-white"
          >
            daniele-bolla.github.io
          </Link>
        </p>
      </div>
    </footer>
  );
}
