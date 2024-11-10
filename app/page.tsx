"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import About from '@/components/About';
import Benefits from '@/components/Benefits';
import CoreAudience from '@/components/CoreAudience';

export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#0a192f]"
      style={{
        backgroundImage: 'url("/img/curves.svg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Enables parallax effect for a static image
      }}
    >
      <Navbar />
      <section id="home">
        <Hero />
        <Stats />
      </section>
      <About />
      <Benefits />
      <CoreAudience />
    </main>
  );
}