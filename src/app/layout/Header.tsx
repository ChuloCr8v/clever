"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../../redux/menu";
import Link from "next/link";
import ThemeSwitch from "../components/ThemeSwtich";

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
      <div className="w-full relative flex justify-between p-4 xl:p-16">
        <Link href="/" className="logo relative z-50">
          Logo
        </Link>
        <ThemeSwitch />
        <button onClick={toggleMenu} className="relative z-30">
          Menu
        </button>
      </div>
      <Nav isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
