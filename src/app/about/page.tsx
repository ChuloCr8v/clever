"use client";

import { AnimatePresence, motion } from "framer";
import React from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Button from "../components/Button";
import FooterButton from "../components/FooterButton";
import PageTitle from "../components/PageTitle";
import ParticlesContainer from "../components/Particles";
import { openSkills } from "../../../redux/skills";

type Props = {};

const Page = (props: Props) => {
  const dispatch = useDispatch();

  const subtitleClassName = "grid gap-2 mb-4 text-justify";
  const subtitleTextClassName =
    "text-lg font-bold text-primaryBlue dark:text-primaryRed capitalize";
  const subtitleContentClassName = "text-gray-700 dark:text-gray-300";

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
        <div className="flex flex-col items-center justify-center pt-24 xl:pt-36 pb-24 px-3 overflow-x-hidden relative">
          <motion.div
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100vw", opacity: 0 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
            className="grid md:grid-cols-6 gap-6 max-w-7xl"
          >
            <div className="rounded-xl md:rounded-bl-[100px] shadow h-fit overflow-hidden md:col-span-2 xl:hidden">
              <img
                src={"/me-bg.jpg"}
                alt={"clever dev frontend developer"}
                className="w-full object-center xl:max-h-[550px] "
              />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 md:mt-0 h-fit md:col-span-4">
              <PageTitle title={"About"} />

              <div>
                <Subtitle
                  subtitle={"Introduction"}
                  content={
                    "I am Nkematu Bonaventure, a frontend-focused full-stack developer with over 5 years of experience building modern web and mobile applications. I specialize in crafting intuitive user interfaces while also architecting scalable backends."
                  }
                />

                <div className={subtitleClassName}>
                  <p className={subtitleTextClassName}>Technical Expertise</p>
                  <p className={subtitleContentClassName}>
                    My skillset bridges frontend, backend, and cloud tools,
                    enabling me to deliver complete, production-ready
                    applications:
                  </p>
                  {[
                    {
                      title: "Frontend & Mobile",
                      content:
                        "React.js, Next.js, React Native (Expo), TypeScript, TailwindCSS, React Native Paper.",
                    },
                    {
                      title: "Backend & APIs",
                      content:
                        "NestJS, Node.js, Express.js, Prisma ORM, PostgreSQL, REST APIs, WebSockets.",
                    },
                    {
                      title: "Cloud & Tools",
                      content:
                        "Cloudinary, Git/GitHub, CI/CD, Docker (basics), Vercel, Render.",
                    },
                    // {
                    //   title: "Design & Prototyping",
                    //   content: "Figma, Photoshop, Canva, Adobe Illustrator.",
                    // },
                  ].map((d, index) => (
                    <ol key={index}>
                      <li className="font-bold text-gray-600 dark:text-gray-200">
                        {d.title}:{" "}
                        <span className="font-normal text-gray-600 dark:text-gray-300">
                          {d.content}
                        </span>
                      </li>
                    </ol>
                  ))}
                  <p className={subtitleContentClassName}>
                    This broad expertise allows me to design, build, and deploy
                    applications that are both visually engaging and technically
                    robust.
                  </p>
                </div>

                <ParticlesContainer />

                <Subtitle
                  subtitle={"Commitment to Quality"}
                  content={
                    "I prioritize clean, maintainable code and scalable architecture, ensuring projects remain sustainable long after launch. My workflow emphasizes reusable components, strong typing, and industry best practices."
                  }
                />

                <Subtitle
                  subtitle={"Responsive Design & Accessibility"}
                  content={
                    "Whether on web or mobile, I focus on building experiences that adapt seamlessly across devices and are inclusive to all users."
                  }
                />

                <Subtitle
                  subtitle={"Continuous Growth"}
                  content={
                    "I stay curious, constantly learning new technologies and refining my craft to deliver solutions that are modern, efficient, and impactful."
                  }
                />
              </div>

              <div className="flex gap-4 mt-2">
                <Button
                  title={"Skills/Tools"}
                  onclick={() => dispatch(openSkills())}
                  className="w-fit px-4"
                />
                <Button
                  title={"My Github"}
                  link="https://github.com/chulocr8v"
                  className="px-4"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <FooterButton
          prevTitle={"Home"}
          nextTitle={"Projects"}
          icon={false}
          nextLink="/projects"
          prevLink="/"
        />
      </AnimatePresence>

      {/* Side image for xl screens */}
      <div className="xl:rounded-bl-[80px] shadow h-fit overflow-hidden xl:max-w-[400px] w-full fixed right-0 top-0 z-40 hidden xl:block about-image">
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
