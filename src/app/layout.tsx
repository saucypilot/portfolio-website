import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

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
    <html lang="en">
      <body>
        <header>
          <div id="logoText">"Header"</div>
          <nav>
            <ul id="footerLinks">
              <li><a href="/">Home</a></li>
              <li><a href="/pages/about">About</a></li>
              <li><a href="/pages/skills">Skills</a></li>
              <li><a href="/pages/projects">Projects</a></li>           
            </ul>
          </nav>
          <ThemeToggle />
        </header>
        {children}
        <footer>
          <div>&copy; {new Date().getFullYear()} My Portfolio</div>
          <div id="contact-Links" >
            <nav>
              <ul>
                <li><a href="https://www.linkedin.com/in/iriandurian/">LinkedIn</a></li>
                <li><a href="https://github.com/saucypilot"></a>GitHub</li>
                <li><a href="https://codepen.io/saucypilot"></a>CodePen</li>
                <li><a href="https://devpost.com/saucypilot?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">Devpost</a></li>
              </ul>
            </nav>
          </div>
        </footer>
        </body>
    </html>
  );
}