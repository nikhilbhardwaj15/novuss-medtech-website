import { ArrowLeft, Download, FileText, Eye, Activity, FlaskConical, Shield, Microscope, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
// import { supabase } from '../lib/supabase';

export default function Catalogue() {
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    phoneNumber: '',
    name: '',
    email: '',
    note: ''
  });

  const handleGetQuote = (productName: string) => {
    setFormData(prev => ({ ...prev, productName }));
    setShowQuoteModal(true);
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name.trim() || !formData.phoneNumber.trim() || !formData.quantity.trim()) {
      alert('Please fill in all required fields.');
      return;
    }
    
    // Phone number validation
    const phoneRegex = /^[+]?[0-9]{10,15}$/;
    if (!phoneRegex.test(formData.phoneNumber.replace(/\s/g, ''))) {
      alert('Please enter a valid phone number.');
      return;
    }
    
    // Email validation if provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Please enter a valid email address.');
      return;
    }
    
    try {
      // Store quote request locally
      const quoteRequest = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      const existingQuotes = JSON.parse(localStorage.getItem('quoteRequests') || '[]');
      existingQuotes.push(quoteRequest);
      localStorage.setItem('quoteRequests', JSON.stringify(existingQuotes));
      
      alert('Quote request submitted! Our team will contact you via WhatsApp soon.');
      setShowQuoteModal(false);
      setFormData({ productName: '', quantity: '', phoneNumber: '', name: '', email: '', note: '' });
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting quote. Please try again.');
    }
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
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Laboratory Equipment */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/laboratory-equipment.jpg" alt="Laboratory Equipment" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Equipment</h3>
                  <p className="text-gray-600 mb-4">Centrifuge machines, incubators, autoclaves, microscopes, spectrophotometers, and analytical instruments.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">50+ Products</span>
                    <Link to="/categories/laboratory-equipment" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Diagnostic Instruments */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/diagnostic-instruments.jpg" alt="Diagnostic Instruments" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Diagnostic Instruments</h3>
                  <p className="text-gray-600 mb-4">ECG machines, patient monitors, BP apparatus, glucometers, thermometers, and pulse oximeters.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">20+ Products</span>
                    <Link to="/categories/diagnostic-instruments" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Respiratory Support Equipment */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/respiratory-support.jpg" alt="Respiratory Support" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Respiratory Support</h3>
                  <p className="text-gray-600 mb-4">Oxygen concentrators, BiPAP machines, CPAP machines, and ventilators for respiratory care.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">4 Products</span>
                    <Link to="/categories/respiratory-support" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Hospital Furniture & Infrastructure */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/hospital-furniture.jpg" alt="Hospital Furniture" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Furniture</h3>
                  <p className="text-gray-600 mb-4">Hospital beds, wheelchairs, stretchers, OT tables, examination tables, and medical trolleys.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">15+ Products</span>
                    <Link to="/categories/hospital-furniture" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Surgical & Specialized Instruments */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/surgical-instruments.jpg" alt="Surgical Instruments" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Surgical Instruments</h3>
                  <p className="text-gray-600 mb-4">Surgical clamps, retractors, scissors, forceps, orthopedic sets, ENT, ophthalmic, and dental equipment.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">30+ Products</span>
                    <Link to="/categories/surgical-instruments" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Critical Care Equipment */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/critical-care.jpg" alt="Critical Care Equipment" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Critical Care Equipment</h3>
                  <p className="text-gray-600 mb-4">Syringe pumps, infusion pumps, anesthesia workstations, and suction machines for critical care.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">4 Products</span>
                    <Link to="/categories/critical-care" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* Educational & Research Equipment */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/educational-equipment.jpg" alt="Educational Equipment" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Educational Equipment</h3>
                  <p className="text-gray-600 mb-4">Physics apparatus, chemistry lab equipment, biology lab equipment, and anatomical models for education.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">10+ Products</span>
                    <Link to="/categories/educational-equipment" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

              {/* General Hospital Utilities & Supplies */}
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 overflow-hidden">
                  <img src="/hospital-supplies.jpg" alt="Hospital Utilities & Supplies" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Hospital Utilities & Supplies</h3>
                  <p className="text-gray-600 mb-4">Weighing scales, stethoscopes, oxygen cylinders, disposable medical items, and basic medical supplies.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">25+ Products</span>
                    <Link to="/categories/hospital-supplies" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      View All
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Featured Products Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Featured Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Digital ECG.png" alt="Digital ECG Machine" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Digital ECG Machine</h4>
                  <p className="text-gray-600 text-sm mb-3">12-channel ECG with digital display and printing capabilities.</p>
                  <button 
                    onClick={() => handleGetQuote('Digital ECG Machine')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Digital laboratory centrifuge.png" alt="Digital Laboratory Centrifuge" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Digital Laboratory Centrifuge</h4>
                  <p className="text-gray-600 text-sm mb-3">High-speed centrifuge with digital controls and safety features.</p>
                  <button 
                    onClick={() => handleGetQuote('Digital Laboratory Centrifuge')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Oxygen concentrator.png" alt="Oxygen Concentrator" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Oxygen Concentrator</h4>
                  <p className="text-gray-600 text-sm mb-3">Portable oxygen concentrator for respiratory support therapy.</p>
                  <button 
                    onClick={() => handleGetQuote('Oxygen Concentrator')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Binocular Microscope.png" alt="Binocular Microscope" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Binocular Microscope</h4>
                  <p className="text-gray-600 text-sm mb-3">Professional microscope with binocular head for research and education.</p>
                  <button 
                    onClick={() => handleGetQuote('Binocular Microscope')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

            </div>
            
            {/* Additional Featured Products Row */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Multi Parameter Monitor.png" alt="Multi Parameter Monitor" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Multi Parameter Monitor</h4>
                  <p className="text-gray-600 text-sm mb-3">Advanced patient monitoring system with multiple vital signs tracking.</p>
                  <button 
                    onClick={() => handleGetQuote('Multi Parameter Monitor')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/pre-vacuum-autoclave.jpg" alt="Pre-Vacuum Autoclave" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Pre-Vacuum Autoclave</h4>
                  <p className="text-gray-600 text-sm mb-3">High-efficiency sterilization system for medical instruments.</p>
                  <button 
                    onClick={() => handleGetQuote('Pre-Vacuum Autoclave')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/littmann-classic-iii-stethoscope-.jpg" alt="Littmann Stethoscope" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Littmann Stethoscope</h4>
                  <p className="text-gray-600 text-sm mb-3">Premium acoustic stethoscope for accurate cardiac auscultation.</p>
                  <button 
                    onClick={() => handleGetQuote('Littmann Stethoscope')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src="/Ventilator.png" alt="Ventilator" className="w-full h-full object-contain bg-gray-50" />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-6 w-auto" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-gray-800 mb-2">Medical Ventilator</h4>
                  <p className="text-gray-600 text-sm mb-3">Advanced mechanical ventilator for critical care respiratory support.</p>
                  <button 
                    onClick={() => handleGetQuote('Medical Ventilator')}
                    className="w-full bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors text-sm font-medium"
                  >
                    Get Quote
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Catalogue Download Section */}
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