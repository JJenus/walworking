import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Phone, 
  CheckCircle, 
  Users, 
  Award, 
  Clock,
  ArrowRight,
  Star,
  Flame,
  HardHat,
  AlertTriangle,
  FileCheck,
  Wrench,
  GraduationCap
} from 'lucide-react';
import SEO from '../components/SEO';
import fighterImg from "../assets/image/team/back-view-firefighters-trying-put-out-wildfire.jpg"

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    // Parallax effect for hero section
    const handleScroll = () => {
      if (heroRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        heroRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Intersection Observer for animations
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

  const pageTitle = "Walworking Technologies | Fire Safety, Services & Consulting in Nigeria";
  const pageDescription = "Your trusted partner for comprehensive fire safety services, solutions, and consulting in Nigeria. We protect lives and property with professional expertise and cutting-edge technology. Get a free consultation today.";
  const canonicalUrl = import.meta.env.VITE_BASE_URL;
  const ogImageUrl = `${import.meta.env.VITE_BASE_URL}${fighterImg}`;

  const schemaMarkup = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Walworking Technologies',
    url: canonicalUrl,
    logo: `${import.meta.env.VITE_BASE_URL}/assets/images/logo/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: import.meta.env.VITE_CONTACT_PHONE_MAIN,
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: 'en'
    },
    description: pageDescription,
  };

  return (
    <div className="overflow-x-hidden">
      <SEO
        title={pageTitle}
        description={pageDescription}
        canonicalUrl={canonicalUrl}
        ogImage={ogImageUrl}
        ogType="website"
        twitterCard="summary_large_image"
        schemaMarkup={schemaMarkup}
      />
      {/* Hero Section with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          ref={heroRef}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(220, 38, 38, 0.4)), url(${fighterImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Hero Content */}
        <div className="relative mt-8 z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="mb-8 animate-fadeInUp">
            <div className="inline-flex items-center bg-primary-600 px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">WALWORKING TECHNOLOGIES</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-slideInLeft">
            Fire Service,<br />
            <span className="text-warning-400">Safety Solutions</span><br />
            and Consulting
          </h1>
          
          <p className="text-xl md:text-2xl text-secondary-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInRight">
            Nigeria's trusted partner for comprehensive fire protection and safety solutions. 
            Protecting lives and property with professional expertise and cutting-edge technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link
              to="/contact"
              className="bg-primary-500 text-white px-8 py-4 rounded-lg hover:bg-primary-600 transition-all duration-300 font-medium text-lg flex items-center justify-center group transform hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2348106981539"
              className="bg-white bg-opacity-20 text-white px-8 py-4 rounded-lg hover:bg-opacity-30 transition-all duration-300 font-medium text-lg flex items-center justify-center backdrop-blur-sm"
            >
              <Phone className="w-5 h-5 mr-2" />
              Emergency: +234 810 698 1539
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow fade-in">
              <div className="bg-danger-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-8 h-8 text-danger-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Fire Service</h3>
              <p className="text-secondary-600 mb-6">
                Complete fire protection systems including detection, suppression, and emergency response services.
              </p>
              <Link 
                to="/services" 
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center justify-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Safety Solutions</h3>
              <p className="text-secondary-600 mb-6">
                Comprehensive PPE solutions and safety equipment for industrial and commercial applications.
              </p>
              <Link 
                to="/products" 
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center justify-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow fade-in">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileCheck className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-4">Consulting</h3>
              <p className="text-secondary-600 mb-6">
                Expert fire safety consulting, risk assessments, and compliance auditing for all facility types.
              </p>
              <Link 
                to="/services" 
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors flex items-center justify-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Quality Assurance & Control
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              We ensure that everything we do is governed by our core values, and that the service we provide is second to none.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="bg-danger-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-10 h-10 text-danger-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-4">Fire Fighting Equipment</h3>
              <p className="text-secondary-600">
                We provide comprehensive service for fire fighting equipment including engineering design, supply, installation and maintenance.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-warning-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-10 h-10 text-warning-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-4">Fire Detection System</h3>
              <p className="text-secondary-600">
                Our fire alarm system services include system design, supply, installation and maintenance.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-warning-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-10 h-10 text-warning-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-4">Personal Safety Equipment</h3>
              <p className="text-secondary-600">
                We supply top-quality Personal Protective Equipment designed to ensure safety and protection in various environments.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-primary-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-4">Quality Assurance</h3>
              <p className="text-secondary-600">
                We ensure top-tier Quality Assurance processes to maintain the highest standards in our products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div className="fade-in">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">500+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satisfied Clients</h3>
              <p className="text-primary-100">
                Trusted by businesses across Nigeria for reliable fire safety solutions
              </p>
            </div>

            <div className="fade-in">
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">10+</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Years Experience</h3>
              <p className="text-primary-100">
                Decade of expertise in fire protection and safety consulting
              </p>
            </div>

            <div className="fade-in">
              <div className="flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 mr-3" />
                <span className="text-4xl font-bold">24/7</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Emergency Response</h3>
              <p className="text-primary-100">
                Round-the-clock emergency support and rapid response services
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <p className="text-primary-600 font-semibold mb-4">SAFETY IS PRIORITY</p>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-8">Our Mission</h2>
            <p className="text-xl text-secondary-600 max-w-4xl mx-auto leading-relaxed">
              Our Mission is to be 100% committed to developing and enhancing our services with 
              relentless focus on safety, efficiency, swift response, technical expertise and 
              growth mindset.
            </p>
          </div>

          {/* Certification Logos */}
          <div className="flex justify-center items-center space-x-12 mt-16 opacity-60 fade-in">
            <div className="text-3xl font-bold text-secondary-400">NFPA</div>
            <div className="text-3xl font-bold text-secondary-400">ISO</div>
            <div className="text-3xl font-bold text-secondary-400">OHSAS</div>
            <div className="text-3xl font-bold text-secondary-400">FMC</div>
            <div className="text-3xl font-bold text-secondary-400">SAFE</div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-secondary-600">
              Trusted by leading organizations across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-secondary-50 p-8 rounded-xl fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "Walworking Technologies provided exceptional fire safety solutions for our manufacturing facility. Their team's professionalism and expertise exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-secondary-900">Adebayo Johnson</p>
                  <p className="text-secondary-600 text-sm">Safety Manager, Lagos Industries</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 p-8 rounded-xl fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "Outstanding service and response time. Their maintenance program has ensured our fire systems are always operational. Highly recommend!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-secondary-900">Fatima Abdullahi</p>
                  <p className="text-secondary-600 text-sm">Facility Manager, Abuja Corporate Center</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-50 p-8 rounded-xl fade-in">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-warning-400 fill-current" />
                ))}
              </div>
              <p className="text-secondary-600 mb-6 italic">
                "Professional training programs and top-quality PPE supplies. Walworking has been our trusted partner for safety solutions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-secondary-300 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-secondary-900">Emeka Okafor</p>
                  <p className="text-secondary-600 text-sm">Operations Director, Port Harcourt Oil & Gas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Facility?
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation and comprehensive fire safety assessment from our experts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium text-lg flex items-center justify-center group"
              >
                Schedule Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/training"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300 font-medium text-lg flex items-center justify-center"
              >
                <GraduationCap className="w-5 h-5 mr-2" />
                View Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
