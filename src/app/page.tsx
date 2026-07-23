import Image from "next/image";
import Link from "next/link";
import Room from "./components/threeJSLandingPage";
import "./styles/homePage.css";

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
    <div className="sectionLabel chapterLabel">
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
          <span><b className="heroIndex">01.00</b> / Home / 2026</span>
        </div>

        <div className="heroComposition">
          <h1 id="hero-title" className="heroTitle">
            <span>Irian</span>
            <span>Software</span>
            <span>Engineer.</span>
          </h1>

        <figure className="portrait">
            <div className="portraitImage" data-tilt>
              <Image
                src="/headshot.png"
                alt="Portrait of Irian Durian"
                width={500}
                height={500}
                priority
              />
            </div>
            <figcaption>
              <span>Portrait_001</span>
              <span>IRN / 001</span>
            </figcaption>
          </figure>
        </div>

        <div className="heroFooter">
          <p>Creative development / graphics / game systems</p>
          <a href="#interactive-space">Enter the workspace ↓</a>
        </div>
      </section>

      <section id="interactive-space" className="artifactSection" aria-labelledby="artifact-title">
        <SectionLabel index="01.01" title="Interactive workspace" detail="WebGL / Three.js" />
        <div className="artifactHeading" data-reveal>
          <h2 id="artifact-title">A digital artifact, not a background.</h2>
          <p>
            An interactive room built in real time. Drag to rotate, scroll to zoom,
            and explore the scene.
          </p>
        </div>

        <div className="roomFrame" data-reveal="media">
          <div className="frameLabel frameLabelTop">Artifact / 001</div>
          <Room />
          <div className="frameLabel frameLabelBottom">
            <span>Drag to rotate</span>
            <span>Three.js / GLTF / WebGL</span>
          </div>
        </div>
      </section>

      <section className="profileSection" aria-labelledby="profile-title">
        <SectionLabel index="01.02" title="Profile" detail="Art × Engineering" />
        <div className="profileGrid" data-reveal>
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
        <SectionLabel index="01.03" title="Contact" detail="Open to collaboration" />
        <div className="contactGrid" data-reveal>
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
