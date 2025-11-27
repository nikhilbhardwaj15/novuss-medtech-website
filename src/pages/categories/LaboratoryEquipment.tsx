import { ArrowLeft, FlaskConical, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function LaboratoryEquipment() {
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
      'Digital Laboratory Centrifuge': 'High-speed digital centrifuge with programmable controls for precise sample separation.',
      'High-speed / Micro Centrifuge': 'Compact microcentrifuge for small volume samples with variable speed control.',
      'Refrigerated Centrifuge': 'Temperature-controlled centrifuge maintaining samples at 4°C during operation.',
      'Bench Top Centrifuge': 'Reliable benchtop model for routine laboratory centrifugation needs.',
      'Hematocrit Centrifuge': 'Specialized centrifuge for blood hematocrit testing with built-in reader.',
      'Ultracentrifuge': 'High-performance ultracentrifuge for molecular biology and research applications.',
      'BOD Incubator': 'Biochemical oxygen demand incubator for environmental and water testing.',
      'Hot Air Oven': 'Dry heat sterilization oven with uniform temperature distribution.',
      'Laboratory Incubator': 'Precision incubator for cell culture and bacterial growth applications.',
      'Bacteriological Incubator': 'Specialized incubator for microbiology and bacteriological studies.',
      'Digital Incubator': 'Microprocessor-controlled incubator with digital display and alarms.',
      'Vertical Incubators': 'Space-saving vertical design incubator for limited laboratory space.',
      'Portable Incubator': 'Compact portable incubator for field work and mobile laboratories.',
      'Digital Autoclave': 'Automated steam sterilizer with digital controls and validation.',
      'Pre-Vacuum Autoclave': 'Advanced autoclave with pre-vacuum cycle for enhanced sterilization.',
      'Vertical Autoclave': 'Vertical loading autoclave ideal for tall instruments and glassware.',
      'Portable Autoclave': 'Compact autoclave for small clinics and field sterilization needs.',
      'Student Microscope': 'Educational microscope with LED illumination for student learning.',
      'Binocular Microscope': 'Professional binocular microscope with superior optical clarity.',
      'Trinocular Microscope': 'Research-grade trinocular microscope with camera port for documentation.',
      'Digital Microscope': 'Digital microscope with built-in camera and LCD display.',
      'Spectrophotometer': 'UV-Vis spectrophotometer for quantitative analysis and research.',
      'Colorimeter': 'Digital colorimeter for color measurement and quality control.',
      'pH Meter Digital (Portable)': 'Portable digital pH meter with automatic temperature compensation.',
      'Precision Electronic Balance': 'High-precision analytical balance with internal calibration.',
      'Analyzer Machines': 'Automated clinical analyzer for biochemistry and hematology testing.',
      'Laboratory Glassware Set': 'Complete set of borosilicate glassware for laboratory experiments.',
      'Water Bath': 'Circulating water bath with precise temperature control and uniformity.',
      'Biosafety Cabinet': 'Class II biosafety cabinet for safe handling of biological materials.',
      'Hot Plate Stirrer': 'Magnetic stirrer with heating plate for sample preparation.',
      'Vortex Shaker': 'High-speed vortex mixer for sample mixing and homogenization.',
      'Calorimeter': 'Bomb calorimeter for measuring heat of combustion and energy content.',
      'Micro Pipettes': 'Variable volume micropipettes for precise liquid handling.'
    };
    return descriptions[productName] || 'Professional laboratory equipment with advanced features and reliability.';
  };
  const productCategories = [
    {
      title: 'Centrifuge Machines',
      products: [
        { name: 'Digital Laboratory Centrifuge', image: '/Digital laboratory centrifuge.png' },
        { name: 'High-speed / Micro Centrifuge', image: '/High-speed Micro Centrifuge.jpg' },
        { name: 'Refrigerated Centrifuge', image: '/refrigerated centrifuge.png' },
        { name: 'Bench Top Centrifuge', image: '/bench top centrifuge.png' },
        { name: 'Hematocrit Centrifuge', image: '/hematocrit centrifuge.png' },
        { name: 'Ultracentrifuge', image: '/Ultracentrifuge.png' }
      ]
    },
    {
      title: 'Incubators & Ovens',
      products: [
        { name: 'BOD Incubator', image: '/BOD incubator.png' },
        { name: 'Hot Air Oven', image: '/Hot Air oven.png' },
        { name: 'Laboratory Incubator', image: '/Laboratory Incubator.png' },
        { name: 'Bacteriological Incubator', image: '/Bacteriological Incubator.png' }
      ]
    },
    {
      title: 'Autoclaves & Sterilizers',
      products: [
        { name: 'Pre-Vacuum Autoclave', image: '/pre-vacuum-autoclave.jpg' },
        { name: 'Digital Autoclave', image: '/Digital Autoclave.png' },
        { name: 'Vertical Autoclave', image: '/Vertical Autoclave.png' },
        { name: 'Portable Autoclave', image: '/Portable Autoclave.png' }
      ]
    },
    {
      title: 'Microscopes',
      products: [
        { name: 'Student Microscope', image: '/Student microscope.png' },
        { name: 'Binocular Microscope', image: '/Binocular Microscope.png' },
        { name: 'Trinocular Microscope', image: '/Trinocular microscope.jpg' },
        { name: 'Digital Microscope', image: '/Digital Microscope.png' }
      ]
    },
    {
      title: 'Analytical Instruments',
      products: [
        { name: 'Spectrophotometer', image: '/Spectrophotometer.png' },
        { name: 'Colorimeter', image: '/Colorimeter.jpg' },
        { name: 'pH Meter Digital (Portable)', image: '/pHmeter.png' },
        { name: 'Precision Electronic Balance', image: '/Precision electronic Balance.png' },
        { name: 'Analyzer Machines', image: '/Analyzer Machines.png' }
      ]
    },
    {
      title: 'General Lab Equipment',
      products: [
        { name: 'Laboratory Glassware Set', image: '/Lab glassware set.png' },
        { name: 'Water Bath', image: '/Water bath.png' },
        { name: 'Biosafety Cabinet', image: '/Biosafety Cabinet.png' },
        { name: 'Hot Plate Stirrer', image: '/Hot plate stirrer.png' },
        { name: 'Vortex Shaker', image: '/vortex shaker.png' },
        { name: 'Calorimeter', image: '/Calorimeter.png' },
        { name: 'Micro Pipettes', image: '/Micro pipettes.jpg' }
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
            <FlaskConical className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Laboratory Equipment</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional laboratory equipment for research, diagnostics, and educational purposes.
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