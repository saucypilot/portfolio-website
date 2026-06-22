import React from "react";
import "../../styles/aboutMePage.css";
import InterestsShowcaseClient from "./InterestsShowcaseClient";

const PageName = () => {
  return (
    <main className="aboutPage">
      <div id="firstAboutSection" className="aboutSectionWrappers">
        <h1>How did I start?</h1>
        <p>
          Growing up, I dreamed of becoming a comic artist. I spent countless
          hours drawing, and art played a huge role in my life. At the same time,
          I had a passion for chess, engineering, and building things. Choosing
          between these interests was never easy. When it came time for college, I
          pursued another passion and enrolled in flight school. Unfortunately,
          financial struggles forced me to put that dream on hold. I felt lost and
          unsure of what direction to take. Back in high school, I had a classmate
          who— with permission — hacked into someone’s Instagram account. That
          moment sparked a curiosity in me. I opened up my computer and wrote my
          first line of Python code. I was immediately hooked. From there, I dove
          into programming and web development, building small projects and
          teaching myself more each day. In this field, I’ve found a space where I
          can blend my love for both art and engineering.
        </p>
      </div>
      <div id="secondAboutSection" className="aboutSectionWrappers">
        <h1>What do I do?</h1>
        <p>
          I primarily enjoy front-end web development, but for my part-time job, I
          work as a game developer and teacher. I also like to experiment with
          physics simulations, 3D modeling, animation, and graphics programming.
          Lately, I’ve been learning about machine learning and AI, though I
          haven’t tackled any projects in those areas yet—there’s still a lot to
          wrap my head around.
        </p>
      </div>
      <div id="thirdAboutSection" className="aboutSectionWrappers">
        <InterestsShowcaseClient />
      </div>
    </main>
  );
};

export default PageName;
