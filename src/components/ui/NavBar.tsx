"use client";
import {motion, useScroll, useMotionValueEvent} from "framer-motion";
import { useState } from "react";

const NavLink = ({ href, children, delay = 0 }: { href: string; children: React.ReactNode; delay?: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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

export default function NavBar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 w-full flex flex-row items-center justify-center py-4 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-black/30" : ""
      }`}
      variants={navBarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.ul
        className="absolute left-1/2 -translate-x-1/2 flex flex-row gap-5 px-8 py-2 rounded-full backdrop-blur-xs bg-white/40 shadow-xl font-medium text-white items-center border border-white/50"
      >
        <motion.img
          // src="logo.webp"
          className="h-10 cursor-pointer"
          variants={itemVariants}
        />
        {/* <NavLink href="#home" delay={2}>Home</NavLink> */}
        <NavLink href="#about" delay={3.2}>About</NavLink>
        <NavLink href="#gallery" delay={2.5}>Gallery</NavLink>
        <NavLink href="#projects" delay={3}>Projects</NavLink>
        <NavLink href="#experience" delay={3.3}>Experience</NavLink>
        <NavLink href="#contact" delay={3.5}>Contact</NavLink>
      </motion.ul>
    </motion.nav>
  );
}