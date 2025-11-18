import { ArrowLeft, Download, FileText, Eye, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Brochure() {
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
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Product Brochure</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download our comprehensive brochure featuring our complete range of medical equipment and healthcare solutions.
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