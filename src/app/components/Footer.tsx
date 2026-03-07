import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Heart } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer ref={ref} className="py-12 px-4 md:px-8 lg:px-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">NJR10</div>
          </motion.div>
          
          <p className="text-gray-400 mb-4">
            A tribute to one of football's greatest talents
          </p>
          
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            </motion.div>
            <span>for football fans worldwide</span>
          </div>

          <div className="mt-8 text-sm text-gray-600">
            <p>© 2026 Neymar Jr Fan Tribute</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
