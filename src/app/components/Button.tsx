import Link from "next/link";
import React, { MouseEventHandler, ReactNode } from "react";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  link?: string;
  className?: string;
  icon?: ReactNode;
  onclick?: MouseEventHandler<HTMLButtonElement>;
  prevBtn?: boolean;
};

const Button = (props: Props) => {
  return (
    <div>
      {props.link ? (
        <Link
          href={props.link}
          className={twMerge(
            "flex items-center gap-2 py-2 xl:py-1 hover:border-gray-700 border-transparent border rounded leading-none duration-200 md:text-xl xl:text-base",
            props.className
          )}
        >
          <span className={twMerge(props.prevBtn && "order-2")}>
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
            "bg-gray-700 hover:bg-gray-800 duration-200 text-white font-semibold w-[130px] py-2 xl:py-1 rounded text-sm flex items-center justify-center gap-2 md:text-xl xl:text-base",
            props.className
          )}
        >
          {props.title}
          {props?.icon ? (
            props.icon
          ) : (
            <FaArrowRight
              className={twMerge(
                "text-sm leading-none h-3",
                props.icon === false && "hidden"
              )}
            />
          )}
        </button>
      )}
    </div>
  );
};

export default Button;
