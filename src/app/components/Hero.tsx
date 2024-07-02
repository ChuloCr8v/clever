"use client";

import { useDispatch } from "react-redux";
import { openSkills } from "../../../redux/skills";
import { stacks } from "../data";
import Button from "./Button";
import FooterButton from "./FooterButton";
import Cv from "./Cv";
import { openCv } from "../../../redux/cv";

type Props = {};

const Hero = (props: Props) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative">
      <div className="container text-center flex flex-col items-center">
        <p className="text-base md:text-2xl stroke">
          Hey, <span className="">I&rsquo;m</span>
        </p>
        <p className="text-2xl md:text-4xl mt-1 uppercase font-bold">
          Nkematu Bonaventure
        </p>
        <p className="text-base md:text-2xl mt-1 leading-none">
          <span className="font-semibold text-primaryBlue pr-2">
            Frontend Developer
          </span>
        </p>
        <div className="stacks flex flex-wrap justify-center items-center gap-2 mt-4 px-4">
          {stacks.map((s, index) => (
            <div className="border-r border-gray-500 pr-2 stack" key={index}>
              <p className="text-base md:text-xl capitalize leading-none  dark:text-gray-400 text-gray-500">
                {s.stack}
              </p>
            </div>
          ))}
        </div>{" "}
        <div className="flex items-center gap-4 mt-12">
          {" "}
          <Button
            prevBtn
            onclick={() => dispatch(openCv())}
            title={"My Resume"}
            className="border-[1.5px] py-2 md:py-1 border-transparent hover:border-gray-700  hover:bg-gray-800 text-sm md:bg-gray-700 dark:text-gray-300 font-normal"
          />
          <Button
            onclick={() => dispatch(openSkills())}
            title={"More Skills"}
            className="border-[1.5px] py-2 md:py-1 border-transparent hover:border-gray-700  hover:bg-gray-800 text-sm md:bg-gray-700 dark:text-gray-300 font-normal"
          />
        </div>
        <FooterButton
          prevExternal
          prevTitle={"My Resume"}
          nextTitle={"About Me"}
          nextLink="/about"
          prevLink="https://drive.google.com/file/d/1qHv4FbFW3hBqQHdQHb9U1AIbyesokvkj/view?usp=sharing"
        />
        <Cv />
      </div>
    </div>
  );
};

export default Hero;
