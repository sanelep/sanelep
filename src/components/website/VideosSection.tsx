'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Youtube } from 'lucide-react';

const videos = [
  {
    title: 'Love At First Touch — Official Music Video',
    type: 'Music Video',
    videoId: 'dQw4w9WgXcQ',
    description: 'The stunning visual for the lead single.',
  },
  {
    title: 'Live at The Orbit Johannesburg',
    type: 'Live Performance',
    videoId: 'dQw4w9WgXcQ',
    description: 'A full live set capturing the energy of a night at The Orbit.',
  },
  {
    title: 'Studio Diary: Making "Stones Left Unturned"',
    type: 'Behind The Scenes',
    videoId: 'dQw4w9WgXcQ',
    description: 'An intimate look into the creative process behind the EP.',
  },
  {
    title: 'Piano Solo — African Roots Medley',
    type: 'Performance',
    videoId: 'dQw4w9WgXcQ',
    description: 'A solo piano performance blending traditional African melodies with jazz harmonies.',
  },
  {
    title: 'Sanele Phakathi — Interview on SA Music Scene',
    type: 'Interview',
    videoId: 'dQw4w9WgXcQ',
    description: 'Sanele discusses his journey, influences, and the future of South African music.',
  },
  {
    title: 'Collaboration Session with Thandiswa Mazwai',
    type: 'Behind The Scenes',
    videoId: 'dQw4w9WgXcQ',
    description: 'A rare glimpse into a studio session with one of SA\'s most celebrated artists.',
  },
];

function VideoThumbnail({ video, index }: { video: typeof videos[0]; index: number }) {
  return (
    <motion.a
      href={`https://youtube.com/watch?v=${video.videoId}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group cursor-pointer block"
    >
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-red-900 via-gray-900 to-black mb-3">
        {/* YouTube-style thumbnail placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white/20">
            <Youtube className="w-16 h-16 mx-auto mb-2" />
          </div>
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
            <Play className="w-7 h-7 text-white ml-1" fill="white" />
          </div>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
          {video.type}
        </div>

        {/* Duration placeholder */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded">
          4:32
        </div>
      </div>

      <h4 className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors line-clamp-1">
        {video.title}
      </h4>
      <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
        {video.description}
      </p>
    </motion.a>
  );
}

export default function VideosSection() {
  return (
    <section id="videos" className="py-20 sm:py-28 bg-muted/30">
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
            Watch & Experience
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Video <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Music videos, live performances, and behind-the-scenes content.
          </p>
        </motion.div>

        {/* Featured Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-12"
        >
          <a
            href={`https://youtube.com/watch?v=${videos[0].videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-red-900 via-gray-900 to-black"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/10">
                <Youtube className="w-24 h-24 mx-auto" />
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500 shadow-2xl">
                <Play className="w-9 h-9 text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">Featured</span>
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full">
                  {videos[0].type}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{videos[0].title}</h3>
              <p className="text-white/70 max-w-xl">{videos[0].description}</p>
            </div>
          </a>
        </motion.div>

        {/* Video Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.slice(1).map((video, index) => (
            <VideoThumbnail key={video.title} video={video} index={index} />
          ))}
        </div>

        {/* View All on YouTube */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://music.youtube.com/channel/UCDoOY9fWaE41mD4UKUevlKQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-colors"
          >
            <Youtube className="w-5 h-5" />
            View All on YouTube
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}