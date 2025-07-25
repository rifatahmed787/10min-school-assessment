import React from "react";

const GallerySkeleton: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-background border rounded-md overflow-hidden">
      {/* Image placeholder */}
      <div className="h-44 w-full bg-gray-200 dark:bg-gray-700 animate-pulse" />

      {/* Content placeholder */}
      <div className="p-4 space-y-3">
        <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
