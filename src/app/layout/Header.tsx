"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../../redux/menu";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwtich";
import Hamburger from "hamburger-react";
import { twMerge } from "tailwind-merge";

type Props = {};

const Header = (props: Props) => {
  const { isMenuOpen } = useSelector(
    (state: { menu: { isMenuOpen: boolean } }) => state.menu
  );
  const dispatch = useDispatch();
  const toggleMenu = () => {
    if (isMenuOpen) {
      dispatch(closeMenu());
    } else {
      dispatch(openMenu());
    }
  };
  console.log(isMenuOpen);

  return (
    <header className="fixed left-0 top-0 z-50 w-full duration-200 flex flex-col  items-center ">
      <div className="w-full relative flex justify-between items-center p-4 xl:p-16 xl:pb-4">
        <Link href="/" className="logo z-50 group">
          <div className="xl:h-56 xl:w-56 rounded-full border-[28px] dark:border-white border-gray-200 absolute -left-16 -top-32 group-hover:border-[150px] duration-200 -z-10"></div>
          <img
            src="/logo.png"
            alt="nkematu bonaventure"
            className="h-12 w-auto"
          />
        </Link>
        <ThemeSwitch />
        <div className="relative z-20 hover:text-primaryBlue dark:hover:text-primaryRed group">
          {" "}
          <Hamburger toggled={isMenuOpen} toggle={toggleMenu} />{" "}
          <div
            className={twMerge(
              "-translate-y-full group-hover:translate-y-0 h-56 group-hover:w-10 rounded-b-full border-[42px] dark:border-white border-gray-200 absolute -right-5 -top-32  duration-200 -z-10",
              isMenuOpen && "translate-y-0"
            )}
          ></div>
        </div>
      </div>
      <Nav isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
