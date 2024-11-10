'use client';

import { useState, useEffect } from 'react';
import { Award, Radio, Film, Ticket, Globe, Briefcase } from 'lucide-react';

export default function Benefits() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const benefits = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Brand Exposure",
      description: "Prominent logo placements on drones, pilot gear, event signage, and live broadcasts for maximum visibility"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Audience Engagement",
      description: "Connect with passionate FPV racing fans through sponsored contests, polls, and social media features"
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Content Collaboration",
      description: "Co-create compelling articles, videos, and stories highlighting your brand's innovation"
    },
    {
      icon: <Ticket className="w-8 h-8" />,
      title: "Event Participation",
      description: "Enjoy VIP access to events, showcase products, and present awards at premier FPV racing events"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Presence",
      description: "Reach audiences through our newsletters, website, and mobile app beyond the racetrack"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Customized Opportunities",
      description: "Develop unique sponsorship activations tailored to your specific marketing objectives"
    }
  ];



  return (
    <section id="benefits" className="container mx-auto px-4 py-16 bg-gray-900 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-4">
        Partner Benefits with <span className="text-[#00ffa8]">FliteDek</span>
      </h2>
      <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
        Join the future of FPV drone racing with comprehensive partnership opportunities designed to maximize your brand's impact
      </p>
      
      <div className="relative w-full">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
        >
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="min-w-[33.333%] px-4"
            >
              <div className="p-6 rounded-lg bg-gray-800 h-full border border-gray-700">
                <div className="text-[#00ffa8] mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {benefit.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(benefits.length - 2)].map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? 'bg-[#00ffa8]' : 'bg-gray-600'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <button className="bg-[#00ffa8] text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-[#00cc86] transition-colors duration-300">
          Become a Partner
        </button>
      </div>
    </section>
  );
}