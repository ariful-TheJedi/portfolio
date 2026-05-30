"use client";

import React from "react";
import Image from "next-image-export-optimizer";

import { motion } from "framer-motion";
import BgBlur from "./reusabls/bg-brlur";
import SectionHeader from "./reusabls/section-title";
import WarriorButton from "./reusabls/button";
import content from "../data/aboute-me-data.json";
import {
  DiscordIcon,
  GithubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "../../public/icons/socials";

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  Discord: DiscordIcon,
  Instagram: InstagramIcon,
};

export default function AboutMe() {
  return (
    <section id="about" className="relative overflow-hidden font-primary body-text py-4 lg:py-8 xl:10">
      {/* Background */}
      <BgBlur
        imagePath="https://i.pinimg.com/1200x/32/e9/88/32e988be58772616ce6637f7a7efdb48.jpg"
        blur="blur-[2px]"
        overlay="bg-background/60"
      />

      <div className="main-container min-h-screen  items-center relative z-10 content-center">
        {/* Section Header */}
        <SectionHeader badge={content.badge} title={content.sectionTitle} />

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 flex flex-col lg:order-1"
          >
            {/* Description */}
            <div className="space-y-6">
              {content.description.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.12,
                    duration: 0.6,
                  }}
                  className="border-l border-[#B8893C]/20 pl-5 text-left"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <div className="relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px]">
              {/* Greek Pattern */}
              <img
                src="/greek-pattern.png"
                alt="Greek Border"
                className="
                  absolute inset-0 z-20
                  h-full w-full
                  object-contain
                  opacity-90
                "
              />

              {/* Profile */}
              <div
                className="
                  absolute left-1/2 top-1/2 z-10
                  h-[72%] w-[72%]
                  -translate-x-1/2 -translate-y-1/2
                  overflow-hidden
                  rounded-full
                "
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  fill
                  priority
                  className="
                  object-cover
                  object-[center_15%]
                  transition-transform duration-700
                  hover:scale-105
                "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              </div>

              {/* Experience Badge */}
              {/* <div
                className="
                  absolute bottom-8 right-4 z-30
                  rounded-2xl
                  border border-bronze/20
                  bg-[#161210]/95
                  px-5 py-4
                  backdrop-blur-md
                "
              >
                <p className="text-xs uppercase tracking-[0.28em] text-bronze">
                  Experience
                </p>

                <h3 className="mt-1 text-3xl font-semibold text-marble">
                  3+
                </h3>

                <p className="text-sm text-[#CFC1AA]">
                  Years Building Modern Apps
                </p>
              </div> */}
            </div>
          </motion.div>
        </div>

        {/* Social Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
          {content.socialLinks.map((social, index) => {
            const Icon = socialIcons[social.name as keyof typeof socialIcons];

            return (
              <motion.div
                key={social.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.35 + index * 0.1,
                }}
              >
                <WarriorButton
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bronze"
                  size="md"
                  icon={
                    Icon ? (
                      <Icon aria-hidden="true" className="h-4 w-4" />
                    ) : undefined
                  }
                >
                  {social.name}
                </WarriorButton>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
