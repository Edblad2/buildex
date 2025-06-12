import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'Juan Pérez',
    title: 'Ingeniero Civil',
    location: 'Medellín, Antioquia',
    bio: 'Apasionado por la construcción sostenible y la innovación en proyectos de infraestructura. Con más de 10 años de experiencia en el sector.',
    profileImage: 'https://via.placeholder.com/150/60A5FA/FFFFFF?text=JP',
    projectsCompleted: 8,
    connections: 150,
    skills: ['Gestión de Proyectos', 'Diseño Estructural', 'AutoCAD', 'BIM', 'Sostenibilidad'],
    contact: {
      email: 'juan.perez@example.com',
      phone: '3001112233'
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row items-center md:items-start mb-6">
          <img
            src={user.profileImage}
            alt={user.name}
            className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8 border-4 border-gray-100 shadow-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-1">{user.name}</h2>
            <p className="text-xl text-gray-700 mb-2">{user.title}</p>
            <p className="text-gray-500 text-md mb-4">{user.location}</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-800">{user.projectsCompleted}</span>
                <span className="text-gray-500 text-sm">Proyectos</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-gray-800">{user.connections}</span>
                <span className="text-gray-500 text-sm">Conexiones</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Acerca de mí</h3>
          <p className="text-gray-700 leading-relaxed">{user.bio}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Habilidades</h3>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 border-b pb-2">Contacto</h3>
          <p className="text-gray-700">Email: <a href={`mailto:${user.contact.email}`} className="text-blue-600 hover:underline">{user.contact.email}</a></p>
          <p className="text-gray-700">Teléfono: <a href={`tel:${user.contact.phone}`} className="text-blue-600 hover:underline">{user.contact.phone}</a></p>
        </div>

        <button
          onClick={() => alert('Editando perfil...')}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-colors text-lg font-semibold shadow-md"
        >
          Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default UserProfile;