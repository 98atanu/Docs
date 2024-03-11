import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
    desc: "This is the background color of the data that will be displayed",
    filesize: "0.9mb",
    close: true,
    tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
  },
  {
    desc: "This is the background color of the data that will be displayed",
    filesize: "0.9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
  },
  {
    desc: "This is the background color of the data that will be displayed",
    filesize: "0.9mb",
    close: true,
    tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
  },
];

  return (
    <motion.div ref ={ref} className="fixed z-[3] top-0 left-0 w-full h-full flex gap-10 flex-wrap p-5">
      {data.map((item, index) => (
        <Card data={item} reference = {ref} />
      ))}
    </motion.div>
  );
};

export default Foreground;
