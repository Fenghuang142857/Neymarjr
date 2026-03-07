import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Globe, TrendingUp, Star, Award, Zap } from "lucide-react";

const facts = [
  {
    icon: Award,
    title: "Ballon d'Or Nominations",
    description: "Nominated for the prestigious Ballon d'Or award multiple times, finishing in the top 3 in 2015 and 2017, showcasing his elite status among the world's best players.",
    color: "from-yellow-500 to-amber-500"
  },
  {
    icon: Globe,
    title: "Olympic Gold Medalist",
    description: "Led Brazil to their first-ever Olympic gold medal in football at Rio 2016, scoring the winning penalty in the final shootout against Germany on home soil.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Third Most Followed Athlete",
    description: "With over 200 million followers across social media platforms, Neymar is one of the most followed athletes in the world, rivaling only Messi and Ronaldo.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Star,
    title: "Youngest to 100 International Goals",
    description: "Among the youngest players to reach significant goal milestones for Brazil, cementing his place as one of the national team's greatest ever forwards.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: TrendingUp,
    title: "Most Expensive Transfer Ever",
    description: "His €222 million transfer from Barcelona to PSG in 2017 shattered all previous records and still remains the highest transfer fee in football history.",
    color: "from-red-500 to-orange-500"
  },
  {
    icon: Zap,
    title: "Champions League Top Scorer",
    description: "Won the UEFA Champions League Golden Boot in 2014-15 season with 10 goals, playing a crucial role in Barcelona's treble-winning campaign alongside Messi and Suárez.",
    color: "from-indigo-500 to-violet-500"
  }
];

function FactCard({ fact, index }: { fact: typeof facts[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = fact.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
      className="relative group"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${fact.color} opacity-20 group-hover:opacity-30 transition-opacity rounded-xl blur-xl`} />
      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 h-full transition-all duration-300 group-hover:border-slate-600 group-hover:shadow-2xl">
        <motion.div
          className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${fact.color} mb-6`}
          whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-4">{fact.title}</h3>
        <p className="text-gray-400 leading-relaxed">{fact.description}</p>
      </div>
    </motion.div>
  );
}

export function Facts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Amazing <span className="text-yellow-400">Facts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Discover the remarkable achievements and records that make Neymar Jr. one of football's most extraordinary talents.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <FactCard key={fact.title} fact={fact} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 p-1 rounded-2xl">
            <div className="bg-slate-950 rounded-2xl px-8 py-6">
              <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
                "I'm not a perfectionist, but I like to feel that things are done well"
              </p>
              <p className="text-gray-400 mt-2">- Neymar Jr.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}