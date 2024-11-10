'use client';

import { ArrowRight } from 'lucide-react';

export default function CoreAudience() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="stat-card max-w-4xl mx-auto text-center p-12">
        <h2 className="text-4xl font-bold mb-6">Our Core Audience</h2>
        <p className="text-xl text-white/80 mb-8">
          Young, tech-savvy innovators aged 18-34 who are early adopters of new technology
          and passionate about competitive sports. This demographic represents a unique and
          expanding market with high engagement rates and strong brand loyalty.
        </p>
        <button className="btn inline-flex border-2 border-[#00ffa8] text-[#00ffa8] hover:bg-[#00ffa8] hover:text-[#0a0a0a]">
          <span className="btn-content flex items-center gap-2">
            Download Audience Insights <ArrowRight size={20} />
          </span>
        </button>
      </div>
    </section>
  );
}