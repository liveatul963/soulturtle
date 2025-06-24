import React, { useState, useEffect } from 'react';
import { Heart, Brain, Compass, Star, Moon, Sun, Shield, Zap, TreePine, Loader2, AlertTriangle as TriangleAlert } from 'lucide-react';
import { supabase, type Category } from '../lib/supabase';
import TiltCard from './TiltCard';

// Icon mapping for dynamic icon rendering
const iconMap = {
  Heart,
  Brain,
  Compass,
  Star,
  Moon,
  Sun,
  Shield,
  Zap,
  TreePine
};

// Unique pastel color schemes for each card
const pastelColorSchemes = [
  {
    bg: 'bg-gradient-to-br from-rose-100/80 to-pink-100/60',
    hover: 'group-hover:from-rose-200/90 group-hover:to-pink-200/70',
    accent: 'text-rose-700',
    iconBg: 'bg-rose-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-blue-100/80 to-cyan-100/60',
    hover: 'group-hover:from-blue-200/90 group-hover:to-cyan-200/70',
    accent: 'text-blue-700',
    iconBg: 'bg-blue-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-purple-100/80 to-lavender-100/60',
    hover: 'group-hover:from-purple-200/90 group-hover:to-purple-200/70',
    accent: 'text-purple-700',
    iconBg: 'bg-purple-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-emerald-100/80 to-teal-100/60',
    hover: 'group-hover:from-emerald-200/90 group-hover:to-teal-200/70',
    accent: 'text-emerald-700',
    iconBg: 'bg-emerald-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-amber-100/80 to-yellow-100/60',
    hover: 'group-hover:from-amber-200/90 group-hover:to-yellow-200/70',
    accent: 'text-amber-700',
    iconBg: 'bg-amber-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-indigo-100/80 to-blue-100/60',
    hover: 'group-hover:from-indigo-200/90 group-hover:to-blue-200/70',
    accent: 'text-indigo-700',
    iconBg: 'bg-indigo-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-lime-100/80 to-green-100/60',
    hover: 'group-hover:from-lime-200/90 group-hover:to-green-200/70',
    accent: 'text-lime-700',
    iconBg: 'bg-lime-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-orange-100/80 to-red-100/60',
    hover: 'group-hover:from-orange-200/90 group-hover:to-red-200/70',
    accent: 'text-orange-700',
    iconBg: 'bg-orange-50/70'
  },
  {
    bg: 'bg-gradient-to-br from-violet-100/80 to-fuchsia-100/60',
    hover: 'group-hover:from-violet-200/90 group-hover:to-fuchsia-200/70',
    accent: 'text-violet-700',
    iconBg: 'bg-violet-50/70'
  }
];

const CategoryExplorer: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('categories')
          .select('*')
          .order('created_at', { ascending: true });

        if (error) {
          throw error;
        }

        setCategories(data || []);
        
        // Trigger fade-in animation after data loads
        setTimeout(() => setCardsVisible(true), 100);
      } catch (err) {
        console.error('Error fetching categories:', err);
        setError(err instanceof Error ? err.message : 'Failed to load categories');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#DDEDE3] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
              What's on your heart? 💜
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Choose your path. Each guide specializes in different areas of the human experience.
            </p>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-3">
              <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              <span className="text-gray-600 font-normal">Loading categories...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#DDEDE3] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
              What's on your heart? 💜
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Choose your path. Each guide specializes in different areas of the human experience.
            </p>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-xl">
              <div className="flex items-center mb-3">
                <TriangleAlert className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-red-800 font-semibold">Unable to Load Categories</h3>
              </div>
              <p className="text-red-700 text-center font-normal mb-4">
                {error}
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="w-full px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] font-normal"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#FAFAF8] via-[#EAE6FB] to-[#DDEDE3] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            What's on your heart? 💜
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Choose your path. Each guide specializes in different areas of the human experience.
          </p>
        </div>

        {/* Responsive Grid - Optimized breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon_name as keyof typeof iconMap];
            const colorScheme = pastelColorSchemes[index % pastelColorSchemes.length];
            
            return (
              <TiltCard
                key={category.id}
                className={`transition-opacity duration-500 ${
                  cardsVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  transitionDelay: `${index * 50}ms`
                }}
              >
                <div
                  className={`group relative ${colorScheme.bg} ${colorScheme.hover} rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl border border-white/30 h-[220px] flex flex-col justify-between overflow-hidden`}
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
                        <div className={`p-2 rounded-full ${colorScheme.iconBg} mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          {IconComponent && <IconComponent className={`w-4 h-4 ${colorScheme.accent}`} />}
                        </div>
                        <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{category.emoji}</span>
                      </div>
                      <h3 className={`text-lg font-semibold mb-3 leading-tight ${colorScheme.accent}`}>
                        {category.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed font-normal flex-grow">
                        {category.description}
                      </p>
                    </div>

                    {/* Enhanced hover effect with uniform CTA styling */}
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-4">
                      <div className="inline-flex items-center bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-medium px-4 py-2 rounded-full border border-white/50 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
                        Explore <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
                </div>
              </TiltCard>
            );
          })}
        </div>

        {/* Call to action with uniform styling */}
        <div className="text-center mt-10">
          <p className="text-gray-600 mb-4 text-lg font-normal">
            Can't find what you're looking for? Our guides work across all areas of life.
          </p>
          <button className="group px-10 py-4 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] rounded-full text-gray-700 font-medium hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] shadow-lg border border-white/50">
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