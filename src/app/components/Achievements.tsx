import { motion, useInView, animate } from "motion/react";
import { useRef, useEffect } from "react";
import { Trophy, Star, Award, Target } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function AnimatedCounter({ from = 0, to, prefix = "", suffix = "", delay = 0 }: { from?: number, to: number, prefix?: string, suffix?: string, delay?: number }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView && nodeRef.current) {
      const controls = animate(from, to, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + Math.floor(value).toString() + suffix;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, delay, prefix, suffix]);

  return <span ref={nodeRef}>{prefix}{from}{suffix}</span>;
}

const achievements = [
  {
    category: "Club Honors",
    icon: Trophy,
    items: [
      "2x UEFA Champions League (2015, 2020)",
      "1x FIFA Club World Cup (2015)",
      "5x Ligue 1 Champion (PSG)",
      "2x La Liga Champion (Barcelona)",
      "3x Copa Libertadores (Santos)",
      "4x Coupe de France",
      "5x Coupe de la Ligue"
    ]
  },
  {
    category: "International",
    icon: Star,
    items: [
      "Olympic Gold Medal (2016)",
      "Copa América Runner-up (2021)",
      "FIFA Confederations Cup (2013)",
      "Brazil's All-Time Top Scorer (79 goals)",
      "129 International Caps for Brazil",
      "2x South American Footballer of the Year"
    ]
  },
  {
    category: "Individual Awards",
    icon: Award,
    items: [
      "FIFA Puskás Award (2011)",
      "3x South American Footballer of the Year",
      "2x Samba Gold Award",
      "UEFA Champions League Top Scorer (2014-15)",
      "Ligue 1 Player of the Year (2018)",
      "French Player of the Year (2017, 2018)"
    ]
  },
  {
    category: "Records & Stats",
    icon: Target,
    items: [
      "Most Expensive Transfer (€222M)",
      "430+ Career Goals",
      "79 Goals for Brazil National Team",
      "Santos FC All-Time Top Scorer (136 goals)",
      "Youngest Player to 100 Goals for Santos",
      "100+ Career Assists"
    ]
  }
];

function AchievementCard({ achievement, index }: { achievement: typeof achievements[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = achievement.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotateY: -10 }}
      animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -10 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 hover:border-yellow-400/60 transition-all duration-300 shadow-xl hover:shadow-yellow-400/20"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="p-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
          <Icon className="w-8 h-8 text-slate-900" />
        </div>
        <h3 className="text-2xl font-bold text-white">{achievement.category}</h3>
      </div>
      <ul className="space-y-3">
        {achievement.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: index * 0.15 + i * 0.05 }}
            className="flex items-start gap-3 text-gray-300"
          >
            <span className="text-yellow-400 mt-1">✓</span>
            <span>{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1764408721535-2dcb912db83e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRyb3BoeSUyMGNoYW1waW9uc2hpcHxlbnwxfHx8fDE3NzI4OTQ5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Trophies"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Decorative glow effects */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Trophy <span className="text-yellow-400">Cabinet</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A legendary career filled with silverware, records, and unforgettable moments.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.category} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl blur-xl opacity-30" />
          <div className="relative bg-gradient-to-r from-slate-800 to-slate-900 border border-yellow-400/50 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.8, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2"
                >
                  <AnimatedCounter to={32} delay={0.8} />
                </motion.div>
                <div className="text-gray-400">Major Titles</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2"
                >
                  <AnimatedCounter to={430} suffix="+" delay={0.9} />
                </motion.div>
                <div className="text-gray-400">Career Goals</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.0, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2"
                >
                  <AnimatedCounter to={79} delay={1.0} />
                </motion.div>
                <div className="text-gray-400">International Goals</div>
              </div>
              <div>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: 1.1, type: "spring" }}
                  className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-2"
                >
                  <AnimatedCounter prefix="€" to={222} suffix="M" delay={1.1} />
                </motion.div>
                <div className="text-gray-400">Transfer Record</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
