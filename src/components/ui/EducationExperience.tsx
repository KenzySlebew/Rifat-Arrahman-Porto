"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  description: string;
  type: "education" | "experience";
};

const timelineData: TimelineItem[] = [
  {
    title: "Software Engineering Highschool",
    place: "SMK Telkom Banjarbaru",
    period: "2022 — 2025",
    description:
      "Focused on software engineering, web development, and mobile development.",
    type: "education",
  },
  {
    title: "Quality Assurance",
    place: "Teaching Factory",
    period: "2024 — 2025",
    description:
      "being QA of bentala Website",
    type: "experience",
  },
  {
    title: "Internship as Full-Stack",
    place: "Diskominfo Kabupaten Banjar",
    period: "2024 — 2025",
    description:
      "Making Goverment Website.",
    type: "experience",
  },
  {
    title: "Information System Student",
    place: "Telkom University",
    period: "2025 — Now",
    description:
      "Undergraduate Student",
    type: "education",
  },
];

interface TimelineItemProps {
  item: TimelineItem;
  index: number;
}

function TimelineItemComponent({ item, index }: TimelineItemProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.8", "start 0.3"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 0], {
    clamp: false,
  });
  const filter = useTransform(blur, (b) => `blur(${b}px)`);

  const isEducation = item.type === "education";

  return (
    <motion.div
      ref={itemRef}
      className="relative"
      style={{
        opacity,
        scale,
        y,
        filter,
      }}
    >
      <div className="flex gap-4 sm:gap-6 items-start">
        {/* Timeline Line & Dot */}
        <div className="flex flex-col items-center relative">
          <div
            className={`w-4 h-4 rounded-full border-2 ${isEducation
                ? "bg-amber-50 border-amber-50"
                : "bg-blue-400 border-blue-400"
              } z-10`}
          />
          {index < timelineData.length - 1 && (
            <div className="w-0.5 h-full min-h-[120px] bg-gradient-to-b from-white/30 via-white/20 to-transparent mt-2" />
          )}
        </div>

        {/* Content Card */}
        <motion.div
          className={`flex-1 border rounded-3xl p-6 backdrop-blur-md transition-colors ${isEducation
              ? "border-amber-50/20 bg-amber-50/5"
              : "border-blue-400/20 bg-blue-400/5"
            }`}
          whileHover={{
            scale: 1.02,
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-white gap-2 mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`text-xs uppercase tracking-widest px-2 py-1 rounded-full ${isEducation
                      ? "bg-amber-50/20 text-amber-50"
                      : "bg-blue-400/20 text-blue-400"
                    }`}
                >
                  {item.type}
                </span>
              </div>
              <p className="text-xl font-semibold">{item.title}</p>
              <p className="text-white/60">{item.place}</p>
            </div>
            <span className="text-sm uppercase tracking-widest text-white/70 whitespace-nowrap">
              {item.period}
            </span>
          </div>
          <p className="text-white/70 text-sm leading-relaxed">
            {item.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function EducationExperience() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const letters = "Education & Experience".split("");

  // Scroll-driven animation for title
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="w-full bg-black py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient effect based on scroll */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [
              "radial-gradient(circle at 50% 0%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 100%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)",
            ]
          ),
        }}
      />

      <motion.h2
        className="text-amber-50 text-5xl md:text-6xl font-bold text-center mb-14 flex justify-center gap-2 flex-wrap relative z-10"
        style={{
          opacity: titleOpacity,
          y: titleY,
        }}
      >
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
      </motion.h2>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItemComponent
              key={`${item.title}-${index}`}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

