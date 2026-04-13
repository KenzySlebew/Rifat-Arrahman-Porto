import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface Project {
  nome: string;
  descricao: string;
  longDescricao?: string;
  imagem: string;
  tags?: string[];
  link?: string;
  github?: string;
  status?: "live" | "dev" | "archived";
}

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

const statusConfig = {
  live: { label: "Live", color: "bg-green-500/20 text-green-400 border-green-500/40" },
  dev: { label: "Sedang Dikembangkan", color: "bg-amber-500/20 text-amber-400 border-amber-500/40" },
  archived: { label: "Archived", color: "bg-gray-500/20 text-gray-400 border-gray-500/40" },
};

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal Panel */}
          <motion.div
            className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10"
            style={{
              background: "linear-gradient(145deg, #0d0d0d 0%, #111111 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -10px rgba(0,0,0,0.9), 0 0 60px -20px rgba(100, 22, 245, 0.4)",
            }}
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ type: "spring", stiffness: 280, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all text-lg"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Screenshot Preview */}
            <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-t-2xl">
              <img
                src={project.imagem}
                alt={project.nome}
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent" />

              {/* Status Badge - overlaid on image */}
              {project.status && (
                <div className="absolute bottom-4 left-4">
                  <span
                    className={`text-xs px-3 py-1 rounded-full border font-medium tracking-wide ${statusConfig[project.status].color}`}
                  >
                    {statusConfig[project.status].label}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 space-y-5">
              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {project.nome}
              </h2>

              {/* Long Description */}
              <p className="text-white/65 leading-relaxed text-sm sm:text-base">
                {project.longDescricao || project.descricao}
              </p>

              {/* Tech Stack */}
              {project.tags && project.tags.length > 0 && (
                <div className="space-y-2">
                  <h3 className="text-white/50 text-xs uppercase tracking-widest font-semibold">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-white/80 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Divider */}
              <div className="w-full h-px bg-white/10" />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/14 border border-white/15 hover:border-white/30 text-white text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
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
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit Live Site
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/8 hover:bg-white/14 border border-white/15 hover:border-white/30 text-white text-sm font-medium transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                    View on GitHub
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
