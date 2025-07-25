import React from 'react';

const DataLoader = () => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mt-10 shadow-sm w-full h-full">
      {/* Header section */}
      <div className="p-4">
        <div className="h-6 w-3/4 bg-gray-200 rounded-md mb-3 animate-pulse"></div>
        <div className="h-4 w-1/2 bg-gray-200 rounded-md animate-pulse"></div>
      </div>

      {/* Image placeholder */}
      <div className="bg-gray-100 h-48 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 animate-shimmer"></div>
      </div>

      {/* Technologies section */}
      <div className="p-4 bg-gray-50">
        <div className="h-5 w-1/3 bg-gray-200 rounded-md mb-3 mx-auto animate-pulse"></div>
        <div className="flex flex-wrap gap-2 justify-center">
          {[...Array(4)].map((_, idx) => (
            <div 
              key={idx} 
              className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"
              style={{ animationDelay: `${idx * 0.1}s` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Action buttons */}
      <div className="p-4 flex justify-between">
        <div className="h-9 w-24 bg-gray-200 rounded-full animate-pulse"></div>
        <div className="h-9 w-28 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
      </div>
    </div>
  );
};

export default DataLoader;