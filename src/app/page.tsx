import Image from "next/image";
import Room from "./components/threeJSLandingPage";
import "./styles/homePage.css";

export default function Home() {
  return (
    <div id="landingPage">
      <div id="firstSection">
        <h1 id="firstHeading">
          <span className="typewriter">Hey, I&rsquo;m Irian. Welcome to my website.</span>
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
