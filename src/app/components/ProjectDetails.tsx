"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  FaArrowAltCircleRight,
  FaEye,
  FaRegWindowClose,
  FaWindowClose,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { closeProjectDetails } from "../../../redux/projectDetails";
import { Drawer, Modal } from "antd";
import { motion } from "framer-motion";
import CategoryTag from "./CategoryTag";
import ProjectPreviewFooter from "./ProjectPreviewFooter";
import { BiXCircle } from "react-icons/bi";

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
  const [preview, setPreview] = useState({ isOpen: false, src: "", title: "" });

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
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left font-semibold text-base border-b border-b-gray-300 dark:border-b-gray-600 pb-2 w-full "
      >
        {props.title}
      </motion.p>
    );
  };

  const DetailRow = (props: { rowTitle: string; rowData?: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-start p-3 rounded-xl backdrop-blur-md 
        bg-white/40 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700/50
        shadow-sm gap-2"
      >
        <p className="font-semibold border-b border-b-gray-300 dark:border-b-gray-600 pb-2 w-full text-base">
          {props.rowTitle}
        </p>
        <p className="text-left dark:text-gray-300 text-gray-600 text-sm py-2">
          {props.rowData}
        </p>
      </motion.div>
    );
  };

  const ProjectImages = (props: {
    title: string;
    dataRef: { src: string }[];
  }) => {
    return (
      <div
        className="flex flex-col items-start p-3 rounded-xl backdrop-blur-md 
        bg-white/40 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700/50
        shadow-sm gap-4"
      >
        <ImageTitle title={props.title} />
        <div className="flex flex-col items-center justify-center gap-4 xl:gap-6 w-full">
          {props.dataRef?.map((i: { src: string }, index) => (
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group rounded-lg md:h-[200px] xl:h-[400px] w-full border dark:border-none shadow relative flex flex-col items-center justify-center overflow-hidden"
              key={index}
            >
              <img
                height={500}
                width={500}
                src={i.src}
                alt={"frontend developer"}
                className="w-full object-cover h-full"
              />
              <div className="absolute top-full group-hover:top-0 bg-black bg-opacity-50 h-full w-full flex items-center justify-center duration-300">
                <FaEye
                  className="text-2xl hover:text-primaryBlue dark:hover:text-primaryRed duration-200 cursor-pointer"
                  onClick={(e: any) => {
                    e.stopPropagation();
                    setPreview({
                      isOpen: true,
                      title: props.title,
                      src: i.src,
                    });
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const ImagePreview = (props: { src: string; title: string }) => {
    return (
      <Modal
        open={preview.isOpen}
        onCancel={() => setPreview({ isOpen: false, title: "", src: "" })}
        onOk={() => setPreview({ isOpen: false, title: "", src: "" })}
        className={twMerge(
          "!max-w-[1000px] !w-full",
          "[&_.ant-modal-content]:!rounded-2xl",
          "[&_.ant-modal-content]:backdrop-blur-xl",
          "[&_.ant-modal-content]:shadow-[0_8px_32px_rgba(0,0,0,0.3)]",
          "[&_.ant-modal-content]:!border",
          "[&_.ant-modal-content]:!bg-white/30",
          "dark:[&_.ant-modal-content]:!bg-gray-900/30",
          "[&_.ant-modal-content]:!border-white/40",
          "dark:[&_.ant-modal-content]:!border-gray-700/50"
        )}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="p-4 pt-12 lg:p-8 flex flex-col items-center justify-center gap-4"
        >
          <img
            src={props.src}
            alt="frontend developer"
            className="max-w-[350px] md:max-w-[700px] h-full rounded-md shadow-md"
          />
          <p
            className="font-semibold text-xl px-4 py-1 rounded shadow-md mt-4 
            text-white bg-primaryBlue/80 dark:bg-primaryRed/80 
            backdrop-blur-md border border-white/20 dark:border-gray-700/40"
          >
            {preview.title}
          </p>
        </motion.div>
      </Modal>
    );
  };

  return (
    <Drawer
      classNames={{
        content: twMerge(
          "lg:!mr-4 !my-[2vh] !rounded-3xl !h-[96vh] !w-[97%] !place-self-center",
          "!backdrop-blur-xl",
          "!border",
          "dark:!bg-gray-900/30 dark:border-gray-700/50"
        ),
        footer: "!mt-0 !p-0",
        header: "!p-0",
        body: "!p-3 lg:!p-6",
      }}
      open={isProjectDetailsOpen}
      onClose={() => dispatch(closeProjectDetails())}
      width={800}
      closeIcon={null}
      title={
        <div className="relative p-3 lg:p-6 border-b border-gray-300 dark:border-gray-600 flex items-center justify-between">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-2 md:gap-4">
            <h2 className="font-bold text-2xl dark:text-primaryRed text-primaryBlue">
              {projectDetails.title}
            </h2>
            <CategoryTag
              category={projectDetails.category}
              className="py-1 px-3 text-xs md:text-sm"
            />
          </div>

          <BiXCircle
            size={28}
            color="red"
            onClick={() => dispatch(closeProjectDetails())}
          />
        </div>
      }
      footer={
        <ProjectPreviewFooter
          data={{ url: projectDetails.url, github: projectDetails.url }}
        />
      }
    >
      <div>
        <div>
          <motion.img
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            src={projectDetails.img}
            alt="frontend developer"
            height={500}
            width={500}
            className="rounded-xl w-full h-full object-cover border border-gray-300 dark:border-gray-600"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-6"
          >
            <div className="flex flex-col gap-4">
              {[
                // { title: "Category", data: projectDetails.category },
                { title: "Overview", data: projectDetails.description },
                { title: "Tools", data: projectDetails.tools },
                // { title: "Year", data: projectDetails.year },
              ].map((d, index) => (
                <DetailRow rowTitle={d.title} rowData={d.data} key={index} />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-4 mt-4">
          <p className="font-semibold text-base pb-2 border-b border-b-gray-300 dark:border-b-gray-600 w-full">
            Project Images
          </p>
          <div className="space-y-4">
            {projectDetails?.projectImages?.map((img, index) => (
              <ProjectImages
                dataRef={img.images}
                title={img.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <ImagePreview src={preview.src} title={preview.title} />
    </Drawer>
  );
};

export default ProjectDetails;
