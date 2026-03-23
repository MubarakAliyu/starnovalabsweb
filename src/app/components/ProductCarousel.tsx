import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Use PNG assets from src/assets (already in your project)
import kidsInTechHero from '@/assets/kidsintech.png';
import nuralaHero from '@/assets/nurala.png';
import emrHero from '@/assets/emr.png';

const slides = [
  {
    title: 'Kids In Tech',
    subtitle: 'Coding & STEM for young minds',
    image: kidsInTechHero,
    accent: 'bg-rose-500'
  },
  {
    title: 'NurAla Learning',
    subtitle: 'Premium Arabic learning platform',
    image: nuralaHero,
    accent: 'bg-amber-400'
  },
  {
    title: 'Godiya EMR / HMS',
    subtitle: 'Hospital management, reimagined',
    image: emrHero,
    accent: 'bg-blue-500'
  }
];

export function ProductCarousel() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className="relative w-full max-w-6xl mx-auto mt-16">
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate('/products')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') navigate('/products');
        }}
        className="relative glass-card overflow-hidden h-[340px] md:h-[460px] w-full group cursor-pointer"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -80, scale: 0.96 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            {/* Full-bleed image */}
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              initial={{ scale: 1.02 }}
              animate={{ scale: 1.06 }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
              whileHover={{ scale: 1.09 }}
            />

            {/* gradient wash to help overlay legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent pointer-events-none" />

            {/* Glassmorphic label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
              className="absolute left-5 right-5 md:left-8 md:right-auto bottom-6 md:bottom-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-2xl bg-white/18 dark:bg-black/28 backdrop-blur-2xl border border-white/35 shadow-[0_18px_45px_rgba(15,23,42,0.35)] group-hover:border-primary/60 transition-all">
                <div className={`w-8 h-8 rounded-full ${slide.accent} shadow-inner`} />
                <div className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-wide text-foreground/70">
                    Product Spotlight
                  </span>
                  <span className="text-lg md:text-xl font-semibold text-foreground">
                    {slide.title}
                  </span>
                  <span className="text-[11px] md:text-xs text-foreground/70 mt-0.5">
                    {slide.subtitle}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 dark:bg-background/60 text-foreground shadow-sm hover:bg-background transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/70 dark:bg-background/60 text-foreground shadow-sm hover:bg-background transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {slides.map((s, index) => (
          <button
            key={s.title}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-8 bg-primary' : 'w-1.5 bg-foreground/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
