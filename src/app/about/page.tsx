"use client";

import { AnimatePresence, motion } from "framer";
import Image from "next/image";
import React from "react";
import Button from "../components/Button";
import { openSkills } from "../../../redux/skills";
import { useDispatch } from "react-redux";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";
import ParticlesContainer from "../components/Particles";

type Props = {};

const Page = (props: Props) => {
  const dispatch = useDispatch();

  const subtitleClassName = "grid gap-2 mb-4 text-justify";
  const subtitleTextClassName =
    "text-lg font-bold text-primaryBlue dark:text-primaryRed capitalize";
  const subtitleContentClassName = "text-gray-600 dark:text-gray-400";

  const Subtitle = (props: { subtitle: string; content: string }) => {
    return (
      <div className={subtitleClassName}>
        <p className={subtitleTextClassName}>{props.subtitle}</p>
        <p className={subtitleContentClassName}>{props.content}</p>
      </div>
    );
  };

  return (
    <>
      <AnimatePresence>
        <div className="flex flex-col items-center justify-center pt-24 xl:pt-36 pb-24 px-6 overflow-x-hidden">
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="grid md:grid-cols-6 gap-6 max-w-7xl"
          >
            <div className="rounded-xl md:rounded-bl-[100px] shadow h-fit overflow-hidden col-span-2 xl:hidden">
              <Image
                src={"/me-bg.jpg"}
                alt={"clever dev frontend developer"}
                height={500}
                width={500}
                className="w-full object-center xl:max-h-[550px]"
              />
            </div>
            <div className="flex flex-col gap-6 md:mt-0 h-fit md:col-span-4">
              <PageTitle title={"About"} />
              <div className="">
                <Subtitle
                  subtitle={"Introduction"}
                  content={
                    "I am Nkematu Bonaventure, a frontend developer with a passion for crafting exceptional user interfaces and experiences."
                  }
                />
                <div className={subtitleClassName}>
                  <p className={subtitleTextClassName}>Technical Expertise</p>
                  <p className={subtitleContentClassName}>
                    My technical toolkit boasts the latest frontend
                    technologies, including:
                  </p>
                  {[
                    {
                      title: "Core web technologies",
                      content:
                        "HTML5, CSS3, Javascript, Typescript, React.js, Next.js, Node.js, Express.js, MongoDB.",
                    },
                    {
                      title: "Content Management systems",
                      content: "Wordpress.",
                    },
                    {
                      title: "Styling and Design",
                      content:
                        "Sass, Boostrap, TailwindCss, Photoshop, Canva, Adobe Illustrator.",
                    },
                  ].map((d, index) => (
                    <ol className="" key={index}>
                      <li
                        className="font-bold text-gray-600 dark:text-gray-200"
                        key={index}
                      >
                        {d.title}:{" "}
                        <span className="font-normal text-gray-600 dark:text-gray-400">
                          {d.content}
                        </span>
                      </li>
                    </ol>
                  ))}
                  <p className={subtitleContentClassName}>
                    This comprehensive skillset allows me to build robust web
                    applications with dynamic user interfaces and
                    high-performance capabilities.
                  </p>
                </div>
                <ParticlesContainer />
                <Subtitle
                  subtitle={"Commitment to Quality"}
                  content={
                    "I place a high value on clean and maintainable code, ensuring long-term project sustainability and ease of future updates. Using industry-leading tools like Sass, Bootstrap, and Tailwind CSS, I enhance the visual aesthetics of websites while maintaining code integrity."
                  }
                />
                <Subtitle
                  subtitle={"Responsive Design & Accessibility"}
                  content={
                    "I understand the importance of responsive design in today's digital landscape. My websites seamlessly adapt to various devices, guaranteeing optimal user experience across all platforms. Additionally, I prioritize accessibility, ensuring that everyone can access and interact with my creations."
                  }
                />
                <Subtitle
                  subtitle={"Staying Ahead of the Curve"}
                  content={
                    "I am constantly seeking to expand my knowledge and incorporate emerging industry trends into my work. This dedication to innovation allows me to deliver cutting-edge designs that captivate and engage users, keeping your projects at the forefront of the digital world."
                  }
                />
              </div>
              <div className="flex gap-4 mt-2">
                {" "}
                <Button
                  title={"Skills/Tools"}
                  onclick={() => dispatch(openSkills())}
                  className="w-fit px-2"
                />
                <Button
                  title={"My Github"}
                  link="https://github.com/chulocr8v"
                />{" "}
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
      <div className=" xl:rounded-bl-[80px] shadow h-fit overflow-hidden xl:max-w-[400px] w-full fixed right-0 top-0 hidden xl:block about-image">
        <Image
          src={"/me-bg.jpg"}
          alt={"clever dev frontend developer"}
          height={500}
          width={500}
          className="about-image_img w-full object-center xl:max-h-[550px]"
        />
      </div>
    </>
  );
};

export default Page;

//  Hello. I am Nkematu Bonaventure, a frontend developer with vast
//               experience creating amazing user interfaces and user experience.
//               <span className="mt-4 block">
//                 {" "}
//                 My work stacks include{" "}
//                 <span className="font-semibold lowercase text-primaryBlue dark:text-primaryRed">
//                   {" "}
//                   HTML5, CSS3, JavaScript, React.js, Next.js, WordPress, Sass,
//                   Bootstrap, TailwindCss,
//                 </span>{" "}
//                 <span
//                   className="bg-yellow-200 text-black inline-block rounded font-semibold hover:bg-yellow-400 hover:text-white duration-200 leading-none px-1"
//                   onClick={() => dispatch(openSkills())}
//                 >
//                   etc{" "}
//                 </span>
//                 . I create websites that are responsive across devices.
//               </span>
