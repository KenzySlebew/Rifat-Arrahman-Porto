import { motion } from "framer-motion";
import { Download } from "lucide-react";
import {
  SiBootstrap,
  SiCanva,
  SiCodepen,
  SiCss3,
  SiFigma,
  SiFlutter,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMysql,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiVercel,
  SiSpotify,
} from "react-icons/si";
import type { IconType } from "react-icons";
import Lanyard from "./Lanyard";

const interests = [
  "Front-End Development",
  "Software Development",
  "Movies",
  "Music",
];

type ToolItem = {
  name: string;
  category: string;
  Icon: IconType;
  accent: string;
  bg: string;
};

const tools: ToolItem[] = [
  {
    name: "Visual Studio Code",
    category: "Code Editor",
    Icon: SiCodepen,
    accent: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "React",
    category: "Framework",
    Icon: SiReact,
    accent: "text-cyan-300",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Tailwind CSS",
    category: "Framework",
    Icon: SiTailwindcss,
    accent: "text-teal-300",
    bg: "bg-teal-500/10 border-teal-500/20",
  },
  {
    name: "Laravel",
    category: "Framework",
    Icon: SiLaravel,
    accent: "text-red-400",
    bg: "bg-red-500/10 border-red-500/20",
  },
  {
    name: "Bootstrap",
    category: "Framework",
    Icon: SiBootstrap,
    accent: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
  },
  {
    name: "JavaScript",
    category: "Language",
    Icon: SiJavascript,
    accent: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
  },
  {
    name: "Flutter",
    category: "Framework",
    Icon: SiFlutter,
    accent: "text-sky-300",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
  {
    name: "Github",
    category: "Repository",
    Icon: SiGithub,
    accent: "text-white",
    bg: "bg-white/10 border-white/20",
  },
  {
    name: "Canva",
    category: "Design App",
    Icon: SiCanva,
    accent: "text-cyan-300",
    bg: "bg-cyan-500/10 border-cyan-500/20",
  },
  {
    name: "Figma",
    category: "Design App",
    Icon: SiFigma,
    accent: "text-pink-300",
    bg: "bg-pink-500/10 border-pink-500/20",
  },
  {
    name: "Vercel",
    category: "Deployment",
    Icon: SiVercel,
    accent: "text-white",
    bg: "bg-white/5 border-white/15",
  },
  {
    name: "Spotify",
    category: "Vibin",
    Icon: SiSpotify,
    accent: "text-green-400",
    bg: "bg-green-500/10 border-green-500/20",
  },
  {
    name: "HTML",
    category: "Language",
    Icon: SiHtml5,
    accent: "text-orange-400",
    bg: "bg-orange-500/10 border-orange-500/20",
  },
  {
    name: "CSS",
    category: "Language",
    Icon: SiCss3,
    accent: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
  },
  {
    name: "PHP",
    category: "Language",
    Icon: SiPhp,
    accent: "text-indigo-300",
    bg: "bg-indigo-500/10 border-indigo-500/20",
  },
  {
    name: "MySQL",
    category: "Database",
    Icon: SiMysql,
    accent: "text-sky-400",
    bg: "bg-sky-500/10 border-sky-500/20",
  },
];

const ToolCard = ({ tool, index }: { tool: ToolItem; index: number }) => (
  <motion.div
    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-400/40 hover:bg-white/10"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
  >
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${tool.bg}`}>
      <tool.Icon className={`w-6 h-6 ${tool.accent}`} />
    </div>
    <div>
      <p className="text-white font-semibold">{tool.name}</p>
      <p className="text-white/60 text-sm">{tool.category}</p>
    </div>
  </motion.div>
);

export default function AboutMe() {
  const letters = "About Me".split("");

  const handleDownloadCV = () => {
    window.open(
      "https://drive.google.com/file/d/1bzql4LdBxfx1Dx1rB_4KsIVNsxC9sKMG/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <section
      id="about"
      className="w-full bg-black text-white py-24 px-6 border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <h2 className="text-amber-50 text-4xl sm:text-5xl md:text-6xl font-bold text-center flex justify-center gap-2 flex-wrap">
          {letters.map((letter, i) => (
            <motion.span
              key={`${letter}-${i}`}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.08,
                delay: i * 0.05,
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>

        {/* Combined Horizontal Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-purple-500/30 shadow-lg shadow-purple-500/20 overflow-hidden">
            <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-0">
              {/* Left Section - About Me Content */}
              <div className="p-6 sm:p-8 lg:p-12 space-y-8 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-40 pointer-events-none" />

                <div className="relative space-y-6">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">I'm Muhammad Rif'at Arrahman</h3>

                  {/* Description */}
                  <p className="text-white/90 leading-relaxed text-lg">
                    a front-end developer and Information Systems student at Telkom University. I hold certifications as a Junior Web Developer and Junior Mobile Developer. I focus on building fast, intuitive, and polished interfaces, blending user-centered design with clean engineering to create digital products that grow with users and businesses.
                  </p>

                  {/* Download CV Button */}
                  <motion.button
                    onClick={handleDownloadCV}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl overflow-hidden transition-all hover:from-purple-500 hover:to-pink-500 shadow-lg shadow-purple-500/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
                    <span>Download CV</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  </motion.button>

                  {/* Motto */}
                  <p className="text-white/60 italic pt-4 border-t border-white/10">
                    "Working with heart, creating with mind."
                  </p>
                </div>
              </div>

              {/* Right Section - Lanyard Card */}
              <motion.div
                className="relative bg-gradient-to-b from-blue-900/20 via-blue-800/10 to-transparent border-l border-white/10 lg:border-l lg:border-t-0 border-t p-8 lg:p-6 flex items-center justify-center overflow-visible min-h-[500px]"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Lanyard Top Bar */}
                <div className="absolute top-4 left-6 right-6 h-px bg-white/20" />
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-px h-12 bg-white/15" />

                {/* Lanyard Container */}
                <div className="relative w-full max-w-sm h-[480px] flex items-start justify-center pt-12">
                  <Lanyard position={[0, -0.5, 16]} gravity={[0, -40, 0]} fixedPosition={[0, 4.5, 0]} />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/15 p-6 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-10">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-purple-200/70">
                Tools & Technologies
              </p>
              <h3 className="text-3xl font-semibold text-white">
                My Professional Skills
              </h3>
              <p className="text-white/70 max-w-2xl">
                A carefully curated toolkit that helps me craft performant, expressive, and reliable products across design, development, and deployment.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 rounded-full bg-amber-50/10 border border-amber-200/20 text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <ToolCard key={tool.name} tool={tool} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

