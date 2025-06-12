import React from 'react';

const HomeFeed = () => {
  const posts = [
    {
      id: '1',
      company: 'Constructora El Progreso',
      profileImage: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=CE',
      content: '¡Terminamos el proyecto "Torres del Río"! 🏗️ 200 apartamentos entregados con éxito en Medellín. ¡Orgullosos de nuestro equipo!',
      image: 'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Proyecto+Torres+del+Rio',
      likes: 120,
      comments: 15,
      time: 'Hace 2 horas'
    },
    {
      id: '2',
      company: 'Ingeniería Futura',
      profileImage: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=IF',
      content: 'Avanzando en la construcción del nuevo puente sobre el río Aburrá. ¡Conectando Antioquia! #Infraestructura #Antioquia',
      image: 'https://via.placeholder.com/600x400/33FF57/FFFFFF?text=Puente+Aburra',
      likes: 85,
      comments: 8,
      time: 'Hace 5 horas'
    },
    {
      id: '3',
      company: 'Diseños Urbanos S.A.S.',
      profileImage: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=DU',
      content: 'Presentando nuestro último diseño de vivienda sostenible en Sabaneta. ¡Innovación y respeto por el medio ambiente! 🌳',
      image: 'https://via.placeholder.com/600x400/3357FF/FFFFFF?text=Vivienda+Sostenible',
      likes: 95,
      comments: 12,
      time: 'Ayer'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 pt-20">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Novedades del Sector
      </h2>
      <div className="max-w-2xl mx-auto space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <img
                src={post.profileImage}
                alt={post.company}
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-100"
              />
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">{post.company}</h3>
                <p className="text-gray-500 text-sm">{post.time}</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
            {post.image && (
              <img
                src={post.image}
                alt="Post visual"
                className="w-full h-auto rounded-xl mb-4 object-cover"
              />
            )}
            <div className="flex justify-between items-center text-gray-600 text-sm">
              <div className="flex items-center space-x-4">
                <button className="flex items-center hover:text-black transition-colors">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 22l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  <span>{post.likes} Me gusta</span>
                </button>
                <button className="flex items-center hover:text-black transition-colors">
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                  <span>{post.comments} Comentarios</span>
                </button>
              </div>
              <button className="flex items-center hover:text-black transition-colors">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.882 13.077 9 12.729 9 12c0-.729-.118-1.077-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"></path>
                </svg>
                <span>Compartir</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeed;