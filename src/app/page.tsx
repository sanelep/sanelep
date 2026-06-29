'use client';

import Navigation from '@/components/website/Navigation';
import Hero from '@/components/website/Hero';
import MarqueeBanner from '@/components/website/MarqueeBanner';
import MusicSection from '@/components/website/MusicSection';
import AboutSection from '@/components/website/AboutSection';
import VideosSection from '@/components/website/VideosSection';
import SocialFeed from '@/components/website/SocialFeed';
import PressSection from '@/components/website/PressSection';
import Footer from '@/components/website/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">
        <Hero />
        <MarqueeBanner />
        <MusicSection />
        <AboutSection />
        <VideosSection />
        <SocialFeed />
        <PressSection />
      </main>
      <Footer />
    </div>
  );
}