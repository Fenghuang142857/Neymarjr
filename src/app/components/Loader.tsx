import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Number ticks up quickly to 10
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 10) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 800); // Small pause at 10 before unmounting
          return 10;
        }
        return prev + 1;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      key="loader-container"
      className="fixed inset-0 z-[100] pointer-events-none"
      exit={{ opacity: 1, transition: { duration: 1.5 } }} // Keeps the wrapper alive
    >
      <motion.div
        className="absolute inset-0 z-[100] flex items-center justify-center bg-slate-950 pointer-events-auto"
        initial={{ y: 0 }}
        exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.2 } }}
      >
        <div className="relative z-10 text-center">
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] md:text-[25vw] font-black text-white/5 pointer-events-none select-none"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            NJR
          </motion.div>

          <div className="relative overflow-hidden">
            <motion.div
              className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-orange-500"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {count}
            </motion.div>
          </div>
          
          <div className="w-64 h-1 bg-white/10 mx-auto mt-8 rounded-full overflow-hidden relative">
            <motion.div
              className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
              initial={{ width: "0%" }}
              animate={{ width: `${(count / 10) * 100}%` }}
              transition={{ duration: 0.2, ease: "linear" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Trailing curtains */}
      <motion.div 
        className="absolute inset-0 z-[99] bg-yellow-400 pointer-events-none"
        initial={{ y: "0%" }}
        exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.3 } }}
      />
      <motion.div 
        className="absolute inset-0 z-[98] bg-slate-900 pointer-events-none"
        initial={{ y: "0%" }}
        exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: 0.4 } }}
      />
    </motion.div>
  );
}
