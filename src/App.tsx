import { Activity, Stethoscope, Shield, Users, Phone, Mail, MapPin, ChevronRight, Zap, Cpu, Gauge, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Catalogue from './pages/Catalogue';
import Brochure from './pages/Brochure';
import BrochureDownload from './pages/BrochureDownload';
import LaboratoryEquipment from './pages/categories/LaboratoryEquipment';
import DiagnosticInstruments from './pages/categories/DiagnosticInstruments';
import SurgicalInstruments from './pages/categories/SurgicalInstruments';
import HospitalFurniture from './pages/categories/HospitalFurniture';
import RespiratorySupport from './pages/categories/RespiratorySupport';
import CriticalCare from './pages/categories/CriticalCare';
import EducationalEquipment from './pages/categories/EducationalEquipment';
import HospitalSupplies from './pages/categories/HospitalSupplies';
import ScheduleDemo from './pages/ScheduleDemo';
import RentalLeasing from './pages/RentalLeasing';

function HomePage() {
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
            <img src="/output-onlinepngtools.png" alt="NOVUSS" className="h-10 sm:h-12 w-auto" />
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

      <section id="services" className="relative py-32 px-6 bg-[#6B8E23]/30">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B8E23]/20 rounded-full blur-3xl"></div>
        </div>
        <div
          className="max-w-7xl mx-auto relative z-10"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.001 + 2) * 3}px)` : 'none',
          }}
        >
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6B8E23]/30 to-transparent text-[#6B8E23]/90 text-sm font-medium mb-6 border border-[#6B8E23]/30">
              COMPREHENSIVE SOLUTIONS
            </div>
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Advanced Medical Systems
              </span>
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Engineering excellence for modern healthcare facilities
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-10 rounded-2xl hover:border-[#6B8E23]/50 transition-all group overflow-hidden"
              style={{
                transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.003) * 8}px) scale(${1 + Math.sin(scrollY * 0.002) * 0.02})` : 'none',
                opacity: window.innerWidth > 768 ? 0.9 + Math.sin(scrollY * 0.004) * 0.1 : 1
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/0 to-[#6B8E23]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/30 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all">
                  <Stethoscope className="w-10 h-10 text-[#6B8E23]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#6B8E23] transition-colors">Medical Equipment & Supplies</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  Delivering certified hospital machines, diagnostic systems, laboratory instruments, and surgical supplies — fulfilling complete medical requirements with customized, on-demand solutions.
                </p>
                <Link to="/catalogue" className="text-[#6B8E23] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Discover More</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div 
              className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-10 rounded-2xl hover:border-[#6B8E23]/50 transition-all group overflow-hidden"
              style={{
                transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.003 + 2) * 10}px) rotateX(${Math.sin(scrollY * 0.002) * 2}deg)` : 'none',
                opacity: window.innerWidth > 768 ? 0.95 + Math.sin(scrollY * 0.004 + 1) * 0.05 : 1
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/0 to-[#6B8E23]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/30 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all">
                  <Shield className="w-10 h-10 text-[#6B8E23]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#6B8E23] transition-colors">Repair & Maintenance Services</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  On-site repair, preventive maintenance, and calibration to ensure maximum uptime, precision, and safety — covering routine servicing, emergency fixes, and long-term equipment reliability.
                </p>
                <Link to="/contact" className="text-[#6B8E23] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Request Service</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div 
              className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 p-10 rounded-2xl hover:border-[#6B8E23]/50 transition-all group overflow-hidden"
              style={{
                transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.003 + 4) * 6}px) scale(${1 + Math.sin(scrollY * 0.002 + 3) * 0.015})` : 'none',
                opacity: window.innerWidth > 768 ? 0.92 + Math.sin(scrollY * 0.004 + 2) * 0.08 : 1
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/0 to-[#6B8E23]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-[#6B8E23]/30 to-[#6B8E23]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all">
                  <Users className="w-10 h-10 text-[#6B8E23]" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-[#6B8E23] transition-colors">Rental & Leasing Solutions</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  We provide short-term/ long-term rentals of some specific medical machines for general use as well, each unit fully serviced, quality-tested, and ready for safe, flexible operation.
                </p>
                <Link to="/rental-leasing" className="text-[#6B8E23] font-semibold flex items-center space-x-2 group-hover:gap-4 transition-all">
                  <span>Explore Rentals</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="relative pt-32 pb-8 px-6 overflow-hidden bg-gradient-to-b from-[#6B8E23]/30 to-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#6B8E23]/20 rounded-full blur-3xl"></div>
        </div>
        <div
          className="max-w-7xl mx-auto relative z-10"
          style={{
            transform: window.innerWidth > 768 ? `translateY(${Math.sin(scrollY * 0.0015) * 4}px)` : 'none',
          }}
        >
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6B8E23]/20 to-transparent text-[#6B8E23] text-sm font-medium mb-8 border border-[#6B8E23]/30">
                INDUSTRY LEADERSHIP
              </div>
              <h2 className="text-5xl font-bold mb-8">
                <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                  Pioneering Medical Technology
                </span>
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-6">
                NOVUSS stands at the forefront of medical technology innovation, delivering reliable, state-of-the-art equipment and unmatched service excellence to healthcare facilities.
              </p>
              <p className="text-gray-600 text-xl leading-relaxed mb-10">
                Our dedication to precision, safety protocols, and customer satisfaction has established us as the premier partner for healthcare providers nationwide.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6B8E23] to-[#808000] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#6B8E23]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg mb-1">ISO Certified Excellence</div>
                    <div className="text-gray-600 text-lg">International quality standards and compliance certification</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6B8E23] to-[#808000] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#6B8E23]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg mb-1">Elite Engineering Team</div>
                    <div className="text-gray-600 text-lg">Certified biomedical engineers and specialist technicians</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#6B8E23] to-[#808000] flex items-center justify-center text-white text-sm font-bold rounded shadow-lg shadow-[#6B8E23]/30 group-hover:scale-110 transition-transform">✓</div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg mb-1">24/7 Critical Support</div>
                    <div className="text-gray-600 text-lg">Always-available assistance for mission-critical systems</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#6B8E23]/80 to-[#556B2F]/80 border border-white/20 p-8 rounded-2xl hover:border-white/40 transition-all group hover:shadow-2xl hover:shadow-white/20">
                <div className="text-white text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">15+</div>
                <div className="text-white/80 text-lg">Years Experience</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#6B8E23]/80 to-[#556B2F]/80 border border-white/20 p-8 rounded-2xl hover:border-white/40 transition-all group hover:shadow-2xl hover:shadow-white/20">
                <div className="text-white text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">500+</div>
                <div className="text-white/80 text-lg">Healthcare Partners</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#6B8E23]/80 to-[#556B2F]/80 border border-white/20 p-8 rounded-2xl hover:border-white/40 transition-all group hover:shadow-2xl hover:shadow-white/20">
                <div className="text-white text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">2K+</div>
                <div className="text-white/80 text-lg">Systems Deployed</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
              <div className="bg-gradient-to-br from-[#6B8E23]/80 to-[#556B2F]/80 border border-white/20 p-8 rounded-2xl hover:border-white/40 transition-all group hover:shadow-2xl hover:shadow-white/20">
                <div className="text-white text-5xl font-bold mb-3 group-hover:scale-110 transition-transform inline-block">99%</div>
                <div className="text-white/80 text-lg">Client Satisfaction</div>
                <div className="mt-4 h-1 w-12 bg-gradient-to-r from-white to-transparent rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative pt-8 pb-32 px-6 bg-gradient-to-b from-white via-[#6B8E23]/10 to-[#1a2e1a] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6B8E23]/20 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#6B8E23]/20 to-transparent text-[#6B8E23] text-sm font-medium mb-6 border border-[#6B8E23]/30">
              CONNECT WITH US
            </div>
            <h2 className="text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-[#6B8E23] to-[#808000] bg-clip-text text-transparent">
                Transform Your Healthcare Facility
              </span>
            </h2>
            <p className="text-gray-800 text-xl max-w-2xl mx-auto">
              Ready to implement cutting-edge medical technology? Let's discuss your requirements.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6B8E23]/80 to-[#6B8E23]/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all border border-white/20">
                    <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg sm:text-xl mb-1 sm:mb-2">Phone</div>
                    <div className="text-gray-700 text-base sm:text-lg break-all">+91 82649 89685</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6B8E23]/80 to-[#6B8E23]/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all border border-white/20">
                    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg sm:text-xl mb-1 sm:mb-2">Email</div>
                    <div className="text-gray-700 text-sm sm:text-lg break-all">novussmedtechindustries@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 sm:space-x-6 group">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#6B8E23]/80 to-[#6B8E23]/60 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#6B8E23]/40 transition-all border border-white/20">
                    <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-gray-800 font-bold text-lg sm:text-xl mb-1 sm:mb-2">Location</div>
                    <div className="text-gray-700 text-base sm:text-lg">Panchkula, India</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#6B8E23]/20 to-white/90 p-6 sm:p-8 lg:p-10 rounded-2xl backdrop-blur-sm shadow-2xl shadow-[#6B8E23]/30">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block bg-gradient-to-r from-[#6B8E23] to-gray-700 bg-clip-text text-transparent font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/80 border border-[#6B8E23]/30 text-gray-800 px-4 py-3 sm:px-5 sm:py-4 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block bg-gradient-to-r from-[#6B8E23] to-gray-700 bg-clip-text text-transparent font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/80 border border-[#6B8E23]/30 text-gray-800 px-4 py-3 sm:px-5 sm:py-4 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block bg-gradient-to-r from-[#6B8E23] to-gray-700 bg-clip-text text-transparent font-semibold mb-2 sm:mb-3 text-base sm:text-lg">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/80 border border-[#6B8E23]/30 text-gray-800 px-4 py-3 sm:px-5 sm:py-4 rounded-lg focus:outline-none focus:border-[#6B8E23] focus:ring-2 focus:ring-[#6B8E23]/20 transition-all resize-none text-sm sm:text-base"
                    placeholder="Tell us about your requirements"
                  ></textarea>
                </div>
                <Link to="/contact" className="block w-full bg-gradient-to-r from-[#6B8E23] to-[#808000] hover:from-[#556B2F] hover:to-[#6B8E23] text-white px-6 py-4 sm:px-8 sm:py-5 font-semibold transition-all rounded-lg shadow-2xl shadow-[#6B8E23]/40 hover:shadow-[#6B8E23]/60 text-sm sm:text-base text-center">
                  Send Message
                </Link>
              </form>
            </div>
          </div>
        </div>
      </section>

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/brochure" element={<Brochure />} />
        <Route path="/brochure-download" element={<BrochureDownload />} />
        <Route path="/categories/laboratory-equipment" element={<LaboratoryEquipment />} />
        <Route path="/categories/diagnostic-instruments" element={<DiagnosticInstruments />} />
        <Route path="/categories/surgical-instruments" element={<SurgicalInstruments />} />
        <Route path="/categories/hospital-furniture" element={<HospitalFurniture />} />
        <Route path="/categories/respiratory-support" element={<RespiratorySupport />} />
        <Route path="/categories/critical-care" element={<CriticalCare />} />
        <Route path="/categories/educational-equipment" element={<EducationalEquipment />} />
        <Route path="/categories/hospital-supplies" element={<HospitalSupplies />} />
        <Route path="/schedule-demo" element={<ScheduleDemo />} />
        <Route path="/rental-leasing" element={<RentalLeasing />} />
      </Routes>
    </Router>
  );
}

export default App;