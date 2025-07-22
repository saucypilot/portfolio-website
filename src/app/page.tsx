import Image from "next/image";
import Room from "./components/threeJSLandingPage";

export default function Home() {
  return (
    <div className=" postion-relative touchAction-none pointer-events-none">
      <h1>Hey, I'm Irian. Welcome to my website.</h1>
      <Room />
    </div>
  );
}
