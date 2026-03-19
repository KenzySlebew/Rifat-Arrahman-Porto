"use client";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavLink = ({ href, children, delay = 0, onClick }: { href: string; children: React.ReactNode; delay?: number; onClick?: () => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick?.();
  };

  return (
    <motion.li
      className="relative px-4 py-1 rounded-full cursor-pointer"
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ delay }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href={href}
        onClick={handleClick}
        className="relative z-10 block"
      >
        {children}
      </a>
      <motion.div
        className="absolute bottom-0 left-1/2 h-0.5 bg-white rounded-full"
        initial={{ width: 0, x: "-50%" }}
        animate={{
          width: isHovered ? "80%" : 0,
          x: "-50%"
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.li>
  );
};

const MobileNavLink = ({ href, children, index, onClick }: { href: string; children: React.ReactNode; index: number; onClick: () => void }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    onClick();
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className="block px-6 py-3 text-white text-lg font-medium hover:bg-white/10 rounded-xl transition-colors"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ delay: index * 0.05 }}
    >
      {children}
    </motion.a>
  );
};

export default function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navBarVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const navLinks = [
    { href: "#about", label: "About", delay: 3.2 },
    // { href: "#gallery", label: "Gallery", delay: 2.5 }, // Gallery hidden temporarily
    { href: "#projects", label: "Projects", delay: 3 },
    { href: "#experience", label: "Experience", delay: 3.3 },
    { href: "#contact", label: "Contact", delay: 3.5 },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-row items-center justify-center py-4 transition-all duration-300 ${isScrolled ? "backdrop-blur-md bg-black/30" : ""
          }`}
        variants={navBarVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Desktop Nav */}
        <motion.ul
          className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-row gap-5 px-8 py-2 rounded-full backdrop-blur-xs bg-white/40 shadow-xl font-medium text-white items-center border border-white/50"
        >
          <motion.img
            className="h-10 cursor-pointer"
            variants={itemVariants}
          />
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} delay={link.delay}>
              {link.label}
            </NavLink>
          ))}
        </motion.ul>

        {/* Mobile Hamburger Button */}
        <motion.button
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full backdrop-blur-md bg-white/20 border border-white/30 text-white z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              className="absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 space-y-1 shadow-2xl"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {navLinks.map((link, index) => (
                <MobileNavLink
                  key={link.href}
                  href={link.href}
                  index={index}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </MobileNavLink>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}