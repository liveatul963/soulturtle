import React from 'react';
import { Star, MessageCircle, Calendar } from 'lucide-react';

const GuideShowcase: React.FC = () => {
  const guides = [
    {
      name: "Luna",
      specialty: "Intuitive Guidance & Dreams",
      avatar: "🌙",
      rating: 4.9,
      sessions: 1247,
      bio: "I help you decode the whispers of your intuition and find meaning in your dreams.",
      approach: "Gentle, mystical, with a touch of cosmic humor",
      available: true
    },
    {
      name: "River",
      specialty: "Life Transitions & Flow",
      avatar: "🌊",
      rating: 4.8,
      sessions: 892,
      bio: "Together we'll navigate life's currents and find your natural rhythm.",
      approach: "Fluid, adaptive, grounded in nature's wisdom",
      available: false
    },
    {
      name: "Phoenix",
      specialty: "Transformation & Rebirth",
      avatar: "🔥",
      rating: 4.9,
      sessions: 1456,
      bio: "I guide souls through profound transformation and help you rise renewed.",
      approach: "Bold, transformative, deeply healing",
      available: true
    },
    {
      name: "Sage",
      specialty: "Ancient Wisdom & Modern Life",
      avatar: "🌿",
      rating: 4.7,
      sessions: 2103,
      bio: "Bridging timeless wisdom with today's challenges for practical enlightenment.",
      approach: "Wise, practical, refreshingly down-to-earth",
      available: true
    }
  ];

  return (
    <section className="relative py-12 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#EAE6FB] to-[#FAFAF8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Meet Your Guides 🐢
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Each guide brings their unique perspective and wisdom. Find the voice that resonates with your soul.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">
                    {guide.avatar}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {guide.name}
                    </h3>
                    <p className="text-[#4A5568] font-medium text-sm">
                      {guide.specialty}
                    </p>
                  </div>
                </div>
                
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  guide.available 
                    ? 'bg-[#DDEDE3] text-green-700' 
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {guide.available ? 'Available' : 'Busy'}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold">{guide.rating}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{guide.sessions} sessions</span>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 mb-3 leading-relaxed text-sm">
                {guide.bio}
              </p>

              {/* Approach */}
              <div className="mb-4">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wide">
                  Approach
                </span>
                <p className="text-gray-600 mt-1 italic text-sm">
                  {guide.approach}
                </p>
              </div>

              {/* CTA */}
              <button 
                className={`w-full py-3 rounded-2xl font-semibold transition-all duration-300 text-sm ${
                  guide.available
                    ? 'bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!guide.available}
              >
                {guide.available ? (
                  <span className="flex items-center justify-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    Connect with {guide.name}
                  </span>
                ) : (
                  'Currently Unavailable'
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideShowcase;