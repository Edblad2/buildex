import React from 'react';

const CategoryFilter = ({ categories, selectedCategory, onSelectCategory }) => {
  // Override categories to ensure only "Todas" is displayed
  const displayCategories = ['Todas'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {displayCategories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-md
            ${selectedCategory === category ? 'bg-blue-600 text-white transform scale-105' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
