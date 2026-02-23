import { motion } from "framer-motion";
import { useState } from "react";
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
      "Website for government.",
    imagem: "/spbe.png",
    tags: ["Laravel", "Bootstrap", "JS"],
    link: "https://github.com/KenzySlebew/SPBE",
  },
  {
    nome: "RLioin",
    descricao:
      "Portofolio Mobile Websites.",
    imagem: "/rlioin.png",
    tags: ["Flutter", "Figma"],
    link: "https://github.com/KenzySlebew/Rlioin-beta",
  },
  {
    nome: "Figma-to-react for internship test",
    descricao:
      "Convert figma to react with reusable components. for internship test",
    imagem: "/figma-to-react.png",
    tags: ["React", "Figma", "Builder.io"],
    link: "https://test-figma-to-react.netlify.app/#",
  },
  {
    nome: "Pilates Reservation App",
    descricao:
      "Front-end reservation app for booking Pilates sessions — choose dates, timeslots, and courts with integrated payment.",
    imagem: "/pilates-reservation.png",
    tags: ["Next.js"],
    link: "https://pilates-reservation.netlify.app/",
  },
];

const certifications = [
  {
    nama: "Junior Mobile Programming",
    gambar:
      "https://media.licdn.com/dms/image/v2/D562DAQEC6bWxF_m4VA/profile-treasury-image-shrink_1280_1280/B56Zf8TRsGHcAU-/0/1752284602452?e=1772427600&v=beta&t=wRxEgGP0_mXMXfPug62ito593mAEalEIiHwoiorQI5w",
  },
  {
    nama: "Junior Web Developer",
    gambar:
      "https://media.licdn.com/dms/image/v2/D562DAQEj_DyuonoW4g/profile-treasury-image-shrink_1280_1280/B56ZxfGDG.HUAQ-/0/1771121951150?e=1772427600&v=beta&t=I4Gy24eI-G7znmF4uJProVFQdeN86Nkuly33CXTZjTE",
  },
  {
    nama: "Junior Web Developer",
    gambar:
      "https://media.licdn.com/dms/image/v2/D562DAQFewvp8mCHiug/profile-treasury-image-shrink_800_800/B56ZoU.Gh4HAAc-/0/1761288417115?e=1772427600&v=beta&t=bhYf-2bi2vQ91KqmhiHpfNKIhPH0NgQVJw0iyJy2880",
  },
  {
    nama: "Learning Basic AI",
    gambar: "/Certificate Basic Ai.png",
  },
];

interface CertificationCardProps {
  nama: string;
  gambar: string;
  index: number;
}

const CertificationCard = ({ nama, gambar, index }: CertificationCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="max-w-sm cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
        onClick={() => setIsModalOpen(true)}
      >
        <motion.div
          className="relative bg-black border border-gray-700 rounded-xl overflow-hidden group"
          style={{
            boxShadow: "inset 0 -10px 15px -5px rgba(100, 22, 245, 0.6)",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="relative w-full h-80 overflow-hidden">
            <motion.img
              src={gambar}
              alt={nama}
              className="w-full h-full object-cover rounded-t-xl"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.4 }}
              onError={(e) => {
                // Fallback jika gambar tidak ditemukan
                (e.target as HTMLImageElement).src = "/placeholder-cert.jpg";
              }}
            />

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent flex flex-col justify-end p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.p
                className="text-white text-sm font-semibold"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
                transition={{ delay: 0.1 }}
              >
                Click to view
              </motion.p>
            </motion.div>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-bold text-white">{nama}</h3>
          </div>
        </motion.div>
      </motion.div>

      {/* Modal untuk melihat sertifikat lebih besar */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsModalOpen(false)}
        >
          <motion.div
            className="relative max-w-4xl max-h-[90vh]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-white text-2xl hover:text-purple-400 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>
            <img
              src={gambar}
              alt={nama}
              className="w-full h-auto rounded-lg border border-white/20"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default function SecaoProjetos() {
  const letters = "Projects".split("");

  return (
    <section className="bg-black gap-5 justify-center py-16 px-4 sm:py-24 sm:px-6">
      <div className="text-center mb-10">
        <h2
          id="projects"
          className="text-amber-50 text-4xl sm:text-5xl md:text-7xl font-bold text-center flex justify-center gap-2 flex-wrap"
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

      {/* Certifications Section */}
      <div className="mt-20">
        <div className="text-center mb-10">
          <h3 className="text-amber-50 text-3xl sm:text-4xl md:text-5xl font-bold text-center flex justify-center gap-2 flex-wrap mb-3">
            {"Certifications".split("").map((letter, i) => (
              <motion.span
                key={i}
                initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
                whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.1,
                  delay: i * 0.05,
                  type: "spring",
                  stiffness: 20,
                }}
                viewport={{ once: false }}
              >
                {letter}
              </motion.span>
            ))}
          </h3>
          <p className="text-white/70 mt-3 text-lg">
            Professional certifications and achievements.
          </p>
        </div>

        <div className="flex flex-wrap gap-6 justify-center py-10">
          {certifications.map((cert, index) => (
            <CertificationCard
              key={cert.nama}
              nama={cert.nama}
              gambar={cert.gambar}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

