import React, { useState, useMemo } from 'react';
import LayoutHeader from './components/LayoutHeader';
import CompanyCard from './components/CompanyCard';
import CompanyDetailModal from './components/CompanyDetailModal';
import CategoryFilter from './components/CategoryFilter';
import { companies } from './mock/companies';

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(companies.map(company => company.category))];
    return uniqueCategories.sort();
  }, []);

  const filteredCompanies = useMemo(() => {
    if (selectedCategory === 'Todas') {
      return companies.sort((a, b) => b.rating - a.rating);
    }
    return companies
      .filter(company => company.category === selectedCategory)
      .sort((a, b) => b.rating - a.rating);
  }, [selectedCategory]);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans antialiased">
      <LayoutHeader />
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6 text-center leading-tight animate-fade-in-up">
            Encuentra las Mejores Empresas de Construcción en Antioquia
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-4xl mx-auto animate-fade-in-up delay-100">
            Descubre profesionales de confianza y calidad para tu próximo proyecto.
            Explora por categorías y contacta directamente a los expertos.
          </p>

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                onSelectCompany={handleSelectCompany}
              />
            ))}
          </div>
        </div>
      </main>

      <CompanyDetailModal
        company={selectedCompany}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default App;

// DONE