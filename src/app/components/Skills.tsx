"use client";

import React from "react";
import Button from "./Button";
import { skills } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { closeSkills } from "../../../redux/skills";
import { motion } from "framer";
import { FaTimes } from "react-icons/fa";

type Props = {};

const Skills = (props: Props) => {
  const { isSkillsOpen } = useSelector(
    (state: { skills: { isSkillsOpen: boolean } }) => state.skills
  );
  const dispatch = useDispatch();

  const SkillSectionTitle = (props: { title: string }) => {
    return (
      <div className="flex items-end gap-4">
        <p className="leading-none text-primaryBlue dark:text-primaryRed font-semibold md:text-xl">
          {props.title}
        </p>
        <div className="border-b border-graay-800 basis-full "></div>{" "}
      </div>
    );
  };

  const SkillSection = (props: { title: string; type: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 0.5,
        }}
        className="language bg-gray-50 dark:bg-gray-700 100 p-4 border-1.5 shadow rounded"
      >
        <SkillSectionTitle title={props.title} />

        <div className="wrapper grid grid-cols-3 gap-2 mt-5">
          {skills
            .filter((s) => s.type === props.type)
            .map((s, index) => (
              <p
                key={index}
                className="text-sm md:text-lg bg-gray-200 dark:bg-gray-600 text-center px-4 py-[1px] md:py-1 rounded-full dark:text-gray-100"
              >
                {s.skill}
              </p>
            ))}
        </div>
      </motion.div>
    );
  };

  return (
    <>
      {isSkillsOpen && (
        <motion.section
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          className="h-screen w-full pt-20 px-4 fixed z-40 left-0 top-0 bg-gray-100 dark:bg-gray-800 flex flex-col items-center"
        >
          <motion.div className="container flex items-center justify-end relative w-full">
            <div className="flex items-center justify-between w-full xl:mt-10">
              <div className="flex items-end justify-end gap-4 my-6 relative z-50">
                <h2 className="header header-stroke font-bold text-5xl text-right leading-none">
                  Skills
                </h2>
              </div>
              <div
                onClick={() => dispatch(closeSkills())}
                className="skills-close-button hover:text-primaryRed cursor-pointer text-[50px] md:text-5xl opacity-75 font-bold duration-200"
              >
                <FaTimes />
              </div>
            </div>
          </motion.div>

          <div className="container space-y-6 overflow-y-scroll h-full pb-28 pt-2 mt-6">
            {[
              { title: "Languages", type: "language" },
              { title: "Styling", type: "style" },
              { title: "Frameworks", type: "framework" },
              { title: "Databases", type: "database" },
              { title: "Design", type: "design" },
              { title: "More", type: "others" },
            ].map((d, index) => (
              <SkillSection title={d.title} type={d.type} key={index} />
            ))}
          </div>
        </motion.section>
      )}
    </>
  );
};

export default Skills;
