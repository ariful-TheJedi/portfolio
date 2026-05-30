"use client";

import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import SwordIcon from "../../../public/icons/sword";

interface WarriorButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "marble" | "blood" | "bronze";
  size?: "sm" | "md" | "lg";

  icon?: React.ReactNode;
  showIcon?: boolean;

  isFloating?: boolean;
  showShadow?: boolean;

  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;

  children: React.ReactNode;
}

export default function WarriorButton({
  variant = "bronze",
  size = "md",

  icon,
  showIcon = true,

  isFloating = false,
  showShadow = true,

  href,
  target,
  rel,

  children,
  className = "",
  ...props
}: WarriorButtonProps) {
  /* ---------------- Variants ---------------- */

  const variants = {
    marble: `
      bg-[#F5EFE4]
      text-[#2A211B]
      border-[#D4C5B4]
      hover:bg-[#d8d2c8]
    `,

    blood: `
      bg-[#761010]
      text-[#F4E8D0]
      border-[#A52A2A]
      hover:bg-[#8F2525]
    `,

    bronze: `
      bg-[#9A6A2F]
      text-[#F4E8D0]
      border-[#D4C5B4]
      hover:bg-[#8a5f2b]
    `,
  };

  /* ---------------- Sizes ---------------- */

  const sizes = {
    sm: "h-8 px-4 text-xs",
    md: "h-11 px-5 text-sm",
    lg: "h-14 px-6 text-base",
  };

  /* ---------------- Shadows ---------------- */

  const shadows = {
    marble:
      "shadow-[0_10px_30px_rgba(120,113,108,0.18)] hover:shadow-[0_20px_45px_rgba(120,113,108,0.26)]",

    blood:
      "shadow-[0_10px_30px_rgba(127,29,29,0.22)] hover:shadow-[0_20px_45px_rgba(127,29,29,0.34)]",

    bronze:
      "shadow-[0_10px_30px_rgba(180,120,40,0.22)] hover:shadow-[0_20px_45px_rgba(180,120,40,0.34)]",
  };

  /* ---------------- Shared Styles ---------------- */

  const sharedClassName = clsx(
    `
    group
    relative

    inline-flex
    items-center
    justify-center

    overflow-hidden
    rounded-full
    border

    cursor-pointer
    select-none

    font-semibold
    uppercase
    tracking-[0.10em]

    transition-all
    duration-300

    hover:brightness-[1.03]

    backdrop-blur-xl

    transform-gpu
    will-change-transform
    `,
    variants[variant],
    sizes[size],

    showShadow && shadows[variant],

    className
  );

  /* ---------------- Content ---------------- */

  const content = (
    <>
      {/* Metallic Sweep */}
      <span
        className="
          absolute inset-0 overflow-hidden
          rounded-full pointer-events-none
        "
      >
        <span
          className="
            absolute top-0 left-[-140%]

            h-full w-[30%]

            skew-x-[-20deg]

            bg-gradient-to-r
            from-transparent
            via-white/25
            to-transparent

            blur-lg

            transition-all
            duration-700
            ease-out

            group-hover:left-[140%]
          "
        />
      </span>

      {/* Inner Content */}
      <span
        className="
          relative z-10
          flex items-center justify-center
        "
      >
        {showIcon && (
          <motion.span
            whileHover={{
              rotate: -12,
              x: -1,
            }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 12,
            }}
            className="
              mr-1.5
              flex items-center justify-center
              relative top-[-1px]
            "
          >
            {icon || <SwordIcon className="h-6 w-6" />}
          </motion.span>
        )}

        <span>{children}</span>
      </span>
    </>
  );

  /* ---------------- Button Element ---------------- */

  const buttonElement = href ? (
    <Link href={href} target={target} rel={rel} className={sharedClassName}>
      {content}
    </Link>
  ) : (
    <button className={sharedClassName} {...props}>
      {content}
    </button>
  );

  /* ---------------- Main ---------------- */

  return (
    <div
      className={clsx(
        "warrior-float-wrapper",
        isFloating && "warrior-floating"
      )}
    >
      <motion.div
        whileHover={{
          y: -3,
        }}
        whileTap={{
          y: 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
          mass: 0.8,
        }}
        className="inline-flex"
      >
        {buttonElement}
      </motion.div>
    </div>
  );
}

