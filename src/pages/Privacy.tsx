import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
            <Shield className="w-16 h-16 text-[#6B8E23] mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-600">
              Your privacy and data security are our top priorities at NOVUSS MedTech Industries.
            </p>
            <p className="text-sm text-gray-500 mt-4">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gradient-to-br from-[#6B8E23]/10 to-white p-8 rounded-2xl mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-[#6B8E23] mr-3" />
                Our Commitment to Privacy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                NOVUSS MedTech Industries is committed to protecting your personal information and your right to privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website 
                or use our services.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Information We Collect</h2>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="p-6 bg-gray-50 rounded-xl">
                  <Eye className="w-8 h-8 text-[#6B8E23] mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Personal Information</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Name and contact details</li>
                    <li>• Email address and phone number</li>
                    <li>• Company/organization information</li>
                    <li>• Professional credentials</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl">
                  <Database className="w-8 h-8 text-[#6B8E23] mb-4" />
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Usage Information</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Website usage patterns</li>
                    <li>• Service preferences</li>
                    <li>• Communication history</li>
                    <li>• Technical support interactions</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">How We Use Your Information</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <ul className="space-y-4 text-gray-600 text-lg">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span><strong>Service Delivery:</strong> To provide medical equipment, maintenance, and rental services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span><strong>Communication:</strong> To respond to inquiries and provide customer support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span><strong>Improvement:</strong> To enhance our services and develop new solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#6B8E23] rounded-full mt-3 mr-4 flex-shrink-0"></span>
                    <span><strong>Compliance:</strong> To meet legal and regulatory requirements</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Data Protection & Security</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                  <Shield className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Encryption</h3>
                  <p className="text-gray-600">All data is encrypted in transit and at rest using industry-standard protocols.</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                  <Lock className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Access Control</h3>
                  <p className="text-gray-600">Strict access controls ensure only authorized personnel can access your data.</p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200">
                  <Database className="w-12 h-12 text-[#6B8E23] mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-800 mb-2">Secure Storage</h3>
                  <p className="text-gray-600">Data is stored in secure, compliant facilities with regular backups.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Rights</h2>
              <div className="bg-gradient-to-r from-[#6B8E23]/10 to-white p-8 rounded-xl">
                <p className="text-gray-600 text-lg mb-6">You have the right to:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3 text-gray-600">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Request data deletion</li>
                  </ul>
                  <ul className="space-y-3 text-gray-600">
                    <li>• Restrict data processing</li>
                    <li>• Data portability</li>
                    <li>• Withdraw consent</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
              <div className="bg-white border border-gray-200 rounded-xl p-8">
                <p className="text-gray-600 text-lg mb-6">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Email:</strong> novussmedtechindustries@gmail.com</p>
                  <p><strong>Phone:</strong> +91 82649 89685</p>
                  <p><strong>Address:</strong> Panchkula, India</p>
                </div>
              </div>
            </section>

            <div className="text-center bg-gradient-to-r from-[#6B8E23] to-[#808000] text-white p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-lg mb-6 opacity-90">
                Our team is here to help you understand how we protect your information.
              </p>
              <Link 
                to="/contact" 
                className="inline-block bg-white text-[#6B8E23] px-8 py-3 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Our Privacy Team
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}