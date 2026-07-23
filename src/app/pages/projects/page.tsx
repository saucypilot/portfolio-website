import type { Metadata } from "next";
import Image from "next/image";
import "../../styles/projectsPage.css";
import ProjectVideo from "./ProjectVideo";

export const metadata: Metadata = {
  title: "Projects",
  description: "Interactive software, simulations, graphics, and web projects by Irian Durian.",
};

type Project = {
  index: string;
  title: string;
  description: string;
  type: string;
  stack: string;
  year: string;
  media: string;
  mediaType?: "video";
  alt: string;
  href: string;
  linkLabel?: string;
};

const projects: Project[] = [
  {
    index: "01",
    title: "Fluid Simulation",
    description:
      "A GPU-accelerated fluid dynamics experiment with real-time advection, pressure solving, vorticity, and multi-touch dye interaction.",
    type: "Interactive Graphics",
    stack: "WebGL2 / GLSL",
    year: "2026",
    media: "/projectPageAssets/fluidSimulation.gif",
    alt: "Colorful real-time fluid simulation",
    href: "https://github.com/saucypilot/webGL-Fluid-Simulation",
  },
  {
    index: "02",
    title: "Drowsiness Detector",
    description:
      "A real-time safety system that analyzes facial landmarks, eye aspect ratio, and head pose to recognize signs of fatigue.",
    type: "Computer Vision",
    stack: "Python / OpenCV / MediaPipe",
    year: "2026",
    media: "/projectPageAssets/drowsinessDetector.gif",
    alt: "Drowsiness detection interface tracking facial landmarks",
    href: "https://github.com/saucypilot/Drowsiness-detector",
  },
  {
    index: "03",
    title: "Solar System",
    description:
      "An explorable 3D solar system with orbiting planets, moons, an asteroid belt, and procedural shooting stars.",
    type: "3D Simulation",
    stack: "Three.js / JavaScript",
    year: "2025",
    media: "/projectPageAssets/solarSystem.webm",
    mediaType: "video",
    alt: "Solar system simulation demo",
    href: "https://github.com/saucypilot/Solar-system-simulator",
  },
  {
    index: "04",
    title: "HackUTA 2024",
    description:
      "The official digital home for a 24-hour university hackathon, designed to make schedules, onboarding, and event details easy to navigate.",
    type: "Event Platform",
    stack: "React / Next.js",
    year: "2024",
    media: "/projectPageAssets/hackUTA.png",
    alt: "HackUTA 2024 website",
    href: "https://hackuta.org/",
    linkLabel: "Live site",
  },
  {
    index: "05",
    title: "Sand Simulator",
    description:
      "A real-time granular physics playground combining falling sand, gravity-driven circles, damping, and collision response.",
    type: "Physics Simulation",
    stack: "C++ / SDL2",
    year: "2025",
    media: "/projectPageAssets/sandSimulator.gif",
    alt: "Sand and bouncing circles physics simulation",
    href: "https://github.com/saucypilot/Sand-simulator",
  },
  {
    index: "06",
    title: "Triv.io",
    description:
      "A collaborative study platform that turns uploaded notes into live multiplayer quizzes with AI-generated questions and leaderboards.",
    type: "AI Web Application",
    stack: "React / Auth0 / Gemini",
    year: "2024",
    media: "/projectPageAssets/trivio.gif",
    alt: "Triv.io collaborative quiz interface",
    href: "https://github.com/Ashishrupani/Triv.io",
  },
  {
    index: "07",
    title: "Cube Game",
    description:
      "A browser-based 3D game exploring movement, jumping, gravity, collision detection, and progressively incoming obstacles.",
    type: "Browser Game",
    stack: "Three.js / JavaScript",
    year: "2024",
    media: "/projectPageAssets/threejsCubeGame.webm",
    mediaType: "video",
    alt: "Three.js cube game demo",
    href: "https://github.com/saucypilot/threejs-cube-game",
  },
  {
    index: "08",
    title: "Xquisite Dance",
    description:
      "A focused marketing site for a dance studio, giving families a clear path to explore programs and connect with the team.",
    type: "Client Website",
    stack: "React / Next.js",
    year: "2024",
    media: "/projectPageAssets/xquisite.png",
    alt: "Xquisite Dance Center website",
    href: "https://xquisitedancecenter-gljht37d3-saucypilots-projects.vercel.app/",
    linkLabel: "Live site",
  },
];

export default function ProjectsPage() {
  return (
    <main id="main-content" className="projectsPage">
      <header className="archiveHero">
        <div className="archiveKicker">
          <span><b>02</b> / Project archive</span>
          <span>2024—2026</span>
        </div>
        <h1>Selected<br />Projects.</h1>
        <div className="archiveIntro">
          <p>
            Experiments and products spanning interactive graphics, creative development,
            computer vision, physical systems, and the web.
          </p>
          <span>{projects.length.toString().padStart(2, "0")} projects / Scroll to explore</span>
        </div>
      </header>

      <section className="projectIndex" aria-label="Project archive">
        {projects.map((project) => (
          <article className="archiveProject" key={project.title}>
            <div className="archiveProjectMeta">
              <span className="projectNumber">{project.index}</span>
              <div>
                <span>Type</span>
                <p>{project.type}</p>
              </div>
              <div>
                <span>Stack</span>
                <p>{project.stack}</p>
              </div>
              <div>
                <span>Year</span>
                <p>{project.year}</p>
              </div>
            </div>

            <a
              className="archiveMedia"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${project.title}`}
            >
              {project.mediaType === "video" ? (
                <ProjectVideo
                  src={project.media}
                  aria-label={project.alt}
                  loop
                  autoPlay
                  playsInline
                  muted
                  width={1400}
                  height={880}
                />
              ) : (
                <Image src={project.media} alt={project.alt} width={1400} height={880} />
              )}
            </a>

            <div className="archiveProjectCopy">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">
                {project.linkLabel ?? "View source"} <span>↗</span>
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
