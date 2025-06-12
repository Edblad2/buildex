import React from 'react';

const RankingSection = ({ companies, title }) => {
  const sortedCompanies = [...companies].sort((a, b) => b.rating - a.rating).slice(0, 6);

  const getRankColor = (rank) => {
    switch (rank) {
      case 1: return 'bg-yellow-400 text-yellow-900';
      case 2: return 'bg-gray-300 text-gray-800';
      case 3: return 'bg-amber-700 text-white';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 mb-16 border border-gray-100 animate-fade-in-up delay-300">
      <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedCompanies.map((company, index) => (
          <div key={company.id} className="flex items-center bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className={`w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg mr-4 ${getRankColor(index + 1)}`}>
              {index + 1}
            </div>
            <img
              src={company.profileImage}
              alt={company.name}
              className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-200"
            />
            <div>
              <p className="font-semibold text-gray-800">{company.name}</p>
              <p className="text-sm text-gray-600">{company.specialty}</p>
              <div className="flex items-center text-yellow-500 text-sm">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07