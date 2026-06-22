import Image from "next/image";
import Room from "./components/threeJSLandingPage";
import TypewriterText from "./components/TypewriterText";
import "./styles/homePage.css";

export default function Home() {
  return (
    <div id="landingPage">
      <div id="firstSection">
        <h1 id="firstHeading">
          <TypewriterText
            className="typewriter"
            text="Hey, I’m Irian. Welcome to my website."
          />
        </h1>
        <Image
          src="/headshot.png"
          alt="headshot"
          width={500}
          height={500}
          priority
          className="heroHeadshot"
        />
      </div>
      <div id="secondSection">
        <h1 id="secondHeading">I am a software engineer with a focus on Front-End Web Development and Game Development.</h1>
        <Room />
      </div>
    </div>
  );
}
