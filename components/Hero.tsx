'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage: 'url("/img/BG.jpeg")', // Replace with the path to your background image
      }}
    >
      {/* Darker Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#004d40] via-[#002d2d] to-[#001a1a] opacity-70"></div>

      {/* Hero Content */}
      <div className="container relative z-10 mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold mb-6 text-white">
            The Future of Competitive Motorsports, Driven By{' '}
            <span className="text-[#00ffa8]">Innovation</span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Join the pioneering community that's shaping the FPV drone racing industry.
            Connect with top pilots, engage with brands, and be part of the revolution.
          </p>
          <div className="flex gap-4 justify-center">
            {/* Gradient Border Button */}
            <button className="btn btn-primary">
              <span className="btn-content flex items-center gap-2">
                Become a Partner <ArrowRight size={20} />
              </span>
            </button>

            {/* Solid Border Button */}
            <button className="btn btn-secondary">
              <span className="btn-content">Discover FliteDek</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}