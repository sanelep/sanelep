'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-kenburns"
        style={{
          backgroundImage: `url('https://web.facebook.com/photo.php?fbid=6402543896459460&set=pb.100001117394156.-2207520000&type=3')`,
        }}
      />

      <div className="hero-overlay absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className="text-accent-gold text-sm sm:text-base font-medium tracking-[0.3em] uppercase mb-4 sm:mb-6">
            Jazz &bull; Afro-Jazz &bull; Deep House &bull; R&B
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 sm:mb-6"
        >
          <span className="text-white">Sanele</span>{' '}
          <span className="gradient-text">Phakathi</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl text-earth-warm font-light italic mb-8 sm:mb-10"
        >
          &ldquo;Stones Left Unturned&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#music"
            className="group flex items-center gap-3 px-8 py-4 bg-earth-burnt hover:bg-earth-burnt/90 text-white font-bold text-base rounded-full transition-all duration-300 animate-pulse-glow"
          >
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Listen Now
          </a>
          <a
            href="https://www.instagram.com/phakathisanele/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-accent-gold text-white hover:text-accent-gold font-bold text-base rounded-full transition-all duration-300"
          >
            Follow Me
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
