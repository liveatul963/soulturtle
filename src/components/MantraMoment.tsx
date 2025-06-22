import React, { useState, useEffect } from 'react';

const MantraMoment: React.FC = () => {
  const mantras = [
    "I am exactly where I need to be 🌱",
    "My wisdom grows with every breath 🌊",
    "I trust the journey, even in uncertainty 🌙",
    "Every question holds its own answer ✨",
    "I am both the seeker and the sought 🪞"
  ];

  const [currentMantra, setCurrentMantra] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentMantra((prev) => (prev + 1) % mantras.length);
        setIsVisible(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, [mantras.length]);

  return (
    <section className="relative py-16 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#FAD6CF] to-[#FAFAF8] overflow-hidden">
      {/* Simple background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#FAFAF8] rounded-full blur-xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="text-4xl mb-6">🧘</div>
          <h2 className="text-2xl md:text-3xl font-light text-gray-700 mb-6">
            A moment of reflection
          </h2>
        </div>

        {/* Mantra Display */}
        <div className="min-h-[80px] flex items-center justify-center">
          <p 
            className={`text-xl md:text-2xl font-light text-gray-800 leading-relaxed transition-all duration-300 ${
              isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
            }`}
          >
            {mantras[currentMantra]}
          </p>
        </div>

        {/* Simple breathing guide */}
        <div className="mt-12">
          <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-white/50 to-transparent border border-white/30 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FAFAF8] to-[#EAE6FB]"></div>
          </div>
          <p className="mt-4 text-gray-600 font-normal">
            Take a deep breath. You're doing beautifully.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MantraMoment;