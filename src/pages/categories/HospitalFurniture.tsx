import { ArrowLeft, Bed, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function HospitalFurniture() {
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
      'Manual Hospital Bed': 'Three-function manual hospital bed with adjustable height and backrest.',
      'Semi-Fowler Bed': 'Two-section hospital bed with adjustable head and knee sections.',
      'Fowler Bed': 'Multi-position hospital bed with electric controls for patient comfort.',
      'ICU Bed': 'Advanced ICU bed with electronic controls and integrated monitoring systems.',
      'Bedside Locker': 'Mobile bedside cabinet with storage compartments and overbed table.',
      'Overbed Table': 'Height-adjustable overbed table with tilting top for patient meals and activities.',
      'Wheelchair': 'Standard manual wheelchair with comfortable seating and easy maneuverability.',
      'Stretcher': 'Emergency transport stretcher with adjustable height and safety rails.',
      'Wash Basin': 'Stainless steel wash basin with faucet for patient hygiene needs.',
      'Modular OT Control Panel': 'Ceiling-mounted OT control panel with gas outlets and electrical connections.',
      'Hospital Almirah': 'Medical storage cabinet with multiple compartments for supplies and equipment.',
      'Dressing Trolley': 'Mobile dressing trolley with multiple drawers for wound care supplies.',
      'Instrument Trolley': 'Stainless steel instrument trolley with multiple shelves for surgical tools.',
      'OT Table': 'Electric operating table with multiple positioning options and accessories.',
      'OT Light': 'LED surgical light with shadowless illumination and adjustable intensity.',
      'Examination Table': 'Adjustable examination table with paper roll holder and storage.',
      'Collapsible Ambulance Stretcher': 'Lightweight collapsible stretcher for emergency medical services.'
    };
    return descriptions[productName] || 'High-quality hospital furniture designed for comfort and functionality.';
  };
  const productCategories = [
    {
      title: 'Hospital Beds',
      products: [
        { name: 'Manual Hospital Bed', image: '/Manual Hospital bed.png' },
        { name: 'Semi-Fowler Bed', image: '/Semi-fowler bed.png' },
        { name: 'Fowler Bed', image: '/Fowler bed.png' },
        { name: 'ICU Bed', image: '/ICU Bed.png' }
      ]
    },
    {
      title: 'Furniture & Mobility Equipment',
      products: [
        { name: 'Bedside Locker', image: '/Bed-side locker.png' },
        { name: 'Overbed Table', image: '/Overbed Table.png' },
        { name: 'Wheelchair', image: '/Wheelchair.png' },
        { name: 'Stretcher', image: '/Stretcher.png' },
        { name: 'Wash Basin', image: '/Wash basin.jpg' }
      ]
    },
    {
      title: 'Medical Trolleys & Infrastructure',
      products: [
        { name: 'Modular OT Control Panel', image: '/Modular OT control Panel.png' },
        { name: 'Hospital Almirah', image: '/Hospital Almirah.png' },
        { name: 'Dressing Trolley', image: '/Dressing Trolley.jpg' },
        { name: 'Instrument Trolley', image: '/Instrument Trolley.jpg' },
        { name: 'OT Table', image: '/OT Table.jpg' },
        { name: 'OT Light', image: '/OT Light.png' },
        { name: 'Examination Table', image: '/Examination Table.jpg' },
        { name: 'Collapsible Ambulance Stretcher', image: '/Collapsible Ambulance Sretcher.jpg' },

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
            <Bed className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Hospital Furniture</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comfortable and durable hospital furniture for patient care and medical facilities.
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