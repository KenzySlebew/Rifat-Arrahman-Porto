"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { User, Mail, MessageSquare, Send, Share2, Loader2, CheckCircle2, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub
} from "react-icons/fa";

type SocialLink = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
  username: string;
  color: string;
  bgColor: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    url: "https://linkedin.com/in/mrifatarrahman",
    username: "Let's Connect",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://instagram.com/riftarhman",
    username: "@riftarhman",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  // {
  //   name: "Youtube",
  //   icon: FaYoutube,
  //   url: "https://youtube.com",
  //   username: "@eki zulfar",
  //   color: "text-red-500",
  //   bgColor: "bg-red-500/10",
  // },
  {
    name: "Github",
    icon: FaGithub,
    url: "https://github.com/KenzySlebew",
    username: "@KenzySlebew",
    color: "text-white",
    bgColor: "bg-white/10",
  },
  // {
  //   name: "Tiktok",
  //   icon: FaTiktok,
  //   url: "https://tiktok.com/SUQRONZ",
  //   username: "@SUQRON",
  //   color: "text-black dark:text-white",
  //   bgColor: "bg-black/20 dark:bg-white/10",
  // },
];

// EmailJS Configuration
// Using environment variables or fallback to provided credentials
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_a8cgcrh";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_cuk6art";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "lwXp_2U-jktLHepHc";
const RECIPIENT_EMAIL = "rifatarrahman15@gmail.com";

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please fill in this field.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please fill in this field.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please fill in this field.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: RECIPIENT_EMAIL,
        reply_to: formData.email,
      };

      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");

      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full bg-black py-16 px-4 sm:py-24 sm:px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Header */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3">
            <motion.h2
              className="text-amber-50 text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact Me
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            >
              <Share2 className="w-8 h-8 text-purple-400" />
            </motion.div>
          </div>
          <motion.p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Have something to discuss? Send me a message and let's talk.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Name Field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                <User className="w-5 h-5" />
              </div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${errors.name
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-purple-500/50"
                  }`}
              />
              {errors.name && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <span className="text-xs text-red-400 bg-black/80 px-2 py-1 rounded">
                    {errors.name}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Email Field */}
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50">
                <Mail className="w-5 h-5" />
              </div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all ${errors.email
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-purple-500/50"
                  }`}
              />
              {errors.email && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <span className="text-xs text-red-400 bg-black/80 px-2 py-1 rounded">
                    {errors.email}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Message Field */}
            <div className="relative">
              <div className="absolute left-4 top-6 text-white/50">
                <MessageSquare className="w-5 h-5" />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                className={`w-full pl-12 pr-4 py-4 rounded-xl bg-white/5 border backdrop-blur-md text-white placeholder-white/50 focus:outline-none focus:ring-2 transition-all resize-none ${errors.message
                    ? "border-red-500/50 focus:ring-red-500/50"
                    : "border-white/10 focus:ring-purple-500/50"
                  }`}
              />
              {errors.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-4 top-4"
                >
                  <span className="text-xs text-red-400 bg-black/80 px-2 py-1 rounded">
                    {errors.message}
                  </span>
                </motion.div>
              )}
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold flex items-center justify-center gap-2 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Success/Error Messages */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-green-500/20 border border-green-500/50 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                <p className="text-green-400 text-sm">
                  Message sent successfully! I'll reply soon.
                </p>
              </motion.div>
            )}

            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 flex items-center gap-3"
              >
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">
                  An error occurred while sending the message. Please try again or contact directly via email.
                </p>
              </motion.div>
            )}
          </motion.form>

          {/* Connect With Me Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Title */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent" />
              <h3 className="text-white text-2xl font-semibold">
                Connect With Me
              </h3>
            </div>

            {/* Social Links Card */}
            <div className="rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 space-y-4">
              {/* LinkedIn - Larger */}
              {(() => {
                const LinkedInIcon = socialLinks[0].icon;
                return (
                  <motion.a
                    href={socialLinks[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <div className={`p-3 rounded-lg ${socialLinks[0].bgColor}`}>
                      <LinkedInIcon className={`w-6 h-6 ${socialLinks[0].color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold">
                        {socialLinks[0].username}
                      </p>
                      <p className="text-white/60 text-sm">on {socialLinks[0].name}</p>
                    </div>
                  </motion.a>
                );
              })()}

              {/* Other Social Links */}
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.slice(1).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all group"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    >
                      <div className={`p-2 rounded-lg ${social.bgColor}`}>
                        <Icon className={`w-5 h-5 ${social.color}`} />
                      </div>
                      <div className="text-center">
                        <p className="text-white text-sm font-medium">
                          {social.name}
                        </p>
                        <p className="text-white/60 text-xs">{social.username}</p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

