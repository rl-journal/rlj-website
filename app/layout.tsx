import type { Metadata, Viewport } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Reinforcement Learning Journal",
    template: "%s — Reinforcement Learning Journal",
  },
  description:
    "The Reinforcement Learning Journal (RLJ) publishes peer-reviewed research on reinforcement learning.",
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <div className="flex-1 w-full max-w-6xl px-12 py-12 flex gap-12">
          <Sidebar />
          <main className="flex-1 min-w-0">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
