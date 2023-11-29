"use client";

import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, openMenu } from "../../../redux/menu";

type Props = {};

const Header = (props: Props) => {
  const { isMenuOpen } = useSelector((state) => state.menu);
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
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="container relative flex w-full justify-between px-4 py-2">
        <div className="logo absolute left-4 z-50">Logo</div>
        <button onClick={toggleMenu} className="absolute right-4 z-30">
          Menu
        </button>
      </div>
      <Nav isOpen={isMenuOpen} />
    </header>
  );
};

export default Header;
