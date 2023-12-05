"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      Hey there! I'm Saksham Tyagi, a frontend web developer and graphic designer. I have a passion for problem-solving and creating stunning user interfaces and experiences. With my expertise in web design and graphic designing, I can weave enchanting spells and conjure fantastical online worlds.
      </p>
      <p>I am currently working as a frontend web developer at ElixirTech Community and also serving as a Open Source & graphic coordinator at GeeksforGeeks ABES Chapter.</p>

      <p>
      Aside from my professional work, I have also excelled in various competitions, including winning first prizes in interschool graphic competitions, an interschool music video competition, and securing second prize in an interschool COVID-19 animation competition.
      </p>
    </motion.section>
  );
}
