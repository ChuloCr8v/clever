"use client";

import { useDispatch } from "react-redux";
import { openSkills } from "../../../redux/skills";
import { stacks } from "../data";
import Button from "./Button";
import FooterButton from "./FooterButton";
import Cv from "./Cv";
import { openCv } from "../../../redux/cv";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col justify-center items-center min-h-screen relative overflow-hidden">
      {/* Subtle background gradient blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primaryBlue/10 via-transparent to-primaryRed/10" />
      <div className="absolute top-20 left-10 w-40 h-40 bg-primaryBlue/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-primaryRed/20 rounded-full blur-3xl" />

      <div className="container text-center flex flex-col items-center">
        {/* Intro text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-2xl stroke"
        >
          Hey, <span className="">I&rsquo;m</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-5xl mt-1 uppercase font-extrabold bg-gradient-to-r from-primaryBlue to-primaryRed bg-clip-text text-transparent"
        >
          Nkematu Bonaventure
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-base md:text-2xl mt-1 leading-none"
        >
          <span className="font-semibold text-primaryBlue">
            Senior Frontend Developer
          </span>
        </motion.p>

        {/* Tech stacks */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="stacks flex flex-wrap justify-center items-center gap-2 mt-4 px-4"
        >
          {stacks.map((s, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="px-3 py-1 rounded-full bg-gray-200/60 dark:bg-gray-800/60 text-sm capitalize text-gray-800 dark:text-gray-200"
            >
              {s.stack}
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              prevBtn
              onclick={() => dispatch(openCv())}
              title={"My Resume"}
              className="bg-gradient-to-r from-primaryBlue to-primaryRed text-white px-6 py-2 rounded-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onclick={() => dispatch(openSkills())}
              title={"More Skills"}
              type="secondary"
              className="border border-primaryBlue/50 text-primaryBlue dark:text-white px-6 py-2 rounded-lg"
            />
          </motion.div>
        </div>

        {/* Social links */}
        <div className="flex gap-4 mt-6 text-xl text-gray-600 dark:text-gray-300">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-primaryBlue transition-colors" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-primaryBlue transition-colors" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-primaryBlue transition-colors" />
          </a>
        </div>

        <FooterButton
          prevExternal
          prevTitle={"My Resume"}
          nextTitle={"About Me"}
          nextLink="/about"
          prevLink="https://drive.google.com/file/d/1hVUCEoKE1CkH-AhqTIxJUV7-_4idTpTz/view?usp=sharing"
        />
        <Cv />
      </div>
    </div>
  );
};

export default Hero;
