"use client";
import { motion } from "framer-motion";

export default function Banner() {
  const letters = "Rif'at".split("");

  return (
    <div className="flex-1 relative h-full overflow-hidden flex flex-col justify-center items-center">
      {/* Gradiente de fundo escuro para a imagem */}
      <div className="absolute bottom-0 left-0 w-full h-40 sm:h-50 md:h-70 bg-gradient-to-t from-black/100 to-transparent pointer-events-none z-2" />

      {/* Animação da imagem */}
      <motion.img
        src="Personal Photo bg.png"
        className="absolute w-auto h-[90vh] max-w-[80%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] bottom-0 left-1/2 -translate-x-1/2 object-contain object-bottom z-1"
        initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.4,
          delay: 1,
          type: "spring",
          stiffness: 20,
        }}
      />

      {/* Animação do texto */}
      <h1 className="flex text-[5rem] sm:text-[10rem] md:text-[15rem] lg:text-[20rem] xl:text-[30rem] h-[60%] font-bold text-white text-shadow-black relative">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              duration: 0.5,
              delay: i * 0.2, // atraso progressivo
              type: "spring",
              stiffness: 10,
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <div className="h-full text-amber-50 w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-45 gap-6 sm:gap-8">
        <motion.div
          initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 25,
          }}
          className="w-full lg:w-100 text-base sm:text-lg h-fit rounded-3xl sm:rounded-4xl backdrop-blur-md p-4 sm:p-6 lg:p-4 space-y-3 sm:space-y-4"
        >
          <span className="font-bold text-2xl block">
            Software Developer & Front-end Developer
          </span>
          <p className="text-base leading-relaxed text-white/90">
            I craft immersive portfolios and marketing sites that blend fantasy
            aesthetics with performant code. Animation, accessibility, and
            narrative structure guide every build I ship.
          </p>
          <div className="flex gap-4 text-sm uppercase tracking-wide">
            <span>#React</span>
            <span>#Laravel</span>
            <span>#Flutter</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 200, opacity: 0, filter: "blur(20px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            delay: 0.6,
            type: "spring",
            stiffness: 20,
          }}
          className="flex flex-col gap-4 self-end mb-12"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-full border border-white/50 text-white uppercase tracking-[0.15em] sm:tracking-[0.3em] text-sm sm:text-base overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                →
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/10"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="group relative px-6 sm:px-10 py-3 sm:py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 text-white uppercase tracking-[0.15em] sm:tracking-[0.3em] text-sm sm:text-base overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.2)" }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              About Me
              <motion.span
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                ↓
              </motion.span>
            </span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}