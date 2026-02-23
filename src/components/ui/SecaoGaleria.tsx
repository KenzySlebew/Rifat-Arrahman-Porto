import { motion } from "framer-motion";
import AssimetricPhotos from "./AssimetricPhotos";

export default function SecaoGaleria() {
  const letters = "Gallery".split("");

  return (
    <>
      <div className="w-full min-h-screen bg-black flex flex-col text-center pt-16 sm:pt-25">
        <h2 id="gallery" className="text-amber-50 text-4xl sm:text-5xl md:text-7xl font-bold">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ y: -200, opacity: 0, filter: "blur(20px)" }}
              // Usa whileInView para animar quando o elemento está visível
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.1,
                delay: i * 0.1, // atraso progressivo
                type: "spring",
                stiffness: 20,
              }}
              // viewport uma vez para que a animação ocorra apenas na primeira vez
              viewport={{ once: true }}
            >
              {letter}
            </motion.span>
          ))}
        </h2>
        {/* <p className="text-white font-bold">@geoosama</p> */}
        <AssimetricPhotos />
      </div>
    </>
  );
}