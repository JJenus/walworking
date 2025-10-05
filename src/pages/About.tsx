import React from 'react';
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

const About: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://walworkingtechnologiesltd.com';
  
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Wal Working Technologies Limited",
    "description": "Leading fire protection company in Nigeria providing comprehensive fire safety solutions, equipment sales, installation, maintenance, training and consultancy services.",
    "publisher": {
      "@type": "Organization",
      "name": "Wal Working Technologies Limited",
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
    <div className="min-h-screen bg-bs-white">
      <SEO
        title="About Wal Working Technologies - Fire Protection Experts in Nigeria"
        description="Learn about Wal Working Technologies Limited - Nigeria's leading fire protection company with 10+ years experience in fire safety equipment, training, and consultancy services."
        canonicalUrl="/about"
        ogImage={`${baseUrl}/assets/images/team/team1.png`}
        schemaMarkup={aboutSchema}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-bs-purple via-bs-indigo to-bs-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-bs-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center text-bs-white">
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                About <span className="text-bs-warning">Wal Working</span> Technologies
              </h1>
              <p className="text-xl md:text-2xl text-bs-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
                Leading Fire Protection & Safety Solutions Provider in Nigeria with 10+ Years of Excellence
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="bg-bs-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-bs-white/20">
                  <span className="text-bs-warning font-semibold">500+</span> Projects
                </div>
                <div className="bg-bs-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-bs-white/20">
                  <span className="text-bs-warning font-semibold">10+</span> Years Experience
                </div>
                <div className="bg-bs-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-bs-white/20">
                  <span className="text-bs-warning font-semibold">50+</span> Expert Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-bs-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-bs-purple/5 to-bs-primary/5 p-8 rounded-2xl border border-bs-purple/20">
                <h2 className="text-3xl md:text-4xl font-bold text-bs-gray-800 mb-6">
                  Your Trusted Fire Safety <span className="text-bs-primary">Partner</span>
                </h2>
                <p className="text-lg text-bs-gray-700 mb-6 leading-relaxed">
                  Wal Working Technologies Limited is a premier fire protection company delivering comprehensive 
                  safety solutions to clients across Nigeria's oil and gas, manufacturing, power, ICT, and commercial sectors.
                </p>
                <p className="text-lg text-bs-gray-700 mb-8 leading-relaxed">
                  Our reputation for <strong className="text-bs-primary">innovation, reliability, and service excellence</strong> stems from 
                  our client-focused approach. We build lasting partnerships to ensure safety for lives, properties, 
                  and critical assets while supporting business continuity and growth.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-4 bg-bs-white rounded-lg shadow-sm border border-bs-gray-200">
                    <div className="text-2xl font-bold text-bs-primary mb-2">24/7</div>
                    <div className="text-bs-gray-600 text-sm">Emergency Support</div>
                  </div>
                  <div className="text-center p-4 bg-bs-white rounded-lg shadow-sm border border-bs-gray-200">
                    <div className="text-2xl font-bold text-bs-primary mb-2">100%</div>
                    <div className="text-bs-gray-600 text-sm">Safety Compliance</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <div className="relative">
                <img
                  src="/assets/images/team/team1.png"
                  alt="Professional fire safety team at Wal Working Technologies"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -left-6 bg-bs-primary text-bs-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold">10+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-to-br from-bs-gray-100 to-bs-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-bs-gray-800 mb-4">
              Our <span className="text-bs-primary">Foundation</span>
            </h2>
            <p className="text-xl text-bs-gray-600 max-w-2xl mx-auto">
              Built on strong principles that guide our commitment to excellence and safety
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="group bg-bs-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bs-gray-200 hover:border-bs-primary/30 animate-fade-in-up">
              <div className="bg-bs-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-bs-primary" />
              </div>
              <h3 className="text-xl font-bold text-bs-gray-800 mb-4 text-center">Our Mission</h3>
              <p className="text-bs-gray-700 leading-relaxed text-center">
                To deliver flawless fire protection services with relentless focus on safety, efficiency, 
                and technical expertise while supporting sustainable career growth and industrial development.
              </p>
            </div>

            {/* Vision */}
            <div className="group bg-bs-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bs-gray-200 hover:border-bs-info/30 animate-fade-in-up" style={{animationDelay: '200ms'}}>
              <div className="bg-bs-info/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-8 h-8 text-bs-info" />
              </div>
              <h3 className="text-xl font-bold text-bs-gray-800 mb-4 text-center">Our Vision</h3>
              <p className="text-bs-gray-700 leading-relaxed text-center">
                To be Nigeria's preferred fire safety partner, recognized as a forward-thinking organization 
                operating in the best interests of clients and employees alike.
              </p>
            </div>

            {/* Values */}
            <div className="group bg-bs-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-bs-gray-200 hover:border-bs-success/30 animate-fade-in-up" style={{animationDelay: '400ms'}}>
              <div className="bg-bs-success/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-bs-success" />
              </div>
              <h3 className="text-xl font-bold text-bs-gray-800 mb-4 text-center">Our Values</h3>
              <p className="text-bs-gray-700 leading-relaxed text-center">
                Safety First, Excellence Always, Integrity in Action, Customer-Centric Approach, 
                Innovation & Growth, and Environmental Responsibility in all operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-bs-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-bs-gray-800 mb-4">
              QHSE Excellence & <span className="text-bs-primary">CASHES</span> Commitment
            </h2>
            <p className="text-xl text-bs-gray-600 max-w-3xl mx-auto">
              Our unwavering dedication to Quality, Health, Safety, Environment, and Security standards
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="animate-slide-in-left">
              <div className="bg-gradient-to-br from-bs-primary/5 to-bs-white p-8 rounded-2xl border border-bs-primary/20">
                <h3 className="text-2xl font-bold text-bs-gray-800 mb-6 flex items-center">
                  <ShieldCheck className="w-8 h-8 text-bs-primary mr-3" />
                  QHSE Objectives
                </h3>
                <ul className="space-y-4">
                  {[
                    "Eliminate HSE incidents across all operations",
                    "Prevent pollution and environmental damage",
                    "Investigate and prevent recurrence of quality issues",
                    "Set robust but achievable QHSE objectives",
                    "Continuous training and employee development",
                    "Ensure compliance with all legislation"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-bs-success mr-3 mt-1 flex-shrink-0" />
                      <span className="text-bs-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gradient-to-br from-bs-info/5 to-bs-white p-8 rounded-2xl border border-bs-info/20">
                <h3 className="text-2xl font-bold text-bs-gray-800 mb-6 flex items-center">
                  <Zap className="w-8 h-8 text-bs-info mr-3" />
                  CASHES Policies
                </h3>
                <p className="text-bs-gray-700 mb-6">
                  CASHES (Community Affairs, Safety, Health, Environment, Security) ensures comprehensive 
                  protection for our clients, employees, and communities.
                </p>
                <ul className="space-y-4">
                  {[
                    "Developing practical CASHES programs with management commitment",
                    "Providing essential safety training for all tasks",
                    "Supplying protective equipment for accident prevention",
                    "Implementing meaningful safety monitoring measures"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-bs-success mr-3 mt-1 flex-shrink-0" />
                      <span className="text-bs-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Services Grid */}
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
                className="bg-bs-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 border border-bs-gray-200 group hover:border-bs-primary/30 animate-fade-in-up"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="bg-bs-white w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-bs-primary" />
                </div>
                <h4 className="font-semibold text-lg text-bs-gray-800 mb-3">{service.title}</h4>
                <p className="text-bs-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-bs-indigo to-bs-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-bs-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-bs-white mb-4">
              Certifications & <span className="text-bs-warning">Accreditations</span>
            </h2>
            <p className="text-xl text-bs-gray-200 max-w-3xl mx-auto">
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
                className="text-center animate-fade-in-up group"
                style={{animationDelay: `${index * 200}ms`}}
              >
                <div className="bg-bs-white/10 backdrop-blur-sm w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-bs-white/20">
                  <cert.icon className="w-10 h-10 text-bs-white" />
                </div>
                <h4 className="text-lg font-bold text-bs-white mb-2">{cert.title}</h4>
                <p className="text-bs-gray-200 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-bs-gray-100 to-bs-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <div className="relative">
                <img
                  src="/assets/images/team/construction-works.jpg"
                  alt="Professional fire safety team working on installation"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
                <div className="absolute -top-4 -right-4 bg-bs-warning text-bs-gray-800 p-4 rounded-2xl shadow-xl">
                  <div className="text-sm font-semibold">Trusted Since</div>
                  <div className="text-xl font-bold">2013</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-bs-gray-800 mb-6">
                Why Choose <span className="text-bs-primary">WalWorking</span>?
              </h2>
              
              <div className="space-y-6">
                {[
                  { icon: CheckCircle, color: "primary", title: "Proven Track Record", desc: "500+ successful projects across various industries in Nigeria" },
                  { icon: Users, color: "info", title: "Expert Team", desc: "Certified fire protection engineers and safety specialists" },
                  { icon: Clock, color: "success", title: "24/7 Support", desc: "Round-the-clock emergency response and technical support" },
                  { icon: Award, color: "warning", title: "Quality Assurance", desc: "ISO certified processes ensuring highest standards" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`bg-bs-${item.color}/10 p-3 rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className={`w-6 h-6 text-bs-${item.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-bs-gray-800 mb-2">{item.title}</h4>
                      <p className="text-bs-gray-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bs-primary to-bs-indigo relative overflow-hidden">
        <div className="absolute inset-0 bg-bs-black/10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-bs-white relative animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-xl text-bs-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Partner with Nigeria's leading fire protection experts. Get a comprehensive safety consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-bs-white text-bs-primary px-8 py-4 rounded-xl hover:bg-bs-gray-100 transition-all duration-300 font-semibold text-lg group shadow-lg hover:shadow-xl"
            >
              Start Your Project
              <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center border-2 border-bs-white text-bs-white px-8 py-4 rounded-xl hover:bg-bs-white hover:text-bs-primary transition-all duration-300 font-semibold text-lg group"
            >
              Our Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;