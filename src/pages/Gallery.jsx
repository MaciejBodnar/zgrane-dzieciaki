import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import officeImage from '../assets/Gabinet.jpg'; // Import your images
import classesImage from '../assets/ChłopiecWMateracu.jpg';
import therapyImage from '../assets/ChłopiecWSłuchawkach.jpg';

const Gallery = () => {
  const galleries = [
    {
      title: 'Gabinet',
      image: officeImage,
      link: '/gallery/office',
      description: 'Zobacz nasz gabinet i jego wyposażenie',
    },
    {
      title: 'Zajęcia',
      image: classesImage,
      link: '/gallery/classes',
      description: 'Zdjęcia z prowadzonych zajęć',
    },
    {
      title: 'Terapia',
      image: therapyImage,
      link: '/gallery/therapy',
      description: 'Galeria zdjęć z terapii',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Galeria</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((gallery, index) => (
          <Link
            key={index}
            to={gallery.link}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:-translate-y-1"
          >
            {/* Image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={gallery.image}
                alt={gallery.title}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
              <h3 className="text-xl font-bold text-white mb-2">{gallery.title}</h3>
              <p className="text-white/90 text-sm">{gallery.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
