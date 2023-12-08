"use client";

import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { AnimatePresence, motion } from "framer";
import { projects } from "../data";
import ProjectDetails from "../components/ProjectDetails";
import {
  closeProjectDetails,
  openProjectDetails,
} from "../../../redux/projectDetails";
import { useDispatch, useSelector } from "react-redux";
import FooterButton from "../components/FooterButton";

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
  const [currentProjectImage, setCurrentProjectImage] = useState(
    "/projects/lachiommy.png"
  );
  const [projectData, setProjectData] = useState<dataProps>(dataPropsHooks);
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );

  const dispatch = useDispatch();

  const toggleProjectDetails = (details: dataProps) => {
    setCurrentProjectImage(details.img);
    setProjectData(details);
    dispatch(
      isProjectDetailsOpen ? closeProjectDetails() : openProjectDetails(details)
    );
  };

  return (
    <AnimatePresence>
      <div className="overflow-hidden">
        <motion.section
          className="pt-24 pb-32 px-6 flex flex-col items-center xl:justify-center min-h-screen"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <div className="container max-w-7xl flex flex-col xl:flex-row gap-6 xl:gap-12">
            <div className="rounded-lg overflow-hidden basis-full ">
              <Image
                src={currentProjectImage}
                height={400}
                width={400}
                alt={"frontend developer portfolio"}
                className="w-full xl:rounded-lg h-full object-cover"
              />
            </div>
            <div className="w-full basis-full">
              <div className="flex justify-between items-center md:mt-8 xl:mt-0">
                {" "}
                <PageTitle title={"Projects"} />
                <span className="bg-gray-800 dark:bg-gray-300 text-gray-300 dark:text-gray-800 font-bold  md:text-2xl h-7 w-7 md:h-9 md:w-9 rounded flex items-center justify-center ml-4">
                  {projects.length}
                </span>
              </div>
              <div className="xl:mt-6">
                {projects.map((d, index) => (
                  <div
                    onClick={() => toggleProjectDetails(d)}
                    className="group dark:text-gray-400 md:text-xl xl:text-xl text-gray-500 hover:text-primaryBlue dark:hover:text-primaryRed border-b border-gray-500 dark:hover:border-primaryRed hover:border-primaryBlue pt-4 md:pt-8 xl:pt-5 xl:pb-2 flex justify-between items-center duration-200"
                    key={index}
                  >
                    {d.title}
                    <FaArrowRight className="group-hover:-rotate-[35deg] duration-200" />
                  </div>
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
