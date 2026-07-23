import Image from "next/image";
import Link from "next/link";
import Room from "./components/threeJSLandingPage";
import "./styles/homePage.css";

const selectedProjects = [
  {
    index: "01",
    title: "Fluid Simulation",
    type: "GPU Graphics / Interactive",
    year: "2026",
    media: "/projectPageAssets/fluidSimulation.gif",
    alt: "Colorful real-time fluid simulation",
    href: "https://github.com/saucypilot/webGL-Fluid-Simulation",
  },
  {
    index: "02",
    title: "Drowsiness Detector",
    type: "Computer Vision / Safety",
    year: "2026",
    media: "/projectPageAssets/drowsinessDetector.gif",
    alt: "Drowsiness detector tracking facial landmarks",
    href: "https://github.com/saucypilot/Drowsiness-detector",
  },
  {
    index: "03",
    title: "HackUTA 2024",
    type: "Event Platform / Frontend",
    year: "2024",
    media: "/projectPageAssets/hackUTA.png",
    alt: "HackUTA website project preview",
    href: "https://hackuta.org/",
  },
];

function SectionLabel({
  index,
  title,
  detail,
}: {
  index: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="sectionLabel">
      <span>
        <b>{index}</b> / {title}
      </span>
      <span>{detail}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main id="main-content" className="homePage">
      <section className="hero" aria-labelledby="hero-title">
        <div className="heroEyebrow">
          <span className="availability"><i aria-hidden="true" /> Available for select projects</span>
          <span>Arlington, Texas / 2026</span>
        </div>

        <div className="heroComposition">
          <h1 id="hero-title" className="heroTitle">
            <span>Irian</span>
            <span>Software</span>
            <span>Engineer.</span>
          </h1>

          <figure className="portrait">
            <div className="portraitImage">
              <Image
                src="/headshot.png"
                alt="Portrait of Irian Duran"
                width={500}
                height={500}
                priority
              />
            </div>
            <figcaption>
              <span>Portrait_001</span>
              <span>IRN / TX</span>
            </figcaption>
          </figure>
        </div>

        <div className="heroFooter">
          <p>Creative development / graphics / game systems</p>
          <a href="#interactive-space">Enter the workspace ↓</a>
        </div>
      </section>

      <section id="interactive-space" className="artifactSection" aria-labelledby="artifact-title">
        <SectionLabel index="01" title="Interactive workspace" detail="WebGL / Three.js" />
        <div className="artifactHeading">
          <h2 id="artifact-title">A digital artifact, not a background.</h2>
          <p>
            An interactive room built in real time. Drag to rotate, scroll to zoom,
            and explore the scene.
          </p>
        </div>

        <div className="roomFrame">
          <div className="frameLabel frameLabelTop">Artifact / 001</div>
          <Room />
          <div className="frameLabel frameLabelBottom">
            <span>Drag to rotate</span>
            <span>Three.js / GLTF / WebGL</span>
          </div>
        </div>
      </section>

      <section className="selectedWork" aria-labelledby="work-title">
        <SectionLabel index="02" title="Selected work" detail="2024—2026" />
        <h2 id="work-title" className="sectionDisplayTitle">Selected<br />Work.</h2>

        <div className="projectLookbook">
          {selectedProjects.map((project) => (
            <a
              className="lookbookProject"
              href={project.href}
              target="_blank"
              rel="noreferrer"
              key={project.title}
            >
              <div className="lookbookMeta">
                <span>{project.index}</span>
                <h3>{project.title}</h3>
                <span>{project.type}</span>
                <span>{project.year} ↗</span>
              </div>
              <div className="lookbookMedia">
                <Image src={project.media} alt={project.alt} width={1200} height={760} />
              </div>
            </a>
          ))}
        </div>

        <Link className="textLink" href="/pages/projects">
          View the complete project archive <span>↗</span>
        </Link>
      </section>

      <section className="profileSection" aria-labelledby="profile-title">
        <SectionLabel index="03" title="Profile" detail="Art × Engineering" />
        <div className="profileGrid">
          <h2 id="profile-title">I build software where engineering meets interaction.</h2>
          <div className="profileCopy">
            <p>
              I’m a creative software engineer focused on expressive interfaces,
              real-time graphics, physical simulations, and playful systems.
            </p>
            <Link className="textLink" href="/pages/about">
              Read my story <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="contactSection" aria-labelledby="contact-title">
        <SectionLabel index="04" title="Contact" detail="Open to collaboration" />
        <div className="contactGrid">
          <h2 id="contact-title">Let’s make something worth exploring.</h2>
          <a
            className="contactAction"
            href="https://www.linkedin.com/in/iriandurian/"
            target="_blank"
            rel="noreferrer"
          >
            Start a conversation <span>↗</span>
          </a>
        </div>
      </section>
    </main>
  );
}
