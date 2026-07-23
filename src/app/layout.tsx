import type { Metadata } from "next";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";
import ThemeToggle from "./components/themeToggle";
import Providers from "./provider";
import "./globals.css";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const productionUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(productionUrl),
  title: {
    default: "Irian Durian — Software Engineer",
    template: "%s — Irian Durian",
  },
  description:
    "Creative software engineer building interactive web experiences, graphics, simulations, and game systems.",
  openGraph: {
    type: "website",
    title: "Irian Durian — Software Engineer",
    description:
      "Creative development, graphics, simulations, and game systems.",
    images: [{ url: "/og.png", width: 1733, height: 907, alt: "Irian Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Irian Durian — Software Engineer",
    description:
      "Creative development, graphics, simulations, and game systems.",
    images: ["/og.png"],
  },
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/pages/projects" },
  { label: "About", href: "/pages/about" },
  { label: "Capabilities", href: "/pages/skills" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetBrainsMono.variable}>
        <Providers>
          <a className="skipLink" href="#main-content">
            Skip to content
          </a>

          <header className="siteHeader">
            <Link className="wordmark" href="/" aria-label="Irian Durian, home">
              IRIAN<sup>®</sup>
            </Link>

            <nav className="siteNav" aria-label="Primary navigation">
              <ol>
                {navigation.map((item, index) => (
                  <li key={item.href}>
                    <Link href={item.href}>
                      <span aria-hidden="true">0{index + 1}</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <ThemeToggle />
          </header>

          {children}

          <footer className="siteFooter">
            <div className="footerMeta">
              <span>© {new Date().getFullYear()} IRIAN DURAN</span>
              <span>DESIGNED + BUILT INDEPENDENTLY</span>
            </div>

            <nav className="footerLinks" aria-label="Portfolio links">
              <a href="/Irian-Durian-Resume.pdf" target="_blank" rel="noreferrer">
                Resume ↗
              </a>
              <a href="https://github.com/saucypilot" target="_blank" rel="noreferrer">
                GitHub ↗
              </a>
              <a
                href="https://www.linkedin.com/in/iriandurian/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <a href="https://codepen.io/saucypilot" target="_blank" rel="noreferrer">
                CodePen ↗
              </a>
            </nav>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
