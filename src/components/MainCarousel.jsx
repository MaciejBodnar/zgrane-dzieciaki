import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import logo from '../assets/IntegracjaSensoryczna.png';
import headPhones from '../assets/Słuchawki.jpg';
import tus from '../assets/Tus.png';
import logopeda from '../assets/Logopeda.png';
import korektywa from '../assets/Korektywa.png';
import { Link } from 'react-router-dom';

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-1 sm:right-6 top-1/2 p-1 -translate-y-1/2 z-10 bg-white/90 hover:bg-white sm:p-2 xl:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaArrowRight className="text-blue-600 text-xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-1 sm:left-6 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-1 sm:p-2 xl:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
  >
    <FaArrowLeft className="text-blue-600 text-xl" />
  </button>
);

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    fade: true,
  };

  const slides = [
    {
      title: 'Integracja Sensoryczna',
      description:
        'Profesjonalna terapia integracji sensorycznej, która pomoże Twojemu dziecku w rozwoju.',
      image: logo,
      buttonText: 'Dowiedz się więcej',
      buttonLink: '/oferta/intergacja-sensoryczna',
      color: 'from-blue-600 to-indigo-600',
      buttonStyle: 'bg-indigo-600 hover:bg-indigo-700 text-white',
    },
    {
      title: 'Terapia Słuchowa',
      description: 'Specjalistyczna terapia słuchowa wspierająca rozwój Twojego dziecka.',
      image: headPhones,
      buttonText: 'Poznaj szczegóły',
      buttonLink: '/oferta/trening-neuroflow',
      color: 'from-purple-600 to-pink-600',
      buttonStyle: 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50',
    },
    {
      title: 'Trening Umiejętności Społecznych',
      description: 'Kompleksowy program rozwijający umiejętności społeczne.',
      image: tus,
      buttonText: 'Zobacz program',
      buttonLink: '/oferta/trening-umiejetnosci-spolecznych',
      color: 'from-green-600 to-teal-600',
      buttonStyle: 'bg-teal-600 hover:bg-teal-700 text-white',
    },
    {
      title: 'Terapia Logopedyczna',
      description: 'Profesjonalna pomoc logopedyczna dla dzieci w każdym wieku.',
      image: logopeda,
      buttonText: 'Dowiedz się więcej',
      buttonLink: '/oferta/logopedia',
      color: 'from-orange-600 to-red-600',
      buttonStyle: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50',
    },
    {
      title: 'Gimnastyka Korekcyjna',
      description: 'Zajęcia korekcyjne prowadzone przez doświadczonych specjalistów.',
      image: korektywa,
      buttonText: 'Zobacz więcej',
      buttonLink: '/oferta/korektywa',
      color: 'from-cyan-600 to-blue-600',
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
    },
  ];

  return (
    <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative overflow-hidden">
            <Link to={slide.buttonLink} className="block">
              <div className="flex flex-col md:grid md:grid-cols-2 min-h-[600px] gap-0 group cursor-pointer">
                {/* Image Section */}
                <div className="relative h-[300px] md:h-full order-1 md:order-2 overflow-hidden">
                  {slide.image ? (
                    <div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-10`}
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                      <span className="text-gray-400 text-lg">Image {index + 1}</span>
                    </div>
                  )}
                </div>

                {/* Content Section */}
                <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-12 md:py-16 bg-white order-2 md:order-1 relative overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className={`absolute inset-0 bg-gradient-to-br ${slide.color}`} />
                  </div>

                  <div className="relative z-10">
                    <h2
                      className={`text-4xl md:text-5xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r ${slide.color}`}
                    >
                      {slide.title}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="relative inline-block">
                      <button
                        className={`${slide.buttonStyle} px-8 py-4 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg text-lg font-semibold`}
                      >
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-dots {
          bottom: 0;
          padding: 12px 0;
          z-index: 20;
          margin: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.2), transparent);
        }
        .slick-dots li {
          margin: 0 6px;
        }
        .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.7;
          transition: all 0.3s ease;
        }
        .slick-dots li.slick-active button:before {
          opacity: 1;
          transform: scale(1.5);
          color: white;
        }
        .slick-dots li button:hover:before {
          opacity: 1;
        }
        .slick-slider {
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .slick-dots {
            bottom: 0;
          }
          .slick-dots li button:before {
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default MainCarousel;
