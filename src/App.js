import React, { useState, useMemo, useRef, useEffect } from 'react';
import LayoutHeader from './components/LayoutHeader';
import CompanyCard from './components/CompanyCard';
import CompanyDetailModal from './components/CompanyDetailModal';
import CategoryFilter from './components/CategoryFilter';
import { enhancedCompanies } from './mock/companies'; // Assuming companies.js exports enhancedCompanies

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef(null);

  const filteredCompanies = useMemo(() => {
    let filtered = enhancedCompanies;
    if (searchQuery) {
      filtered = filtered.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(company => company.category === selectedCategory);
    }
    return filtered.sort((a, b) => b.rating - a.rating);
  }, [selectedCategory, searchQuery]);

  const topCompanies = useMemo(() => {
    return [...enhancedCompanies]
      .sort((a, b) => b.rating - a.rating || b.projects - a.projects)
      .slice(0, 10);
  }, []);

  const featuredProjects = useMemo(() => {
    const projects = [];
    enhancedCompanies.forEach(company => {
      if (company.featuredProjects && company.featuredProjects.length > 0) {
        company.featuredProjects.forEach(project => {
          projects.push({
            ...project,
            companyName: company.name,
            companyId: company.id
          });
        });
      }
    });
    return projects.slice(0, 6); // Show more projects for a "boom" effect
  }, []);

  const handleSelectCompany = (company) => {
    setSelectedCompany(company);
    setShowRecommendations(false);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowRecommendations(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

          {/* Search Bar with Recommendations */}
          <div className="mb-8 flex justify-center relative" ref={searchRef}>
            <input
              type="text"
              placeholder="Busca empresas por nombre..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setShowRecommendations(true); }}
              onFocus={() => setShowRecommendations(true)}
              className="w-full max-w-md p-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300 shadow-md bg-white text-gray-700"
            />
            {showRecommendations && searchQuery && (
              <div className="absolute top-full mt-2 w-full max-w-md bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                {enhancedCompanies
                  .filter(company => company.name.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map(company => (
                    <div
                      key={company.id}
                      onClick={() => handleSelectCompany(company)}
                      className="p-3 hover:bg-gray-100 cursor-pointer text-lg text-gray-800"
                    >
                      {company.name}
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Category Filter with Only "Todas" */}
          <CategoryFilter
            categories={['Todas']} // Force only "Todas" category
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />

          {/* Featured Projects Section with "Boom" Effect */}
          <section className="mb-16">
            <h3 className="text-4xl font-extrabold text-yellow-600 mb-8 text-center animate-bounce">Proyectos Destacados 🚀</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={`${project.companyId}-${index}`}
                  className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl shadow-2xl p-8 flex flex-col items-center text-center text-white transform hover:scale-105 transition-all duration-500 animate-pulse"
                >
                  <div className="w-48 h-48 bg-white rounded-full overflow-hidden mb-6">
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-2xl font-bold mb-2">{project.name}</h4>
                  <p className="text-lg font-medium">{project.companyName}</p>
                  <div className="mt-4 bg-white text-gray-800 px-4 py-2 rounded-full animate-spin-slow">
                    ¡Explora!
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Top Companies Ranking */}
          <section className="mb-16">
            <h3 className="text-4xl font-extrabold text-green-600 mb-8 text-center animate-pulse">Ranking de Mejores Empresas 🏆</h3>
            <div className="grid grid-cols-1 gap-6">
              {topCompanies.map((company, index) => (
                <div
                  key={company.id}
                  className="bg-white rounded-2xl shadow-lg p-6 flex items-center justify-between animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full font-bold text-xl ${getRankColor(index + 1)}`}>
                      {index + 1}
                    </div>
                    <img
                      src={company.profileImage}
                      alt={company.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-lg">{company.name}</p>
                      <p className="text-sm text-gray-600">{company.specialty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-yellow-500 font-bold text-xl">{company.rating} ★</p>
                    <p className="text-gray-500 text-sm">{company.projects} proyectos</p>
                    <p className="text-green-600 font-bold">{Math.round(company.rating * 1000 + company.projects * 100)} XP</p>
                  </div>
                  <button
                    onClick={() => handleSelectCompany(company)}
                    className="ml-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    Ver Perfil
                  </button>
                </div>
              ))}
            </div>
          </section>

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

// Helper function for rank colors
const getRankColor = (rank) => {
  switch (rank) {
    case 1: return 'bg-yellow-400 text-yellow-900';
    case 2: return 'bg-gray-300 text-gray-800';
    case 3: return 'bg-amber-700 text-white';
    default: return 'bg-gray-100 text-gray-700';
  }
};

export default App;
