import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../../redux/menu";

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
      <div className="w-full flex justify-between items-center bg-gray-700 md:bg-transparent text-white rounded-md xl:px-16">
        <Button
          external={props.prevExternal}
          title={props.prevTitle}
          link={props.prevLink}
          icon={props.icon}
          prevBtn
          className="px-4 py-1 hover:bg-gray-800 text-sm md:bg-gray-700"
          onclick={() => dispatch(closeMenu())}
        />
        <Button
          external={props.nextExternal}
          title={props.nextTitle}
          link={props.nextLink}
          icon={props.icon}
          className="px-4 py-1 hover:bg-gray-800 text-sm md:bg-gray-700"
          onclick={() => dispatch(closeMenu())}
        />
      </div>
    </div>
  );
};

export default FooterButton;
