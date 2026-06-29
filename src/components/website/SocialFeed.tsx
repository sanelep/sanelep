'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Instagram, Music2 } from 'lucide-react';

const socialPlatforms = [
  {
    name: 'Instagram',
    handle: '@phakathisanele',
    url: 'https://www.instagram.com/phakathisanele/',
    color: 'from-pink-500 via-purple-500 to-orange-400',
    icon: Instagram,
    posts: [
      { type: 'photo', label: 'Behind the keys at Jazz Festival', aspect: 'square' },
      { type: 'reel', label: 'Live performance clip', aspect: 'portrait' },
      { type: 'photo', label: 'Studio session vibes', aspect: 'square' },
      { type: 'reel', label: 'New single announcement', aspect: 'portrait' },
      { type: 'photo', label: 'Piano improvisation', aspect: 'square' },
      { type: 'photo', label: 'Concert highlights', aspect: 'square' },
    ],
  },
  {
    name: 'TikTok',
    handle: '@phakathisnl',
    url: 'https://www.tiktok.com/@phakathisnl?lang=en',
    color: 'from-black via-gray-900 to-pink-500',
    icon: Music2,
    posts: [
      { type: 'video', label: 'Piano medley that went viral', aspect: 'portrait' },
      { type: 'video', label: 'Day in the life of a musician', aspect: 'portrait' },
      { type: 'video', label: 'Reaction to fan covers', aspect: 'portrait' },
    ],
  },
  {
    name: 'YouTube',
    handle: 'Sanele Phakathi',
    url: 'https://music.youtube.com/channel/UCDoOY9fWaE41mD4UKUevlKQ',
    color: 'from-red-600 to-red-800',
    icon: Music2,
    posts: [
      { type: 'video', label: 'Love At First Touch - Official Music Video', aspect: 'landscape' },
      { type: 'video', label: 'Live at The Orbit - Full Set', aspect: 'landscape' },
      { type: 'video', label: 'Behind the Scenes - Studio Diary', aspect: 'landscape' },
      { type: 'video', label: 'Piano Solo - African Roots', aspect: 'landscape' },
    ],
  },
  {
    name: 'Facebook',
    handle: 'psphakathi',
    url: 'https://web.facebook.com/psphakathi/',
    color: 'from-blue-600 to-blue-800',
    icon: Music2,
    posts: [
      { type: 'photo', label: 'New single announcement post', aspect: 'square' },
      { type: 'photo', label: 'Live performance at The Orbit', aspect: 'square' },
      { type: 'photo', label: 'Studio session behind the scenes', aspect: 'square' },
    ],
  },
  {
    name: 'Twitter/X',
    handle: '@SanelePhakathii',
    url: 'https://x.com/SanelePhakathii',
    color: 'from-gray-800 to-black',
    icon: Music2,
    posts: [
      { type: 'tweet', label: '"Music is the language of the spirit. New sounds coming soon..."', aspect: 'wide' },
      { type: 'tweet', label: '"Grateful for every stage, every note, every soul that listens."', aspect: 'wide' },
      { type: 'tweet', label: '"Stones Left Unturned EP out now on all platforms! Link in bio."', aspect: 'wide' },
    ],
  },
];

function getPlaceholderGradient(color: string) {
  return `bg-gradient-to-br ${color}`;
}

function getPostAspectClass(aspect: string) {
  switch (aspect) {
    case 'portrait': return 'aspect-[3/4]';
    case 'landscape': return 'aspect-video';
    case 'wide': return 'aspect-[2/1]';
    default: return 'aspect-square';
  }
}

export default function SocialFeed() {
  return (
    <section id="social" className="py-20 sm:py-28 bg-muted/30">
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
            Stay Connected
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Follow the <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Catch up on the latest from Sanele across all social media platforms.
          </p>
        </motion.div>

        {/* Social Platform Sections */}
        <div className="space-y-16">
          {socialPlatforms.map((platform, pIndex) => {
            const Icon = platform.icon;
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: pIndex * 0.1 }}
              >
                {/* Platform Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold">{platform.name}</h3>
                      <p className="text-muted-foreground text-sm">{platform.handle}</p>
                    </div>
                  </div>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                  >
                    Follow <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Posts Grid - Masonry-like layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {platform.posts.map((post, postIndex) => (
                    <a
                      key={postIndex}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <div
                        className={`${getPostAspectClass(post.aspect)} ${getPlaceholderGradient(platform.color)} flex items-end p-3 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-xl`}
                      >
                        {/* Decorative pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <div className="absolute top-2 right-2 w-8 h-8 border border-white/30 rounded-full" />
                          <div className="absolute bottom-8 left-2 w-4 h-4 border border-white/30 rounded-full" />
                          <div className="absolute top-1/3 left-1/3 w-16 h-16 border border-white/10 rounded-full" />
                        </div>

                        {/* Content overlay */}
                        <div className="relative z-10">
                          <div className="bg-black/30 backdrop-blur-sm rounded-lg px-2 py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-xs leading-tight line-clamp-2">
                              {post.label}
                            </p>
                          </div>
                        </div>

                        {/* Type badge */}
                        <div className="absolute top-2 right-2 bg-black/30 backdrop-blur-sm text-white text-[10px] font-bold uppercase px-1.5 py-0.5 rounded-md">
                          {post.type}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Follow All - Social Links Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-3">
            {socialPlatforms.map((platform) => {
              const Icon = platform.icon;
              return (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-card border border-border rounded-full hover:border-primary/50 hover:shadow-lg transition-all duration-300 text-sm font-semibold"
                >
                  <Icon className="w-4 h-4" />
                  {platform.name}
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}