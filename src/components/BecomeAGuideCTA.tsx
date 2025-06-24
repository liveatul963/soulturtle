import React from 'react';
import { Star, Heart, Users, ArrowRight } from 'lucide-react';
import TiltCard from './TiltCard';

const BecomeAGuideCTA: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Help seekers find their inner wisdom"
    },
    {
      icon: Users,
      title: "Flexible Schedule",
      description: "Work when it feels right for you"
    },
    {
      icon: Star,
      title: "Meaningful Income",
      description: "Earn while sharing your gifts"
    }
  ];

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#DDEDE3] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 text-4xl">🌟</div>
        <div className="absolute bottom-20 right-20 text-3xl">💫</div>
        <div className="absolute top-1/2 right-10 text-3xl">🐢</div>
        <div className="absolute bottom-1/3 left-10 text-2xl">✨</div>
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            Share Your Wisdom 🌟
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Are you a natural guide? Join our community of wisdom keepers and help others discover their inner truth.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <TiltCard key={index}>
              <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 text-center hover:bg-white/80 transition-all duration-300 shadow-lg border border-white/50 min-h-[180px] flex flex-col justify-between">
                <div className="mb-4">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-[#EAE6FB] to-[#FAD6CF] rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-gray-700" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm font-normal flex-grow">
                  {benefit.description}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Enhanced Main CTA with improved contrast and subtle glow */}
        <div className="text-center">
          <TiltCard>
            <div className="bg-gradient-to-br from-white/90 via-[#FAFAF8]/80 to-white/70 rounded-3xl p-8 shadow-2xl border-2 border-white/80 max-w-2xl mx-auto min-h-[280px] flex flex-col justify-between animate-subtle-glow backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Ready to Guide Others? 🐢
              </h3>
              <p className="text-gray-700 mb-6 font-normal flex-grow">
                We're looking for empathetic souls who can hold space for others' journeys. 
                No formal credentials required - just genuine wisdom and a caring heart.
              </p>
              <button className="group px-10 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out border-2 border-white/30 shadow-lg">
                <span className="flex items-center justify-center">
                  Become a Guide
                  <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <div className="mt-4 text-sm text-gray-600 font-normal">
                <span className="inline-flex items-center">
                  <Star className="w-4 h-4 mr-1 text-yellow-500" />
                  Join 200+ guides already making a difference
                </span>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default BecomeAGuideCTA;