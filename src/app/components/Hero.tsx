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
        <p className="text-base stroke">
          Hey, <span className="">I&rsquo;m</span>
        </p>
        <p className="text-2xl mt-1 uppercase font-bold">Nkematu Bonaventure</p>
        <p className="text-base mt-1 leading-none">
          <span className=" text-primaryBlue pr-2">Frontend Developer</span>
          <span className="text-primaryRed border-l border-black pl-2">
            Graphic Designer
          </span>
        </p>
        <div className="stacks flex flex-wrap justify-center items-center gap-2 mt-4 px-4">
          {stacks.map((s, index) => (
            <div className="border-r border-black pr-2 stack" key={index}>
              <p className="text-base leading-none lowercase">{s.stack}</p>
            </div>
          ))}
        </div>{" "}
        <Button
          onclick={() => dispatch(openSkills())}
          title={"More"}
          className={
            " bg-gray-200 text-gray-700 font-semibold hover:text-gray-200 hover:bg-gray-700 px-4 w-fit place-self-center mt-4"
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
