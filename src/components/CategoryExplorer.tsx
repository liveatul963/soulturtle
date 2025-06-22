import React, { useState, useEffect } from 'react';
import { Heart, Brain, Compass, Star, Moon, Sun, Shield, Zap, TreePine, Loader2 } from 'lucide-react';
import { supabase, type Category } from '../lib/supabase';

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

const CategoryExplorer: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-3">
              <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              <span className="text-gray-600">Loading categories...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          
          <div className="flex justify-center items-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
              <p className="text-red-700 text-center">
                Unable to load categories: {error}
              </p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-4 w-full px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg transition-colors duration-300"
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
          {categories.map((category) => {
            const IconComponent = iconMap[category.icon_name as keyof typeof iconMap];
            
            return (
              <div
                key={category.id}
                className={`group relative ${category.bg_color} ${category.hover_bg} backdrop-blur-sm rounded-3xl p-6 cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-white/50 min-h-[180px] flex flex-col overflow-hidden`}
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
                      <div className={`p-2 rounded-full bg-white/40 backdrop-blur-sm mr-3 ${category.accent_color} group-hover:scale-110 transition-transform duration-300`}>
                        {IconComponent && <IconComponent className="w-4 h-4" />}
                      </div>
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{category.emoji}</span>
                    </div>
                    <h3 className={`text-lg font-bold mb-3 leading-tight ${category.accent_color}`}>
                      {category.title}
                    </h3>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Enhanced hover effect */}
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 mt-4">
                    <div className={`inline-flex items-center font-semibold text-sm bg-white/60 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40 shadow-sm ${category.accent_color}`}>
                      Explore <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-br from-white/20 via-transparent to-white/10 pointer-events-none"></div>
              </div>
            );
          })}
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