import { motion } from 'motion/react';

export function TechDotsBackground() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.4)_1px,_transparent_0)] [background-size:24px_24px] dark:bg-[radial-gradient(circle_at_1px_1px,_rgba(148,163,184,0.25)_1px,_transparent_0)] opacity-60" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:80px_80px] mix-blend-soft-light opacity-40" />
    </motion.div>
  );
}

