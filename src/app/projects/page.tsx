"use client";

import React, { useState, useEffect } from "react";
import PageTitle from "../components/PageTitle";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { projects } from "../data";
import {
  closeProjectDetails,
  openProjectDetails,
} from "../../../redux/projectDetails";
import { useDispatch, useSelector } from "react-redux";
import FooterButton from "../components/FooterButton";
import { twMerge } from "tailwind-merge";
import ProjectDetails from "../components/ProjectDetails";
import CategoryTag from "../components/CategoryTag";
import ProjectPreviewFooter from "../components/ProjectPreviewFooter";

type Props = {};
type dataProps = {
  img: string;
  projectImages: { images: { src: string }[]; title: string }[];
  description: string;
  category: string;
  tools: string;
  year: string;
  url: string;
  title: string;
};

const dataPropsHooks: dataProps = {
  img: "",
  projectImages: [{ images: [{ src: "" }], title: "" }],
  description: "",
  category: "",
  tools: "",
  year: "",
  url: "",
  title: "",
};

// Map categories → glow colors
const categoryColors: Record<string, string> = {
  "web applications": "rgba(59,130,246,0.35)", // blue-500
  "mobile applications": "rgba(34,197,94,0.35)", // green-500
  "full stack application": "rgba(168,85,247,0.35)", // purple-500
  frontend: "rgba(236,72,153,0.35)", // pink-500
  backend: "rgba(249,115,22,0.35)", // orange-500
};

const TiltCard = ({
  children,
  category,
}: {
  children: React.ReactNode;
  category: string;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const [isHover, setIsHover] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const offsetX = e.clientX - (rect.left + rect.width / 2);
    const offsetY = e.clientY - (rect.top + rect.height / 2);
    x.set(offsetX);
    y.set(offsetY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHover(false);
  };

  // Pick glow color based on category
  const glowColor =
    categoryColors[category.toLowerCase()] || "rgba(59,130,246,0.25)";

  return (
    <motion.div
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={handleMouseLeave}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative transform-gpu"
    >
      {/* Glow overlay */}
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${x.get() + 300}px ${
            y.get() + 200
          }px, ${glowColor}, transparent 80%)`,
          opacity: isHover ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      {children}
    </motion.div>
  );
};

const Page = (props: Props) => {
  const [projectData, setProjectData] = useState<dataProps>(dataPropsHooks);
  const { isProjectDetailsOpen } = useSelector(
    (state: { projectDetails: { isProjectDetailsOpen: boolean } }) =>
      state.projectDetails
  );
  const dispatch = useDispatch();

  const toggleProjectDetails = (details: dataProps) => {
    setProjectData(details);
    dispatch(
      isProjectDetailsOpen ? closeProjectDetails() : openProjectDetails(details)
    );
  };

  // Track scroll for parallax
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <div className="relative overflow-hidden">
        {/* Background blobs */}
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primaryBlue/20 dark:bg-primaryBlue/10 blur-3xl"
          style={{ y: scrollY * 0.1 }}
          animate={{ x: [0, 50, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 right-[-150px] w-[500px] h-[500px] rounded-full bg-primaryRed/20 dark:bg-primaryRed/10 blur-3xl"
          style={{ y: scrollY * -0.1 }}
          animate={{ x: [0, -60, 40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-150px] left-1/2 w-[400px] h-[400px] rounded-full bg-purple-400/20 dark:bg-purple-400/10 blur-3xl"
          style={{ y: scrollY * 0.15 }}
          animate={{ x: [0, 30, -40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Main content */}
        <motion.section
          className="pt-24 xl:pt-40 pb-32 px-4 flex flex-col items-center xl:justify-center min-h-screen relative z-10"
          initial={{ x: "100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100vw", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", bounce: 0.5 }}
        >
          <div className="container max-w-7xl flex flex-col xl:flex-row gap-6 xl:gap-12">
            <div className="w-full basis-full">
              <div className="flex justify-between items-center mt-4 md:mt-8 xl:mt-0">
                <PageTitle title={"Projects"} />
              </div>

              {/* Project Grid */}
              <div className="grid md:grid-cols-2 gap-6 mt-12 lg:mt-20">
                {projects.map((d, index) => {
                  const depth = (index % 3) * 0.05 + 0.05; // stagger parallax
                  return (
                    <TiltCard key={index} category={d.category}>
                      <motion.div
                        onClick={() => toggleProjectDetails(d)}
                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          type: "spring",
                          stiffness: 120,
                          damping: 20,
                        }}
                        style={{ y: scrollY * depth }}
                        className={twMerge(
                          "flex flex-col justify-between overflow-hidden rounded-xl cursor-pointer relative",
                          "border backdrop-blur-md transition-transform duration-300 ease-out",
                          "bg-white/60 border-gray-200 hover:border-primaryBlue/60",
                          "dark:bg-gray-900/40 dark:border-gray-700 dark:hover:border-primaryBlue/60",
                          "hover:scale-[1.02]"
                        )}
                      >
                        {/* Image */}
                        <div className="h-[200px] w-full overflow-hidden rounded-t-xl relative">
                          <motion.img
                            src={d.img}
                            alt={d.title}
                            className="object-cover object-center w-full h-full"
                            whileHover={{ scale: 1.08 }}
                            transition={{ duration: 0.4 }}
                          />
                        </div>

                        {/* Content */}
                        <motion.div
                          className="p-4 flex flex-col gap-4 relative z-10"
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          viewport={{ once: true }}
                        >
                          <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                            <p className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                              {d.title}
                            </p>
                            <CategoryTag category={d.category} />
                          </div>

                          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                            {d.description}
                          </p>

                          <div>
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                              Tools:
                            </p>
                            <div className="flex flex-wrap gap-y-2">
                              {d.tools.split(",").map((tool, i) => (
                                <CategoryTag
                                  category={tool.toLowerCase()}
                                  key={i}
                                  className="rounded-md !text-gray-600 dark:!text-gray-300"
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>

                        <ProjectPreviewFooter
                          data={{ url: d.url, github: d.url }}
                        />
                      </motion.div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          </div>

          <ProjectDetails />
        </motion.section>
      </div>

      {/* Footer Navigation */}
      <FooterButton
        prevTitle={"About Me"}
        nextTitle={"Contact"}
        icon={false}
        nextLink="/contact"
        prevLink="/about"
      />
    </AnimatePresence>
  );
};

export default Page;
