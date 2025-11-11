import { ArrowLeft, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DiagnosticInstruments() {
  const productCategories = [
    {
      title: 'ECG Machines',
      products: ['Digital ECG Machine', '12-Channel ECG', 'Portable ECG', 'Holter Machine']
    },
    {
      title: 'Patient Monitors',
      products: ['Portable Patient Monitor', 'Mobile Patient Monitor Cart', 'Multi-Parameter Monitor', 'Vital Signs Monitor']
    },
    {
      title: 'BP Apparatus & Basic Diagnostics',
      products: ['Mercury BP Apparatus', 'Aneroid BP Apparatus', 'Digital BP Monitor', 'Glucometer', 'Digital Thermometer', 'Infrared Thermometer', 'Pulse Oximeter', 'Blood Cell Counter (Export Quality)']
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
            <Activity className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Diagnostic Instruments</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Advanced diagnostic equipment for accurate patient monitoring and assessment.
            </p>
          </div>

          <div className="space-y-12">
            {productCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b-2 border-[#6B8E23]/20 pb-4">{category.title}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {category.products.map((product, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#6B8E23]/20 to-[#6B8E23]/10 rounded-lg flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-[#6B8E23]" />
                      </div>
                      <h3 className="font-bold text-gray-800 mb-2">{product}</h3>
                      <p className="text-gray-600 text-sm mb-4">High-precision diagnostic instrument for accurate medical measurements.</p>
                      <Link to="/contact" className="text-[#6B8E23] font-semibold text-sm hover:underline">
                        Get Quote →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}