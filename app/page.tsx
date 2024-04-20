'use client'
import Image from "next/image";
import { TypeAnimation } from "react-type-animation"
import ThemeSwitch from "@/app/themeswitch";
import "./globals.css"
export default function Home() {
  return (
      <div className={"container text-center subpixel-antialiased flex-auto mx-auto rounded-md p-10 max-w-screen-xl min-h-screen mix-blend-plus-darker"}>
          <div className={"text-center container mx-auto flex-auto p-4 min-h-dvh max-w-screen-lg outline-cyan-900 outline rounded-xl subpixel-antialiased"}>
              <nav className={"mb-2 rounded-lg"}>
                  <ul>
                      <li className={"justify-end"}><ThemeSwitch/></li>
                      <li></li>
                  </ul>
              </nav>
              <h1 className={"text-[4.25em] mb-2"}><strong className={"text-blue-500"}>Welcome to <span className={"text-rose-500"}>
                  <TypeAnimation
                      sequence={
                      [
                          "xyz",
                          1000
                      ]
                  } repeat={Infinity}/></span></strong></h1>
              <p className={"text-xl text-pretty text-lime-300"}>To be continued...</p>
          </div>
      </div>
  );
}
