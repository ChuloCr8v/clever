"use client";

import Link from "next/link";
import React, { MouseEventHandler, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  external?: boolean;
  title: ReactNode;
  link?: string;
  className?: string;
  icon?: ReactNode;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  prevBtn?: boolean;
  type?: "secondary" | "primary";
};

const Button = (props: Props) => {
  const baseStyles =
    "group px-4 h-9 rounded-lg text-xs md:text-base flex items-center justify-center gap-2 overflow-hidden transition-all duration-200 border backdrop-blur-sm";

  const primaryStyles = twMerge(
    // 🌞 Light mode
    "bg-gradient-to-t from-primaryBlue/30 to-primaryBlue text-gray-100 hover:from-primaryBlue hover:to-primaryBlue/30",
    // 🌚 Dark mode
    "dark:from-gray-950/40 dark:to-gray-700/60 dark:text-white dark:border-gray-700 dark:hover:from-primaryRed/30 dark:hover:to-primaryRed/10 dark:hover:text-primaryRed dark:hover:border-primaryRed"
  );

  const secondaryStyles = twMerge(
    "from-transparent to-transparent text-gray-700 border-gray-300 hover:text-primaryBlue hover:border-primaryBlue dark:border-gray-600 ",
    "dark:text-gray-300 dark:hover:text-primaryRed dark:hover:border-primaryRed"
  );

  return (
    <div>
      {props.link ? (
        <Link
          target={props.external ? "_blank" : undefined}
          rel="noopener noreferrer"
          href={props.link}
          className={twMerge(
            "flex items-center gap-2 py-1 border border-transparent rounded leading-none duration-200 md:text-base",
            props.className
          )}
        >
          <span
            onClick={props.onclick}
            className={twMerge(props.prevBtn && "order-2")}
          >
            {props.title}
          </span>
          <FaArrowRight
            className={twMerge(
              "text-sm leading-none h-3",
              props.prevBtn && "order-1 -rotate-180"
            )}
          />
        </Link>
      ) : (
        <button
          onClick={props.onclick}
          className={twMerge(
            baseStyles,
            props.type === "secondary" ? secondaryStyles : primaryStyles,
            props.className
          )}
        >
          <span className={twMerge(props.prevBtn && "order-2")}>
            {props.title}
          </span>
          {props.icon ? (
            props.icon
          ) : (
            <FaArrowRight
              className={twMerge(
                "text-sm leading-none h-3",
                props.icon === false && "hidden",
                props.prevBtn && "order-1 -rotate-180"
              )}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
