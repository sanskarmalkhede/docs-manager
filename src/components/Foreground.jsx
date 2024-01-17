import React from "react";
import Card from "./Card";

function Foreground() {
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
      <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-5">
        {data.map((item, index) => (
          <Card data={item} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
