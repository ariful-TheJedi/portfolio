"use client";

import { useState } from "react";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  captchaToken: string;
}

export function useContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const submitForm = async (data: ContactFormData) => {
    try {
      setLoading(true);
      setError("");
      setSuccess(false);

      // Validate name
      if (!data.name.trim()) {
        throw new Error("Please enter your name.");
      }

      // Validate email
      if (!data.email.trim()) {
        throw new Error("Please enter your email address.");
      }

      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(data.email)) {
        throw new Error("Please enter a valid email address.");
      }

      // Validate message
      if (!data.message.trim()) {
        throw new Error("Please enter a message.");
      }

      if (data.message.trim().length < 10) {
        throw new Error(
          "Message must be at least 10 characters long."
        );
      }

      // Validate captcha
      if (!data.captchaToken) {
        throw new Error(
          "Please complete the captcha verification."
        );
      }

      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,

            subject: `Portfolio Contact from ${data.name}`,
            from_name: "Portfolio Website",

            name: data.name.trim(),
            email: data.email.trim(),
            message: data.message.trim(),

            hcaptcha: data.captchaToken,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message ||
            "Unable to send message. Please try again."
        );
      }

      setSuccess(true);

      return {
        success: true,
        message:
          result.message || "Message sent successfully.",
      };
    } catch (err) {
      const message =
        err instanceof Error
          ? err.message
          : "Something went wrong.";

      setError(message);

      return {
        success: false,
        message,
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    submitForm,
    loading,
    success,
    error,
    setError,
    setSuccess,
  };
}