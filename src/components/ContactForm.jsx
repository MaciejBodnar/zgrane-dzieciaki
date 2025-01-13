import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [phoneError, setPhoneError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = e => {
    let value = e.target.value.replace(/[^\d]/g, ''); // Remove all non-digits

    // If the input is empty, set it to +48
    if (value.length === 0) {
      setFormData(prev => ({
        ...prev,
        phone: '+48 ',
      }));
      return;
    }

    // Remove +48 prefix if exists in the number
    if (value.startsWith('48')) {
      value = value.slice(2);
    }

    // Format the number with spaces
    let formattedNumber = '';
    if (value.length <= 3) {
      formattedNumber = '+48 ' + value;
    } else if (value.length <= 6) {
      formattedNumber = '+48 ' + value.slice(0, 3) + ' ' + value.slice(3);
    } else {
      formattedNumber =
        '+48 ' + value.slice(0, 3) + ' ' + value.slice(3, 6) + ' ' + value.slice(6, 9);
    }

    setFormData(prev => ({
      ...prev,
      phone: formattedNumber,
    }));

    // Validate the phone number
    const phoneRegex = /^\+48\s\d{3}\s\d{3}\s\d{3}$/;
    if (value.length > 0 && !phoneRegex.test(formattedNumber)) {
      setPhoneError('Proszę wprowadzić 9 cyfr numeru telefonu');
    } else {
      setPhoneError('');
    }
  };

  const handleKeyDown = e => {
    // Allow: backspace, delete, tab, escape, enter
    if (
      [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
      // Allow: Ctrl+A, Command+A
      (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) ||
      // Allow: home, end, left, right, down, up
      (e.keyCode >= 35 && e.keyCode <= 40)
    ) {
      return;
    }
    // Ensure that it is a number and stop the keypress if not
    if ((e.shiftKey || e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      e.preventDefault();
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
        <div className="text-center py-8">
          <div className="mb-6">
            <svg
              className="mx-auto h-16 w-16 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dziękujemy za wiadomość!</h2>
          <p className="text-gray-600 mb-8">Odpowiemy najszybciej jak to możliwe.</p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
              });
            }}
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Wyślij kolejną wiadomość
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Napisz do nas</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Imię i nazwisko
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="Imię i nazwisko"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
              placeholder="e-mail@poczta.pl"
            />
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyDown}
            placeholder="+48 XXX XXX XXX"
            className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 
              ${phoneError ? 'border-red-500' : 'border-gray-300'}`}
          />
          {phoneError && <p className="mt-1 text-sm text-red-600">{phoneError}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Twoja wiadomość..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Wyślij wiadomość
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
