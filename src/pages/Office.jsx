import Box from '../components/Box';
import Breadcrumbs from '../components/Breadcrumbs';

const Office = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumbs />
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Office Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map(item => (
          <div
            key={item}
            className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <span className="text-lg">Office Image {item}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Office;
