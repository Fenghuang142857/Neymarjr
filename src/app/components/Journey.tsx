import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import imgChildhood from 'figma:asset/527f6ddf313cf95cdba4a01621f6862b56f0f0ba.png';
import imgYouth from 'figma:asset/83aeb84b221c48414cf531544eeec29c4ac475b3.png';
import imgDebut from 'figma:asset/2972bf27ed7d45d67839aae3f265eee213ec27a6.png';
import imgBrazil from 'figma:asset/3f8a18315425a4fc82e05e25149411488085da95.png';
import imgBarcelona from 'figma:asset/a0e1951ae9a972aa3f3994c4ba45b1a80c838c59.png';
import imgPSG from 'figma:asset/d16f4a0fec5cf6354b413a8064fe19511e19704f.png';
import imgAlHilal from 'figma:asset/b64d814a755db18f5de0764b98047c551467cc2d.png';
import imgReturn from 'figma:asset/3cf484372a1e538f17301933b151b048876882bc.png';

const journeySteps = [
  {
    year: "1992",
    title: "The Beginning",
    description: "Born on February 5 in Mogi das Cruzes, São Paulo, Brazil. Grew up in a modest family with a passion for football inherited from his father, a former footballer.",
    image: imgChildhood
  },
  {
    year: "2003",
    title: "Santos FC Youth Academy",
    description: "Joined Santos FC youth academy at age 11. Quickly rose through the ranks with his exceptional dribbling skills and natural talent, drawing comparisons to Pelé.",
    image: imgYouth
  },
  {
    year: "2009",
    title: "Professional Debut",
    description: "Made his professional debut for Santos at age 17. Won his first title, the Copa do Brasil, and began his journey to becoming one of Brazil's greatest players.",
    image: imgDebut
  },
  {
    year: "2010",
    title: "Brazil National Debut",
    description: "Made his debut for the Brazilian national team at age 18 against the United States. Scored on his debut, marking the beginning of his prolific international career in the iconic yellow jersey.",
    image: imgBrazil
  },
  {
    year: "2013",
    title: "Barcelona Era",
    description: "Transferred to FC Barcelona for €57.1 million, forming the legendary 'MSN' trio with Messi and Suárez. Won the treble in his second season.",
    image: imgBarcelona
  },
  {
    year: "2017",
    title: "Record Transfer to PSG",
    description: "Made a world-record €222 million transfer to Paris Saint-Germain, becoming the most expensive player in history and leading PSG to multiple domestic titles.",
    image: imgPSG
  },
  {
    year: "2023",
    title: "New Horizons - Al-Hilal",
    description: "Embarked on a new adventure with Al-Hilal in Saudi Arabia, continuing to showcase his skills and inspire millions of fans worldwide.",
    image: imgAlHilal
  },
  {
    year: "2025",
    title: "Return to Home",
    description: "In a highly anticipated homecoming, Neymar Jr. returned to Santos FC, the club where his legendary journey began, returning to his roots and inspiring a new generation of players.",
    image: imgReturn
  }
];

function JourneyCard({ step, index }: { step: typeof journeySteps[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isEven = index % 2 === 0;
  const isVertical = index < 2;

  return (
    <motion.div
      ref={ref}
      className="relative flex flex-col items-center max-w-6xl mx-auto mb-24 md:mb-32 last:mb-0"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image Section */}
      <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
        isVertical ? 'w-full md:w-[45%] lg:w-[40%]' : 'w-full md:w-[75%]'
      } ${isEven ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <ImageWithFallback
          src={step.image}
          alt={step.title}
          className={`w-full object-cover transition-transform duration-1000 hover:scale-105 ${
            isVertical ? 'aspect-[3/4] md:aspect-[4/5]' : 'aspect-video'
          } ${index === 0 ? 'object-top' : ''}`}
        />
        {/* Subtle cinematic bottom shadow */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Floating Overlapping Text Card */}
      <motion.div 
        className={`w-[90%] -mt-16 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 z-10 ${
          isVertical ? 'md:w-[60%] lg:w-[55%]' : 'md:w-[45%]'
        } ${
          isEven 
            ? (isVertical ? 'md:right-0 lg:right-12' : 'md:right-0 lg:-right-4') 
            : (isVertical ? 'md:left-0 lg:left-12' : 'md:left-0 lg:-left-4')
        }`}
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-slate-900/85 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
          {/* Decorative Glow */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
          
          {/* Giant Watermark Text */}
          

          <div className="inline-block px-4 py-1.5 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-bold mb-6 tracking-wide uppercase shadow-sm">
            {step.year}
          </div>
          
          <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight leading-tight drop-shadow-md">
            {step.title}
          </h3>
          
          <p className="text-gray-300 text-base md:text-lg leading-relaxed relative z-10">
            {step.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Journey() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-24 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The <span className="text-yellow-400">Journey</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From humble beginnings to football superstardom - the remarkable path of Neymar Jr.
          </p>
        </motion.div>

        <div className="relative">
          {journeySteps.map((step, index) => (
            <JourneyCard key={step.year} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}