"use client";

import {
  useEffect,
  useRef,
  useState,
  type VideoHTMLAttributes,
} from "react";

type ProjectVideoProps = VideoHTMLAttributes<HTMLVideoElement> & {
  src: string;
};

export default function ProjectVideo({
  src,
  muted = true,
  playsInline = true,
  loop = true,
  preload,
  ...rest
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = videoRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "150px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const node = videoRef.current;
    if (!node || !shouldLoad) return;

    const play = async () => {
      try {
        await node.play();
      } catch {
        // Autoplay might be blocked; ignore and let user press play.
      }
    };

    play();
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      muted={muted}
      playsInline={playsInline}
      loop={loop}
      preload={shouldLoad ? preload ?? "auto" : "none"}
      {...rest}
      src={shouldLoad ? src : undefined}
      data-src={src}
    />
  );
}
