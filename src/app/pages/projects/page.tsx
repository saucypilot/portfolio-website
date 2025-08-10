import React from "react";
import Image from "next/image";
import "../../styles/projectsPage.css";

const PageName = () => {
  return (
    <main>
      <div className="projectCard">
        <Image
          src="/projectPageAssets/sandSimulator.gif"
          alt="Sand simulator animation"
          width={500}
          height={500}
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
      </div>
      <div className="projectCard">
        <video
          src="/projectPageAssets/solarSystem.webm"
          alt="Sand simulator animation"
          loop
          autoPlay
          playsInline
          controls
          muted
          width={500}
          height={500}
        />
        <h1>Solar system simulator</h1>
        <p>
          A 3D interactive simulation of our solar system built with Three.js,
          featuring orbiting planets, moons, an asteroid belt, and even shooting
          stars. It's basically what you'd get if NASA had a graphics API and
          too much coffee. This is a visual simulation—not scientifically
          accurate, but definitely fun to explore.
        </p>
      </div>
      <div className="projectCard">
        <video
          src="/projectPageAssets/threejsCubeGame.webm"
          alt="Cube game"
          loop
          autoPlay
          playsInline
          controls
          muted
          width={500}
          height={500}
        />

        <h1>Cube game</h1>
        <p>
          This is a simple 3D browser-based game using Three.js, where the
          player controls a green cube that can move and jump while avoiding
          incoming red enemy cubes falling from the distance. The game showcases
          basic physics such as gravity, velocity, and collision detection in 3D
          space.
        </p>
      </div>
    </main>
  );
};

export default PageName;
