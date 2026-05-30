"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from 'next/image';
import { motion, AnimatePresence } from "framer-motion";
import WarriorButton from "./reusabls/button";
import { useTheme } from "../context/theme-context";
import { Day, Night } from "../../public/icons/day-night";

import data from "../data/header-data.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navigation, cta, logo } = data.header;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="main-container fixed top-4 left-1/2 z-50 w-full -translate-x-1/2 px-4 sm:px-6">
      
      {/* 1. Main Navbar (The Pill) */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="
          relative
          overflow-hidden
          rounded-full
          border border-white/10
          bg-gradient-to-b
          from-white/10
          via-white/5
          to-white/[0.02]
          backdrop-blur-sm
          shadow-[0_8px_32px_rgba(0,0,0,0.18)]
          ring-1 ring-white/10
        "
      >
        <div className="flex items-center justify-between px-2 py-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 text-text ">
            <Image 
              src="/favicon.svg" 
              alt="Site Logo" 
              width={50} 
              height={50} 
              priority 
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-primary text-sm font-medium text-muted transition-colors hover:text-text"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-3xl border border-border/50 bg-card/50 text-muted transition-all duration-300 hover:scale-105 hover:text-text"
              aria-label="Theme Toggle"
            >
              <motion.div
                  whileHover={{
                    rotate: theme === "dark" ? 18 : -18,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 15,
                  }}
                >
                {theme === "dark" ? (
                  <Day className="h-5 w-5 text-text" />
                ) : (
                  <Night className="h-5 w-5 text-text" />
                )}
              </motion.div>
            </button>

            <WarriorButton
              href={cta.href}
              variant="blood"
              showIcon={false}
              size="md"
            >
              {cta.label}
            </WarriorButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col h-10 w-10 items-center justify-center gap-1.5 lg:hidden"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="h-[2px] w-6 rounded-full bg-text"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="h-[2px] w-6 rounded-full bg-text"
            />
          </button>
        </div>
      </motion.nav>

      {/* 2. Floating Mobile Dropdown (Separated from the Pill) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-4 right-4 top-[calc(100%+12px)] overflow-hidden rounded-[2rem] border border-border/50 bg-card/90 shadow-2xl backdrop-blur-xl lg:hidden"
          >
            <div className="px-5 py-5">
              <div className="flex flex-col gap-1">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.2,
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block rounded-xl px-3 py-3 font-primary text-base text-muted transition-colors hover:bg-surface/50 hover:text-text"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-5">
                <button
                  onClick={toggleTheme}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border/50 bg-surface/50 text-muted transition-all hover:text-text"
                  aria-label="Theme Toggle"
                >
                  {theme === "dark" ? (
                    <Day className="h-5 w-5 text-text" />
                  ) : (
                    <Night className="h-5 w-5 text-text" />
                  )}
                </button>
                <WarriorButton
                  variant="blood"
                  size="md"
                  showIcon={false}
                  className="w-full"
                >
                  {cta.label}
                </WarriorButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}