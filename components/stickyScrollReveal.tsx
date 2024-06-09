"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { encode } from "qss";
import Link from "next/link";

const StickyScroll = ({
  content,
}: {
  content: {
    title: string;
    description: string;
    imageSrc?: string;
    url: string;
  }[];
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const [src, setSrc] = React.useState("");
  const ref = useRef<any>(null);

  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start", "end center"],
  });

  const cardLength = content.length;
  const cardsBreakpoints = content.map((_, index) => index / cardLength);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
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

  useEffect(() => {
    let src;
    if (typeof content[activeCard].imageSrc != "undefined") {
      src = content[activeCard].imageSrc ?? "";
    } else {
      const params = encode({
        url: content[activeCard].url,
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
    }
    setSrc(src);
  }, [activeCard]);

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
                  <Link className="hover:underline" href={item.url}>
                    {item.title}
                  </Link>
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
        <div className="hidden lg:flex items-center rounded-md sticky inset-0 overflow-hidden">
          <div className="h-60 w-80 flex items-center justify-center text-black">
            <Link href={content[activeCard].url}>
              <Image
                src={src}
                width={600}
                height={375}
                priority={true}
                className="w-full object-contain rounded-md"
                alt="website screenshot"
              />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
export default StickyScroll;
