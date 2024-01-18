import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion"
function Foreground() {
  const ref = useRef(null);

  const data = [
    //icon, description, file-size, download, tag-details
    {
      description:
        "Color Palettes for Designers and Artists. Discover the newest hand-picked palettes of Color Hunt.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      description:
        "Color Palettes for Designers and Artists. Discover the newest hand-picked palettes of Color Hunt.",
      filesize: ".4mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "blue" },
    },
    {
      description:
        "Color Palettes for Designers and Artists. Discover the newest hand-picked palettes of Color Hunt.",
      filesize: ".4mb",
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
