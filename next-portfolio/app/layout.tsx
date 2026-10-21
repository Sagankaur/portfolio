import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sagandeep Kaur | ML/NLP Research, AI Engineering and Data Science",
  description:
    "Portfolio of Sagandeep Kaur, IIT Madras B.S. Data Science and Programming student working across ML/NLP research, AI engineering, data science, backend systems, and MLOps.",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Publications", href: "#publications" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10"
        aria-label="Primary navigation"
      >
        <a href="#hero" className="text-base font-semibold text-zinc-950">
          Sagandeep Kaur
        </a>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium text-zinc-600">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-teal-800">
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
