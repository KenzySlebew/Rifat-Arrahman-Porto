import { motion } from "framer-motion";
import ProjectCard from "../ui/CardPersonagem";

const projects = [
  {
    nome: "Cinefat",
    descricao:
      "Website for buy movies.",
    imagem: "/cinefat.png",
    tags: ["HTML", "CSS", "JS"],
    link: "https://github.com/",
  },
  {
    nome: "SPBE (Sistem Pemerintahan Berbasis Elektronik) Website for Kabupaten Banjar ",
    descricao:
      "Design system for indie creators featuring responsive tokens and gentle motion recipes.",
    imagem: "/spbe.png",
    tags: ["Laravel", "Bootstrap", "JS"],
    link: "https://dribbble.com/",
  },
  {
    nome: "RLioin",
    descricao:
      "Experimental storefront focused on micro-interactions and real-time conversion telemetry.",
    imagem: "/rlioin.png",
    tags: ["Flutter", "Figma"],
    link: "https://github.com/",
  },
];

export default function SecaoProjetos() {
  const letters = "Projects".split("");

  return (
    <section className="bg-black gap-5 justify-center py-24 px-6">
      <div className="text-center mb-10">
        <h2
          id="projects"
          className="text-amber-50 text-7xl font-bold text-center flex justify-center gap-2"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1,
                type: "spring",
                stiffness: 20,
              }}
              viewport={{ once: false }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        <p className="text-white/70 mt-3 text-lg">
          A curated slice of branding, motion, and front-end experiments from the
          last seasons.
        </p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center py-10">
        {projects.map((project) => (
          <ProjectCard key={project.nome} {...project} />
        ))}
      </div>
    </section>
  );
}

