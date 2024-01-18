import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion"
function Foreground() {
  const ref = useRef(null);

  const data = [
    {
      description:
        "Color Palettes for Designers and Artists. Discover the newest hand-picked palettes of Color Hunt.",
      filesize: "0.4 Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description:
        "Animating a style like height between 100px and 500px is conceptually straight-forward, but suffers from poor performance because we're triggering the browser layout systems every animation frame.",
      filesize: "2.1 Mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
    {
      description:
        "Framer Motion can animate between any CSS layout by using performant transforms instead of the layout system.",
      filesize: "3.2 Mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download", tagColor: "green" },
    },
  ];
  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
