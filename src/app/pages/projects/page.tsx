import React from "react";
import Image from "next/image";
import "../../styles/projectsPage.css";
import ProjectVideo from "./ProjectVideo";

const PageName = () => {
  return (
    <main>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/sandSimulator.gif"
          alt="Sand simulator animation"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Sand simulator</h1>
        <p>
          This project is a graphical simulation built using SDL2, modeling a
          dynamic interaction of two elements; Sand particles that follow simple
          granular physics, Bouncing circles affected by gravity and wall/floor
          collisions. It demonstrates physics concepts such as gravity, velocity
          damping, and collision response in a real-time interactive
          environment.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://www.libsdl.org/" target="_blank" rel="noreferrer">
              SDL2
            </a>
          </li>
          <li>
            <a href="https://isocpp.org/" target="_blank" rel="noreferrer">
              C++
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/saucypilot/Sand-simulator"
            target="_blank"
            rel="noreferrer"
            aria-label="Open sand simulator project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <ProjectVideo
          src="/projectPageAssets/solarSystem.webm"
          aria-label="Solar system simulation demo"
          loop
          autoPlay
          playsInline
          controls
          muted
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Solar system simulator</h1>
        <p>
          A 3D interactive simulation of our solar system built with Three.js,
          featuring orbiting planets, moons, an asteroid belt, and even shooting
          stars. It&rsquo;s basically what you&rsquo;d get if NASA had a
          graphics API and too much coffee. This is a visual simulation—not
          scientifically accurate, but definitely fun to explore.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://threejs.org/" target="_blank" rel="noreferrer">
              Three.js
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/saucypilot/Solar-system-simulator"
            target="_blank"
            rel="noreferrer"
            aria-label="Open solar system simulator project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <ProjectVideo
          src="/projectPageAssets/threejsCubeGame.webm"
          aria-label="Cube game demo"
          loop
          autoPlay
          playsInline
          controls
          muted
          width={500}
          height={500}
          className="projectCard__media"
        />

        <h1>Cube game</h1>
        <p>
          This is a simple 3D browser-based game using Three.js, where the
          player controls a green cube that can move and jump while avoiding
          incoming red enemy cubes falling from the distance. The game showcases
          basic physics such as gravity, velocity, and collision detection in 3D
          space.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://threejs.org/" target="_blank" rel="noreferrer">
              Three.js
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/saucypilot/threejs-cube-game"
            target="_blank"
            rel="noreferrer"
            aria-label="Open cube game project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/hackUTA.png"
          alt="HackUTA website picture"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>2024 HackUTA Website</h1>
        <p>
          This is the official website for HackUTA 2024, a 24-hour hackathon
          event held at the University of Texas at Arlington. The website was
          built using React and Next.js, and features a modern design with
          information about the event, schedule, onboarding, and more.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://hackuta.org/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open HackUTA website project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/xquisite.png"
          alt="Xquisite Dance center website screenshot"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Xquisite Dance Center Website</h1>
        <p>
          This is the official website for Xquisite Dance Center, a dance studio
          located in Arlington, Texas. The website was built using React and
          Next.js, and features a modern design.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://xquisitedancecenter-gljht37d3-saucypilots-projects.vercel.app/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Xquisite Dance Center website project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/trivio.gif"
          alt="Triv.io Gif"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Triv.io</h1>
        <p>
          A web application that allows users to upload notes in any format and
          turn them into quizzes using Gemini AI. It also allows people to join
          the quiz too and include leaderboards. You can think it as Kahoot kind
          of. It uses Auth0 for authentication and React.js for the frontend.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://auth0.com/" target="_blank" rel="noreferrer">
              Auth0
            </a>
          </li>
          <li>
            <a href="https://gemini.google/" target="_blank" rel="noreferrer">
              Gemini API
            </a>
          </li>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              JavaScript
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/Ashishrupani/Triv.io"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Triv.io project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/drowsinessDetector.gif"
          alt="Project screenshot"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Drowsiness detector</h1>
        <p>
          Real-Time Webcam Drowsiness Detection System is a computer vision
          application designed to enhance safety during long tasks like driving
          or late-night coding sessions. Built using Python, OpenCV, and
          MediaPipe, the system monitors facial landmarks in real-time to detect
          signs of fatigue through two primary biometric indicators: Eye Aspect
          Ratio (EAR) and head pose analysis.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              Python
            </a>
          </li>
          <li>
            <a href="https://opencv.org/" target="_blank" rel="noreferrer">
              OpenCV
            </a>
          </li>
          <li>
            <a href="https://mediapipe.dev/" target="_blank" rel="noreferrer">
              MediaPipe
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/saucypilot/Drowsiness-detector"
            target="_blank"
            rel="noreferrer"
            aria-label="Open project"
          >
            Visit project
          </a>
        </div>
      </div>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/fluidSimulation.gif"
          alt="Project screenshot"
          width={500}
          height={500}
          className="projectCard__media"
        />
        <h1>Fluid simulation</h1>
        <p>
          This project is an interactive fluid dynamics simulation built with
          WebGL2 that solves the Navier-Stokes equations for incompressible flow
          in real-time. It uses a GPU-accelerated &quot;ping-pong&quot; FBO architecture
          to efficiently manage semi-Lagrangian advection and Jacobi pressure
          solvers. To maintain visual detail, I implemented vorticity
          confinement to reinforce swirling motions that would otherwise
          dissipate. The simulation features a filmic tonemapping curve for
          high-dynamic-range visuals and supports multi-touch interaction for
          stirring the fluid and injecting randomized dye colors.
        </p>
        <ul className="projectCard__stack" aria-label="Technologies used">
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API"
              target="_blank"
              rel="noreferrer"
            >
              WebGL2
            </a>
          </li>
        </ul>
        <div className="projectCard__links">
          <a
            className="projectCard__link"
            href="https://github.com/saucypilot/webGL-Fluid-Simulation"
            target="_blank"
            rel="noreferrer"
            aria-label="Open project"
          >
            Visit project
          </a>
        </div>
      </div>
    </main>
  );
};

export default PageName;
