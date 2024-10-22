import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin mb-4"></div>
      <div className="loader">Loading...</div>
      <style jsx='true'>{`
        .loader {
          font-size: 1.5rem;
          color: #3498db;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
