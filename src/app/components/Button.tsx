import Link from "next/link";
import React, { MouseEventHandler, ReactNode } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
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
  // console.log(props.type);
  return (
    <div>
      {props.link ? (
        <Link
          target={props.external ? "_blank" : undefined}
          rel="noopener noreferrer"
          href={props.link}
          className={twMerge(
            "flex items-center gap-2 py-1 hover:border-gray-700 border-transparent border rounded leading-none duration-200 md:text-base",
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
            "group bg-gradient-to-t from-gray-950/40 to-gray-700/60 hover:bg-gradient-to-b !duration-200 text-white px-4 h-9 rounded-lg text-xs flex items-center justify-center gap-2 md:text-base overflow-hidden border border-gray-700 backdrop-blur-sm transition-all",
            props.type === "secondary" &&
              "!from-transparent !to-transparent hover:border-primaryBlue hover:text-primaryBlue",
            props.className
          )}
        >
          {/* <div className="h-16 w-16 scale-0 group-hover:scale-100 duration-200 bg-red-600 absolute -z-10 rounded-full"></div> */}
          <span className={twMerge(props.prevBtn && "order-2")}>
            {props.title}
          </span>
          {props?.icon ? (
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
