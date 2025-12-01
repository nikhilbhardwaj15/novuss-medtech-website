import { ArrowLeft, Clock, Shield, CheckCircle, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RentalLeasing() {
  const [showRentalModal, setShowRentalModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    rentalDuration: '',
    startDate: '',
    phoneNumber: '',
    name: '',
    email: '',
    address: ''
  });

  const handleGetRental = (productName: string) => {
    setFormData(prev => ({ ...prev, productName }));
    setShowRentalModal(true);
  };

  const handleSubmitRental = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const rentalRequest = {
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };
    
    const existingRentals = JSON.parse(localStorage.getItem('rentalRequests') || '[]');
    existingRentals.push(rentalRequest);
    localStorage.setItem('rentalRequests', JSON.stringify(existingRentals));
    
    alert('Rental request submitted! Our team will contact you within 24 hours.');
    setShowRentalModal(false);
    setFormData({ productName: '', rentalDuration: '', startDate: '', phoneNumber: '', name: '', email: '', address: '' });
    setTimeout(() => {
      alert('Thank you, we will get back to you!');
    }, 100);
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const rentalCategories = [
    {
      title: 'Respiratory Support Equipment',
      products: [
        { name: 'Oxygen Concentrator', image: '/Oxygen concentrator.png', dailyRate: '₹500', weeklyRate: '₹3,000', monthlyRate: '₹10,000' },
        { name: 'BiPAP Machine', image: '/BiPAP Machine.jpg', dailyRate: '₹800', weeklyRate: '₹5,000', monthlyRate: '₹18,000' },
        { name: 'CPAP Machine', image: '/Cpap.png', dailyRate: '₹600', weeklyRate: '₹3,500', monthlyRate: '₹12,000' },
        { name: 'Ventilator', image: '/Ventilator.png', dailyRate: '₹2,000', weeklyRate: '₹12,000', monthlyRate: '₹45,000' }
      ]
    },
    {
      title: 'Hospital Furniture & Infrastructure',
      products: [
        { name: 'Manual Hospital Bed', image: '/Manual Hospital bed.png', dailyRate: '₹300', weeklyRate: '₹1,800', monthlyRate: '₹6,000' },
        { name: 'ICU Bed', image: '/ICU Bed.png', dailyRate: '₹800', weeklyRate: '₹5,000', monthlyRate: '₹18,000' },
        { name: 'Wheelchair', image: '/Wheelchair.png', dailyRate: '₹100', weeklyRate: '₹600', monthlyRate: '₹2,000' },
        { name: 'Stretcher', image: '/Stretcher.png', dailyRate: '₹200', weeklyRate: '₹1,200', monthlyRate: '₹4,000' },
        { name: 'Examination Table', image: '/Examination Table.jpg', dailyRate: '₹250', weeklyRate: '₹1,500', monthlyRate: '₹5,000' }
      ]
    },
    {
      title: 'Medical Gas & Supplies',
      products: [
        { name: 'Oxygen Cylinder', image: '/oxygen-cylinder.jpg', dailyRate: '₹150', weeklyRate: '₹900', monthlyRate: '₹3,000' },
        { name: 'Heavy Duty Cylinder Trolley', image: '/Heavy duty cylinder trolley.jpg', dailyRate: '₹100', weeklyRate: '₹600', monthlyRate: '₹2,000' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <ArrowLeft className="w-6 h-6 text-gray-700" />
            <span className="text-gray-700 font-medium">Back to Home</span>
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
            <Clock className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Rental & Leasing Solutions</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Flexible rental options for medical equipment with maintenance and support included.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl border border-gray-200 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-[#6B8E23]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Flexible Duration</h3>
                <p className="text-gray-600">Daily, weekly, or monthly rental options to suit your needs.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-[#6B8E23]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Full Maintenance</h3>
                <p className="text-gray-600">Complete maintenance and technical support included in rental.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-[#6B8E23]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Quality Assured</h3>
                <p className="text-gray-600">All equipment is sanitized, tested, and certified before delivery.</p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {rentalCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#6B8E23]/20 pb-4">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                      <div className="relative h-48 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-contain bg-gray-50" />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                          <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                        </div>
                        <div className="absolute top-3 left-3 bg-[#6B8E23] text-white px-2 py-1 rounded text-xs font-medium">
                          RENTAL
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-gray-800 mb-2">{product.name}</h3>
                        <div className="space-y-1 mb-4">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Daily:</span>
                            <span className="font-semibold text-[#6B8E23]">{product.dailyRate}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Weekly:</span>
                            <span className="font-semibold text-[#6B8E23]">{product.weeklyRate}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Monthly:</span>
                            <span className="font-semibold text-[#6B8E23]">{product.monthlyRate}</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleGetRental(product.name)}
                          className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                        >
                          Request Rental
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Rental Terms & Conditions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Included Services:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Free delivery and pickup</li>
                  <li>• Complete sanitization</li>
                  <li>• Technical support</li>
                  <li>• Maintenance during rental</li>
                  <li>• User training if required</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-3">Rental Requirements:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Valid ID proof required</li>
                  <li>• Security deposit applicable</li>
                  <li>• Minimum rental period: 1 day</li>
                  <li>• Advance booking recommended</li>
                  <li>• Terms & conditions apply</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Rental Modal */}
      {showRentalModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Request Rental</h3>
                <button 
                  onClick={() => setShowRentalModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <form onSubmit={handleSubmitRental} className="space-y-4">
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
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Rental Duration *
                  </label>
                  <select
                    required
                    value={formData.rentalDuration}
                    onChange={(e) => setFormData(prev => ({ ...prev, rentalDuration: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                  >
                    <option value="">Select duration</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Custom">Custom Duration</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date *
                  </label>
                  <input
                    type="date"
                    required
                    min={getTomorrowDate()}
                    value={formData.startDate}
                    onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Delivery Address *
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter complete delivery address"
                  />
                </div>
                
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowRentalModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white rounded-lg hover:from-[#556B2F] hover:to-[#6B8E23] transition-all flex items-center justify-center space-x-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Submit Request</span>
                  </button>
                </div>
              </form>
              
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <p className="text-sm text-green-700">
                  📞 Our team will contact you within 24 hours with rental details and pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}