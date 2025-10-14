import { ArrowLeft, Award, Users, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About NOVUSS MedTech</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pioneering the future of healthcare technology with innovation, precision, and unwavering commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Founded with a vision to revolutionize healthcare delivery, NOVUSS MedTech Industries has been at the forefront of medical technology innovation for over 15 years. We specialize in providing cutting-edge medical equipment, comprehensive maintenance services, and flexible rental solutions to healthcare institutions across India.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our journey began with a simple belief: every healthcare provider deserves access to the most advanced, reliable, and safe medical technology available. Today, we serve over 500 healthcare partners nationwide, from small clinics to major hospital networks.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                To empower healthcare providers with state-of-the-art medical technology and exceptional service, enabling them to deliver the highest quality patient care while advancing medical outcomes across communities.
              </p>
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-[#6B8E23]" />
                <span className="text-[#6B8E23] font-semibold">Committed to Healthcare Excellence</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <Award className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">ISO Certified</h3>
              <p className="text-gray-600">International quality standards and compliance certification ensuring the highest level of service excellence.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <Users className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Expert Team</h3>
              <p className="text-gray-600">Certified biomedical engineers and specialist technicians with decades of combined experience.</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <Globe className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-3">Nationwide Reach</h3>
              <p className="text-gray-600">Serving healthcare institutions across India with 24/7 support and rapid response capabilities.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join over 500 healthcare providers who trust NOVUSS for their medical technology needs.
            </p>
            <Link 
              to="/contact" 
              className="inline-block bg-white text-[#6B8E23] px-8 py-4 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}