import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/aboutMePage.css";
import InterestsShowcaseClient from "./InterestsShowcaseClient";

export const metadata: Metadata = {
  title: "About",
  description: "The story, approach, and interests behind Irian Duran's creative engineering work.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="aboutPage">
      <header className="aboutHero">
        <div className="aboutLabel">
          <span><b>02</b> / Profile</span>
          <span>Art × Engineering</span>
        </div>
        <h1>Art.<br />Code.<br />Curiosity.</h1>
        <div className="aboutLead">
          <p>
            I’m a creative software engineer drawn to the space where visual craft,
            technical systems, and playful interaction become one experience.
          </p>
          <span>Based in Arlington, Texas</span>
        </div>
      </header>

      <section className="storySection" aria-label="My story">
        <article className="storyChapter">
          <span className="storyNumber">01</span>
          <h2>Before the code</h2>
          <div>
            <p>
              I grew up wanting to become a comic artist. Drawing taught me to notice
              composition, rhythm, and small visual decisions. Chess and engineering
              gave that curiosity a more structural side: I wanted to understand why
              things worked and how to build them myself.
            </p>
            <span className="storyTag">Origin / Visual thinking</span>
          </div>
        </article>

        <article className="storyChapter">
          <span className="storyNumber">02</span>
          <h2>Finding software</h2>
          <div>
            <p>
              After flight school became financially out of reach, I found programming
              through a moment of pure curiosity. One line of Python became a path into
              web development, graphics, simulations, and a field where art and
              engineering no longer had to compete.
            </p>
            <span className="storyTag">Shift / Python to the web</span>
          </div>
        </article>

        <article className="storyChapter">
          <span className="storyNumber">03</span>
          <h2>What I do now</h2>
          <div>
            <p>
              I focus on front-end and creative development while working part-time as
              a game developer and teacher. I experiment with physical simulation, 3D
              modeling, graphics programming, animation, machine learning, and any tool
              that can make software feel more alive.
            </p>
            <Link href="/pages/skills">Explore my capabilities ↗</Link>
          </div>
        </article>
      </section>

      <blockquote className="aboutStatement">
        <span>Working principle / 001</span>
        <p>“Make it useful. Make it clear. Then give it a point of view.”</p>
      </blockquote>

      <section className="interestsSection" aria-labelledby="interests-title">
        <div className="aboutLabel">
          <span><b>03</b> / Outside the screen</span>
          <span>Interactive index</span>
        </div>
        <div className="interestsIntro">
          <h2 id="interests-title">Other things that keep me curious.</h2>
          <p>Use the controls or arrow keys to move through the collection.</p>
        </div>
        <InterestsShowcaseClient />
      </section>
    </main>
  );
}
