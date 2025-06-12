import React, { useState } from 'react';
import CompanyCard from './CompanyCard';
import CompanyDetailModal from './CompanyDetailModal';
import { companies } from '../mock/companies';

const CompanyListings = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Explora Empresas de Construcción en Antioquia
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onSelectCompany={handleSelectCompany}
          />
        ))}
      </div>

      <CompanyDetailModal
        company={selectedCompany}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default CompanyListings;