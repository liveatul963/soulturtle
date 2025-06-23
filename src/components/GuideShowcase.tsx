import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Calendar, Loader2, TriangleAlert } from 'lucide-react';
import { supabase, type Guide } from '../lib/supabase';
import TiltCard from './TiltCard';

const GuideShowcase: React.FC = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const fetchGuides = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('guides')
          .select('*')
          .order('rating', { ascending: false });

        if (error) {
          throw error;
        }

        setGuides(data || []);
        
        // Trigger fade-in animation after data loads
        setTimeout(() => setCardsVisible(true), 100);
      } catch (err) {
        console.error('Error fetching guides:', err);
        setError(err instanceof Error ? err.message : 'Failed to load guides');
      } finally {
        setLoading(false);
      }
    };

    fetchGuides();
  }, []);

  if (loading) {
    return (
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#EAE6FB] to-[#FAFAF8] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
              Meet Your Guides 🐢
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Each guide brings their unique perspective and wisdom. Find the voice that resonates with your soul.
            </p>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-3">
              <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              <span className="text-gray-600 font-normal">Loading guides...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-20 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#EAE6FB] to-[#FAFAF8] overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
              Meet Your Guides 🐢
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
              Each guide brings their unique perspective and wisdom. Find the voice that resonates with your soul.
            </p>
          </div>
          
          <div className="flex justify-center items-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-xl">
              <div className="flex items-center mb-3">
                <TriangleAlert className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="text-red-800 font-semibold">Unable to Load Guides</h3>
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
    <section className="relative py-20 px-6 bg-gradient-to-b from-[#DDEDE3] via-[#EAE6FB] to-[#FAFAF8] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800">
            Meet Your Guides 🐢
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-normal">
            Each guide brings their unique perspective and wisdom. Find the voice that resonates with your soul.
          </p>
        </div>

        {/* Responsive Grid - Optimized breakpoints */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {guides.map((guide, index) => (
            <TiltCard
              key={guide.id}
              className={`transition-opacity duration-500 ${
                cardsVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 min-h-[480px] flex flex-col justify-between">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-3xl mr-4">
                      {guide.avatar_emoji}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-1">
                        {guide.name}
                      </h3>
                      <p className="text-[#4A5568] font-medium text-sm">
                        {guide.specialty}
                      </p>
                    </div>
                  </div>
                  
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    guide.is_available 
                      ? 'bg-[#DDEDE3] text-green-700' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    {guide.is_available ? 'Available' : 'Busy'}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center space-x-6 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{guide.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    <span className="font-normal">{guide.sessions_completed} sessions</span>
                  </div>
                </div>

                {/* Bio - with flex-grow for uniform distribution */}
                <p className="text-gray-700 mb-3 leading-relaxed text-sm font-normal flex-grow">
                  {guide.bio}
                </p>

                {/* Approach - with flex-grow for uniform distribution */}
                <div className="mb-4 flex-grow">
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    Approach
                  </span>
                  <p className="text-gray-600 mt-1 italic text-sm font-light">
                    {guide.approach}
                  </p>
                </div>

                {/* CTA with pricing badge */}
                <button 
                  className={`w-full py-3 rounded-2xl font-medium transition-all duration-300 ease-in-out text-sm ${
                    guide.is_available
                      ? 'bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 hover:shadow-lg hover:scale-[1.02]'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!guide.is_available}
                >
                  {guide.is_available ? (
                    <span className="flex items-center justify-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Now
                      <div className="ml-2 px-2 py-1 bg-white/70 rounded-full text-xs font-medium">
                        $49/session
                      </div>
                    </span>
                  ) : (
                    'Currently Unavailable'
                  )}
                </button>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-12">
          <TiltCard>
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Can't decide? Let us help! 🎯
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto font-normal">
                Take our quick compatibility quiz to find the guide who best matches your energy and needs.
              </p>
              <button className="group px-8 py-4 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-medium rounded-full hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.02]">
                <span className="flex items-center justify-center">
                  Find My Perfect Guide
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </span>
              </button>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};

export default GuideShowcase;