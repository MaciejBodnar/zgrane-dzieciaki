import Breadcrumbs from '../../components/Breadcrumbs';
import { FaMoneyBill } from 'react-icons/fa';

const Pricing = () => {
  const pricingCategories = [
    {
      title: 'Integracja Sensoryczna',
      services: [
        {
          name: 'Diagnoza – ilość spotkań w ramach badania dostosowana do potrzeb + omówienie (ok. 3×60 min.)',
          price: '500 zł /450 zł*',
        },
        { name: 'Rediagnoza (90-120 min.)', price: '350 zł' },
        { name: 'Konsultacja (60 min.)/opinia na piśmie', price: '200 zł /100 zł' },
        { name: 'Terapia (50 min.)', price: '150 zł /140 zł*' },
        {
          name: 'Karnet 10 zajęć (ważny 90 dni od daty pierwszych zajęć z pakietu)',
          price: '1400 zł',
        },
      ],
    },
    {
      title: 'Neuroflow – aktywny trening słuchowy',
      services: [
        { name: 'Badanie i diagnoza/diagnoza międzyetapowa', price: '300 zł /250 zł' },
        {
          name: 'Opłaty za każdy etap terapii wnoszą rodzice bezpośrednio na konto administratora platformy APD Medical',
          price: '',
        },
      ],
    },
    {
      title: 'Logopedia',
      services: [
        { name: 'Terapia (30 min.)/Karnet 4 zajęć (płatne z góry)**', price: '90 zł /340 zł' },
        { name: 'Terapia (45 min.)/Karnet 4 zajęć (płatne z góry)**', price: '140 zł /540 zł' },
        { name: 'Konsultacja (60 min.)/opinia na piśmie', price: '200 zł /100 zł' },
      ],
    },
    {
      title: 'Terapia pedagogiczna',
      services: [
        { name: 'Konsultacja (60 min.)/opinia na piśmie', price: '200 zł /100 zł' },
        { name: 'Terapia (50 min.)', price: '140 zł' },
        { name: 'Karnet 4 zajęć (płatne z góry)**', price: '540 zł' },
      ],
    },
    {
      title: 'Terapia psychologiczna',
      services: [
        {
          name: 'Konsultacja (60 min.)/spotkanie (min. dwa oddzielne spotkania z rodzicami/em i dzieckiem)',
          price: '200 zł',
        },
        { name: 'Spotkania indywidualne/psychoterapia (50 min.)', price: '180 zł' },
        { name: 'Karnet 4 zajęć (płatne z góry)**', price: '680 zł' },
      ],
    },
    {
      title: 'Terapia ręki',
      services: [
        { name: 'Konsultacja (60 min.)/opinia na piśmie', price: '200 zł /100 zł' },
        { name: 'Terapia (50 min.)', price: '140 zł' },
        { name: 'Karnet 4 zajęć (płatne z góry)**', price: '540 zł' },
      ],
    },
    {
      title: 'Trening Umiejętności Społecznych',
      services: [
        { name: 'Pojedyncze zajęcia 5-6 latki (60-75 min.)', price: '90 zł' },
        { name: 'Pojedyncze zajęcia 7 lat i wyżej (75 min.)', price: '100 zł' },
      ],
    },
    {
      title: 'Rehabilitacja/korektywa',
      services: [
        { name: 'Terapia (50 min./30 min.)', price: '140 zł /90 zł' },
        { name: 'Konsultacja (60 min.)', price: '200 zł' },
        { name: 'Opinia dotycząca przebiegu terapii/funkcjonowania dziecka', price: '100 zł' },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Breadcrumbs />

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-500 text-white px-6 py-8 text-center">
          <FaMoneyBill className="text-5xl mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Cennik</h1>
        </div>

        {/* Pricing Tables */}
        <div className="p-6 space-y-8">
          {pricingCategories.map((category, index) => (
            <div key={index} className="overflow-hidden">
              <h2 className="text-xl font-semibold text-blue-900 mb-4 px-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category.title}
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Zajęcia/Usługa
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-1/4"
                      >
                        Cena
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {category.services.map((service, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm text-gray-900">{service.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-900 text-right font-medium">
                          {service.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="bg-gray-50 p-6 space-y-3">
          <p className="text-sm text-gray-600">
            * dla dzieci, które korzystają z dwóch godzin terapii w tygodniu lub z terapii SI i
            innej terapii dostępnej w CRD Zgrane Dzieciaki lub rodzeństwa
          </p>
          <p className="text-sm text-gray-600">
            ** Karnet ważny w ciągu 5 tygodni od daty pierwszych zajęć z pakietu
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
