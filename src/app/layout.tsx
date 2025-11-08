import "./globals.css";
import ThemeToggle from "./components/themeToggle";
import FooterLinksPopover from "./components/FooterLinksPopover";
import Providers from "./provider";
import Link from "next/link";

export const metadata = {
  title: "Portfolio Website",
  description: "A portfolio website showcasing my projects and skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body>
        <Providers>
          <header>
            <div id="logoTextforHeader">HEADER</div>
            <nav>
              <ul id="footerLinks">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/pages/about">About</Link>
                </li>
                <li>
                  <Link href="/pages/skills">Skills</Link>
                </li>
                <li>
                  <Link href="/pages/projects">Projects</Link>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </header>
          {children}
          <footer>
            <div>&copy; {new Date().getFullYear()} My Portfolio</div>
            <div id="logoTextForFooter">FOOTER</div>
            <div id="contact-Links">
              <FooterLinksPopover />
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
