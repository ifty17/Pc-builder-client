import React from 'react';

const LoadingSpinner = () => {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="w-6 h-6 border-2 border-dashed rounded-full animate-spin border-primary"></div>
      </div>
    );
};

export default LoadingSpinner;