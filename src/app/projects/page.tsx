"use client";

import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import { AnimatePresence, motion } from "framer";
import { projects } from "../data";
import {
  closeProjectDetails,
  openProjectDetails,
} from "../../../redux/projectDetails";
import { useDispatch, useSelector } from "react-redux";
import FooterButton from "../components/FooterButton";
import { Tag } from "antd";
import { twMerge } from "tailwind-merge";
import ProjectDetails from "../components/ProjectDetails";
import CategoryTag from "../components/CategoryTag";
import ProjectPreviewFooter from "../components/ProjectPreviewFooter";

type Props = {};
type dataProps = {
  img: string;
  projectImages: {
    images: { src: string }[];
    title: string;
  }[];
  description: string;
  category: string;
  tools: string;
  year: string;
  url: string;
  title: string;
};

const dataPropsHooks = {
  img: "",
  projectImages: [
    {
      images: [{ src: "" }],
      title: "",
    },
  ],
  description: "",
  category: "",
  tools: "",
  year: "",
  url: "",
  title: "",
};

const Page = (props: Props) => {
  const [projectData, setProjectData] = useState<dataProps>(dataPropsHooks);
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );

  const dispatch = useDispatch();

  const toggleProjectDetails = (details: dataProps) => {
    setProjectData(details);
    dispatch(
      isProjectDetailsOpen ? closeProjectDetails() : openProjectDetails(details)
    );
  };

  return (
    <AnimatePresence>
      <div className="overflow-hidden ">
        <motion.section
          className="pt-24 xl:pt-40 pb-32 px-4 flex flex-col items-center xl:justify-center min-h-screen"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <div className="container max-w-7xl flex flex-col xl:flex-row gap-6 xl:gap-12">
            <div className="w-full basis-full">
              <div className="flex justify-between items-center mt-4 md:mt-8 xl:mt-0">
                <PageTitle title={"Projects"} />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-12 lg:mt-20">
                {projects.map((d, index) => (
                  <motion.div
                    key={index}
                    onClick={() => toggleProjectDetails(d)}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1, // stagger effect
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                    }}
                    className={twMerge(
                      "!backdrop-blur justify-between flex flex-col",
                      "border rounded-xl cursor-pointer hover:shadow-lg transition-transform hover:scale-[1.02]",
                      "!bg-white/30 border-gray-300", // light mode glass
                      "dark:!bg-gray-900/30 dark:border-gray-600" // dark mode glass
                    )}
                  >
                    <div className="p-4 space-y-2">
                      <div className="h-[200px] w-full rounded-lg overflow-hidden">
                        <motion.img
                          src={d.img}
                          alt={d.title}
                          className="object-cover object-center lg:min-w-[500px] h-full w-full"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                      </div>

                      <div className="py-4 flex flex-col items-start gap-2">
                        <div className="flex flex-col items-start lg:flex-row lg:items-center gap-2">
                          <p className="font-semibold text-lg">{d.title}</p>
                          <CategoryTag category={d.category} />
                        </div>
                        <p className="dark:text-gray-300 text-gray-600 h-full">
                          {d.description}
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p className="">Tools: </p>
                        <div className="flex flex-wrap gap-y-2">
                          {d.tools.split(",").map((tool, i) => (
                            <CategoryTag
                              category={tool.toLowerCase()}
                              key={i}
                              className="rounded"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <ProjectPreviewFooter
                      data={{ url: d.url, github: d.url }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <ProjectDetails />
        </motion.section>
      </div>
      <FooterButton
        prevTitle={"About Me"}
        nextTitle={"Contact"}
        icon={false}
        nextLink="/contact"
        prevLink="/about"
      />
    </AnimatePresence>
  );
};

export default Page;
