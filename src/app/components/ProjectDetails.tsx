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
      <p className="text-center my-6 font-bold text-lg md:text-xl  dark:text-primaryRed text-primaryBlue">
        {props.title}
      </p>
    );
  };

  const DetailRow = (props: { rowTitle: string; rowData?: string }) => {
    return (
      <div className="flex items-start justify-between border-b border-dotted border-gray-500 pb-2 md:text-xl xl:text-lg">
        <p className=" basis-full font-bold dark:text-primaryRed text-primaryBlue">
          {props.rowTitle}
        </p>
        <p className="text-left basis-full dark:text-gray-400 text-gray-500 ">
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
      <div className="mt-12 xl:mt-16">
        <ImageTitle title={props.title} />
        <div className={twMerge("flex flex-col items-center gap-4 xl:gap-6")}>
          {props.dataRef?.map((i: { src: string }, index) => (
            <div
              className={twMerge(
                "rounded-lg overflow-hidden md:h-[200px] xl:h-[400px] w-full border dark:border-none shadow"
              )}
              key={index}
            >
              <Image
                height={500}
                width={500}
                key={index}
                src={i.src}
                alt={""}
                className="w-full object-cover h-full"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section
      onClick={() => dispatch(closeProjectDetails())}
      className={twMerge(
        "fixed overflow-y-scroll min-h-screen left-0 top-0 h-screen w-full bg-white dark:bg-gray-800 -translate-x-full duration-200 py-24 xl:pt-48 px-4 flex flex-col items-center",
        isProjectDetailsOpen && "translate-x-0"
      )}
    >
      <div className="max-w-6xl">
        <div className="">
          <Image
            src={projectDetails.img}
            alt="frontend developer"
            height={500}
            width={500}
            className="rounded-lg w-full h-full object-cover border"
          />
          <div className="mt-6 xl:mt-12">
            <h2 className="font-bold text-2xl xl:text-4xl border-b dark:border-gray-200 border-gray-500 pb-2 ">
              {projectDetails.title}
            </h2>
            <div className="xl:flex items-start xl:gap-12 xl:mt-8">
              <div className="flex flex-col gap-4 mt-6 xl:mt-0 xl:order-2 basis-full">
                {[
                  { title: "Category", data: projectDetails.category },
                  { title: "Tools", data: projectDetails.tools },
                  { title: "Year", data: projectDetails.year },
                ].map((d, index) => (
                  <DetailRow rowTitle={d.title} rowData={d.data} key={index} />
                ))}
              </div>
              <div className="">
                <p className="mt-8 xl:mt-0 text-lg md:text-xl font-semibold text-primaryBlue dark:text-primaryRed">
                  About
                </p>
                <p className="md:text-xl xl:text-lg mt-2 mb-6 dark:text-gray-400 text-gray-500 text-justify">
                  {projectDetails.description}
                </p>
              </div>
            </div>
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
                  className="flex items-center gap-2 text-[14px] md:text-xl xl:text-lg dark:text-gray-400 text-gray-500 dark:hover:text-primaryRed hover:text-primaryBlue duration-200"
                >
                  {d.title}
                  <FaArrowAltCircleRight />
                </a>
              ))}
            </div>{" "}
          </div>
        </div>
        <div className="">
          {projectDetails?.projectImages?.map((img, index) => (
            <ProjectImages dataRef={img.images} title={img.title} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
