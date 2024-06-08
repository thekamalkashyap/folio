"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { encode } from "qss";

const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    imageSrc: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [src, setSrc] = React.useState("");
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useEffect(() => {
    let src;
    if (!content[activeCard].imageSrc.startsWith("/")) {
      const params = encode({
        url: content[activeCard].imageSrc,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": 200 * 3,
        "viewport.height": 125 * 3,
      });
      src = `https://api.microlink.io/?${params}`;
    } else {
      src = content[activeCard].imageSrc;
    }
    setSrc(src);
  }, [activeCard]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <div className="h-screen flex items-center">
      <motion.div
        className="h-[30rem] hide-scrollbar w-screen overflow-y-auto flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="div relative flex items-start px-4">
          <div className="max-w-2xl">
            {content.map((item, index) => (
              <div
                key={item.title + index}
                className={index + 1 == content.length ? "mt-20" : "my-20"}
              >
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl font-display font-bold text-slate-900"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-kg text-slate-600 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div className="hidden lg:block h-60 w-80 rounded-md sticky top-10 overflow-hidden">
          <div className="h-full w-full flex items-center justify-center text-black">
            <Image
              src={src}
              width={600}
              height={375}
              priority={true}
              className="w-full object-contain rounded-md"
              alt="website screenshot"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default StickyScroll;
