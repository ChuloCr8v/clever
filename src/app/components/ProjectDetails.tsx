"use client";

import Image from "next/image";
import { useEffect } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeProjectDetails } from "../../../redux/projectDetails";
import { useRouter } from "next/navigation";

type Props = {
  projectDetails: {
    url: string;
    img: string;
    projectImages: {
      images: { src: string }[];
      title: string;
    }[];
    description: string;
    category: string;
    tools: string;
    year: string;
    title: string;
  };
};

const ProjectDetails = () => {
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );
  const { projectDetails } = useSelector(
    (state: { projectDetails: { projectDetails: Props["projectDetails"] } }) =>
      state.projectDetails
  );

  const currentPage = window?.location?.pathname;

  const dispatch = useDispatch();

  useEffect(() => {
    !currentPage.includes("/projects") ? dispatch(closeProjectDetails()) : "";
  }, [currentPage, dispatch]);

  const ImageTitle = (props: { title: string }) => {
    return (
      <p className="text-center my-6 font-bold text-lg  dark:text-primaryRed text-primaryBlue">
        {props.title}
      </p>
    );
  };

  const DetailRow = (props: { rowTitle: string; rowData?: string }) => {
    return (
      <div className="flex items-start justify-between border-b border-dotted border-gray-500 pb-2">
        <p className=" basis-full font-bold dark:text-primaryRed text-primaryBlue">
          {props.rowTitle}
        </p>
        <p className="text-left basis-full dark:text-gray-400 text-gray-500">
          {props.rowData}
        </p>
      </div>
    );
  };

  const ProjectImages = (props: {
    title: string;
    dataRef: { src: string }[];
  }) => {
    return (
      <div className="mt-12">
        <ImageTitle title={props.title} />
        <div className="flex flex-col items-center gap-4">
          {props.dataRef?.map((i: { src: string }, index) => (
            <Image
              height={500}
              width={500}
              key={index}
              src={i.src}
              alt={""}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      onClick={() => dispatch(closeProjectDetails())}
      className={twMerge(
        "fixed overflow-y-scroll min-h-screen left-0 top-0 h-screen w-full bg-white dark:bg-gray-800 -translate-x-full duration-200 py-24 px-4",
        isProjectDetailsOpen && "translate-x-0"
      )}
    >
      <Image
        src={projectDetails.img}
        alt="frontend developer"
        height={500}
        width={500}
        className="rounded-lg"
      />
      <h2 className="font-bold text-2xl border-b dark:border-gray-200 border-gray-500 pb-2 mt-6">
        {projectDetails.title}
      </h2>
      <div className="flex flex-col gap-4 mt-6">
        {[
          { title: "Category", data: projectDetails.category },
          { title: "Tools", data: projectDetails.tools },
          { title: "Year", data: projectDetails.year },
        ].map((d, index) => (
          <DetailRow rowTitle={d.title} rowData={d.data} key={index} />
        ))}
      </div>
      <p className="mt-8 text-lg font-semibold text-primaryBlue dark:text-primaryRed">
        About
      </p>
      <p className="mt-2 mb-6 dark:text-gray-400 text-gray-500">
        {projectDetails.description}
      </p>
      <div className="flex gap-4">
        {[
          { title: "Visit Project", data: projectDetails.url },
          { title: "Github Repo", data: projectDetails.url },
        ].map((d, index) => (
          <a
            href={projectDetails.url}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[14px] dark:text-gray-400 text-gray-500 dark:hover:text-primaryRed hover:text-primaryBlue duration-200"
          >
            {d.title}
            <FaArrowAltCircleRight />
          </a>
        ))}
      </div>
      <div className="">
        {projectDetails?.projectImages?.map((img, index) => (
          <ProjectImages dataRef={img.images} title={img.title} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectDetails;
