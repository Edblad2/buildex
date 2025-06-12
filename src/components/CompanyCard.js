import React from 'react';

const CompanyCard = ({ company, onSelectCompany }) => {
  return (
    <div
      className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-100"
      onClick={() => onSelectCompany(company)}
    >
      <img
        src={company.profileImage}
        alt={company.name}
        className="w-32 h-32 rounded-full object-cover mb-6 border-5 border-blue-200 shadow-lg transform hover:scale-110 transition-transform duration-300"
      />
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h3>
      <p className="text-gray-600 text-md mb-3 font-medium">{company.specialty} ({company.category})</p>
      <div className="flex items-center text-yellow-500 mb-4">
        <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
        </svg>
        <span className="text-gray-800 font-extrabold text-xl">{company.rating}</span>
        <span className="text-gray-500 text-sm ml-2">({company.projects} proyectos)</span>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{company.description.substring(0, 100)}...</p>
      <button
        onClick={(e) => { e.stopPropagation(); onSelectCompany(company); }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg transform hover:scale-105 mt-auto"
      >
        Ver Detalles
      </button>
    </div>
  );
};

export default CompanyCard;