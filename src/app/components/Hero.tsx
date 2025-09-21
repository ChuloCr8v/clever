"use client";

import { useDispatch } from "react-redux";
import { openSkills } from "../../../redux/skills";
import { stacks } from "../data";
import Button from "./Button";
import FooterButton from "./FooterButton";
import Cv from "./Cv";
import { openCv } from "../../../redux/cv";

const Hero = () => {
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
            Senior Frontend Developer
          </span>
        </p>
        <div className="stacks flex flex-wrap justify-center items-center gap-2 mt-4 px-4">
          {stacks.map((s, index) => (
            <div
              className="border-r last-of-type:border-0 border-gray-500 pr-2 stack"
              key={index}
            >
              <p className="text-sm capitalize leading-none dark:text-gray-300 text-gray-300">
                {s.stack}
              </p>
            </div>
          ))}
        </div>{" "}
        <div className="flex items-center gap-3 mt-8">
          {" "}
          <Button
            prevBtn
            onclick={() => dispatch(openCv())}
            title={"My Resume"}
          />
          <Button
            onclick={() => dispatch(openSkills())}
            title={"More Skills"}
            type="secondary"
          />
        </div>
        <FooterButton
          prevExternal
          prevTitle={"My Resume"}
          nextTitle={"About Me"}
          nextLink="/about"
          prevLink="https://drive.google.com/file/d/1_GrUJZrN3gDWy4CyNfniFKPY1v5Z-WTh/view?usp=sharing"
        />
        <Cv />
      </div>
    </div>
  );
};

export default Hero;
