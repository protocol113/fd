'use client';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "FliteDek has transformed how we engage with the drone racing community. The platform's reach and engagement rates are unprecedented.",
      author: "Sarah Chen",
      role: "Marketing Director, TechDrone"
    },
    {
      quote: "The level of innovation and technical expertise at FliteDek is outstanding. They're truly shaping the future of competitive drone racing.",
      author: "Marcus Rodriguez",
      role: "Professional Drone Pilot"
    },
    {
      quote: "Working with FliteDek has opened up entirely new opportunities for our brand in the drone racing space.",
      author: "Alex Thompson",
      role: "CEO, RacingTech"
    }
  ];

  return (
    <section id="testimonials" className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        What Our Partners <span className="text-[#00ffa8]">Say</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="stat-card">
            <div className="mb-6">
              <p className="text-white/80 italic mb-4">"{testimonial.quote}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold">{testimonial.author}</div>
                <div className="text-[#00ffa8] text-sm">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}