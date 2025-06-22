import React from 'react';

const BoltBadge: React.FC = () => {
  return (
    <a
      href="https://bolt.new/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 group transition-transform duration-300"
    >
      {/* Badge Image - Large size for readability, no shadows */}
      <img
        src="/black_circle_360x360.png"
        alt="Powered by Bolt"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
      />
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 bg-gray-800 text-white text-xs px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        SoulTurtle energetically built with ⚡Bolt
        {/* Tooltip arrow */}
        <div className="absolute top-full right-2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
      </div>
    </a>
  );
};

export default BoltBadge;