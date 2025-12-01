import { Activity, Stethoscope, Shield, ChevronRight, Zap, Cpu, Gauge, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const isMobile = window.innerWidth < 768;
    const handleScroll = () => {
      if (!ticking && !isMobile) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#6B8E23]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#808000]/5 rounded-full blur-3xl"></div>
      </div>

      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200 rounded-b-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/IMG_6810.png" alt="NOVUSS" className="h-10 sm:h-12 w-auto" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 font-sans">NOVUSS</h1>
              <p className="text-xs text-gray-600 font-sans">MEDTECH INDUSTRIES</p>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
            <Link to="/about" className="text-gray-700 hover:text-gray-900 transition-colors">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors">Contact</Link>
            <Link to="/contact" className="bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-6 py-2 transition-all shadow-lg shadow-[#6B8E23]/30">
              Get Started
            </Link>
          </div>
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <Link to="/about" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="block text-gray-700 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link to="/contact" className="block w-full bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-6 py-3 transition-all shadow-lg shadow-[#6B8E23]/30 text-center">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Rest of the home page content - keeping existing sections */}
      <section className="relative pt-40 pb-32 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.001) * 20}px)` : 'none',
          }}
        >
          <div className="absolute top-20 left-10 w-4 h-4 bg-[#6B8E23]/60 rounded-full animate-pulse shadow-lg shadow-[#6B8E23]/30"></div>
          <div className="absolute top-32 right-16 w-6 h-6 bg-[#6B8E23]/40 rounded-full animate-pulse shadow-lg shadow-[#6B8E23]/20" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-32 left-1/5 w-3 h-3 bg-[#808000]/50 rounded-full animate-pulse shadow-lg shadow-[#808000]/25" style={{ animationDelay: '1.2s' }}></div>
          <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-[#6B8E23]/50 rounded-full animate-pulse shadow-lg shadow-[#6B8E23]/25" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute bottom-1/4 right-10 w-2 h-2 bg-[#808000]/60 rounded-full animate-pulse shadow-lg shadow-[#808000]/30" style={{ animationDelay: '1.6s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-4 h-4 bg-[#6B8E23]/30 rounded-full animate-pulse shadow-lg shadow-[#6B8E23]/15" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div
              style={{
                transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.002) * 5}px)` : 'none',
              }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#6B8E23]/30 to-[#6B8E23]/10 text-[#6B8E23] text-sm font-medium mb-8 border border-[#6B8E23]/30 backdrop-blur-sm">
                <Zap className="w-4 h-4" />
                <span>NEXT-GENERATION HEALTHCARE TECHNOLOGY</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-8 leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 bg-clip-text text-transparent">
                  Medical Innovation
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#6B8E23] to-[#808000] bg-clip-text text-transparent">
                  Redefined
                </span>
              </h1>
              <p className="text-gray-600 text-xl mb-10 leading-relaxed">
                Delivering advanced hospital machinery and precision-engineered medical equipment that empower institutions with reliable performance, clinical accuracy, and innovation in patient care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/brochure-download" className="bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-10 py-5 font-medium transition-all flex items-center space-x-3 group shadow-2xl shadow-[#6B8E23]/40">
                  <span>Download Catalogue</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link to="/schedule-demo" className="border-2 border-gray-300 hover:border-[#6B8E23]/60 hover:bg-[#6B8E23]/10 text-gray-800 px-10 py-5 font-medium transition-all backdrop-blur-sm">
                  Schedule Demo
                </Link>
              </div>
            </div>
            <div
              className="relative"
              style={{
                transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.001 + 1) * 12}px) scale(${1 + Math.sin(scrollY * 0.0005) * 0.06})` : 'none',
                transition: window.innerWidth > 768 ? 'transform 0.1s ease-out' : 'none'
              }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/40 via-[#808000]/20 to-transparent rounded-2xl blur-3xl"></div>
                <div className="relative aspect-square border border-gray-200 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-white backdrop-blur-sm">
                  <div className="absolute inset-0 grid grid-cols-3 gap-4 p-8">
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform">
                      <Activity className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.1s' }}>
                      <Cpu className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.2s' }}>
                      <Gauge className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.3s' }}>
                      <Shield className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/30 to-transparent border-2 border-[#6B8E23]/40 rounded-lg flex items-center justify-center backdrop-blur-sm col-span-1 row-span-2 hover:scale-105 transition-transform shadow-2xl shadow-[#6B8E23]/40" style={{ transitionDelay: '0.4s' }}>
                      <Stethoscope className="w-20 h-20 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.5s' }}>
                      <Zap className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.6s' }}>
                      <Activity className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                    <div className="bg-gradient-to-br from-[#6B8E23]/20 to-transparent border border-[#6B8E23]/20 rounded-lg flex items-center justify-center backdrop-blur-sm hover:scale-105 transition-transform" style={{ transitionDelay: '0.7s' }}>
                      <Gauge className="w-12 h-12 text-[#6B8E23]" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-gray-50 to-white border border-[#6B8E23]/30 p-8 rounded-xl backdrop-blur-xl shadow-2xl shadow-[#6B8E23]/20">
                <div className="flex items-baseline space-x-2 mb-2">
                  <div className="text-[#6B8E23] text-5xl font-bold">500</div>
                  <div className="text-[#6B8E23] text-2xl font-bold">+</div>
                </div>
                <div className="text-gray-600 text-sm font-medium">Hospitals Equipped</div>
                <div className="mt-3 flex space-x-1">
                  <div className="w-12 h-1 bg-gradient-to-r from-[#6B8E23] to-[#808000] rounded-full"></div>
                  <div className="w-2 h-1 bg-[#6B8E23]/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#6B8E23]/30 to-transparent"></div>
      </section>

      {/* Keep all other existing sections but add footer with privacy link */}
      <footer className="py-16 px-6 bg-[#1a2e1a]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img src="/novusswobg.png" alt="NOVUSS" className="h-16 w-auto opacity-90" />
              <div>
                <h2 className="text-2xl font-bold text-white/90 font-sans">NOVUSS</h2>
                <p className="text-xs text-white/60 font-sans">MEDTECH INDUSTRIES</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end space-y-2">
              <div className="text-white/60 text-sm">
                © 2025 Novuss MedTech Industries. All rights reserved.
              </div>
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}