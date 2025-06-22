import React, { useState, useEffect } from 'react';
import { Star, MessageCircle, Calendar, Loader2 } from 'lucide-react';
import { supabase, type Guide } from '../lib/supabase';

const GuideShowcase: React.FC = () => {
  const [guides, setGuides] = useState<Guide[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
          
          <div className="flex justify-center items-center py-12">
            <div className="flex items-center space-x-3">
              <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              <span className="text-gray-600">Loading guides...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
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
          
          <div className="flex justify-center items-center py-12">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
              <p className="text-red-700 text-center">
                Unable to load guides: {error}
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <div
              key={guide.id}
              className="group bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/50"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">
                    {guide.avatar_emoji}
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
                  <span className="font-semibold">{guide.rating}</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  <span>{guide.sessions_completed} sessions</span>
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
                  guide.is_available
                    ? 'bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 hover:shadow-lg hover:scale-105'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!guide.is_available}
              >
                {guide.is_available ? (
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

        {/* Enhanced CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Can't decide? Let us help! 🎯
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Take our quick compatibility quiz to find the guide who best matches your energy and needs.
            </p>
            <button className="group px-8 py-4 bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="flex items-center justify-center">
                Find My Perfect Guide
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">✨</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideShowcase;