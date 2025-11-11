import { ArrowLeft, Download, FileText, Eye, Activity, Stethoscope, Shield, Users, Zap, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Catalogue() {
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
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Product Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Activity className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Diagnostic Equipment</h3>
                  <p className="text-gray-600 mb-4">Advanced diagnostic tools including ECG machines, ultrasound systems, and patient monitors.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">Multiple Models Available</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Stethoscope className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Surgical Instruments</h3>
                  <p className="text-gray-600 mb-4">Precision surgical tools, electrosurgical units, and operating room equipment.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">Professional Grade</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Laboratory Equipment</h3>
                  <p className="text-gray-600 mb-4">Clinical analyzers, microscopes, centrifuges, and lab automation systems.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">High Precision</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Users className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Patient Care Equipment</h3>
                  <p className="text-gray-600 mb-4">Hospital beds, wheelchairs, patient lifts, and mobility assistance devices.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">Comfort & Safety</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Zap className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Imaging Systems</h3>
                  <p className="text-gray-600 mb-4">X-ray machines, MRI systems, CT scanners, and digital imaging solutions.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">Advanced Imaging</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-[#6B8E23]/10 to-[#6B8E23]/5 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-[#6B8E23]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Life Support Systems</h3>
                  <p className="text-gray-600 mb-4">Ventilators, defibrillators, anesthesia machines, and critical care monitors.</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#6B8E23] font-semibold">Life Critical</span>
                    <Link to="/contact" className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors">
                      Inquire
                    </Link>
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
    </div>
  );
}