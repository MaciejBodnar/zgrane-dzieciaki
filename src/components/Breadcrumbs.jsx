import { Link, useLocation } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Create breadcrumb mapping
  const breadcrumbNameMap = {
    offer: 'Offer',
    study: 'Study',
    sensory: 'Sensory Tests',
    about: 'About',
    standards: 'Standards',
    gallery: 'Gallery',
    office: 'Office',
    classes: 'Classes',
    therapy: 'Therapy',
    rodo: 'RODO',
    'cranial-therapy': 'Cranial Therapy',
    neuroflow: 'Neuroflow',
    corrective: 'Corrective',
    'hand-therapy': 'Hand Therapy',
    'speech-therapy': 'Speech Therapy',
    pricing: 'Pricing',
    contact: 'Contact',
  };

  return (
    <div className="bg-gray-100 py-2 px-4 rounded-md mb-6 flex items-center flex-wrap">
      <Link to="/" className="text-gray-600 hover:text-blue-500">
        Home
      </Link>

      {pathnames.map((value, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        return (
          <div key={to} className="flex items-center">
            <FaChevronRight className="mx-2 text-gray-400" size={12} />
            {last ? (
              <span className="text-blue-500">{breadcrumbNameMap[value] || value}</span>
            ) : (
              <Link to={to} className="text-gray-600 hover:text-blue-500">
                {breadcrumbNameMap[value] || value}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
