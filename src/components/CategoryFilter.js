import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  // Enforce only "Todas" button
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => onSelectCategory('Todas')}
        className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md
          ${selectedCategory === 'Todas' ? 'bg-blue-600 text-white transform scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
      >
        Todas
      </button>
    </div>
  );
};

export default CategoryFilter;
