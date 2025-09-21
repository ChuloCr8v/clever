"use client";

import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../redux/menu";
import { menu } from "./Nav";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type Props = {
  nextExternal?: boolean;
  prevExternal?: boolean;
  prevTitle: string;
  nextTitle: string;
  prevLink?: string;
  nextLink?: string;
  icon?: boolean;
};

const FooterButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY;
    setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      className={twMerge(
        "fixed bottom-4 xl:bottom-12 z-50 w-full px-4 translate-y-0 duration-300 flex justify-center items-center",
        !isVisible && "translate-y-[100vh]"
      )}
    >
      <div
        className={twMerge(
          "w-full flex items-center justify-between gap-3 relative group max-w-xl"
        )}
      >
        {/* Prev Button */}
        <Button
          external={props.prevExternal}
          title={""}
          link={props.prevLink}
          icon={props.icon}
          prevBtn
          onclick={() => dispatch(closeMenu())}
          className={twMerge(
            "relative group animate-pop opacity-0 flex justify-center items-center",
            "h-10 w-10 rounded-full border border-gray-700 bg-gray-900/50 text-white shadow-md backdrop-blur-md",
            "hover:bg-gradient-to-r hover:from-primaryBlue/70 hover:to-primaryRed/70 transition duration-500"
          )}
        />

        {/* Menu */}
        <div className="flex items-center justify-center gap-3">
          {menu.map((m, i) => (
            <Link href={m.url} key={m.title}>
              <div
                className={twMerge(
                  "relative group animate-pop opacity-0",
                  "px-3 py-2 rounded-lg border border-gray-700 bg-gray-900/50 text-white shadow-md backdrop-blur-md",
                  "hover:bg-gradient-to-r hover:from-primaryBlue/70 hover:to-primaryRed/70 transition duration-500",
                  pathname === m.url &&
                    "ring-2 ring-primaryBlue bg-gradient-to-r from-primaryBlue/70 to-primaryRed/70 "
                )}
                style={{
                  animationDelay: `${i * 0.15}s`,
                  animationFillMode: "forwards",
                }}
              >
                {/* Shiny splinter */}
                <span className="absolute inset-0 overflow-hidden rounded-lg">
                  <span className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] duration-700 transition-transform" />
                </span>
                <span
                  className={twMerge(
                    "relative z-10 flex items-center gap-2",
                    pathname === m.url && "*:!text-primaryBlue"
                  )}
                >
                  {m.icon}
                  <span className="hidden sm:inline text-sm font-medium">
                    {m.title}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Next Button */}
        <Button
          external={props.nextExternal}
          title={""}
          link={props.nextLink}
          icon={props.icon}
          onclick={() => dispatch(closeMenu())}
          className={twMerge(
            "relative group animate-pop opacity-0 flex justify-center items-center",
            "h-10 w-10 rounded-full border border-gray-700 bg-gray-900/50 text-white shadow-md backdrop-blur-md",
            "hover:bg-gradient-to-r hover:from-primaryBlue/70 hover:to-primaryRed/70 transition duration-500"
          )}
        />
      </div>
    </div>
  );
};

export default FooterButton;
