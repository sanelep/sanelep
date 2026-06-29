'use client';

import { motion } from 'framer-motion';
import { Play, ExternalLink, Music, Disc3 } from 'lucide-react';

const dspPlatforms = [
  {
    name: 'Spotify',
    url: 'https://open.spotify.com/artist/1h2LExENx9xP2Uft18mI9O?si=3zNMG-4YTHq1JLeq1jSehw',
    color: '#1DB954',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381C8.64 5.801 15.6 6.06 20.04 8.82c.54.3.72 1.02.42 1.56-.299.421-1.02.599-1.379.3z" />
      </svg>
    ),
  },
  {
    name: 'Apple Music',
    url: 'https://music.apple.com/us/artist/sanele-phakathi/1669839646',
    color: '#FA243C',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043A5.022 5.022 0 0019.7.165a10.16 10.16 0 00-1.564-.073C17.332.03 16.53 0 15.726 0H8.274c-.804 0-1.606.03-2.41.092A10.16 10.16 0 004.3.165 5.022 5.022 0 002.426.891C1.308 1.624.563 2.624.246 3.934a9.23 9.23 0 00-.24 2.19C.011 6.856 0 7.587 0 8.318v7.364c0 .731.011 1.462.006 2.193a9.23 9.23 0 00.24 2.19c.317 1.31 1.062 2.31 2.18 3.043a5.022 5.022 0 001.874.726c.521.067 1.043.107 1.564.092.804.062 1.606.092 2.41.092h7.452c.804 0 1.606-.03 2.41-.092.521.015 1.043-.025 1.564-.092a5.022 5.022 0 001.874-.726c1.118-.733 1.863-1.733 2.18-3.043a9.23 9.23 0 00.24-2.19c.005-.731.006-1.462.006-2.193V8.318c0-.731 0-1.462-.006-2.194zM16.948 17.545c0 .195-.005.39-.014.584a3.486 3.486 0 01-.086.55 1.75 1.75 0 01-.165.467 1.22 1.22 0 01-.278.373 1.267 1.267 0 01-.404.254 2.38 2.38 0 01-.535.14 4.9 4.9 0 01-.638.066c-.224.008-.448.011-.672.011H9.844c-.224 0-.448-.003-.672-.011a4.9 4.9 0 01-.638-.066 2.38 2.38 0 01-.535-.14 1.267 1.267 0 01-.404-.254 1.22 1.22 0 01-.278-.373 1.75 1.75 0 01-.165-.467 3.486 3.486 0 01-.086-.55c-.009-.195-.014-.39-.014-.584V6.455c0-.195.005-.39.014-.584.014-.184.04-.368.086-.55.04-.16.094-.317.165-.467a1.22 1.22 0 01.278-.373c.12-.108.255-.194.404-.254.173-.068.352-.115.535-.14.21-.03.423-.05.638-.066.224-.008.448-.011.672-.011h4.312c.224 0 .448.003.672.011.215.016.428.036.638.066.183.025.362.072.535.14.149.06.284.146.404.254.11.108.2.233.278.373.071.15.125.307.165.467.046.182.072.366.086.55.009.195.014.39.014.584v11.09z" />
      </svg>
    ),
  },
  {
    name: 'YouTube Music',
    url: 'https://music.youtube.com/channel/UCDoOY9fWaE41mD4UKUevlKQ',
    color: '#FF0000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228 18.228 15.432 18.228 12 15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z" />
      </svg>
    ),
  },
  {
    name: 'Amazon Music',
    url: 'https://music.amazon.in/artists/B071K2M1Z3/sanele-phakathi',
    color: '#25D1DA',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.872 3.166 2.852 0 5.668-.529 8.447-1.585l.315-.14c.277-.12.553-.247.82-.383.252-.129.42-.015.42.246 0 .08-.023.156-.066.228-.044.073-.11.13-.197.172-.785.416-1.645.78-2.576 1.09a17.62 17.62 0 01-5.925.975c-3.268 0-6.28-.674-9.034-2.018C2.73 18.27.86 17.193.132 16.2c-.11-.15-.11-.24 0-.27l-.087.09zm3.347-3.734c-.1-.132-.062-.268.114-.408 2.09-1.614 4.676-2.42 7.757-2.42.99 0 2.078.088 3.264.264a15.4 15.4 0 013.89 1.26c.214.12.28.27.198.45-.082.18-.24.22-.475.12a16.32 16.32 0 00-4.19-1.26 16.09 16.09 0 00-4.26-.342c-2.36.08-4.456.584-6.288 1.512-.33.17-.622.356-.878.558-.148.114-.26.13-.332.046v.24zm9.997-1.266a.45.45 0 01-.044-.048c-.784-.986-1.872-1.502-3.264-1.55-.08 0-.09-.026-.03-.076a.49.49 0 01.21-.078c1.068-.12 2.034.168 2.9.864a.39.39 0 01.164.414c-.026.15-.102.28-.228.382l-.708.492zm4.1 8.398c-.2-.1-.368-.204-.506-.312-.276-.214-.532-.456-.77-.726a8.917 8.917 0 01-.636-.84 6.963 6.963 0 01-.472-.78c-.04-.08-.016-.15.072-.21.088-.06.18-.054.276.018.784.576 1.426 1.158 1.926 1.746.5.588.814 1.02.942 1.296.04.088.014.156-.078.204-.092.048-.176.036-.252-.036l-.502-.36z" />
      </svg>
    ),
  },
  {
    name: 'Deezer',
    url: 'https://link.deezer.com/s/33GGQkp1APDIyq8joRSEL',
    color: '#FEAA2D',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M18.81 4.16v3.03H24V4.16h-5.19zM6.27 8.38v3.027h5.19V8.38H6.27zm12.54 0v3.027H24V8.38h-5.19zM6.27 12.594v3.027h5.19v-3.027H6.27zm6.27 0v3.027h5.19v-3.027h-5.19zm6.27 0v3.027H24v-3.027h-5.19zM0 16.81v3.029h5.19v-3.03H0zm6.27 0v3.029h5.19v-3.03H6.27zm6.27 0v3.029h5.19v-3.03h-5.19zm6.27 0v3.029H24v-3.03h-5.19z" />
      </svg>
    ),
  },
  {
    name: 'Tidal',
    url: 'https://tidal.com/artist/37878560/u',
    color: '#000000',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12.012 3.992L8.008 7.996 12.012 12l4.004-4.004zM4.004 12.008L0 16.012l4.004 4.004 4.004-4.004zM20.008 12.008L16.004 16.012l4.004 4.004L24 16.012zM12.012 20.008L8.008 24.012l4.004 4.004 4.004-4.004z" />
      </svg>
    ),
  },
  {
    name: 'Boomplay',
    url: 'https://www.boomplay.com/artists/63799435?from=artists&srModel=COPYLINK&srList=WEB&share_content=artist&share_channel=copylink&share_platform=web',
    color: '#F9CB3B',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    ),
  },
  {
    name: 'Audiomack',
    url: 'https://audiomack.com/sanelephakathi',
    color: '#FFA200',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
      </svg>
    ),
  },
  {
    name: 'SoundCloud',
    url: 'https://soundcloud.com/sanele-phakathi',
    color: '#FF5500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c-.009-.06-.05-.1-.1-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.172 1.308c.013.06.045.094.104.094.057 0 .09-.037.104-.094l.195-1.308-.195-1.334c-.015-.057-.047-.094-.104-.094m1.8-.541c-.066 0-.12.053-.127.12l-.21 1.852.21 1.795c.007.069.061.12.127.12.065 0 .118-.051.125-.12l.237-1.795-.237-1.852c-.007-.067-.06-.12-.125-.12m.899-.36c-.075 0-.136.062-.143.139l-.188 2.211.188 2.118c.007.077.068.137.143.137.076 0 .136-.06.145-.137l.213-2.118-.213-2.21c-.009-.078-.07-.14-.145-.14m.899-.21c-.085 0-.153.068-.16.156l-.166 2.37.166 2.252c.007.088.075.154.16.154.084 0 .15-.066.16-.154l.188-2.252-.188-2.37c-.01-.088-.076-.156-.16-.156m.9-.09c-.095 0-.17.077-.176.172l-.144 2.46.144 2.316c.006.096.081.17.176.17.095 0 .169-.074.178-.17l.162-2.316-.162-2.46c-.009-.095-.083-.172-.178-.172m.96-.084c-.105 0-.188.086-.194.19l-.123 2.544.123 2.358c.006.104.089.188.194.188.103 0 .187-.084.195-.188l.138-2.358-.138-2.544c-.008-.104-.092-.19-.195-.19m1-.075c-.116 0-.207.093-.213.21l-.1 2.619.1 2.385c.006.116.097.207.213.207.114 0 .207-.091.213-.207l.115-2.385-.115-2.619c-.006-.117-.099-.21-.213-.21m1.005-.06c-.126 0-.224.103-.23.228l-.08 2.68.08 2.4c.006.125.104.224.23.224.125 0 .223-.099.23-.224l.09-2.4-.09-2.68c-.007-.125-.105-.228-.23-.228m1.005-.03c-.137 0-.244.11-.25.246l-.06 2.706.06 2.4c.006.135.113.244.25.244.135 0 .243-.109.249-.244l.067-2.4-.067-2.706c-.006-.136-.114-.246-.25-.246m1.02-.045c-.147 0-.262.12-.268.266l-.04 2.751.04 2.4c.006.146.121.264.268.264.146 0 .261-.118.268-.264l.045-2.4-.045-2.751c-.007-.146-.122-.266-.268-.266m2.04.09c-.093-.082-.23-.105-.347-.06l-.104.044c-.08.036-.14.12-.157.217l-.054.315c-.107-.036-.218-.054-.33-.054-.706 0-1.303.484-1.475 1.137-.096-.033-.197-.05-.3-.05-.514 0-.95.33-1.112.79-.065-.016-.133-.024-.201-.024-.453 0-.826.353-.855.8l-.136 2.148.136 2.048c.03.447.402.798.855.798.132 0 .257-.03.37-.084.188.408.6.69.1.69.358 0 .68-.18.872-.455.097.03.2.047.305.047.416 0 .77-.254.92-.616.1.023.203.037.31.037.564 0 1.026-.424 1.086-.97.07.023.143.037.22.037.465 0 .855-.324.954-.76l.137-2.09-.137-2.236c-.02-.103-.086-.192-.183-.244.006-.044.01-.088.01-.133 0-.283-.126-.537-.325-.71.1-.06.188-.14.258-.236.064-.09.101-.198.101-.313 0-.086-.022-.166-.062-.237.082-.064.15-.147.198-.243a.648.648 0 00.075-.3c0-.174-.067-.332-.176-.45" />
      </svg>
    ),
  },
  {
    name: 'Pandora',
    url: '#',
    color: '#005483',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.816 1.816a6.003 6.003 0 01-8.156 8.156l-1.816 1.816a8.002 8.002 0 0011.788-11.788z" />
      </svg>
    ),
  },
  {
    name: 'Bandcamp',
    url: 'https://pianopassionproject.bandcamp.com/track/siwe',
    color: '#629AA9',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z" />
      </svg>
    ),
  },
];

