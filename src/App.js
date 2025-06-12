import React, { useState, useMemo } from 'react';
import LayoutHeader from './components/LayoutHeader';
import CompanyCard from './components/CompanyCard';
import CompanyDetailModal from './components/CompanyDetailModal';
import CategoryFilter from './components/CategoryFilter';
import { companies } from './mock/companies';

// Add a fictional Duolingo Constructora to the companies data
const enhancedCompanies = [
  ...companies,
  {
    id: '10',
    name: 'Duolingo Constructora',
    location: 'Medellín',
    specialty: 'Proyectos Educativos',
    category: 'Obra Gris',
    rating: 4.9,
    projects: 22,
    description: 'Líder en construcción de espacios educativos y residenciales innovadores, combinando tecnología y sostenibilidad.',
    profileImage: 'https://via.placeholder.com/150/00FF7F/FFFFFF?text=DC',
    contact: {
      email: 'contacto@duolingoconstructora.com',
      phone: '3005556677',
      whatsapp: '573005556677',
      website: 'https://www.duolingoconstructora.com'
    },
    featuredProjects: [
      { name: 'Campus Verde', image: 'https://via.placeholder.com/400x250/00FF7F/FFFFFF?text=Campus+Verde' },
      { name: 'Edificio Duo', image: 'https://via.placeholder.com/400x250/00FF7F/FFFFFF?text=Edificio+Duo' }
    ]
  }
];

const App = () => {
  const [selectedCompany, setSelectedCompany] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(enhancedCompanies.map(company => company.category))];
    return ['Todas', ...uniqueCategories.sort()];
  }, []);

  const filteredCompanies = useMemo(() => {
    let filtered = enhancedCompanies;
    if (selectedCategory !== 'Todas') {
      filtered = filtered.filter(company => company.category === selectedCategory);
    }
    if (searchQuery) {
      filtered = filtered.filter(company => 
        company.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered.sort((a, b) => b.rating - a.rating);
  }, [selectedCategory, searchQuery]);

  // Select top 3 companies by rating for the Top Companies section
  const topCompanies = useMemo(() => {
    return [...enhancedCompanies]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 3);
  }, []);

  // Select a few featured projects from companies
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
    // Limit to 3 projects for display
    return projects.slice(0, 3);
  }, []);

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

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <input
              type="text"
              placeholder="Busca empresas por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full max-w-md p-4 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm bg-white text-gray-700"
            />
          </div>

          {/* Featured Projects Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Proyectos Destacados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={`${project.companyId}-${index}`}
                  className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-xl mb-6" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
                  <p className="text-gray-600 font-medium">{project.companyName}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Companies Section */}
          <section className="mb-16">
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Mejores Empresas</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {topCompanies.map(company => (
                <div
                  key={company.id}
                  className="bg-white rounded-3xl shadow-xl p-7 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  onClick={() => handleSelectCompany(company)}
                >
                  <img
                    src={company.profileImage}
                    alt={company.name}
                    className="w-32 h-32 rounded-full object-cover mb-6 border-5 border-blue-200 shadow-lg transform hover:scale-110 transition-transform duration-300"
                  />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{company.name}</h4>
                  <p className="text-gray-600 text-md mb-3 font-medium">{company.specialty}</p>
                  <div className="flex items-center text-yellow-500 mb-4">
                    <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3 .921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783 .57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81 .588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-800 font-extrabold text-xl">{company.rating}</span>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">{company.description.substring(0, 100)}...</p>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleSelectCompany(company); }}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-lg font-semibold shadow-lg transform hover:scale-105 mt-auto"
                  >
                    Ver Detalles
                  </button>
                </div>
              ))}
            </div>
          </section>

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
