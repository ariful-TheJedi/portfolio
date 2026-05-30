"use client";

import React,{useState,useRef} from "react";
import { motion, AnimatePresence } from "framer-motion";
import BgBlur from "./reusabls/bg-brlur";
import SectionHeader from "./reusabls/section-title";
import WarriorButton from "./reusabls/button";
import data from "../data/contact-data.json";
import Sent from "@/public/icons/sent";


//use w3form hook
import { useContactForm } from "./hooks/useW3contactForm";
//recaptcha
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const content = data.contact;

  
  //contact form
  const { submitForm, loading, success, error } = useContactForm();

   const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


//captha
 const [captchaToken, setCaptchaToken] = useState(""); 
 const captchaRef = useRef<HCaptcha>(null);

const handleSubmit = async (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const result = await submitForm({
    ...formData,
    captchaToken,
  });

  if (result.success) {
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setCaptchaToken("");

    captchaRef.current?.resetCaptcha();
  }
};


 


  return (
    <section id="contact" className="relative overflow-hidden py-4 lg:py-8 xl:py-10 font-primary text-text">
      <BgBlur
        imagePath="https://i.pinimg.com/736x/ff/16/7d/ff167db49aada3bbfcfe2f660a0c90e5.jpg"
        blur="blur-[2px]"
        overlay="bg-background/60"
      />

      <div className="main-container relative z-10 min-h-screen content-center">
        <SectionHeader
          badge={content.sectionTitle}
          title={content.heading}
        />

        <div className="mt-14 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div className="max-w-xl">
            <p className="font-secondary text-lg leading-relaxed text-muted lg:text-xl">
              {content.description}
            </p>
          </div>

          {/* Form */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[2rem]
              border
              border-border/40
              bg-surface/30
              p-8
              backdrop-blur-xl
              shadow-2xl
              lg:p-10
            "
          >
            {/* Greek Accent */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-bronze to-transparent" />

            {/* Ambient Glow */}
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-bronze/10 blur-3xl" />

            <form
              className="relative z-10 space-y-6"
              onSubmit={handleSubmit}

            >
              {content.form.fields.map((field) => (
                <div key={field.label}>
                  <label className="mb-2 block font-semibold text-text">
                    {field.label}
                  </label>

                  {field.type === "textarea" ? (
                    <textarea
                      rows={4}
                      placeholder={field.placeholder}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      className="
                        w-full
                        resize-none
                        rounded-2xl
                        border
                        border-border/50
                        bg-background/40
                        px-5
                        py-4
                        text-text
                        placeholder:text-muted/60
                        outline-none
                        transition-all
                        duration-300
                        hover:border-border
                        focus:border-bronze
                        focus:ring-1
                        focus:ring-bronze/50
                      "
                    />
                  ) : (
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={
                        field.type === "email"
                          ? formData.email
                          : formData.name
                      }
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          [field.type === "email" ? "email" : "name"]:
                            e.target.value,
                        })
                      }
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-border/50
                        bg-background/40
                        px-5
                        py-4
                        text-text
                        placeholder:text-muted/60
                        outline-none
                        transition-all
                        duration-300
                        hover:border-border
                        focus:border-bronze
                        focus:ring-1
                        focus:ring-bronze/50
                      "
                    />
                  )}
                </div>
              ))}

              <div className="pt-2">
                <div className="flex justify-start pt-2 mb-2 overflow-hidden">
                  <div
                    className="
                      rounded-2xl
                      border
                      border-border/40
                      bg-background/30
                      backdrop-blur-sm
                      max-w-full
                    "
                  >
                    <div className="origin-left scale-[0.85] sm:scale-100">
                      <HCaptcha
                        ref={captchaRef}
                        sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY!}
                        onVerify={(token) => setCaptchaToken(token)}
                      />
                    </div>
                  </div>
                </div>
                  <AnimatePresence>
                    {success && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-green-400 mb-2"
                      >
                        Message sent successfully!
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <AnimatePresence>
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-400 mb-2"
                      >
                        {error}
                      </motion.div>
                    )}
                  </AnimatePresence>
                <WarriorButton
                  type="submit"
                  variant="blood"
                  size="md"
                  icon={<Sent />}
                  disabled={loading}
                  className="w-full"
                >
                  {loading
                    ? "Sending..."
                    : content.form.buttons[0].text}
                </WarriorButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}