import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  nome: string;
  descricao: string;
  longDescricao?: string;
  imagem: string;
  tags?: string[];
  cta?: string;
  link?: string;
  github?: string;
  status?: "live" | "dev" | "archived";
  onSeeMore?: () => void;
}

export default function ProjectCard({
  nome,
  descricao,
  imagem,
  tags = [],
  link,
  onSeeMore,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full sm:max-w-xs"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <motion.div
        className="relative bg-black border border-gray-700 rounded-xl overflow-hidden group cursor-pointer"
        style={{
          boxShadow: "inset 0 -10px 15px -5px rgba(100, 22, 245, 0.6)",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <div className="relative w-full h-64 overflow-hidden">
          <motion.img
            src={imagem}
            alt={nome}
            className="w-full h-full object-cover rounded-t-xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col justify-end p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.p
              className="text-white text-sm leading-relaxed mb-4 line-clamp-3"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ delay: 0.1 }}
            >
              {descricao}
            </motion.p>

            {link && (
              <motion.a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-amber-200 uppercase tracking-[0.3em] group/link"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.15 }}
                onClick={(e) => e.stopPropagation()}
              >
                view live
                <motion.span
                  className="inline-block"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.a>
            )}
          </motion.div>
        </div>

        <div className="p-4 space-y-3">
          <div>
            <h2 className="text-xl font-bold text-white">{nome}</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full border border-white/20 text-white"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* See More Button */}
          {onSeeMore && (
            <motion.button
              onClick={onSeeMore}
              className="mt-1 w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              See More
            </motion.button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
