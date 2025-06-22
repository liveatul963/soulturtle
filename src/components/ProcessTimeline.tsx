import React from 'react';
import { Search, MessageSquare, Lightbulb, Heart } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const steps = [
    {
      icon: Search,
      emoji: "🔍",
      title: "Reflect",
      description: "Share what's on your mind in our safe, judgment-free space",
      color: "from-[#FAD6CF] to-[#EAE6FB]"
    },
    {
      icon: MessageSquare,
      emoji: "💬",
      title: "Connect",
      description: "Get matched with a guide who resonates with your energy",
      color: "from-[#EAE6FB] to-[#DDEDE3]"
    },
    {
      icon: Lightbulb,
      emoji: "💡",
      title: "Discover",
      description: "Explore insights through gentle conversation and reflection",
      color: "from-[#DDEDE3] to-[#FAD6CF]"
    },
    {
      icon: Heart,
      emoji: "💖",
      title: "Integrate",
      description: "Take your newfound clarity into your daily life",
      color: "from-[#FAD6CF] to-[#FAFAF8]"
    }
  ];

  return (
    <section className="relative py-12 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#FAFAF8] to-[#EAE6FB] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            How It Works 🐢
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Simple, gentle, profound. Your journey unfolds naturally.
          </p>
        </div>

        <div className="relative">
          {/* Enhanced Timeline Line with rotating gradient */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 overflow-hidden">
            {/* Base line */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#EAE6FB] via-[#FAD6CF] to-[#DDEDE3] opacity-40"></div>
            
            {/* Rotating gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/60 to-transparent animate-timeline-flow"></div>
            
            {/* Subtle shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EAE6FB]/80 to-transparent animate-timeline-shimmer"></div>
          </div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} ml-16 md:ml-0`}>
                <div className={`bg-gradient-to-br ${step.color} rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}>
                  <div className="flex items-center mb-3">
                    <step.icon className="w-5 h-5 mr-3 text-gray-700" />
                    <span className="text-2xl mr-3">{step.emoji}</span>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm font-normal">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Enhanced Timeline Node with rotating border */}
              <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-12 h-12 flex items-center justify-center">
                {/* Rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#EAE6FB] via-[#FAD6CF] to-[#DDEDE3] animate-spin-slow opacity-60"></div>
                <div className="absolute inset-0.5 rounded-full bg-white shadow-lg"></div>
                
                {/* Inner content */}
                <div className="relative z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-[#EAE6FB]/50 hover:border-[#FAD6CF]/70 transition-all duration-300 hover:scale-110">
                  <span className="text-lg">{step.emoji}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;