import React from "react";
import Card from "./Card";

const Foreground = () => {
  const data = [
    {
    desc: "This is the background color of the data that will be displayed",
    filesize: "0.9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
  },
];

  return (
    <div className="fixed z-[3] top-0 left-0 w-full h-full ">
      {data.map((item, index) => (
        <Card data={item} />
      ))}
    </div>
  );
};

export default Foreground;
