"use client";

import { PiSunDimFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center w-3 h-3 text-dark bg-white rounded-full transform ${
    isActive ? "translate-x-0" : "translate-x-6"
  } transition-transform duration-500 ease-in-out`;

  return (
    <div
      className={twMerge(
        "relative bg-gray-300 dark:bg-gray-600 flex flex-col items-center justify-center w-12 h-fit p-1 py-0.5 rounded-full overflow-hidden cursor-pointer mt-0.5"
      )}
      onClick={toggleTheme}
    >
      <div
        className={twMerge(
          "h-[18px] w-[20px] absolute right-[1.5px] bg-gray-200 rounded-full duration-500",
          !isActive && " left-[1.5px]"
        )}
      ></div>
      <div className={twMerge("w-full flex justify-between duration-200")}>
        <div className="">
          <BiSolidMoon className="text-gray-500" />
        </div>
        <div className="">
          <PiSunDimFill className="text-yellow-500 " />
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitch;

// <div
//       className="relative w-fit h-4 rounded-full p-1 flex items-center cursor-pointer bg-[#ccc]"
//       onClick={toggleTheme}
//     >
//       <button className={switchClasses}>
//         {isActive ? (
//           <PiSunDimFill size={16} className="text-yellow-500" />
//         ) : (
//           <BiSolidMoon className="text-gray-500" />
//         )}
//       </button>
//     </div>