const discography = [
  {
    title: 'Love At First Touch',
    type: 'Single',
    year: '2024',
    color: 'from-earth-burnt to-accent-gold',
  },
  {
    title: 'Stones Left Unturned',
    type: 'EP',
    year: '2023',
    color: 'from-earth-brown to-earth-burnt',
  },
  {
    title: 'African Soul',
    type: 'Album',
    year: '2022',
    color: 'from-accent-gold to-earth-burnt',
  },
  {
    title: 'Midnight Keys',
    type: 'EP',
    year: '2021',
    color: 'from-earth-dark to-accent-teal',
  },
];

export default function MusicSection() {
  return (
    <section id="music" className="py-20 sm:py-28 bg-background">
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
            Stream & Follow
          </p>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            Listen on <span className="gradient-text">All Platforms</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Find Sanele&apos;s music on every major streaming platform. Click any platform to start listening.
          </p>
        </motion.div>

        {/* DSP Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-20"
        >
          {dspPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dsp-icon flex flex-col items-center gap-3 p-5 sm:p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: platform.color + '15', color: platform.color }}
              >
                {platform.icon}
              </div>
              <span className="text-sm font-semibold text-center">{platform.name}</span>
            </a>
          ))}
        </motion.div>

        {/* Latest Release Feature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <Music className="w-5 h-5 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-bold">Latest Release</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${discography[0].color} flex items-center justify-center relative overflow-hidden group cursor-pointer`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative z-10 text-center text-white p-8">
                <Disc3 className="w-20 h-20 mx-auto mb-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                <h4 className="text-3xl font-black mb-2">{discography[0].title}</h4>
                <p className="text-white/80 text-lg">{discography[0].type} &bull; {discography[0].year}</p>
                <div className="mt-6 flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 group-hover:bg-white/30 transition-colors">
                  <Play className="w-5 h-5" fill="white" />
                  <span className="font-semibold">Play Now</span>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 border border-white/10 rounded-full" />
              <div className="absolute bottom-4 left-4 w-16 h-16 border border-white/10 rounded-full" />
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-2xl border border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-accent-neon rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Now Streaming</span>
                </div>
                <p className="text-2xl font-bold mb-2">{discography[0].title}</p>
                <p className="text-muted-foreground mb-6">
                  The latest single from Sanele Phakathi — a fusion of jazz harmonies, Afro-Pop rhythms, and soulful R&B vocals.
                  Available everywhere you listen to music.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={dspPlatforms[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Play className="w-4 h-4" fill="white" /> Spotify
                  </a>
                  <a
                    href={dspPlatforms[1].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FA243C] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Play className="w-4 h-4" fill="white" /> Apple Music
                  </a>
                  <a
                    href={dspPlatforms[10].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5500] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                  >
                    <Play className="w-4 h-4" fill="white" /> SoundCloud
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Discography Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Disc3 className="w-5 h-5 text-primary" />
            <h3 className="text-2xl sm:text-3xl font-bold">Discography</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {discography.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`aspect-square rounded-2xl bg-gradient-to-br ${item.color} relative overflow-hidden mb-3`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>
                  {/* Year badge */}
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                    {item.year}
                  </div>
                </div>
                <h4 className="font-bold text-sm sm:text-base group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-muted-foreground text-sm">{item.type}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}