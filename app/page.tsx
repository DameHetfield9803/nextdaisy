'use client'
import Image from "next/image";
import ThemeSwitch from "@/app/themeswitch";
import "./globals.css"
export default function Home() {
  return (
      <ul className={"root container flex text-center steps step p-8"}>
          <li>
              <>
                <ul className={"container inline-flex space-x-4 step step-primary justify-start align-middle"} data-content={""}>
                    <li><strong>Hello world</strong></li>
                    <li><ThemeSwitch/></li>
                </ul>
              </>
          </li>

      </ul>
  );
}
