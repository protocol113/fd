'use client';

export default function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">
            Revolutionizing <span className="text-[#00ffa8]">Drone Racing</span>
          </h2>
          <p className="text-white/80 mb-6">
            FliteDek was founded by enthusiasts passionate about technology, speed, and competition, with a dream to elevate FPV (First-Person View) drone racing into a world-class sport. We aim to become the central hub for drone racing news, events, and exclusive insights into the lives of top pilots. Our mission is to bring fans and pilots closer than ever before and to connect brands with a dynamic, tech-savvy audience through unforgettable live events, cutting-edge content, and collaborative partnerships.
          </p>
          <p className="text-white/80">
            Join us as we shape the future of competitive motorsports and bring the thrill of drone racing to fans worldwide.
          </p>
        </div>
        
        {/* Embedded YouTube Video */}
        <div className="relative">
          <div className="aspect-video rounded-lg overflow-hidden bg-[#0f0f0f] border-2 border-[#00ffa8]">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/LmL8xwgtIwo"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}