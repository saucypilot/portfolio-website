import "./globals.css";


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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
      <body className="">
        <header className="bg-transparent">
          <nav>
            <ul className="flex space-x-4">
              <li><a href="/home">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/projects">Projects</a></li>           
            </ul>
          </nav>
        </header>
        {children}
        <footer className="bg-transparent text-center p-4 flex justify-between  items-center">
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