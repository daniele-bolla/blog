import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Daniele's blog",
  description: "Blog about math and web development, maybe, eventually...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-white text-black font-sans antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow ">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
