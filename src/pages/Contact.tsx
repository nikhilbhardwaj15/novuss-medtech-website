import { ArrowLeft, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Store in localStorage (simulating database)
    const messages = JSON.parse(localStorage.getItem('novuss_messages') || '[]');
    const newMessage = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toISOString(),
      status: 'new'
    };
    messages.push(newMessage);
    localStorage.setItem('novuss_messages', JSON.stringify(messages));
    
    setIsLoading(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your healthcare facility? Let's discuss your medical technology needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#808000] rounded-2xl flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600 text-lg">+91 82649 89685</p>
                    <p className="text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#808000] rounded-2xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600 text-lg break-all">novussmedtechindustries@gmail.com</p>
                    <p className="text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B8E23] to-[#808000] rounded-2xl flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Location</h3>
                    <p className="text-gray-600 text-lg">Panchkula, India</p>
                    <p className="text-gray-500">Serving nationwide</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-[#6B8E23]/10 to-white rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Why Choose NOVUSS?</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23]" />
                    <span>15+ years of industry experience</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23]" />
                    <span>500+ satisfied healthcare partners</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23]" />
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#6B8E23]" />
                    <span>ISO certified quality standards</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for contacting NOVUSS MedTech. We'll get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white px-6 py-3 rounded-lg hover:from-[#556B2F] hover:to-[#6B8E23] transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-800 mb-8">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Company/Organization</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all"
                        placeholder="Your hospital/clinic name"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-3">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full bg-white border border-gray-300 text-gray-800 px-4 py-3 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all resize-none"
                        placeholder="Tell us about your medical equipment needs..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-8 py-4 font-semibold rounded-lg transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}