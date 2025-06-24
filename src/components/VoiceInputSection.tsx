import React, { useState } from 'react';
import { Mic } from 'lucide-react';

const VoiceInputSection: React.FC = () => {
  const [isListening, setIsListening] = useState(false);

  /** Toggle listening (demo: auto-stop after 3 s) */
  const handleMicClick = () => {
    if (!isListening) {
      setIsListening(true);
      setTimeout(() => setIsListening(false), 3000);
    } else {
      setIsListening(false);
    }
  };

  return (
    <section className="bg-gradient-to-b from-[#EAE6FB] to-[#C7F0F7] py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-gray-600 text-lg md:text-xl mb-8 font-normal">
          Your energy, your tone, your truth.
        </p>

        {/* ─── Mic Button ─────────────────────────────────────────── */}
        <button
          id="micBtn"
          onClick={handleMicClick}
          aria-label={isListening ? "Stop voice recording" : "Start voice recording"}
          className="relative mx-auto transition-transform duration-300 hover:scale-105 focus:outline-none"
        >
          {/* Glowing ring when listening */}
          {isListening && (
            <div className="absolute inset-0 rounded-full animate-ping border border-white/20 opacity-30" />
          )}

          {/* Button core */}
          <div
            className={`flex items-center justify-center rounded-full ${
              isListening
                ? "w-20 h-20 mic-ring shadow-xl"
                : "w-20 h-20 bg-gradient-to-br from-[#EAE6FB] to-[#C7F0F7] shadow-xl border-2 border-white/30"
            }`}
          >
            <Mic
              className={`w-7 h-7 transition-colors duration-300 ${
                isListening ? "text-white" : "text-[#1B2531]"
              }`}
            />
          </div>
        </button>

        {/* Status text */}
        <p className="text-sm text-gray-600 font-light tracking-wide italic mt-4">
          {isListening
            ? "Listening…"
            : "Click to share what's on your heart"}
        </p>
      </div>
    </section>
  );
};

export default VoiceInputSection;