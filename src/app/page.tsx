"use client";

import { useEffect } from "react";
import Hero from "./components/Hero";
import emailjs from "@emailjs/browser";

export default function Home() {
  // const pointer = document.getElementById("pointer");
  // const b = document.getElementById("main");

  // b?.addEventListener("mousemove", (e) => {
  //   pointer.style.left = e.pageX + "px";
  //   pointer.style.top = e.pageY + "px";
  // });
  // b?.addEventListener("mousedown", (e) => {
  //   pointer?.classList.toggle("mouse-click");
  // });

  return (
    <main className="" id="main">
      <Hero />
      <div id="pointer" className="hidden"></div>
    </main>
  );
}
