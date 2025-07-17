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
      <p>
        My name is Zanden, and I'm a student at Catholic High School with an insatiable curiosity for creating and innovating.{" "}
        From a young age, I've been captivated by the thrill of bringing ideas to life, whether it's sketching out a new concept or diving into the nuts and bolts of a project.{" "}
        When I discovered programming, I realised that my wildest ideas for apps, tools, and AI solutions had a path to reality.
      </p>
      <p className="mb-3">
        My journey in STEM is fueled by a relentless passion for problem-solving and a desire to push boundaries. I spend my days coding, exploring artificial intelligence, and building projects that blend creativity with cutting-edge technology.
        I've embraced opportunities like leading STEM initiatives and collaborating on service projects, all while sharpening my skills in Python, JavaScript, and C++.
      </p>

      <p>
        Beyond the code, I'm inspired by the potential of technology to make a difference, whether it's sparking curiosity in others or solving real-world challenges. My goal? It's to <span className="font-medium">keep learning, keep building, keep growing, and keep creating new solutions that leave a mark.</span> 
      </p>
    </motion.section>
  );
}
