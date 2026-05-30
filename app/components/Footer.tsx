"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  DiscordIcon,
  GithubIcon,
  LinkedInIcon,
  Mail,
  WhatsAppIcon,
} from "../../public/icons/socials";
import footerData from "../data/footer-data.json";

const content = footerData.footer;

const socialIcons = {
  Discord: DiscordIcon,
  Email: Mail,
  GitHub: GithubIcon,
  LinkedIn: LinkedInIcon,
  WhatsApp: WhatsAppIcon,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const copyright = content.copyright.replace("2025", String(currentYear));

  return (
    <footer className="relative z-20 w-full overflow-hidden bg-surface font-primary py-2">
      {/* Forged Top Border */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-bronze/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-16">
        <div className="flex flex-col gap-2">
          {/* Main Content Row */}
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-center">
            
            {/* Branding */}
            <div className="text-center md:text-left">
              <Link href="/" className="group relative inline-block">
                <p className="font-heading text-2xl font-bold uppercase tracking-[0.15em] text-text transition-colors duration-300 group-hover:text-bronze">
                  Ariful Islam
                </p>
                <span className="mt-1 block text-xs font-medium tracking-widest text-muted/70">
                  Software Engineer
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
              {content.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group relative font-secondary text-sm font-semibold tracking-wider text-muted transition-colors duration-200 hover:text-text"
                >
                  {link.label}
                  {/* Dynamic Sweep Underline */}
                  <span className="absolute -bottom-1.5 left-0 h-[1px] w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              {content.socials.map((social) => {
                const Icon =
                  socialIcons[social.platform as keyof typeof socialIcons];

                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border/40 bg-background/50 text-muted shadow-sm transition-colors duration-300 hover:border-bronze/50 hover:text-bronze hover:shadow-[0_0_15px_rgba(184,137,60,0.2)]"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Copyright Section */}
          <div className="relative flex flex-col items-center justify-center pt-6">
            {/* Subtle Divider */}
            <div className="absolute inset-x-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border/40 to-transparent" />
            
            <p className="text-center text-xs font-medium tracking-wide text-muted/60">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}