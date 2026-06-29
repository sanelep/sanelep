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
          backgroundImage: `url('https://scontent.fjnb9-1.fna.fbcdn.net/v/t39.30808-6/492812282_9802852626428553_7969376063102095080_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x959&ctp=s1440x959&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFjKwz42ZyWaWsBSAmICVhrahkuQhEaP5lqGS5CERo_mVdmFOEunaoKlEKO_9YqLDQdd6sO76IGaf0-QmL1eCgy&_nc_ohc=audDoQd6tisQ7kNvwH0Gnlt&_nc_oc=AdpAlAgeHl3U-fHC0RkqwOwyX2_g-GwqTRjEKlOtjQQ4ZkCvinrSHcW_SeZxcoXOT44&_nc_zt=23&_nc_ht=scontent.fjnb9-1.fna&_nc_gid=9UIafw2U9XGHnp5_8pNrXA&_nc_ss=7b2a8&oh=00_Af85mzA-nnDft_ebDAZZUUKf1fgF80BFaRU9nrXsV5lOow&oe=6A48994C’)`,
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
