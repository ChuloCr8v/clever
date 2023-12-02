import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeProjectDetails } from "../../../redux/projectDetails";
import Image from "next/image";
import PageTitle from "./PageTitle";
import Button from "./Button";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
  data: {
    url: string;
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

    title: string;
  };
};

const ProjectDetails = (props: Props) => {
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );

  const dispatch = useDispatch();

  const ImageTitle = (props: { title: string }) => {
    return <p className="text-center my-6 font-bold text-lg ">{props.title}</p>;
  };

  const DetailRow = (props: { rowTitle: string; rowData?: string }) => {
    return (
      <div className="flex items-start justify-between border-b border-dotted border-gray-500 pb-2">
        <p className=" basis-full font-bold dark:text-primaryRed text-primaryBlue">
          {props.rowTitle}
        </p>
        <p className="text-left basis-full">{props.rowData}</p>
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
        src={props.data.img}
        alt="frontend developer"
        height={500}
        width={500}
        className="rounded-lg"
      />
      <h2 className="font-bold text-2xl border-b dark:border-gray-200 border-gray-500 pb-2 mt-6">
        {" "}
        {props.data.title}
      </h2>
      <div className="flex flex-col gap-4 mt-6">
        <DetailRow rowTitle={"Category"} rowData={props.data.category} />
        <DetailRow rowTitle={"Tools"} rowData={props.data.tools} />
        <DetailRow rowTitle={"Year"} rowData={props.data.year} />
      </div>
      <p className="mt-8 text-lg font-semibold text-primaryBlue dark:text-primaryRed">
        About
      </p>
      <p className="mt-2 mb-6">{props.data.description}</p>
      <div className="flex gap-4">
        {" "}
        <Button title={"Visit Project"} link={props.data.url} />
        <Button title={"Github Repo"} link={props.data.url} />
      </div>
      <div className="">
        <ProjectImages
          dataRef={props.data?.imageOne?.images}
          title={props.data?.imageOne?.title}
        />
        <ProjectImages
          dataRef={props.data?.imageTwo?.images}
          title={props.data?.imageTwo?.title}
        />
        <ProjectImages
          dataRef={props.data?.imageThree?.images}
          title={props.data?.imageThree?.title}
        />
        <ProjectImages
          dataRef={props.data?.imageFour?.images}
          title={props.data?.imageFour?.title}
        />
      </div>
    </section>
  );
};

export default ProjectDetails;
