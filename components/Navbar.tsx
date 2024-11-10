'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80; // Height of fixed navbar
      const elementPosition = element.offsetTop - navHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'benefits', 'testimonials'];
      const navHeight = 80;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= navHeight + 100 && rect.bottom >= navHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md">
      {/* Logo Image */}
      <div className="w-32 h-auto">
        <Image 
          src="/img/logo.png" 
          alt="FliteDek Logo" 
          width={128} 
          height={32} 
          className="object-contain"
        />
      </div>

      <div className="flex items-center gap-8">
        {['about', 'benefits', 'testimonials'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`text-white/80 hover:text-white cursor-pointer capitalize transition-colors ${
              activeSection === section ? 'text-[#00ffa8]' : ''
            }`}
          >
            {section}
          </button>
        ))}
        <button 
          className="relative px-6 py-2 bg-transparent border-2 border-[#00ffa8] text-[#00ffa8] hover:bg-[#00ffa8] hover:text-[#0a0a0a] transition-colors transform -skew-x-12"
        >
          <span className="block transform skew-x-12">Partner With Us</span>
        </button>
      </div>
    </nav>
  );
}