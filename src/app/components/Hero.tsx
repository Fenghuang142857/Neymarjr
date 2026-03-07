import { motion, useScroll, useTransform } from "motion/react";
import { ChevronDown } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroBg from "figma:asset/ab210473f4cd67a1083d7b3fae287261c0ca3211.png";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity1 = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay - Appears First */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.33, 1, 0.68, 1] }}
        style={{ y: y1 }}
      >
        <ImageWithFallback
          src={heroBg}
          alt="Neymar Barcelona"
          className="w-full h-full object-cover object-top md:object-center"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-slate-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </motion.div>

      {/* Animated floating football element */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 w-20 h-20 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 opacity-30 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.3,
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          opacity: { delay: 0.2, duration: 0.6 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          x: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
          scale: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
        }}
      />
      <motion.div
        className="absolute bottom-40 left-10 md:left-32 w-16 h-16 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 opacity-30 blur-2xl"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.3,
          y: [0, 40, 0],
          x: [0, -25, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          opacity: { delay: 0.4, duration: 0.6 },
          y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
          x: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 },
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
        }}
      />

      {/* Content - Appears After Background */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-5xl"
        style={{ y: useTransform(scrollY, [0, 800], [0, 200]), opacity: opacity1 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <motion.span
            className="inline-block text-yellow-400 text-xl mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            The Journey of a Legend
          </motion.span>
          
          <motion.h1
            className="text-7xl md:text-9xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            NEYMAR
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-bold text-yellow-400 mb-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            DA SILVA SANTOS JÚNIOR
          </motion.h2>

          <motion.p
            className="text-2xl md:text-3xl text-gray-300 max-w-3xl mx-auto mb-8 italic font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            "The Prince who never became the King"
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            From the streets of São Paulo to the world's biggest stages.
            A story of passion, perseverance, and legendary skill.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">430+</div>
              <div className="text-sm text-gray-400">Career Goals</div>
            </div>
            <div className="w-px bg-gray-600" />
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">32</div>
              <div className="text-sm text-gray-400">Major Titles</div>
            </div>
            <div className="w-px bg-gray-600" />
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">129</div>
              <div className="text-sm text-gray-400">Brazil Caps</div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ 
          opacity: { delay: 1.7, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.5, delay: 1.7 }
        }}
        style={{ opacity: opacity1 }}
      >
        <ChevronDown className="w-8 h-8 text-yellow-400" />
      </motion.div>
    </section>
  );
}