import React from 'react';
import TiltCard from './TiltCard';

const SessionOptions: React.FC = () => {
  return (
    <section className="py-24 text-center bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl text-[#1B2531] mb-4">
          Choose Your Session
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 font-normal">
          Connect the way that feels right.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Quick Chat Card */}
          <TiltCard>
            <div className="rounded-xl p-6 border bg-purple-50 hover:bg-purple-100 transition-all duration-300 shadow-lg hover:shadow-xl h-[280px] flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-[#1B2531] mb-2">
                Quick Chat
              </h3>
              <p className="text-gray-500 mb-4 font-normal">
                10 minutes • $11.11
              </p>
              <p className="text-gray-600 text-sm mb-6 font-normal flex-grow">
                Perfect for quick guidance or when you need clarity on a specific question.
              </p>
              <button className="bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-medium py-3 px-6 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
                Book Now
              </button>
            </div>
          </TiltCard>

          {/* Deep Dive Card */}
          <TiltCard>
            <div className="rounded-xl p-6 border bg-teal-50 hover:bg-teal-100 transition-all duration-300 shadow-lg hover:shadow-xl h-[280px] flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-[#1B2531] mb-2">
                Deep Dive
              </h3>
              <p className="text-gray-500 mb-4 font-normal">
                30 minutes • $33.33
              </p>
              <p className="text-gray-600 text-sm mb-6 font-normal flex-grow">
                For profound exploration and transformation. Space to truly unfold.
              </p>
              <button className="bg-gradient-to-r from-[#EAE6FB] to-[#FAD6CF] text-gray-800 font-medium py-3 px-6 rounded-full hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out">
                Book Now
              </button>
            </div>
          </TiltCard>
        </div>

        {/* Additional info */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm font-normal">
            All sessions include a safe, judgment-free space for authentic conversation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SessionOptions;