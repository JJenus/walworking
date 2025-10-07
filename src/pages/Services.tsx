import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Shield, 
  Wrench, 
  GraduationCap, 
  FileCheck, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Phone,
  Clock,
  Users,
  Award
} from 'lucide-react';
import SEO from '../components/SEO';
import teamImg from '../assets/image/team/team1.jpg';
import { contactPhoneMain } from '../util/contact';


const Services: React.FC = () => {
  const observerRef = useRef<IntersectionObserver>();
  const processRef = useRef<HTMLDivElement>(null);

  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://walworkingtechnologiesltd.com';

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

    // Sticky process section header
    const handleScroll = () => {
      if (processRef.current) {
        const rect = processRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          processRef.current.classList.add('sticky', 'top-0', 'shadow-md', 'bg-gray-50', 'z-10');
        } else {
          processRef.current.classList.remove('sticky', 'top-0', 'shadow-md', 'bg-gray-50', 'z-10');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    {
      icon: Flame,
      title: 'Fire Equipment Sales',
      description: 'Comprehensive range of fire protection equipment from leading manufacturers.',
      features: [
        'Fire extinguishers (all types)',
        'Fire detection systems',
        'Fire suppression systems',
        'Emergency lighting systems',
        'Fire hoses and hydrants',
        'Fire blankets and safety equipment'
      ],
      color: 'danger'
    },
    {
      icon: Wrench,
      title: 'System Installation',
      description: 'Professional installation of fire protection systems by certified technicians.',
      features: [
        'Fire alarm system installation',
        'Sprinkler system installation',
        'Gas suppression systems',
        'Emergency evacuation systems',
        'Fire door installation',
        'Compliance certification'
      ],
      color: 'info'
    },
    {
      icon: Shield,
      title: 'Maintenance Services',
      description: 'Regular maintenance to ensure optimal performance of fire protection systems.',
      features: [
        'Preventive maintenance programs',
        'System testing and inspection',
        'Emergency repairs',
        'Annual compliance checks',
        'Equipment servicing',
        '24/7 emergency support'
      ],
      color: 'success'
    },
    {
      icon: GraduationCap,
      title: 'Safety Training',
      description: 'Comprehensive fire safety training programs for personnel at all levels.',
      features: [
        'Fire warden training',
        'Emergency evacuation drills',
        'Fire extinguisher training',
        'Fire risk assessment training',
        'Safety awareness programs',
        'Certification courses'
      ],
      color: 'warning'
    },
    {
      icon: FileCheck,
      title: 'Fire Consultancy',
      description: 'Expert consulting services for fire safety compliance and risk management.',
      features: [
        'Fire risk assessments',
        'Compliance auditing',
        'Fire safety strategy development',
        'Regulatory compliance consulting',
        'Emergency response planning',
        'Expert witness services'
      ],
      color: 'primary'
    },
    {
      icon: AlertTriangle,
      title: 'Emergency Response',
      description: '24/7 emergency response services for fire safety incidents and system failures.',
      features: [
        '24/7 emergency hotline',
        'Rapid response team',
        'Emergency system repairs',
        'Incident investigation',
        'Post-incident support',
        'Crisis management assistance'
      ],
      color: 'danger'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      danger: 'bg-danger-100 text-danger-600',
      info: 'bg-info-100 text-info-600',
      success: 'bg-success-100 text-success-600',
      warning: 'bg-warning-100 text-warning-600',
      primary: 'bg-primary-100 text-primary-600'
    };
    return colors[color as keyof typeof colors] || 'bg-primary-100 text-primary-600';
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Fire Protection Services",
    "provider": {
      "@type": "Organization",
      "name": "Walworking Technologies Limited",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/images/logo/logo-w.png`,
      "telephone": "+234-810-698-1539",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15 Custom Street, Alakuko, Lagos/Abeokuta Expressway",
        "addressLocality": "Lagos State",
        "addressCountry": "Nigeria"
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Fire Safety Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    },
    "breadcrumbList": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": `${baseUrl}/services`
        }
      ]
    }
  };

  return (
    <div className="pt-16">
      <SEO
        title="Fire Protection Services | Walworking Technologies - Nigeria"
        description="Comprehensive fire protection services in Nigeria, including equipment sales, system installation, maintenance, safety training, consultancy, and 24/7 emergency response."
        canonicalUrl={`${baseUrl}/services`}
        ogImage={`${baseUrl}${teamImg}`}
        ogType="website"
        twitterCard="summary_large_image"
        schemaMarkup={serviceSchema}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Our Fire Safety Services
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive fire protection and safety solutions tailored to meet the unique 
              requirements of industrial, commercial, and institutional facilities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Fire Safety Solutions
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end fire protection 
              services that ensure the safety and compliance of your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in group focus-within:shadow-xl">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                        <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-600 font-medium text-sm sm:text-base hover:text-primary-700 focus:text-primary-700 transition-colors group focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label={`Get a quote for ${service.title}`}
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-20 bg-gray-50" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-300">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              A structured approach to ensure comprehensive fire safety solutions
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { number: 1, title: 'Initial Assessment', desc: 'Comprehensive site survey and risk assessment to understand your specific fire safety requirements.', color: 'danger' },
              { number: 2, title: 'Custom Solution Design', desc: 'Development of tailored fire protection solutions based on your facility’s unique needs and compliance requirements.', color: 'info' },
              { number: 3, title: 'Professional Installation', desc: 'Expert installation by certified technicians using industry-leading equipment and best practices.', color: 'success' },
              { number: 4, title: 'Ongoing Support', desc: 'Continuous maintenance, training, and support to ensure long-term system performance and compliance.', color: 'warning' }
            ].map((step, index) => (
              <div key={index} className="text-center fade-in">
                <div className={`bg-${step.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`text-2xl font-bold text-${step.color}-600`}>{step.number}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                Why Choose Walworking for Your Fire Safety Needs?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                With over a decade of experience in Nigeria’s fire protection industry, we combine 
                technical expertise with local knowledge to deliver solutions that work.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Award, color: 'primary', title: 'Certified Expertise', desc: 'NFPA certified technicians and ISO 9001:2015 quality management systems' },
                  { icon: Clock, color: 'info', title: 'Rapid Response', desc: '24/7 emergency support with typical response times under 60 minutes' },
                  { icon: Users, color: 'success', title: 'Local Knowledge', desc: 'Deep understanding of Nigerian fire safety regulations and compliance requirements' },
                  { icon: CheckCircle, color: 'warning', title: 'Comprehensive Solutions', desc: 'End-to-end services from initial design to ongoing maintenance and support' }
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`bg-${item.color}-100 p-2 rounded-lg flex-shrink-0`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-2">{item.title}</h4>
                      <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="slide-in-right">
              <picture>
                <source srcSet={teamImg} media="(min-width: 768px)" />
                <img
                  src={teamImg}
                  srcSet={`${teamImg} 400w, ${teamImg} 800w`}
                  sizes="(max-width: 767px) 400px, 800px"
                  alt="Fire safety professional inspecting equipment in Nigeria"
                  className="rounded-xl shadow-2xl w-full h-auto"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Tailored fire safety solutions for diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              'Oil & Gas',
              'Manufacturing',
              'Commercial Buildings',
              'Healthcare',
              'Education',
              'Government'
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center fade-in hover:shadow-xl transition-all duration-300">
                <h4 className="font-semibold text-base sm:text-lg text-gray-900 mb-3">{industry}</h4>
                <p className="text-gray-600 text-sm sm:text-base">
                  {industry === 'Oil & Gas' && 'Specialized fire protection for refineries, petrochemical plants, and offshore facilities.'}
                  {industry === 'Manufacturing' && 'Industrial fire safety solutions for manufacturing plants and production facilities.'}
                  {industry === 'Commercial Buildings' && 'Fire protection systems for office buildings, shopping centers, and hotels.'}
                  {industry === 'Healthcare' && 'Specialized fire safety solutions for hospitals and medical facilities.'}
                  {industry === 'Education' && 'Fire safety systems for schools, universities, and educational institutions.'}
                  {industry === 'Government' && 'Fire protection for government buildings and public facilities.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Contact our fire safety experts today for a comprehensive assessment and customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-700 focus:bg-primary-700 transition-all duration-300 font-medium text-sm sm:text-lg flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Get a free fire safety assessment"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${contactPhoneMain}`}
              className="bg-transparent border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-white hover:text-primary-900 focus:bg-white focus:text-primary-900 transition-all duration-300 font-medium text-sm sm:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white"
              aria-label="Call for fire safety services"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call Now: {contactPhoneMain}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
