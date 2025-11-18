import { ArrowLeft, Download, FileText, Eye, Activity, Stethoscope, Shield, Users, Zap, Cpu, Microscope, Heart, Bed, Scissors, Scale, FlaskConical, Thermometer, Syringe, X, MessageCircle, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Catalogue() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    phoneNumber: '',
    name: '',
    email: '',
    note: ''
  });

  const handleGetQuote = (productName: string) => {
    setSelectedProduct(productName);
    setFormData(prev => ({ ...prev, productName }));
    setShowQuoteModal(true);
  };

  const handleSubmitQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend/database
    console.log('Quote request:', formData);
    alert('Quote request submitted! Our team will contact you via WhatsApp soon.');
    setShowQuoteModal(false);
    setFormData({ productName: '', quantity: '', phoneNumber: '', name: '', email: '', note: '' });
  };
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
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Product Catalogue</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive range of medical equipment and healthcare solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl border border-gray-200 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">NOVUSS MedTech Catalogue</h2>
                <p className="text-gray-600 text-lg mb-6">
                  Our comprehensive catalogue features the latest medical equipment, diagnostic systems, 
                  and healthcare solutions designed to meet the evolving needs of modern healthcare facilities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="/1Novuss_MedTech_Catalogue_web_watermark.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-8 py-4 font-semibold rounded-lg transition-all flex items-center space-x-3 shadow-lg shadow-[#6B8E23]/30"
                  >
                    <Eye className="w-5 h-5" />
                    <span>View Catalogue</span>
                  </a>
                  <a 
                    href="/1Novuss_MedTech_Catalogue_web_watermark.pdf" 
                    download="NOVUSS_MedTech_Catalogue.pdf"
                    className="border-2 border-[#6B8E23] hover:bg-[#6B8E23] hover:text-white text-[#6B8E23] px-8 py-4 font-semibold rounded-lg transition-all flex items-center space-x-3"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="w-64 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-xl flex items-center justify-center border border-gray-300">
                  <div className="text-center">
                    <FileText className="w-16 h-16 text-[#6B8E23] mx-auto mb-4" />
                    <p className="text-gray-600 font-medium">PDF Preview</p>
                    <p className="text-gray-500 text-sm">Click to view full catalogue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Comprehensive Range</h3>
              <p className="text-gray-600">Complete portfolio of medical equipment from diagnostic tools to surgical instruments.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Detailed Specifications</h3>
              <p className="text-gray-600">Technical specifications, features, and benefits for each product category.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Easy Access</h3>
              <p className="text-gray-600">Download or view online for convenient access to our complete product information.</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Get in Touch</h2>
            <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl border border-gray-200">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Explore Our Products?</h3>
                  <p className="text-gray-600 text-lg mb-6">
                    Browse through our comprehensive product categories to find the perfect medical equipment for your facility. Each category contains detailed specifications and quote options.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <Link to="/categories/laboratory-equipment" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all text-center">
                      <h4 className="font-semibold text-gray-800 mb-1">Laboratory</h4>
                      <p className="text-sm text-gray-600">50+ Products</p>
                    </Link>
                    <Link to="/categories/diagnostic-instruments" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all text-center">
                      <h4 className="font-semibold text-gray-800 mb-1">Diagnostic</h4>
                      <p className="text-sm text-gray-600">20+ Products</p>
                    </Link>
                    <Link to="/categories/surgical-instruments" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all text-center">
                      <h4 className="font-semibold text-gray-800 mb-1">Surgical</h4>
                      <p className="text-sm text-gray-600">30+ Products</p>
                    </Link>
                    <Link to="/categories/hospital-furniture" className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all text-center">
                      <h4 className="font-semibold text-gray-800 mb-1">Furniture</h4>
                      <p className="text-sm text-gray-600">15+ Products</p>
                    </Link>
                  </div>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-[#6B8E23]" />
                      <span className="text-gray-700">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-[#6B8E23]" />
                      <span className="text-gray-700">info@novussmedtech.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#6B8E23] mt-1" />
                      <span className="text-gray-700">Medical Equipment District, Healthcare City</span>
                    </div>
                  </div>
                  <Link 
                    to="/contact" 
                    className="mt-6 w-full bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white py-3 px-6 rounded-lg hover:from-[#556B2F] hover:to-[#6B8E23] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Get Detailed Quote</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Featured Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Digital ECG Machine</h4>
                <p className="text-gray-600 text-sm mb-3">12-channel ECG with digital display and printing capabilities.</p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                  <FlaskConical className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Digital Laboratory Centrifuge</h4>
                <p className="text-gray-600 text-sm mb-3">High-speed centrifuge with digital controls and safety features.</p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Oxygen Concentrator</h4>
                <p className="text-gray-600 text-sm mb-3">Portable oxygen concentrator for respiratory support therapy.</p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                  <Microscope className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Trinocular Microscope</h4>
                <p className="text-gray-600 text-sm mb-3">Professional microscope with trinocular head for research and education.</p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                  Learn More →
                </Link>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Need More Information?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is ready to help you find the perfect medical equipment solutions for your facility.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-[#6B8E23] px-8 py-4 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Contact Our Experts
            </Link>
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
                    Product Category
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
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter your email (optional)"
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
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    value={formData.note}
                    onChange={(e) => setFormData(prev => ({ ...prev, note: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent h-20 resize-none"
                    placeholder="Any additional requirements or notes (optional)"
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