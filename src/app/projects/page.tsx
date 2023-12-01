"use client";

import React, { useState } from "react";
import PageTitle from "../components/PageTitle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer";
import { projects } from "../data";
import ProjectDetails from "../components/ProjectDetails";
import {
  closeProjectDetails,
  openProjectDetails,
} from "../../../redux/projectDetails";
import { useDispatch, useSelector } from "react-redux";

type Props = {};
type dataProps = {
  img: string;
  imageTwo: {
    title: string;
    images: { src: string }[];
  };
  imageOne: {
    title: string;
    images: { src: string }[];
  };
  imageThree: {
    title: string;
    images: { src: string }[];
  };
  imageFour: {
    title: string;
    images: { src: string }[];
  };
  description: string;
  category: string;
  tools: string;
  year: string;
  url: string;
  title: string;
};

const page = (props: Props) => {
  const [currentProjectImage, setCurrentProjectImage] = useState(
    "/projects/lachiommy.png"
  );
  const [projectData, setProjectData] = useState<dataProps>({
    img: "",
    imageTwo: {
      title: "",
      images: [{ src: "" }],
    },
    imageOne: {
      title: "",
      images: [{ src: "" }],
    },
    imageThree: {
      title: "",
      images: [{ src: "" }],
    },
    imageFour: {
      title: "",
      images: [{ src: "" }],
    },
    description: "",
    category: "",
    tools: "",
    year: "",
    url: "",
    title: "",
  });
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );

  const dispatch = useDispatch();

  const toggleProjectDetails = (details: dataProps) => {
    setCurrentProjectImage(details.img);
    setProjectData(details);
    dispatch(
      isProjectDetailsOpen ? closeProjectDetails() : openProjectDetails()
    );
  };

  return (
    <section className=" pt-24 pb-24 px-6">
      <div className="container flex flex-col gap-6">
        <Image
          src={currentProjectImage}
          height={400}
          width={400}
          alt={"frontend developer portfolio"}
          className="rounded-lg"
        />
        <PageTitle title={"Projects"} />
        <div className="">
          {projects.map((d, index) => (
            <div
              onClick={() => toggleProjectDetails(d)}
              className="group hover:text-primaryBlue dark:hover:text-primaryRed border-b border-gray-500 dark:hover:border-primaryRed hover:border-primaryBlue pt-4 flex justify-between items-center duration-200"
              key={index}
            >
              {d.title}
              <FaArrowRight className="group-hover:-rotate-[35deg] duration-200" />
            </div>
          ))}
        </div>
      </div>
      <ProjectDetails data={projectData} />
    </section>
  );
};

export default page;
