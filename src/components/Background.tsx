import React from 'react';

interface BackgroundProps {
  isDark?: boolean;
}

const Background: React.FC<BackgroundProps> = ({ isDark = false }) => {
  return (
    <div className={`absolute inset-0 w-full h-full ${isDark ? 'bg-gray-900' : 'bg-gradient-to-b from-orange-400 to-yellow-200'}`}>{isDark && (
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white rounded-full opacity-70" style={{left: `${Math.random() * 100}%`, top: `${Math.random() * 60}%`,}} />
        ))}
      </div>
    )}
    <div className="absolute top-20 left-10 w-32 h-16 bg-white rounded-full opacity-20 blur-xl animate-pulse" />
    <div className="absolute top-40 right-10 w-40 h-20 bg-white rounded-full opacity-15 blur-xl animate-pulse" />
    </div>
  );
};

export default Background;