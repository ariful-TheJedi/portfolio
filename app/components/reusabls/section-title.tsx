"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
}

export default function SectionHeader({
  badge,
  title,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid place-items-center text-center"
    >
      <div className="relative flex max-w-4xl flex-col items-center">
        {/* Decorative Glow */}
        <div className="absolute top-10 h-40 w-40 rounded-full bg-[#B8893C]/10 blur-3xl" />

        {/* Badge */}
        <div className="relative mb-6 inline-flex items-center gap-3 rounded-full border border-[#B8893C]/20 bg-[#1A1512]/70 px-5 py-2.5 backdrop-blur-md">
          <div className="relative flex items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-[#B8893C]" />
            <div className="absolute h-4 w-4 rounded-full bg-[#B8893C]/40 blur-sm" />
          </div>

          <span
            className="
              text-sm 
              md:text-base 
              lg:text-lg 
              xl:text-base
              font-normal
              uppercase
              tracking-[.07rem]
              text-[#D7B46A]
            "
          >
            {badge}
          </span>
        </div>

        {/* Heading */}
        <h2
          className="
            max-w-3xl
            font-heading
            font-bold
            leading-[1.05]
            text-bronze
            text-3xl
            md:text-3xl
            lg:text-4xl
            xl:text-5xl
          "
        >
          {title}
        </h2>

        {/* Decorative Divider */}
        <div className="mt-4 flex items-center gap-3">
          <div className="h-px w-14 bg-gradient-to-r from-transparent to-[#B8893C]" />

          <div className="h-2 w-2 rounded-full border border-[#B8893C]/60 bg-[#B8893C]/30" />

          <div className="h-px w-14 bg-gradient-to-l from-transparent to-[#B8893C]" />
        </div>
      </div>
    </motion.div>
  );
}