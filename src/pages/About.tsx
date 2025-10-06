import React, { useEffect, useRef } from 'react';
import { 
  Shield, 
  Users, 
  Award, 
  Clock, 
  CheckCircle, 
  Target,
  Eye,
  Heart,
  Globe,
  TrendingUp,
  ShieldCheck,
  Zap,
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import certImg from "../assets/image/company/certificate-of-incorporation.png"
import team1Img from "../assets/image/team/team1.jpg"

const About: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://walworkingtechnologiesltd.com';
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About WalWorking Technologies Limited",
    "description": "Leading fire protection company in Nigeria providing comprehensive fire safety solutions, equipment sales, installation, maintenance, training and consultancy services.",
    "publisher": {
      "@type": "Organization",
      "name": "WalWorking Technologies Limited",
      "description": "Fire Protection & Safety Solutions Company in Nigeria",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/images/logo/logo-w.png`,
      "telephone": "+234-810-698-1539",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15 Custom Street, Alakuko, Lagos/Abeokuta Expressway",
        "addressLocality": "Lagos State",
        "addressCountry": "Nigeria"
      },
      "serviceArea": "Nigeria",
      "services": [
        "Fire Protection",
        "Safety Equipment Sales",
        "Fire Training",
        "Fire Consultancy",
        "PPE Solutions",
        "FM-200 Systems",
        "CO2 Flooding Systems"
      ]
    }
  };

  return (
    <div className="pt-16 min-h-screen">
      <SEO
        title="About WalWorking Technologies - Fire Safety Experts in Nigeria"
        description="Learn about WalWorking Technologies Limited - Nigeria's leading fire protection company with 10+ years experience in fire safety equipment, training, and consultancy services."
        canonicalUrl="/about"
        ogImage={`${baseUrl}/assets/images/team/team1.png`}
        schemaMarkup={aboutSchema}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-warning-400">WalWorking</span> Technologies
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Leading Fire Protection & Safety Solutions Provider in Nigeria with 10+ Years of Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Your Trusted Fire Safety <span className="text-primary-600">Partner</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  WalWorking Technologies Limited is a premier fire protection company delivering comprehensive 
                  safety solutions to clients across Nigeria's oil and gas, manufacturing, power, ICT, and commercial sectors.
                </p>
                <p className="text-gray-600 mb-8">
                  Our reputation for <strong className="text-primary-600">innovation, reliability, and service excellence</strong> stems from 
                  our client-focused approach. We build lasting partnerships to ensure safety for lives, properties, 
                  and critical assets while supporting business continuity and growth.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-600 mb-2">24/7</div>
                    <div className="text-gray-600 text-sm">Emergency Support</div>
                  </div>
                  <div className="text-center bg-gray-50 p-4 rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-primary-600 mb-2">100%</div>
                    <div className="text-gray-600 text-sm">Safety Compliance</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <div className="relative">
                <img
                  src={team1Img}
                  alt="Professional fire safety team at WalWorking Technologies"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary-600">Foundation</span>
            </h2>
            <p className="text-xl text-gray-600">
              Built on strong principles that guide our commitment to excellence and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver flawless fire protection services with relentless focus on safety, efficiency, 
                and technical expertise while supporting sustainable career growth and industrial development.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-info-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be Nigeria's preferred fire safety partner, recognized as a forward-thinking organization 
                operating in the best interests of clients and employees alike.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-success-100 W-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Safety First, Excellence Always, Integrity in Action, Customer-Centric Approach, 
                Innovation & Growth, and Environmental Responsibility in all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              QHSE Excellence & <span className="text-primary-600">CASHES</span> Commitment
            </h2>
            <p className="text-xl text-gray-600">
              Our unwavering dedication to Quality, Health, Safety, Environment, and Security standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="slide-in-left">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 text-primary-600 mr-3" />
                  QHSE Objectives
                </h3>
                <div className="space-y-4">
                  {[
                    "Eliminate HSE incidents across all operations",
                    "Prevent pollution and environmental damage",
                    "Investigate and prevent recurrence of quality issues",
                    "Set robust but achievable QHSE objectives",
                    "Continuous training and employee development",
                    "Ensure compliance with all legislation"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-info-600 mr-3" />
                  CASHES Policies
                </h3>
                <p className="text-gray-600 mb-6">
                  CASHES (Community Affairs, Safety, Health, Environment, Security) ensures comprehensive 
                  protection for our clients, employees, and communities.
                </p>
                <div className="space-y-4">
                  {[
                    "Developing practical CASHES programs with management commitment",
                    "Providing essential safety training for all tasks",
                    "Supplying protective equipment for accident prevention",
                    "Implementing meaningful safety monitoring measures"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-success-600 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: TrendingUp, title: "Engineering Excellence", desc: "Brilliant engineers offering diverse projects and global opportunities" },
              { icon: Users, title: "Field Operations", desc: "Skilled technicians with outstanding training and advancement opportunities" },
              { icon: Award, title: "Career Development", desc: "Rewarding opportunities in a fast-paced, agile environment" },
              { icon: Shield, title: "Safety Training", desc: "Comprehensive fire safety programs for all organizational levels" },
              { icon: Eye, title: "Risk Assessment", desc: "Detailed safety audits to identify vulnerabilities and solutions" },
              { icon: Clock, title: "Emergency Response", desc: "24/7 emergency services with rapid deployment across Nigeria" }
            ].map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-6 rounded-lg shadow-sm text-center fade-in"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-white mb-4">
              Certifications & <span className="text-warning-400">Accreditation</span>
            </h2>
            <p className="text-xl text-primary-100">
              Validated excellence through leading industry certifications and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: "NFPA Certified", desc: "National Fire Protection Association standards compliance" },
              { icon: CheckCircle, title: "ISO 9001:2015", desc: "Quality Management System certification" },
              { icon: Shield, title: "OHSAS 18001", desc: "Occupational Health & Safety Management" },
              { icon: Globe, title: "FMC Nigeria", desc: "Licensed fire protection contractor" }
            ].map((cert, index) => (
              <div 
                key={index}
                className="text-center fade-in"
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <cert.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h4 className="font-bold text-white sm:text-lg mb-2">{cert.title}</h4>
                <p className="text-white text-sm sm:text-base">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <div className="relative">
                <img
                  src={certImg}
                  alt="Professional fire safety team working on installation"
                  className="rounded-xl shadow-lg w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -top-4 -right-4 bg-primary-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">Trusted Since</div>
                  <div className="text-xl font-bold">2020</div>
                </div>
              </div>
            </div>

            <div className="slide-in-right">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose <span className="text-primary-600">WalWorking</span>?
                </h2>
                <div className="space-y-6">
                  {[
                    { icon: CheckCircle, color: "success", title: "Proven Track Record", desc: "500+ successful projects across various industries in Nigeria" },
                    { icon: Users, color: "info", title: "Expert Team", desc: "Certified fire protection engineers and safety specialists" },
                    { icon: Clock, color: "success", title: "24/7 Support", desc: "Round-the-clock emergency response and technical support" },
                    { icon: Award, color: "warning", title: "Quality Assurance", desc: "ISO certified processes ensuring highest standards" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`bg-${item.color}-100 p-3 rounded-full flex-shrink-0`}>
                        <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Enhance Your Fire Safety?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Partner with Nigeria's leading fire protection experts. Get a comprehensive safety consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl"
              >
                Start Your Project
                <CheckCircle className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 font-semibold text-lg"
              >
                Our Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;