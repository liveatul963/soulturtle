import React from 'react';

const BoltBadge: React.FC = () => {
  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 group transition-transform duration-300 hover:scale-110"
    >
      {/* Badge Image - Responsive sizing */}
      <img
        src="/black_circle_360x360.png"
        alt="Powered by Bolt"
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 drop-shadow-lg"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg">
        SoulTurtle energetically built with ⚡Bolt
        {/* Tooltip arrow */}
        <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
};

export default BoltBadge;