"use client";

import { motion } from "framer-motion";
import React from "react";
import Card from "./reusabls/Card";
import WarriorButton from "./reusabls/button";

import BgBlur from "./reusabls/bg-brlur";
import SectionHeader from "./reusabls/section-title";
import BoxArrow from "@/public/icons/box-arrow";

import projects from "../data/projects-data.json";

const content = projects.projects;

export default function MyProjects() {
  return (
    <section id="projects" className="relative overflow-hidden font-primary body-text py-4 lg:py-8 xl:py-10">
        <BgBlur 
        imagePath="https://i.pinimg.com/1200x/ac/fd/e1/acfde19955811d60f9585527a28946bf.jpg"
        blur="blur-[2px]"
        overlay="bg-background/60"
        />

      <div className="main-container min-h-screen items-center relative z-10 content-center">
        <SectionHeader
          badge={content.subtitle}
          title={content.sectionTitle}
        />

        <div className="mt-14 grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2">
          {content.items.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="flex w-full justify-center"
            >
              <Card project={project} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <WarriorButton
            href={content.moreProjects.href}
            icon=<BoxArrow/>
            variant="blood"
            size="lg"
          >
            {content.moreProjects.text}
          </WarriorButton>
        </div>
      </div>
    </section>
  );
}
