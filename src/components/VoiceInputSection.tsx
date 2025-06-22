import React from 'react';
import { Mic } from 'lucide-react';

const VoiceInputSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-teal-50 py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1B2531] mb-4">
          Let your voice guide you.
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-8 font-normal">
          Your energy, your tone, your truth.
        </p>
        
        <button 
          id="micBtn" 
          className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl mx-auto group"
          aria-label="Start voice recording"
        >
          <Mic className="w-6 h-6 text-[#1B2531] group-hover:text-purple-600 transition-colors duration-300" />
        </button>
        
        <p className="text-sm text-gray-500 mt-4 font-normal">
          Click to share what's on your heart
        </p>
      </div>
    </section>
  );
};

export default VoiceInputSection;