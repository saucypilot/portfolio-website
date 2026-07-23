import type { Metadata } from "next";
import Link from "next/link";
import "../../styles/aboutMePage.css";
import InterestsShowcaseClient from "./InterestsShowcaseClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "The story, experience, and creative engineering approach behind Irian Durian's work.",
};

const experience = [
  {
    period: "May 2026 — Present",
    role: "AI Community Operations Intern",
    organization: "Lockheed Martin",
    summary:
      "Designing enterprise GenAI enablement around prompt engineering, AI coding assistants, RAG, and agentic workflows while supporting an applications team using Agile, Scrum, and DevOps practices.",
    detail: "AI enablement / Developer tooling",
  },
  {
    period: "Jan 2023 — Present",
    role: "Game Development Instructor",
    organization: "Code Ninjas",
    summary:
      "Teaching physics, input handling, game loops, and state management to 100+ students while creating debugging workflows across 200+ game-development modules.",
    detail: "100+ students / 200+ modules",
  },
  {
    period: "Aug 2025 — Jan 2026",
    role: "Director",
    organization: "ACM",
    summary:
      "Led a 100+ member program, delivered 15+ DSA and full-stack workshops, managed 10+ educators, and helped organize hackathons and speaker events.",
    detail: "Community leadership / Education",
  },
  {
    period: "Jan 2024 — Dec 2024",
    role: "Tech Lead",
    organization: "HackUTA / ACM",
    summary:
      "Led the HackUTA website's development and refactoring, supporting 900+ applications and 400+ live check-ins with authentication, participant tracking, and barcode verification.",
    detail: "Event platform / 900+ applicants",
  },
];

export default function AboutPage() {
  return (
    <main id="main-content" className="aboutPage">
      <header className="aboutHero">
        <div className="aboutLabel chapterLabel">
          <span><b>03.00</b> / Profile</span>
          <span>Art × Engineering</span>
        </div>
        <h1>Art.<br />Code.<br />Curiosity.</h1>
        <div className="aboutLead">
          <p>
            I’m a creative software engineer, AI Community Operations Intern at Lockheed
            Martin, and Game Development Instructor at Code Ninjas. I build at the point
            where visual craft, technical systems, and playful interaction meet.
          </p>
          <div className="aboutLeadMeta">
            <span>B.S. Computer Science / UTA / Expected 2027</span>
            <a href="/Irian-Durian-Resume.pdf" target="_blank" rel="noreferrer">
              Open resume ↗
            </a>
          </div>
        </div>
      </header>

      <section className="storySection" aria-label="My story">
        <article className="storyChapter" data-reveal>
          <span className="storyNumber">03.01</span>
          <h2>Before the code</h2>
          <div>
            <p>
              I grew up wanting to become a comic artist. Drawing taught me to notice
              composition, rhythm, and small visual decisions. Chess and engineering
              gave that curiosity a structural side: I wanted to understand why things
              worked and how to build them myself.
            </p>
            <span className="storyTag">Origin / Visual thinking</span>
          </div>
        </article>

        <article className="storyChapter" data-reveal>
          <span className="storyNumber">03.02</span>
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

        <article className="storyChapter" data-reveal>
          <span className="storyNumber">03.03</span>
          <h2>What I do now</h2>
          <div>
            <p>
              I build interactive software, teach game development, and help teams use
              AI tools thoughtfully. My current work spans creative front-end systems,
              graphics programming, simulation, developer enablement, and technical
              education.
            </p>
            <Link href="/pages/skills">Explore my capabilities ↗</Link>
          </div>
        </article>
      </section>

      <section className="experienceSection" aria-labelledby="experience-title">
        <div className="aboutLabel chapterLabel">
          <span><b>03.04</b> / Experience</span>
          <span>2023—Present</span>
        </div>
        <div className="experienceIntro" data-reveal>
          <h2 id="experience-title">Building, teaching, and enabling teams.</h2>
          <p>
            A mix of engineering, community leadership, and hands-on education informs
            the way I approach digital products.
          </p>
        </div>
        <div className="experienceList">
          {experience.map((item, index) => (
            <article className="experienceRow" key={`${item.organization}-${item.role}`} data-reveal>
              <span className="experienceNumber">{String(index + 1).padStart(2, "0")}</span>
              <div className="experienceRole">
                <h3>{item.role}</h3>
                <p>{item.organization}</p>
              </div>
              <div className="experienceSummary">
                <p>{item.summary}</p>
                <span>{item.detail}</span>
              </div>
              <div className="experienceTime">
                <span>{item.period}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <blockquote className="aboutStatement" data-reveal>
        <span>Working principle / 001</span>
        <p>“Make it useful. Make it clear. Then give it a point of view.”</p>
      </blockquote>

      <section className="interestsSection" aria-labelledby="interests-title">
        <div className="aboutLabel chapterLabel">
          <span><b>03.05</b> / Outside the screen</span>
          <span>Interactive index</span>
        </div>
        <div className="interestsIntro" data-reveal>
          <h2 id="interests-title">Other things that keep me curious.</h2>
          <p>Use the controls or arrow keys to move through the collection.</p>
        </div>
        <InterestsShowcaseClient />
      </section>
    </main>
  );
}
