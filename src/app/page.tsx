import Image from "next/image";
import Room from "./components/threeJSLandingPage";
import "./page.css";

export default function Home() {
  return (
    <div className="relative w-full h-[70vh]">
      <h1 id="firstHeading" style={{top: "20px", left: "20px", fontSize: "2.5rem"}}>
        Hey, I'm Irian. Welcome to my website.
      </h1>
      <Image
        src="/headshot.png"
        alt="headshot"
        width={500}
        height={500}
      />
    </div>
  );
}
