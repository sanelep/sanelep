'use client';

import { Music2, Heart, ExternalLink } from 'lucide-react';

const socialLinks = [
  { name: 'Instagram', url: 'https://www.instagram.com/phakathisanele/', handle: '@phakathisanele' },
  { name: 'TikTok', url: 'https://www.tiktok.com/@phakathisnl?lang=en', handle: '@phakathisnl' },
  { name: 'YouTube', url: 'https://music.youtube.com/channel/UCDoOY9fWaE41mD4UKUevlKQ', handle: 'Sanele Phakathi' },
  { name: 'Twitter/X', url: 'https://x.com/SanelePhakathii', handle: '@SanelePhakathii' },
  { name: 'Facebook', url: 'https://web.facebook.com/psphakathi/', handle: 'psphakathi' },
  { name: 'SoundCloud', url: 'https://soundcloud.com/sanele-phakathi', handle: 'sanele-phakathi' },
  { name: 'Audiomack', url: 'https://audiomack.com/sanelephakathi', handle: 'sanelephakathi' },
];

const dspLinks = [
  { name: 'Spotify', url: 'https://open.spotify.com/artist/1h2LExENx9xP2Uft18mI9O?si=3zNMG-4YTHq1JLeq1jSehw' },
  { name: 'Apple Music', url: 'https://music.apple.com/us/artist/sanele-phakathi/1669839646' },
  { name: 'YouTube Music', url: 'https://music.youtube.com/channel/UCDoOY9fWaE41mD4UKUevlKQ' },
  { name: 'Amazon Music', url: 'https://music.amazon.in/artists/B071K2M1Z3/sanele-phakathi' },
  { name: 'Deezer', url: 'https://link.deezer.com/s/33GGQkp1APDIyq8joRSEL' },
  { name: 'Tidal', url: 'https://tidal.com/artist/37878560/u' },
  { name: 'Boomplay', url: 'https://www.boomplay.com/artists/63799435' },
  { name: 'Pandora', url: '#' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth-dark text-earth-warm border-t border-border/20">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Music2 className="w-6 h-6 text-accent-gold" />
              <span className="font-bold text-lg text-white">Sanele Phakathi</span>
            </div>
            <p className="text-earth-warm/60 text-sm leading-relaxed mb-4">
              Recording artist, songwriter, pianist, producer &amp; composer. Blending Jazz, Afro-Pop, Deep House, and R&amp;B.
            </p>
            <p className="text-earth-warm/40 text-xs">
              Made with <Heart className="w-3 h-3 inline text-earth-burnt" fill="currentColor" /> in South Africa
            </p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Social Media</h4>
            <ul className="space-y-2.5">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors inline-flex items-center gap-1.5"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* DSP Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Listen On</h4>
            <ul className="space-y-2.5">
              {dspLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#music" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Music
                </a>
              </li>
              <li>
                <a href="#about" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#videos" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Videos
                </a>
              </li>
              <li>
                <a href="#social" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Social
                </a>
              </li>
              <li>
                <a href="#press" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Press Kit
                </a>
              </li>
              <li>
                <a href="mailto:bookings@sanelephakathi.com" className="text-earth-warm/60 hover:text-accent-gold text-sm transition-colors">
                  Bookings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-earth-warm/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-earth-warm/40 text-sm">
            &copy; {currentYear} Sanele Phakathi. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-earth-warm/40 text-xs">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
            <span>Managed by Z.ai</span>
          </div>
        </div>
      </div>
    </footer>
  );
}