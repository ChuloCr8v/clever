import React, { useCallback, useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";

type Props = {
  prevTitle: string;
  nextTitle: string;
  prevLink?: string;
  nextLink?: string;
  icon?: boolean;
};

const FooterButton = (props: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
        "fixed bottom-4 z-50 w-full px-4 translate-y-0 duration-300 flex justify-center items-center",
        !isVisible && "translate-y-[100vh]"
      )}
    >
      <div className="container flex justify-between items-center bg-gray-700 md:bg-transparent text-white rounded-md">
        <Button
          title={props.prevTitle}
          link={props.prevLink}
          icon={props.icon}
          prevBtn
          className="px-4 py-3 xl:py-1 hover:bg-black text-sm md:bg-gray-700"
        />
        <Button
          title={props.nextTitle}
          link={props.nextLink}
          icon={props.icon}
          className="px-4 py-3 xl:py-1 hover:bg-black text-sm md:bg-gray-700"
        />
      </div>
    </div>
  );
};

export default FooterButton;
