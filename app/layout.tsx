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
    "The Reinforcement Learning Journal (RLJ) is an annual peer-reviewed, open-access publication focusing on the field of reinforcement learning.",
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
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.MathJax = { tex: { inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] } };",
          }}
        />
        <script
          async
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js"
        />
      </head>
      <body>
        <Sidebar />
        <div id="content">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
