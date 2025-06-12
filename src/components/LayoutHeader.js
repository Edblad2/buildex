import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-md z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-center items-center">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">BUILDEX</h1>
      </div>
    </header>
  );
};

export default LayoutHeader;