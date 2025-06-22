import React from 'react';
import { Heart, Brain, Compass, Star, Moon, Sun, Shield, Zap, TreePine } from 'lucide-react';

const CategoryExplorer: React.FC = () => {
  const categories = [
    {
      title: "Love & Relations",
      icon: Heart,
      emoji: "💕",
      description: "Navigate the beautiful complexity of human connection",
      bgColor: "bg-gradient-to-br from-rose-100/80 to-pink-100/60",
      hoverBg: "group-hover:from-rose-200/90 group-hover:to-pink-200/70",
      accentColor: "text-rose-700"
    },
    {
      title: "Life Purpose",
      icon: Compass,
      emoji: "🧭",
      description: "Discover your unique path",
      bgColor: "bg-gradient-to-br from-amber-100/80 to-orange-100/60",
      hoverBg: "group-hover:from-amber-200/90 group-hover:to-orange-200/70",
      accentColor: "text-amber-700"
    },
    {
      title: "Inner Peace",
      icon: Moon,
      emoji: "🕯️",
      description: "Find calm in the storm",
      bgColor: "bg-gradient-to-br from-indigo-100/80 to-purple-100/60",
      hoverBg: "group-hover:from-indigo-200/90 group-hover:to-purple-200/70",
      accentColor: "text-indigo-700"
    },
    {
      title: "Personal Growth",
      icon: Star,
      emoji: "🌱",
      description: "Evolve into your fullest self",
      bgColor: "bg-gradient-to-br from-emerald-100/80 to-green-100/60",
      hoverBg: "group-hover:from-emerald-200/90 group-hover:to-green-200/70",
      accentColor: "text-emerald-700"
    },
    {
      title: "Career & Creativity",
      icon: Sun,
      emoji: "🎨",
      description: "Align passion with purpose",
      bgColor: "bg-gradient-to-br from-yellow-100/80 to-amber-100/60",
      hoverBg: "group-hover:from-yellow-200/90 group-hover:to-amber-200/70",
      accentColor: "text-yellow-700"
    },
    {
      title: "Spiritual Practice",
      icon: Brain,
      emoji: "🧘",
      description: "Deepen your connection to the sacred",
      bgColor: "bg-gradient-to-br from-violet-100/80 to-purple-100/60",
      hoverBg: "group-hover:from-violet-200/90 group-hover:to-purple-200/70",
      accentColor: "text-violet-700"
    },
    {
      title: "Healing & Wellness",
      icon: Shield,
      emoji: "🌿",
      description: "Restore balance to mind, body, and spirit",
      bgColor: "bg-gradient-to-br from-teal-100/80 to-cyan-100/60",
      hoverBg: "group-hover:from-teal-200/90 group-hover:to-cyan-200/70",
      accentColor: "text-teal-700"
    },
    {
      title: "Energy & Intuition",
      icon: Zap,
      emoji: "⚡",
      description: "Awaken your inner knowing and energetic awareness",
      bgColor: "bg-gradient-to-br from-fuchsia-100/80 to-pink-100/60",
      hoverBg: "group-hover:from-fuchsia-200/90 group-hover:to-pink-200/70",
      accentColor: "text-fuchsia-700"
    },
    {
      title: "Nature Connection",
      icon: TreePine,
      emoji: "🌲",
      description: "Find wisdom in the natural world",
      bgColor: "bg-gradient-to-br from-lime-100/80 to-green-100/60",
      hoverBg: "group-hover:from-lime-200/90 group-hover:to-green-200/70",
      accentColor: "text-lime-700"
    }
  ];

  return (
    <section className="relative py-12 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#DDEDE3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            What's on your heart? 💜
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your path. Each guide specializes in different areas of the human experience.
          </p>
        </div>

        {/* Responsive Grid - Works on all devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`group relative ${category.bgColor} ${category.hoverBg} backdrop-blur-sm rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50 min-h-[180px] flex flex-col overflow-hidden`}
              style={{
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
              }}
            >
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-4 right-4 text-5xl transform rotate-12 opacity-30">{category.emoji}</div>
                <div className="absolute bottom-4 left-4 text-3xl transform -rotate-12 opacity-20">{category.emoji}</div>
              </div>

              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full bg-white/40 backdrop-blur-sm mr-3 ${category.accentColor} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-4 h-4" />
                    </div>
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{category.emoji}</span>
                  </div>
                  <h3 className={`text-lg font-bold mb-3 leading-tight ${category.accentColor}`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Enhanced hover effect */}
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-4">
                  <div className={`inline-flex items-center font-semibold text-sm bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40 shadow-sm ${category.accentColor}`}>
                    Explore <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-lg">
            Can't find what you're looking for? Our guides work across all areas of life.
          </p>
          <button className="group px-10 py-4 bg-gradient-to-r from-white/80 to-gray-50/80 backdrop-blur-sm rounded-full text-gray-700 font-semibold hover:from-white/95 hover:to-gray-50/95 transition-all duration-300 hover:scale-105 shadow-lg border border-white/50 hover:shadow-xl">
            <span className="flex items-center">
              Browse All Guides
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategoryExplorer;