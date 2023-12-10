"use client";

import { useDispatch } from "react-redux";
import { openSkills } from "../../../redux/skills";
import { stacks } from "../data";
import Button from "./Button";
import FooterButton from "./FooterButton";

type Props = {};

const Hero = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="container text-center flex flex-col items-center">
        <p className="text-base md:text-2xl stroke">
          Hey, <span className="">I&rsquo;m</span>
        </p>
        <p className="text-2xl md:text-4xl mt-1 uppercase font-bold">
          Nkematu Bonaventure
        </p>
        <p className="text-base md:text-2xl mt-1 leading-none">
          <span className=" text-primaryBlue pr-2">Frontend Developer</span>
          <span className="text-primaryRed border-l border-gray-500 pl-2">
            TypeScript
          </span>
        </p>
        <div className="stacks flex flex-wrap justify-center items-center gap-2 mt-4 px-4">
          {stacks.map((s, index) => (
            <div className="border-r border-gray-500 pr-2 stack" key={index}>
              <p className="text-base md:text-2xl  leading-none lowercase dark:text-gray-400 text-gray-500">
                {s.stack}
              </p>
            </div>
          ))}
        </div>{" "}
        <Button
          onclick={() => dispatch(openSkills())}
          title={"More"}
          className={
            "bg-gray-200 dark:bg-gray-700 font-semibold dark:text-gray-300 text-gray-500 hover:text-gray-200 hover:bg-gray-700 px-4 w-fit place-self-center mt-6"
          }
        />
        <FooterButton
          prevTitle={"My Resume"}
          nextTitle={"About Me"}
          icon={false}
          nextLink="/about"
          prevLink="/resume"
        />
      </div>
    </div>
  );
};

export default Hero;
