import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#2D3748] overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-4xl">🐢</div>
        <div className="absolute top-20 right-20 text-3xl">✨</div>
        <div className="absolute bottom-20 left-20 text-3xl">🌌</div>
        <div className="absolute bottom-10 right-10 text-2xl">🪞</div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 leading-tight">
            Ready to meet your mirror? 🪞
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your guides are waiting. Your wisdom is ready. The conversation that changes everything starts now.
          </p>
        </div>

        {/* Main CTA */}
        <div className="mb-10">
          <button className="group relative px-12 py-6 bg-gradient-to-r from-[#EAE6FB] via-[#DDEDE3] to-[#FAFAF8] text-gray-800 font-bold rounded-full text-xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              Start Your Journey
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#DDEDE3] via-[#FAFAF8] to-[#EAE6FB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Simple sparkle effects */}
            <Sparkles className="absolute top-2 right-2 w-3 h-3 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Sparkles className="absolute bottom-2 left-2 w-2 h-2 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150" />
          </button>
        </div>

        {/* Secondary Actions */}
        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <button className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-2xl mb-3">📱</div>
            <h3 className="font-semibold text-gray-800 mb-2">Quick Chat</h3>
            <p className="text-gray-600 text-sm">Start with a 15-minute conversation</p>
          </button>

          <button className="group bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg">
            <div className="text-2xl mb-3">🌙</div>
            <h3 className="font-semibold text-gray-800 mb-2">Deep Dive</h3>
            <p className="text-gray-600 text-sm">Full session for profound exploration</p>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-6 border-t border-gray-200/30">
          <p className="text-gray-300 mb-3">Trusted by seekers worldwide</p>
          <div className="flex justify-center items-center space-x-8 text-xl opacity-60">
            <span>🌟</span>
            <span className="text-gray-300 text-sm">Safe Space</span>
            <span>🔒</span>
            <span className="text-gray-300 text-sm">Private</span>
            <span>💚</span>
            <span className="text-gray-300 text-sm">Non-judgmental</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;