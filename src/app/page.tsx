import Image from "next/image";
import Room from "./components/threeJSLandingPage";

export default function Home() {
  return (
    <div className="relative w-full h-[70vh]">
      <h1 className="absolute top-10 left-0 w-full text-center z-10 text-4xl font-bold">Hey, I'm Irian. Welcome to my website.</h1>
      <Room />
    </div>
  );
}
