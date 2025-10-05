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

const Services: React.FC = () => {
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
      color: 'red'
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
      color: 'blue'
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
      color: 'green'
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
      color: 'orange'
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
      color: 'purple'
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
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      red: 'bg-danger-100 text-danger-600',
      blue: 'bg-info-100 text-info-600',
      green: 'bg-success-100 text-success-600',
      orange: 'bg-orange-100 text-orange-600',
      purple: 'bg-primary-100 text-primary-600'
    };
    return colors[color as keyof typeof colors] || 'bg-primary-100 text-primary-600';
  };

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warning-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive fire protection and safety solutions tailored to meet the unique 
              requirements of industrial, commercial, and institutional facilities across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Fire Safety Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing maintenance, we provide end-to-end fire protection 
              services that ensure the safety and compliance of your facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 fade-in group">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${getColorClasses(service.color)} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors group"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Service Process
            </h2>
            <p className="text-xl text-gray-600">
              A structured approach to ensure comprehensive fire safety solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Initial Assessment</h3>
              <p className="text-gray-600">
                Comprehensive site survey and risk assessment to understand your specific fire safety requirements.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-info-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Custom Solution Design</h3>
              <p className="text-gray-600">
                Development of tailored fire protection solutions based on your facility's unique needs and compliance requirements.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-success-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Professional Installation</h3>
              <p className="text-gray-600">
                Expert installation by certified technicians using industry-leading equipment and best practices.
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Ongoing Support</h3>
              <p className="text-gray-600">
                Continuous maintenance, training, and support to ensure long-term system performance and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose WalWorking for Your Fire Safety Needs?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over a decade of experience in Nigeria's fire protection industry, we combine 
                technical expertise with local knowledge to deliver solutions that work.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Certified Expertise</h4>
                    <p className="text-gray-600">
                      NFPA certified technicians and ISO 9001:2015 quality management systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-info-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-info-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Rapid Response</h4>
                    <p className="text-gray-600">
                      24/7 emergency support with typical response times under 60 minutes
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-success-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Local Knowledge</h4>
                    <p className="text-gray-600">
                      Deep understanding of Nigerian fire safety regulations and compliance requirements
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Comprehensive Solutions</h4>
                    <p className="text-gray-600">
                      End-to-end services from initial design to ongoing maintenance and support
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img
                src="https://images.pexels.com/photos/4541326/pexels-photo-4541326.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fire safety professional inspecting equipment"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Tailored fire safety solutions for diverse industry sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Oil & Gas</h4>
              <p className="text-gray-600">
                Specialized fire protection for refineries, petrochemical plants, and offshore facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Manufacturing</h4>
              <p className="text-gray-600">
                Industrial fire safety solutions for manufacturing plants and production facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Commercial Buildings</h4>
              <p className="text-gray-600">
                Fire protection systems for office buildings, shopping centers, and hotels.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Healthcare</h4>
              <p className="text-gray-600">
                Specialized fire safety solutions for hospitals and medical facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Education</h4>
              <p className="text-gray-600">
                Fire safety systems for schools, universities, and educational institutions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Government</h4>
              <p className="text-gray-600">
                Fire protection for government buildings and public facilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Enhance Your Fire Safety?
          </h2>
          <p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
            Contact our fire safety experts today for a comprehensive assessment and customized solution proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium text-lg flex items-center justify-center group"
            >
              Get Free Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2341234567890"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300 font-medium text-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +234 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;