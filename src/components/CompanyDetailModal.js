import React, { useEffect, useRef } from 'react';

const CompanyDetailModal = ({ company, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!company) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4 animate-fade-in">
      <div
        ref={modalRef}
        className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl w-full relative transform transition-all duration-500 scale-100 opacity-100 animate-slide-up-fade overflow-y-auto max-h-[90vh]"
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800 transition-colors p-2 rounded-full bg-gray-100 hover:bg-gray-200"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={company.profileImage}
            alt={company.name}
            className="w-40 h-40 rounded-full object-cover mb-6 border-6 border-blue-300 shadow-xl animate-pulse-grow"
          />
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">{company.name}</h2>
          <p className="text-gray-700 text-xl mb-2 font-medium">{company.specialty} ({company.category}) en {company.location}</p>
          <div className="flex items-center text-yellow-500 mb-4">
            <svg className="w-7 h-7 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.538 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.783.57-1.838-.197-1.538-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.929 8.72c-.783-.57-.381-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
            </svg>
            <span className="text-gray-800 font-extrabold text-2xl">{company.rating}</span>
            <span className="text-gray-500 text-base ml-2">({company.projects} proyectos completados)</span>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">{company.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-xl shadow-inner border border-blue-100">
            <h4 className="font-bold text-blue-800 text-xl mb-3">Contacto Directo</h4>
            <p className="text-blue-700 text-lg mb-2">Email: <a href={`mailto:${company.contact.email}`} className="font-semibold hover:underline">{company.contact.email}</a></p>
            <p className="text-blue-700 text-lg mb-2">Teléfono: <a href={`tel:${company.contact.phone}`} className="font-semibold hover:underline">{company.contact.phone}</a></p>
            {company.contact.whatsapp && (
              <p className="text-blue-700 text-lg mb-2">
                WhatsApp: <a href={`https://wa.me/${company.contact.whatsapp}`} target="_blank" rel="noopener noreferrer" className="font-semibold text-green-600 hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.6-3.807-1.6-5.844C.144 6.921 6.05 1 13.12 1c3.615 0 7.019 1.406 9.545 3.932 2.526 2.526 3.932 5.93 3.932 9.545 0 7.07-5.906 12.976-13.12 12.976-.988 0-1.97-.115-2.925-.338L.057 24zm6.597-3.807l-.413-.244c-.887-.523-1.432-1.29-1.66-2.201-.228-.91-.163-1.916.19-2.847.353-.931.99-1.714 1.89-2.237.9-.523 1.97-.807 3.07-.807h.002c.988 0 1.97.115 2.925.338l.413.244c.887.523 1.432 1.29 1.66 2.201.228.91.163 1.916-.19 2.847-.353.931-.99 1.714-1.89 2.237-.9.523-1.97.807-3.07.807h-.002c-.988 0-1.97-.115-2.925-.338zM13.12 2.8c-6.01 0-10.92 4.91-10.92 10.92 0 1.88.48 3.71 1.39 5.31l-1.39 5.08 5.21-1.53c1.59.87 3.37 1.34 5.21 1.34 6.01 0 10.92-4.91 10.92-10.92S19.13 2.8 13.12 2.8zM17.5 14.3c-.2-.1-.8-.4-1.1-.5s-.6-.1-.8.1-.3.5-.1.8.5.6.6.8.8.9 1.1 1.2.3.2.2.4.1.3.1.2.1.1-.2.1-.5.1-.8 0-1.1-.3-.6-.8-.9z"/>
                  </svg>
                  {company.contact.whatsapp}
                </a>
              </p>
            )}
            {company.contact.website && (
              <p className="text-blue-700 text-lg">
                Web: <a href={company.contact.website} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline flex items-center">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Visitar Sitio Web
                </a>
              </p>
            )}
          </div>
          <div className="bg-green-50 p-6 rounded-xl shadow-inner border border-green-100">
            <h4 className="font-bold text-green-800 text-xl mb-3">Proyectos Destacados</h4>
            {company.featuredProjects && company.featuredProjects.length > 0 ? (
              <div className="grid grid-cols-1 gap-4">
                {company.featuredProjects.map((project, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden transform hover:scale-105 transition-transform duration-200">
                    <img src={project.image} alt={project.name} className="w-full h-32 object-cover" />
                    <p className="p-3 text-gray-800 font-medium">{project.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No hay proyectos destacados disponibles.</p>
            )}
          </div>
        </div>

        <button
          onClick={() => alert(`Iniciando contacto con ${company.name}...`)}
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-xl font-bold shadow-lg transform hover:scale-105"
        >
          ¡Contactar Ahora!
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailModal;