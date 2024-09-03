"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./section-heading";
import { projectsData, uiProjectsData } from "@/lib/data";
import Project from "./project";
import UIProject from "./ui";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [activeTab, setActiveTab] = useState("dev");

  const tabVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotate: -5
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotate: 0,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      } 
    },
    exit: { 
      opacity: 0, 
      y: -50,
      scale: 0.9,
      rotate: 5,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        duration: 0.5
      } 
    },
  };

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="flex justify-center space-x-4 mb-8">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            activeTab === "dev"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("dev")}
        >
          Dev Projects
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            activeTab === "ui"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
          onClick={() => setActiveTab("ui")}
        >
          UI/UX
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={tabVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {activeTab === "dev" &&
            projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Project {...project} />
              </motion.div>
            ))}
          {activeTab === "ui" &&
            uiProjectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <UIProject {...project} />
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}