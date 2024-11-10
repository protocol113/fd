'use client';

import { BarChart2, Users, Zap } from 'lucide-react';

export default function Stats() {
  return (
    <div className="w-full flex flex-col items-center px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-[#00ffa8]">
          Why FPV Racing is the Next Big Opportunity
        </h2>
        <p className="text-xl text-white/80 max-w-2xl mx-auto">
          The rapidly growing world of drone racing combines cutting-edge technology with
          competitive sports, attracting a highly engaged, tech-savvy audience.
        </p>
      </div>
      
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="stat-card">
          <div className="stat-icon">
            <BarChart2 size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">45%</div>
          <div className="text-white/80">Annual Growth in Social Media Engagement</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Users size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">1B+</div>
          <div className="text-white/80">Projected Global Audience by 2030</div>
        </div>
        
        <div className="stat-card">
          <div className="stat-icon">
            <Zap size={24} />
          </div>
          <div className="text-3xl font-bold mb-2">3M+</div>
          <div className="text-white/80">Daily Video Views</div>
        </div>
      </div>
    </div>
  );
}