"use client";

import { AnimatePresence, motion } from "framer";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { openSkills } from "../../../redux/skills";
import { useDispatch } from "react-redux";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";

type Props = {};

const Page = (props: Props) => {
  const dispatch = useDispatch();
  return (
    <AnimatePresence>
      <div className="overflow-x-hidden flex flex-col items-center justify-center pt-24 pb-24 px-6 min-h-screen">
        <motion.div
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
          className="grid gap-6 xl:gap-12 xl:flex max-w-7xl"
        >
          <div className="rounded-xl shadow h-fit xl:h-full overflow-hidden basis-full">
            <Image
              src={"/me-bg.jpg"}
              alt={"clever dev frontend developer"}
              height={500}
              width={500}
              className="w-full object-top"
            />
          </div>
          <div className="flex flex-col gap-6 md:mt-8 xl:mt-0 h-fit">
            <PageTitle title={"About"} />
            <p className="text-justify text-base md:text-xl text-gray-700 dark:text-gray-400">
              Hello. I am Nkematu Bonaventure, a frontend developer with vast
              experience creating amazing user interfaces and user experience.
              <span className="mt-4 block">
                {" "}
                My work stacks include{" "}
                <span className="font-semibold lowercase text-primaryBlue dark:text-primaryRed">
                  {" "}
                  HTML5, CSS3, JavaScript, React.js, Next.js, WordPress, Sass,
                  Bootstrap, TailwindCss,
                </span>{" "}
                <span
                  className="bg-yellow-200 text-black inline-block rounded font-semibold hover:bg-yellow-400 hover:text-white duration-200 leading-none px-1"
                  onClick={() => dispatch(openSkills())}
                >
                  etc{" "}
                </span>
                . I create websites that are responsive across devices.
              </span>
            </p>
            <div className="flex gap-4 mt-2">
              {" "}
              <Button
                title={"Skills/Tools"}
                onclick={() => dispatch(openSkills())}
                className="w-fit px-2"
              />
              <Button title={"My Github"} link="https://github.com/chulocr8v" />{" "}
            </div>
          </div>
        </motion.div>
      </div>
      <FooterButton
        prevTitle={"My Resume"}
        nextTitle={"Projects"}
        icon={false}
        nextLink="/projects"
        prevLink="/resume"
      />
    </AnimatePresence>
  );
};

export default Page;
