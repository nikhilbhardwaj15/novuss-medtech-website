import { ArrowLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function RespiratorySupport() {
  const products = [
    'Oxygen Concentrator', 'BiPAP Machine', 'CPAP Machine', 'Ventilator'
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
            <Shield className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Respiratory Support Equipment</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced respiratory care equipment for patient breathing support and therapy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#6B8E23]" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">{product}</h3>
                <p className="text-gray-600 text-sm mb-4">Advanced respiratory support equipment for critical patient care.</p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                  Get Quote →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}