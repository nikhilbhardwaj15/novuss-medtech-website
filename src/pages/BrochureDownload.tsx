import { ArrowLeft, Download, FileText, Eye, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BrochureDownload() {
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
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Download className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Download Catalogue</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Access our complete medical equipment catalogue with detailed specifications and product information.
            </p>
          </div>

          {/* Main Download Section */}
          <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl border border-gray-200 mb-12">
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

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Complete Portfolio</h3>
              <p className="text-gray-600">Over 200+ medical equipment products across 8 major categories.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Eye className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Detailed Information</h3>
              <p className="text-gray-600">Technical specifications, features, and pricing for informed decisions.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-[#6B8E23]" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Instant Access</h3>
              <p className="text-gray-600">Download immediately or view online for quick reference.</p>
            </div>
          </div>

          {/* Get in Touch Section */}
          <div className="bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white p-8 rounded-2xl mb-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Need Assistance?</h2>
              <p className="text-xl opacity-90">
                Our team is ready to help you find the perfect medical equipment solutions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Phone className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="opacity-90">+91 98765 43210</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Mail className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="opacity-90">info@novussmedtech.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <MapPin className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Visit Us</h3>
                <p className="opacity-90">Mumbai, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Explore More</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/catalogue" 
                className="bg-white border-2 border-[#6B8E23] text-[#6B8E23] hover:bg-[#6B8E23] hover:text-white px-6 py-3 rounded-lg transition-all font-medium"
              >
                Browse Products
              </Link>
              <Link 
                to="/contact" 
                className="bg-[#6B8E23] text-white hover:bg-[#556B2F] px-6 py-3 rounded-lg transition-all font-medium"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}