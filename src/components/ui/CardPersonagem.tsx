import { motion } from "framer-motion";
import { useState } from "react";

interface ProjectCardProps {
  nome: string;
  descricao: string;
  imagem: string;
  tags?: string[];
  cta?: string;
  link?: string;
}

export default function ProjectCard({
  nome,
  descricao,
  imagem,
  tags = [],
  cta = "view case",
  link,
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
              className="text-white text-sm leading-relaxed mb-4"
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
              >
                {cta}
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
        </div>
      </motion.div>
    </motion.div>
  );
}
