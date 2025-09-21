import React from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaGithub } from "react-icons/fa";

type Props = {
  data: {
    github: string;
    url: string;
  };
};

const ProjectPreviewFooter = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-2 border-t border-t-gray-300 dark:border-t-gray-600">
      {[
        {
          title: "Preview Demo",
          icon: <FaGlobe />,
          url: data.url,
        },
        {
          title: "View on Github",
          icon: <FaGithub />,
          url: data.github,
        },
      ].map((x, i) => (
        <motion.a
          key={i}
          href={x.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 last-of-type:border-l border-gray-300 dark:border-gray-600 hover:bg-gray-700 hover:text-white duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {x.icon}
          <p>{x.title}</p>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectPreviewFooter;
