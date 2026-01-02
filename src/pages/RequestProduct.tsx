import { ArrowLeft, Upload, MessageCircle, Shield, CheckCircle, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sendEmail } from '../utils/emailService';

export default function RequestProduct() {
  const [formData, setFormData] = useState({
    category: '',
    productName: '',
    description: '',
    quantity: '',
    budgetRange: '',
    name: '',
    institutionName: '',
    city: '',
    phoneNumber: '',
    email: ''
  });
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Store product request locally
      const productRequest = {
        ...formData,
        uploadedFile: uploadedFile?.name || 'None',
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      const existingRequests = JSON.parse(localStorage.getItem('productRequests') || '[]');
      existingRequests.push(productRequest);
      localStorage.setItem('productRequests', JSON.stringify(existingRequests));
      
      // Send email
      const emailData = {
        ...formData,
        formType: 'product-request',
        uploadedFile: uploadedFile?.name || 'None'
      };
      
      const emailSent = await sendEmail(emailData);
      
      if (emailSent) {
        alert('Request submitted successfully! Our team will contact you within 24 hours.');
      } else {
        alert('Request submitted locally. We will contact you within 24 hours.');
      }
      
      setFormData({
        category: '',
        productName: '',
        description: '',
        quantity: '',
        budgetRange: '',
        name: '',
        institutionName: '',
        city: '',
        phoneNumber: '',
        email: ''
      });
      setUploadedFile(null);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting request. Please try again.');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleWhatsApp = () => {
    const message = "Hi, I need help finding specific medical equipment. Can you assist me?";
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
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#6B8E23]/30 to-[#6B8E23]/10 text-[#6B8E23] text-sm font-medium mb-8 border border-[#6B8E23]/30 backdrop-blur-sm rounded-full">
              <Upload className="w-4 h-4" />
              <span>CUSTOM REQUEST</span>
            </div>
            <h1 className="text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                Request Any
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#6B8E23] to-[#808000] bg-clip-text text-transparent">
                Medical Equipment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Can't find your exact machine or instrument in our catalog? Tell us what you need — we source, customize, or manufacture through our partner network.
            </p>
          </div>

          {/* Quick Explanation */}
          <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-10 rounded-2xl border border-gray-200 mb-16 text-center shadow-2xl shadow-[#6B8E23]/10 hover:shadow-[#6B8E23]/20 transition-all">
            <p className="text-lg text-gray-700 mb-2">
              We supply a wide range of hospital, laboratory, and diagnostic equipment beyond what's shown on our website.
            </p>
            <p className="text-lg text-gray-700">
              Share your requirement and our team will get back within 24 hours.
            </p>
          </div>

          {/* Requirement Form */}
          <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-10 mb-16 shadow-2xl shadow-[#6B8E23]/10 hover:shadow-[#6B8E23]/20 transition-all">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Equipment Requirement Form</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Equipment Category *
                  </label>
                  <select
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="Lab Instruments">Lab Instruments</option>
                    <option value="Diagnostic Machines">Diagnostic Machines</option>
                    <option value="OT Equipment">OT Equipment</option>
                    <option value="ICU & Critical Care">ICU & Critical Care</option>
                    <option value="Hospital Furniture">Hospital Furniture</option>
                    <option value="Sterilization Equipment">Sterilization Equipment</option>
                    <option value="Others (Custom)">Others (Custom)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name / Model *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.productName}
                    onChange={(e) => setFormData(prev => ({ ...prev, productName: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter product name or model"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description / Specification Needed *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                  placeholder="Example: brand preference, capacity, features, quantity."
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Quantity Required *
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
                    Budget Range (Optional)
                  </label>
                  <input
                    type="text"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData(prev => ({ ...prev, budgetRange: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                    placeholder="Enter budget range"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload File (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#6B8E23] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-600 mb-2">Upload PDF or Image files</p>
                  <p className="text-sm text-gray-500 mb-4">For buyers who share exact model photos/spec sheets</p>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="bg-[#6B8E23] text-white px-4 py-2 rounded-lg hover:bg-[#556B2F] transition-colors cursor-pointer inline-block"
                  >
                    Choose File
                  </label>
                  {uploadedFile && (
                    <p className="mt-2 text-sm text-[#6B8E23]">
                      Selected: {uploadedFile.name}
                    </p>
                  )}
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
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
                      Hospital/Clinic/Institution Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.institutionName}
                      onChange={(e) => setFormData(prev => ({ ...prev, institutionName: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                      placeholder="Enter institution name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData(prev => ({ ...prev, city: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#6B8E23] focus:border-transparent"
                      placeholder="Enter your city"
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
                Submit Requirement
              </button>
            </form>
          </div>

          {/* Trust Badges */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <Shield className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">GeM Registered</h3>
              <p className="text-sm text-gray-600">Supplier</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <CheckCircle className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Verified Vendor</h3>
              <p className="text-sm text-gray-600">Network (Haryana / India)</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <Clock className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Warranty & After-Sales</h3>
              <p className="text-sm text-gray-600">Support</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
              <MapPin className="w-12 h-12 text-[#6B8E23] mx-auto mb-3" />
              <h3 className="font-bold text-gray-800 mb-2">Delivery Across</h3>
              <p className="text-sm text-gray-600">India</p>
            </div>
          </div>

          {/* WhatsApp Shortcut */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Need quick help?</h2>
            <button
              onClick={handleWhatsApp}
              className="bg-white text-green-600 px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp us directly</span>
            </button>
          </div>

          {/* Footer Line */}
          <div className="text-center p-6 bg-gradient-to-br from-[#6B8E23]/10 to-white rounded-xl border border-gray-200">
            <p className="text-lg text-gray-700 font-medium">
              We will confirm availability, pricing, and delivery timeline within 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}