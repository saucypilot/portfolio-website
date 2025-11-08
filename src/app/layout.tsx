import "./globals.css";
import ThemeToggle from "./components/themeToggle";
import FooterLinksPopover from "./components/FooterLinksPopover";
import Providers from "./provider";

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
            <div id="logoTextforHeader">"HEADER"</div>
            <nav>
              <ul id="footerLinks">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/pages/about">About</a>
                </li>
                <li>
                  <a href="/pages/skills">Skills</a>
                </li>
                <li>
                  <a href="/pages/projects">Projects</a>
                </li>
              </ul>
            </nav>
            <ThemeToggle />
          </header>
          {children}
          <footer>
            <div>&copy; {new Date().getFullYear()} My Portfolio</div>
            <div id="logoTextForFooter">"FOOTER"</div>
            <div id="contact-Links">
              <FooterLinksPopover />
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
