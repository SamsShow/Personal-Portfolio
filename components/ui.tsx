"use client";

import { useRef } from "react";
import { uiProjectsData } from "@/lib/data";
import Image from "next/image";
import figmaic from "@/public/figma.png";
import { motion, useScroll, useTransform } from "framer-motion";


type UIProjectProps = (typeof uiProjectsData)[number];

export default function UIProject({
  title,
  description,
  tags,
  imageUrl,
  figmaUrl,
  CaseUrl,
}: UIProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[50rem] border border-black/5 rounded-lg overflow-hidden p-3 sm:pr-8 relative sm:h-[25rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold hover:cursor-pointer">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex gap-3 mt-3">
            <a
              href={figmaUrl}
              className="mt-auto text-sm text-gray-700 dark:text-white/70 hover:underline"
            >
              <img className="w-auto h-7" src="/figma.png" alt="figma" />
            </a>
            <a
              href={CaseUrl}
              className="mt-auto text-sm text-gray-700 dark:text-white/70 hover:underline"
            >
              <img className="w-auto h-7" src="/ux-ui-logo.png" alt="casestudy" />
            </a>
          </div>
          
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="UI Project"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}