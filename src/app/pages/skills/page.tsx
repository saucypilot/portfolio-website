import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/skillsPage.css";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Creative development, graphics, simulation, and product engineering capabilities.",
};

const capabilities = [
  {
    index: "01",
    title: "Creative Development",
    description: "Expressive, responsive interfaces where typography, motion, and interaction work as one system.",
    tools: "TypeScript / React / Next.js / Three.js / Framer Motion",
  },
  {
    index: "02",
    title: "Graphics + Simulation",
    description: "Real-time visual systems, physical experiments, procedural scenes, and performance-minded rendering.",
    tools: "C++ / WebGL / OpenGL / SDL2 / GLSL / Blender",
  },
  {
    index: "03",
    title: "Games + Interactive Systems",
    description: "Playful mechanics and teaching tools designed around clear feedback, feel, and exploration.",
    tools: "Unity / C# / Lua / Roblox Studio / MCreator",
  },
  {
    index: "04",
    title: "Computer Vision + AI",
    description: "Practical experiments using visual analysis and machine learning to interpret real-world inputs.",
    tools: "Python / OpenCV / MediaPipe / Gemini API",
  },
];

const workingSet = [
  ["Languages", "TypeScript / JavaScript / C++ / C# / Python / Java / Kotlin / Lua"],
  ["Platforms", "Web / Windows / Linux / Android"],
  ["Workflow", "Git / GitHub / VS Code / Visual Studio / Figma / Obsidian"],
  ["Currently exploring", "Machine learning / Shader art / Creative tooling"],
];

export default function SkillsPage() {
  return (
    <main id="main-content" className="skillsPage">
      <header className="skillsHero">
        <div className="skillsLabel">
          <span><b>03</b> / Capabilities</span>
          <span>Tools follow ideas</span>
        </div>
        <h1>What I<br />Build With.</h1>
        <p>
          A focused working set for building visual, interactive, and technically
          ambitious software—not a wall of logos.
        </p>
      </header>

      <section className="capabilityList" aria-label="Core capabilities">
        {capabilities.map((capability) => (
          <article className="capabilityRow" key={capability.title}>
            <span>{capability.index}</span>
            <h2>{capability.title}</h2>
            <div>
              <p>{capability.description}</p>
              <small>Working set</small>
              <p className="capabilityTools">{capability.tools}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="workingSet" aria-labelledby="working-set-title">
        <div>
          <span>Index / 001</span>
          <h2 id="working-set-title">Extended working set</h2>
        </div>
        <dl>
          {workingSet.map(([term, detail]) => (
            <div key={term}>
              <dt>{term}</dt>
              <dd>{detail}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="skillsCta">
        <p>See how these capabilities turn into finished work.</p>
        <Link href="/pages/projects">Explore selected projects <span>↗</span></Link>
      </section>
    </main>
  );
}
