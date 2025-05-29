import { DownArrow } from "../icons/down";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

const newchanges =
  "flex justify-center items-center flex-col hover:cursor-fancy ";
export function HeroContent() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Preload the video
    const video = new Audio();
    video.src = "/images/hero-video.mp4";
    video.load();
    video.onloadeddata = () => setIsVideoLoaded(true);
  }, []);

  return (
    <div className="font-dancing">
      <div className={`${newchanges}`}>
        <div className="flex justify-center items-center">
          {isVideoLoaded && (
            <motion.video
              drag
              whileDrag={{
                scale: 0.8,
              }}
              dragConstraints={{
                left: 30,
                right: 30,
                top: 30,
                bottom: 30,
              }}
              transition={{
                duration: 1,
              }}
              style={{ y, opacity }}
              src="/images/hero-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="cursor-grab -mb-3"
            />
          )}
        </div>
        <div className="text-gray-300 flex flex-col justify-center items-center px-5">
          <div
            className="text-7xl font-semibold flex justify-center items-center text-center text-shadow-2xl "
            id="Title"
          >
            Daksh Jain
          </div>
          <div className="text-lg align-center text-center text-white pt-4 ">
            Welcome! I'm a Full-Stack Web Developer who loves building sleek,
            scalable apps<br></br>check out my work and let's connect!
          </div>
          <DownArrow />
        </div>
        <div></div>
      </div>
    </div>
  );
}
