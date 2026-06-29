'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Globe, Headphones } from 'lucide-react';

const artistBio = `Sanele Phakathi is a recording artist, songwriter, pianist, producer and composer. A multi-talented force in South African music, Sanele has built an extraordinary career marked by deep musicality, cultural authenticity, and a boundless creative vision that spans genres from Jazz and Afro-Pop to Deep House and R&B.`;

const artistBioExtended = `He has played piano/keys for some of SA's well-known and celebrated South African Artists such as Thandiswa Mazwai, Ladysmith Black Mambazo, ZamaJobe, Khaya Mthethwa, Simphiwe Dana, Spha Mdlalose, Khaya Mahlangu, Sydney Mavundla, Lwanda Gogwana, Titi Luzipo, Mbuso Khoza, Xolisa Dlamini, Nhlanhla Mahlangu, Ndabo Zulu, Linda Sikhakhane, Hle Ntombela, Israel Mkhize and Philani Ngidi, to name a few.`;

const stats = [
  { icon: Headphones, label: 'Streams', value: 250000, suffix: '+', prefix: '' },
  { icon: Users, label: 'Followers', value: 50000, suffix: '+', prefix: '' },
  { icon: Globe, label: 'Countries', value: 45, suffix: '+', prefix: '' },
  { icon: MapPin, label: 'Shows', value: 120, suffix: '+', prefix: '' },
];

function AnimatedCounter({ target, suffix, prefix }: { target: number; suffix: string; prefix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <div ref={ref} className="animate-count-up">
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            The Artist
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            About <span className="gradient-text">Sanele</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] group">
              {/* Photo with gradient placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-earth-brown via-earth-dark to-earth-burnt" />
              <img
                src="https://www.instagram.com/p/DGXuCezIKTn/"
                alt="Sanele Phakathi - Recording Artist, Pianist, Producer & Composer"
                className="relative z-10 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-earth-dark/60 via-transparent to-transparent z-20" />
              {/* Name overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-30">
                <p className="text-accent-gold text-sm font-semibold tracking-wider uppercase mb-1">
                  Recording Artist &bull; Pianist &bull; Producer
                </p>
              </div>
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent-gold/10 rounded-2xl -z-10" />
          </motion.div>

          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xl sm:text-2xl font-medium leading-relaxed">
              {artistBio}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {artistBioExtended}
            </p>

            {/* Genre Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Jazz', 'Afro-Pop', 'Deep House', 'R&B', 'Piano', 'Songwriting', 'Production', 'Composition'].map((genre) => (
                <span
                  key={genre}
                  className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20"
                >
                  {genre}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 sm:p-8 bg-card rounded-2xl border border-border"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-3xl sm:text-4xl font-black gradient-text mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                </div>
                <p className="text-muted-foreground font-medium text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
