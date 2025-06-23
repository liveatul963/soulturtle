import React from 'react';
import { Quote } from 'lucide-react';
import TiltCard from './TiltCard';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Luna helped me understand my dreams in a way that completely shifted my perspective on life. It wasn't therapy, it was like talking to the wisest friend I never knew I had.",
      author: "Alex, 26",
      location: "Brooklyn, NY",
      avatar: "🌸"
    },
    {
      text: "I was skeptical at first, but River's approach to my career transition was exactly what I needed. No pressure, just clarity. Like having a conversation with my future self.",
      author: "Jordan, 31",
      location: "Austin, TX",
      avatar: "🌊"
    },
    {
      text: "Phoenix didn't give me answers - they helped me find the questions I didn't know I was asking. The transformation has been profound and gentle at the same time.",
      author: "Sam, 28",
      location: "Portland, OR",
      avatar: "🔥"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#EAE6FB] via-[#DDEDE3] to-[#FAD6CF] overflow-hidden">
      {/* Simple floating elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 text-4xl">💬</div>
        <div className="absolute bottom-20 right-20 text-3xl">✨</div>
        <div className="absolute top-1/2 right-10 text-3xl">🪞</div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            What Seekers Say ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Real experiences from souls who found their mirrors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <TiltCard key={index}>
              <div className="group bg-white/60 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 min-h-[280px] flex flex-col justify-between">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-6 h-6 text-[#EAE6FB] transform rotate-180" />
                </div>

                {/* Testimonial Text with flex-grow */}
                <p className="text-gray-700 mb-4 leading-relaxed italic text-sm font-normal flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="text-xl mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800 text-sm">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-gray-600 font-normal">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;