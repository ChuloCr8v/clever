"use client";
import { motion } from "framer";
import Link from "next/link";
import React from "react";
import { FaBriefcase, FaHeadphonesAlt, FaHome, FaUser } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import { closeMenu } from "../../../redux/menu";
import { useDispatch } from "react-redux";
import { usePathname } from "next/navigation";

type Props = { isOpen: boolean };

export const menu = [
  { title: "Home", url: "/", icon: <FaHome className="text-[16px]" /> },
  { title: "About", url: "/about", icon: <FaUser className="text-[14px]" /> },
  {
    title: "Projects",
    url: "/projects",
    icon: <FaBriefcase className="text-[14px]" />,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: <FaHeadphonesAlt className="text-[14px]" />,
  },
];

const Nav = (props: Props) => {
  const dispatch = useDispatch();
  const currentRoute = usePathname();

  console.log(currentRoute);
  return (
    <>
      {props.isOpen && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={twMerge(
            "nav fixed left-0 top-0 h-screen w-screen bg-white dark:bg-gray-800 flex flex-col justify-center items-center overflow-hidden"
          )}
        >
          <div className="flex flex-col items-start gap-4 xl:gap-8 pl-8 xl:pl-0 max-w-7xl w-full">
            {menu.map((m, index) => (
              <Link
                key={index}
                href={m.url}
                className="text-5xl xl:text-[70px] font-bold text-left overflow-hidden dark:hover:text-primaryRed hover:text-primaryBlue duration-200"
                onClick={() => dispatch(closeMenu())}
              >
                <motion.p
                  initial={{ y: -300 }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0,
                  }}
                  className={twMerge(
                    "duration-200",
                    currentRoute.includes(m.title.toLowerCase()) &&
                      "text-primaryBlue dark:text-primaryRed",
                    currentRoute === "/" &&
                      m.title.toLowerCase().includes("home")
                      ? "text-primaryBlue dark:text-primaryRed"
                      : ""
                  )}
                >
                  {m.icon}
                  {m.title}
                </motion.p>
              </Link>
            ))}
          </div>
        </motion.nav>
      )}
    </>
  );
};

export default Nav;
