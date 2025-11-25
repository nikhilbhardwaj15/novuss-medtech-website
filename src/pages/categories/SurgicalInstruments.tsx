import { ArrowLeft, Scissors, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function SurgicalInstruments() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    phoneNumber: '',
    name: ''
  });

  const handleGetQuote = (productName: string) => {
    setFormData(prev => ({ ...prev, productName }));
    setShowQuoteModal(true);
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Quote request submitted! Our team will contact you via WhatsApp soon.');
    setShowQuoteModal(false);
    setFormData({ productName: '', quantity: '', phoneNumber: '', name: '' });
    setTimeout(() => {
      alert('Thank you, we will get back to you!');
    }, 100);
  };

  const getProductDescription = (productName: string): string => {
    const descriptions: { [key: string]: string } = {
      'Surgical Clamps': 'Precision surgical clamps for hemostasis and tissue manipulation.',
      'Retractors': 'Self-retaining and handheld retractors for surgical exposure.',
      'Surgical Scissors': 'Sharp and blunt surgical scissors for cutting tissues and sutures.',
      'Surgical Forceps': 'Tissue and dressing forceps with various tip configurations.',
      'Orthopedic Set': 'Complete orthopedic instrument set for bone and joint surgeries.',
      'Gynecology Set': 'Specialized gynecological instruments for obstetric and gynecologic procedures.',
      'General Surgical Set': 'Basic surgical instrument set for general surgical procedures.',
      'ENT Surgical Set': 'Specialized ENT instruments for ear, nose, and throat surgeries.',
      'ENT Diagnostic Set': 'Diagnostic instruments for ENT examination and assessment.',
      'Otoscope': 'Illuminated otoscope for ear canal and tympanic membrane examination.',
      'Laryngoscope': 'Direct laryngoscope with multiple blade sizes for intubation.',
      'ENT Examination Unit': 'Complete ENT workstation with integrated diagnostic equipment.',
      'Ophthalmic Surgical Instruments': 'Microsurgical instruments for delicate eye surgeries.',
      'Ophthalmic Equipment Station': 'Comprehensive ophthalmic examination and treatment unit.',
      'Ophthalmoscope': 'Direct ophthalmoscope for retinal and fundus examination.',
      'Retinoscope': 'Streak retinoscope for objective refraction measurement.',
      'Dental Chair': 'Electric dental chair with integrated delivery system and lighting.',
      'Ultrasonic Scaler': 'Ultrasonic dental scaler for plaque and calculus removal.',
      'Micromotor': 'High-speed dental micromotor for precision drilling and polishing.',
      'Dental Instrument Set': 'Complete dental examination and treatment instrument set.'
    };
    return descriptions[productName] || 'Professional surgical instrument with precision engineering and durability.';
  };
  const productCategories = [
    {
      title: 'Surgical Instruments & Sets',
      products: [
        { name: 'Surgical Clamps', image: '/Surgical clamps.jpg' },
        { name: 'Retractors', image: '/Retractors.png' },
        { name: 'Surgical Scissors', image: '/surgical scissors.png' },
        { name: 'Surgical Forceps', image: '/surgical forceps.png' },
        { name: 'Orthopedic Set', image: '/Orthopedic.png' },
        { name: 'Gynecology Set', image: '/Gynecology set.jpg' },
        { name: 'General Surgical Set', image: '/General Surgical set.png' },
        { name: 'ENT Surgical Set', image: '/Ent surgical.png' },

      ]
    },
    {
      title: 'ENT Equipment',
      products: [
        { name: 'ENT Diagnostic Set', image: '/ENT Diagnostic Set.jpg' },
        { name: 'Otoscope', image: '/Otoscope.jpg' },
        { name: 'Laryngoscope', image: '/Laryngoscope.png' },
        { name: 'ENT Examination Unit', image: '/Ent examination Unit.png' }
      ]
    },
    {
      title: 'Ophthalmic Equipment',
      products: [
        { name: 'Ophthalmic Surgical Instruments', image: '/Ophthalmic Surgical Instruments.jpg' },
        { name: 'Ophthalmic Equipment Station', image: '/Opthalmic Equipment Station.png' },
        { name: 'Ophthalmoscope', image: '/Opthalmoscope.png' },
        { name: 'Retinoscope', image: '/Retinoscope.png' }
      ]
    },
    {
      title: 'Dental Equipment',
      products: [
        { name: 'Dental Chair', image: '/Dental Chair.png' },
        { name: 'Ultrasonic Scaler', image: '/Ultrasonic Scaler.png' },
        { name: 'Micromotor', image: '/Marathon-Micromotor.jpg' },
        { name: 'Dental Instrument Set', image: '/Dental instrument sets.jpg' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/catalogue" className="flex items-center space-x-3">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700 font-medium">Back to Catalogue</span>
          </Link>
          <div className="flex items-center space-x-3">
            <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-10 w-auto" />
            <div>
              <h1 className="text-xl font-bold text-gray-800">NOVUSS</h1>
              <p className="text-xs text-gray-600">MEDTECH INDUSTRIES</p>
            </div>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Scissors className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Surgical Instruments</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Precision surgical instruments and specialized equipment for medical procedures.
            </p>
          </div>

          <div className="space-y-12">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#6B8E23]/20 pb-4">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-gray-50" />
                        ) : (
                          <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                            <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-16 w-auto opacity-30" />
                          </div>
                        )}
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{getProductDescription(product.name)}</p>
                        <button 
                          onClick={() => handleGetQuote(product.name)}
                          className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                        >
                          Get Quote
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Get Quote</h3>
                <button 
                  onClick={() => setShowQuoteModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitQuote} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    readOnly
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.quantity}
                    onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter quantity needed"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowQuoteModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white rounded-lg hover:from-[#556B2F] hover:to-[#6B8E23] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit Quote</span>
                  </button>
                </div>
              </form>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  📱 Our team will contact you via WhatsApp within 24 hours with a detailed quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}