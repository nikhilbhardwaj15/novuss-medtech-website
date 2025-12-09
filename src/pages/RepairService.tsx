import { ArrowLeft, Shield, X, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function RepairService() {
  const [showRepairModal, setShowRepairModal] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    otherProduct: '',
    machineInfo: '',
    when: '',
    where: '',
    who: '',
    phoneNumber: '',
    name: '',
    email: ''
  });

  const allProducts = [
    // Laboratory Equipment
    'Digital Laboratory Centrifuge', 'High-speed / Micro Centrifuge', 'Refrigerated Centrifuge', 'Bench Top Centrifuge', 'Hematocrit Centrifuge', 'Ultracentrifuge',
    'BOD Incubator', 'Hot Air Oven', 'Laboratory Incubator', 'Bacteriological Incubator',
    'Digital Autoclave', 'Pre-Vacuum Autoclave', 'Vertical Autoclave', 'Portable Autoclave',
    'Student Microscope', 'Binocular Microscope', 'Trinocular Microscope', 'Digital Microscope',
    'Spectrophotometer', 'Colorimeter', 'pH Meter Digital (Portable)', 'Precision Electronic Balance',
    'Analyzer Machines', 'Laboratory Glassware Set', 'Water Bath', 'Biosafety Cabinet', 'Hot Plate Stirrer', 'Vortex Shaker',
    // Diagnostic Instruments
    'Digital ECG Machine', '12-Channel ECG', 'Portable ECG', 'Holter Machine',
    'Portable Patient Monitor', 'Mobile Patient Monitor Cart', 'Multi-Parameter Monitor', 'Vital Signs Monitor',
    'Mercury BP Apparatus', 'Aneroid BP Apparatus', 'Digital BP Monitor', 'Glucometer', 'Digital Thermometer', 'Infrared Thermometer', 'Pulse Oximeter', 'Blood Cell Counter (Export Quality)',
    // Respiratory Support
    'Oxygen Concentrator', 'BiPAP Machine', 'CPAP Machine', 'Ventilator',
    // Hospital Furniture
    'Manual Hospital Bed', 'Semi-Fowler Bed', 'Fowler Bed', 'ICU Bed',
    'Bedside Locker', 'Overbed Table', 'Wheelchair', 'Stretcher',
    'Modular OT Control Panel', 'Hospital Almirah', 'Dressing Trolley', 'Instrument Trolley', 'OT Table', 'OT Light', 'Examination Table', 'Collapsible Ambulance Stretcher',
    // Surgical Instruments
    'Surgical Clamps', 'Retractors', 'Surgical Scissors', 'Surgical Forceps', 'Orthopedic Set', 'Gynecology Set', 'General Surgical Set', 'ENT Surgical Set',
    'ENT Diagnostic Set', 'Otoscope', 'Laryngoscope', 'ENT Examination Unit',
    'Ophthalmic Surgical Instruments', 'Ophthalmic Equipment Station', 'Ophthalmoscope', 'Retinoscope',
    'Dental Chair', 'Ultrasonic Scaler', 'Micromotor', 'Dental Instrument Set',
    // Critical Care
    'Syringe Pump', 'Infusion Pump', 'Anesthesia Workstation', 'Suction Machine',
    // Educational Equipment
    'Optics Equipment', 'Electricity Apparatus', 'Mechanics Equipment', 'General Physics Set',
    'Micro Pipettes (Different Ranges)', 'Anatomical Models', 'Biology Lab Equipment',
    // Hospital Supplies
    'Digital Weighing Scale', 'Mechanical Scale', 'Baby Weighing Scale', 'Physician Scale', 'Platform Scale', 'Body Composition Monitor',
    'Stethoscope', 'Hospital Mattress and Linens', 'Wash Basin', 'Medical Trays',
    'Oxygen Cylinder', 'Heavy Duty Cylinder Trolley', 'Double Cylinder Trolley', 'Flowmeter with Humidifier',
    'Surgical Masks', 'ETT (Endotracheal Tube)', 'Surgical Gloves', 'Ventilator, Catheter, IV Sets'
  ];

  const handleSubmitRepair = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Repair request:', formData);
    alert('Repair request submitted! Our team will contact you within 24 hours.');
    setFormData({
      productName: '',
      otherProduct: '',
      machineInfo: '',
      when: '',
      where: '',
      who: '',
      phoneNumber: '',
      name: '',
      email: ''
    });
  };

  const handleWhatsApp = () => {
    const message = "Hi, I need repair service for my medical equipment. Can you help?";
    const phoneNumber = "918264989685";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/10 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6B8E23]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#808000]/5 rounded-full blur-3xl"></div>
      </div>
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 rounded-b-2xl">
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

      <div className="pt-32 pb-16 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#6B8E23]/30 to-[#6B8E23]/10 text-[#6B8E23] text-sm font-medium mb-8 border border-[#6B8E23]/30 backdrop-blur-sm rounded-full">
              <Shield className="w-4 h-4" />
              <span>EXPERT SERVICE</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Repair &
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8E23] to-[#808000] bg-clip-text text-transparent">
                Maintenance
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional repair and maintenance services for all medical equipment with certified technicians.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-10 rounded-2xl border border-gray-200 mb-16 shadow-2xl shadow-[#6B8E23]/10 hover:shadow-[#6B8E23]/20 transition-all">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Shield className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Certified Technicians</h3>
                <p className="text-gray-600 text-sm">Expert biomedical engineers and certified repair specialists</p>
              </div>
              <div>
                <MessageCircle className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Emergency repair services available round the clock</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
                <h3 className="font-bold text-gray-800 mb-2">Warranty Coverage</h3>
                <p className="text-gray-600 text-sm">All repairs come with service warranty and quality assurance</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-10 shadow-2xl shadow-[#6B8E23]/10 hover:shadow-[#6B8E23]/20 transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Request Repair Service</h2>
            
            <form onSubmit={handleSubmitRepair} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Equipment for Repair *
                </label>
                <select
                  required
                  value={formData.productName}
                  onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                >
                  <option value="">Select Equipment</option>
                  {allProducts.map((product, index) => (
                    <option key={index} value={product}>{product}</option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>

              {formData.productName === 'Other' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Specify Other Equipment *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.otherProduct}
                    onChange={(e) => setFormData(prev => ({ ...prev, otherProduct: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter equipment name/model"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Machine Information & Problem Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.machineInfo}
                  onChange={(e) => setFormData(prev => ({ ...prev, machineInfo: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                  placeholder="Describe the problem, error messages, symptoms, model number, serial number, etc."
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    When (Issue Started) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.when}
                    onChange={(e) => setFormData(prev => ({ ...prev, when: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="e.g., 2 days ago, last week"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Where (Location) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.where}
                    onChange={(e) => setFormData(prev => ({ ...prev, where: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Hospital/Clinic name & address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Who (Contact Person) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.who}
                    onChange={(e) => setFormData(prev => ({ ...prev, who: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Technician/Doctor name"
                  />
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white px-8 py-4 font-semibold rounded-lg hover:from-[#556B2F] hover:to-[#6B8E23] transition-all text-lg"
              >
                Submit Repair Request
              </button>
            </form>
          </div>

          <div className="mt-12 bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center">
            <h2 className="text-2xl font-bold mb-4">Need Emergency Repair?</h2>
            <p className="mb-4">For urgent repairs, contact us directly on WhatsApp</p>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-green-600 px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Emergency Support</span>
            </button>
          </div>

          <div className="mt-8 text-center p-6 bg-gradient-to-br from-[#6B8E23]/10 to-white rounded-xl border border-gray-200">
            <p className="text-lg text-gray-700 font-medium">
              Our certified technicians will contact you within 2 hours for emergency repairs and 24 hours for regular maintenance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}