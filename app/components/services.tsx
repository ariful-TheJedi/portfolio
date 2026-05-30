"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  Code2,
  Smartphone,
  Globe,
  Bot,
  DatabaseZap,
  Palette,
  ChevronRight,
} from "lucide-react";

import BgBlur from "./reusabls/bg-brlur";
import SectionHeader from "./reusabls/section-title";

import service from "../data/services-data.json";

const icons = [
  Code2,
  Smartphone,
  Globe,
  DatabaseZap,
  Bot,
  Palette,
];

export default function MyServices() {
const [activeIndex, setActiveIndex] = useState<number | null>(null);


  return (
    <section id="services" className="relative overflow-hidden py-4 font-primary text-text lg:py-8 xl:py-10">
      <BgBlur 
       imagePath="https://i.pinimg.com/1200x/84/41/e5/8441e53c23e9b2b258e70713deac0f5b.jpg"
       blur="blur-[2px]"
       overlay="bg-background/60"

      />

      {/* Marble Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/marble.png')]" />

      {/* Ambient Bronze Glow */}
      <div className="absolute left-1/2 top-40 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-bronze/10 blur-3xl" />

      {/* Decorative Lines */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-bronze/40 to-transparent" />
      </div>

      <div className="main-container relative z-10 flex min-h-screen flex-col justify-center">
        <SectionHeader
          badge={service.services.subtitle}
          title={service.services.sectionTitle}
        />

        {/* Temple Steps Layout */}
        <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col">
          {service.services.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={item.title}
                layout
                // onMouseEnter={() => setActiveIndex(index)}
                // onMouseLeave={() => setActiveIndex(index)}
                onClick={() =>
                  setActiveIndex(isActive ? null : index)
                }
                transition={{
                  layout: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  border-b
                  border-bronze/20
                  transition-all
                  duration-700
                `}
              >
                {/* Active Background */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.6 }}
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-surface/90
                    via-card/60
                    to-transparent
                  "
                />

                {/* Bronze Side Beam */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scaleY: isActive ? 1 : 0.6,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    origin-center
                    bg-gradient-to-b
                    from-transparent
                    via-bronze
                    to-transparent
                    shadow-[0_0_20px_var(--bronze)]
                  "
                />

                {/* Watermark Number */}
                <div
                  className={`
                    absolute
                    right-6
                    top-1/2
                    -translate-y-1/2
                    font-heading
                    text-[90px]
                    leading-none
                    transition-all
                    duration-700
                    lg:text-[150px]
                    ${
                      isActive
                        ? "text-bronze/[0.09]"
                        : "text-bronze/[0.03]"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Header */}
                <div
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="relative z-10 flex cursor-pointer items-center justify-between px-6 py-7 md:px-10"
                  >
                  <div className="flex items-center gap-6 md:gap-8">
                    {/* Icon */}
                    <motion.div
                      animate={{
                        scale: isActive ? 1.08 : 1,
                        rotate: isActive ? 4 : 0,
                      }}
                      transition={{
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`
                        relative
                        flex
                        h-16
                        w-16
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-700
                        ${
                          isActive
                            ? "border-bronze/50 bg-bronze/10 text-bronze shadow-[0_0_35px_rgba(181,136,99,0.25)]"
                            : "border-border/60 bg-background/60 text-muted"
                        }
                      `}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-bronze/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                      <Icon className="relative z-10 h-7 w-7" />
                    </motion.div>

                    {/* Title */}
                    <div>
                      <motion.h3
                        animate={{
                          x: isActive ? 6 : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className={`
                          font-heading
                          text-xl
                          font-bold
                          transition-all
                          duration-500
                          md:text-3xl
                          ${
                            isActive
                              ? "text-bronze"
                              : "text-text group-hover:text-marble"
                          }
                        `}
                      >
                        {item.title}
                      </motion.h3>

                      <motion.div
                        animate={{
                          width: isActive ? 120 : 50,
                          opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                          mt-3
                          h-px
                          bg-gradient-to-r
                          from-bronze
                          to-transparent
                        "
                      />
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{
                      rotate: isActive ? 90 : 0,
                      x: isActive ? 4 : 0,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                      hidden
                      text-bronze/70
                      md:block
                    "
                  >
                    <ChevronRight className="h-7 w-7" />
                  </motion.div>
                </div>

                {/* Expand Content */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        height: {
                          duration: 0.65,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: {
                          duration: 0.4,
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="relative z-10 px-6 pb-10 md:px-10 md:pl-[7.5rem]">
                        {/* Description */}
                        <motion.p
                          initial={{ y: 10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.08 }}
                          className="
                            max-w-3xl
                            font-secondary
                            text-lg
                            leading-relaxed
                            text-text
                            md:text-xl
                          "
                        >
                          {item.description}
                        </motion.p>

                        {/* Features */}
                        <div className="mt-8 grid gap-4 md:grid-cols-2">
                          {item.features.map((feature, fIndex) => (
                            <motion.div
                              key={feature}
                              initial={{
                                opacity: 0,
                                y: 12,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                delay: 0.1 + fIndex * 0.05,
                              }}
                              className="
                                group/feature
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-border/50
                                bg-background/30
                                p-4
                                backdrop-blur-md
                                transition-all
                                duration-500
                                hover:-translate-y-1
                                hover:border-bronze/30
                                hover:bg-bronze/[0.04]
                              "
                            >
                              {/* hover glow */}
                              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/feature:opacity-100 bg-gradient-to-r from-bronze/[0.08] to-transparent" />

                              <div className="relative z-10 flex items-start gap-4">
                                {/* Spear Head */}
                                <div className="mt-1 flex-shrink-0 text-bronze drop-shadow-[0_0_6px_var(--bronze)]">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="h-4 w-4"
                                  >
                                    <path d="M12 2L16 10L12 22L8 10L12 2Z" />
                                  </svg>
                                </div>

                                <p className="text-sm leading-relaxed text-text/90">
                                  {feature}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}