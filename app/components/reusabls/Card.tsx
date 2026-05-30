"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import WarriorButton from "./button";
import ArrowIcon from "../../../public/icons/arrow";

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    bgImg: string;
    technologies?: Record<string, string[] | undefined>;
    cta: {
      text: string;
      href: string;
    };
  };
  className?: string;
}

export default function ProjectCard({ project, className }: ProjectCardProps) {
  // Filter out empty technology groups safely
  const techGroups = Object.entries(project.technologies || {}).filter(
    (entry): entry is [string, string[]] =>
      Array.isArray(entry[1]) && entry[1].length > 0
  );

  return (
    <motion.article
      initial="rest"
      whileHover="hover"
      className={clsx(
        "group relative aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[2.2rem] border border-border bg-card shadow-[0_20px_60px_-18px_rgba(0,0,0,0.45)] transition-all duration-700 hover:aspect-[1/1] sm:aspect-[4/3]",
        className
      )}
    >
      {/* Background Image */}
      <motion.img
        src={project.bgImg}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.08 },
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Overlay */}
      <motion.div
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0.75 },
        }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10"
      />

      {/* ---------- GLASS CONTENT PANEL ---------- */}
      <motion.div
        variants={{
          rest: { padding: 18 },
          hover: { padding: 0 },
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        // THE FIX 1: Removed max-sm:!p-0 so it keeps its floating margin on mobile
        className="absolute inset-0 z-20 flex items-end"
      >
        <motion.div
          variants={{
            rest: {
              height: "58%",
              borderRadius: "1.8rem",
            },
            hover: {
              height: "100%",
              borderRadius: "2.2rem",
            },
          }}
          transition={{
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
          // THE FIX 2: max-sm:!h-auto shrink-wraps the panel to the text, revealing the image above!
          className="relative flex min-h-0 w-full flex-col items-center overflow-hidden border border-white/10 bg-black/40 p-5 text-center shadow-2xl backdrop-blur-md max-sm:!h-auto sm:p-6"
        >
          {/* Glass Reflections */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
          <div className="pointer-events-none absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative z-10 flex h-full min-h-0 w-full flex-col items-center justify-center">
            <h2 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap font-secondary text-lg font-semibold leading-relaxed tracking-normal text-white group-hover:line-clamp-2 group-hover:whitespace-normal md:text-xl lg:text-xl xl:text-2xl">
              {project.title}
            </h2>

            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/80 sm:mt-3">
              {project.description}
            </p>

            {/* Technologies */}
            <motion.div
              variants={{
                rest: { maxHeight: 0, opacity: 0, marginTop: 0 },
                hover: { maxHeight: 320, opacity: 1, marginTop: 16 },
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="hidden w-full flex-1 space-y-3 overflow-y-auto text-left sm:block sm:mt-24 sm:space-y-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {techGroups.map(([group, items]) => (
                <div key={group} className="mx-auto w-fit min-w-[170px]">
                  <h3 className="mb-2 text-sm font-bold leading-relaxed tracking-normal text-white md:text-base lg:text-lg xl:text-lg">
                    {formatGroupTitle(group)}
                  </h3>

                  <ul className="flex flex-col items-start gap-1.5">
                    {items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-medium text-white/80"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-bronze" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <WarriorButton
              href={project.cta.href}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="bronze"
              icon={<ArrowIcon className="h-4 w-4" />}
              // THE FIX 3: mt-5 for mobile spacing, sm:mt-auto pushes to the bottom on desktop
              className="mt-5 w-full shrink-0 sm:mt-auto"
            >
              {project.cta.text}
            </WarriorButton>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

/* ------------------------------- */
/* Helpers */
/* ------------------------------- */

function formatGroupTitle(value: string) {
  return value
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}