'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Mail,
  FileText,
  Image,
  Music,
  Quote,
  Send,
  Calendar,
} from 'lucide-react';
import { useState } from 'react';

const pressItems = [
  { icon: FileText, label: 'Artist Bio', description: 'Official biography and artist statement' },
  { icon: Image, label: 'Press Photos', description: 'High-resolution promotional images' },
  { icon: Music, label: 'Logo & Branding', description: 'Official logos and brand assets' },
  { icon: FileText, label: 'One-Sheet', description: 'Complete artist one-sheet with stats' },
  { icon: Quote, label: 'Press Quotes', description: 'Selected quotes from media coverage' },
];

const upcomingEvents = [
  {
    date: '2024-08-15',
    venue: 'The Orbit',
    city: 'Johannesburg, SA',
    title: 'Stones Left Unturned EP Launch',
    ticketUrl: '#',
  },
  {
    date: '2024-09-02',
    venue: 'Baxter Theatre',
    city: 'Cape Town, SA',
    title: 'Jazz & Afro-Pop Night',
    ticketUrl: '#',
  },
  {
    date: '2024-10-20',
    venue: 'Durban ICC',
    city: 'Durban, SA',
    title: 'South African Music Festival',
    ticketUrl: '#',
  },
];

export default function PressSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="press" className="py-20 sm:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Press Kit Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            For Media & Bookings
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Press & <span className="gradient-text">Media</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Download the official press kit for media inquiries, booking, and promotional use.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Press Kit Contents */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-4">Press Kit Includes</h3>
            {pressItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{item.label}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}

            {/* Download Button */}
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full hover:opacity-90 transition-opacity mt-4"
            >
              <Download className="w-5 h-5" />
              Download Press Kit (ZIP)
            </a>
          </motion.div>

          {/* Booking & Contact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-6 sm:p-8 bg-gradient-to-br from-earth-brown to-earth-dark rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-2">Book Sanele Phakathi</h3>
              <p className="text-white/70 mb-6">
                For bookings, collaborations, and media inquiries, please get in touch.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1">Email</p>
                  <a
                    href="mailto:bookings@sanelephakathi.com"
                    className="text-accent-gold font-semibold hover:underline text-lg"
                  >
                    bookings@sanelephakathi.com
                  </a>
                </div>
                <div>
                  <p className="text-white/50 text-sm font-medium mb-1">Management</p>
                  <p className="text-white/90">Available upon request</p>
                </div>
              </div>
            </div>

            {/* Embedded Player Placeholder */}
            <div className="p-6 bg-card rounded-2xl border border-border">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <Music className="w-5 h-5 text-primary" />
                Unreleased Preview
              </h3>
              <div className="aspect-[3/1] bg-gradient-to-r from-earth-brown/20 via-primary/10 to-earth-burnt/20 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Music className="w-8 h-8 text-muted-foreground/30 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">SoundCloud embed — Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tour / Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-5 h-5 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-bold">Upcoming Shows</h3>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => {
              const eventDate = new Date(event.date + 'T00:00:00');
              const month = eventDate.toLocaleString('en-US', { month: 'short' }).toUpperCase();
              const day = eventDate.getDate();
              return (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 transition-colors group"
                >
                  {/* Date block */}
                  <div className="text-center bg-primary/10 rounded-xl px-4 py-3 min-w-[70px]">
                    <p className="text-xs font-bold text-primary">{month}</p>
                    <p className="text-2xl font-black text-primary">{day}</p>
                  </div>
                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors truncate">
                      {event.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {event.venue} &bull; {event.city}
                    </p>
                  </div>
                  {/* Ticket button */}
                  <a
                    href={event.ticketUrl}
                    className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:opacity-90 transition-opacity flex-shrink-0"
                  >
                    Get Tickets
                  </a>
                  <a
                    href={event.ticketUrl}
                    className="sm:hidden px-3 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full"
                  >
                    Tickets
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Mailing List */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-earth-brown via-earth-dark to-earth-burnt p-8 sm:p-12 lg:p-16">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-neon/5 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <Mail className="w-10 h-10 text-accent-gold mx-auto mb-4" />
              <h3 className="text-3xl sm:text-4xl font-black text-white mb-3">
                Join the Inner Circle
              </h3>
              <p className="text-white/70 text-lg mb-8">
                Get early access to new music, exclusive content, behind-the-scenes updates, and priority booking for shows.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent-neon/20 text-accent-neon font-semibold px-8 py-4 rounded-2xl border border-accent-neon/30"
                >
                  Welcome to the inner circle! Check your inbox for a welcome message.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-5 py-3.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-accent-gold focus:ring-2 focus:ring-accent-gold/20 transition-all"
                  />
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-accent-gold text-earth-dark font-bold rounded-full hover:bg-accent-gold/90 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Subscribe
                  </button>
                </form>
              )}

              <p className="text-white/30 text-xs mt-4">
                No spam, ever. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}