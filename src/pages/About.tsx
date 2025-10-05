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
  Globe
} from 'lucide-react';

const About: React.FC = () => {
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

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warning-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Wal Working Technologies
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              A leading fire protection company providing sales, installation, maintenance, training, and consultancy 
              for fire safety equipment and personal protective equipment (PPE) in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Fire Safety Partner
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wal Working Technologies Limited is a fire protection company providing comprehensive solutions 
                to clients in the oil and gas, manufacturing, power, ICT, and individual sectors across Nigeria.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our outstanding reputation for innovation, reliability, and service excellence comes from 
                configuring modular systems focused on client requirements. We aim to establish mutually 
                beneficial business relationships, ensuring safety for lives, properties, and critical assets 
                to support business continuity, growth, and profitability.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-gray-600">Expert Team</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img
                src="https://images.pexels.com/photos/6937000/pexels-photo-6937000.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Fire safety professionals at work"
                className="rounded-xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600">
              Built on strong principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To be 100% committed to flawlessly executing our services with a relentless focus on safety, 
                efficiency, rapid response, technical expertise, and a growth mindset. To provide a safe, 
                rewarding, inclusive, and sustainable career platform for all employees while supporting 
                the growth of manufacturing industries, oil and gas sectors, power sectors, and government parastatals.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-info-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the service partner of choice for all potential clients, renowned as a forward-thinking, 
                progressive organization operating in the best interests of our clients and employees.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center fade-in">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Safety First, Excellence Always, Integrity in Action, Customer-Centric Approach, 
                Innovation & Growth, Environmental Responsibility, and CASHES (Community Affairs, 
                Safety, Health, Environment, and Security) commitment in all our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              QHSE Objectives & CASHES Policies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to Quality, Health, Safety, Environment, and Security excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-lg fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">QHSE Objectives</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Eliminate HSE incidents across our operations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Prevent pollution and environmental damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Investigate and prevent recurrence of quality and HSE-related non-conformances</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Set robust but achievable QHSE objectives with continuous improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Train and develop all our employees</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Ensure compliance with all applicable local and international legislation</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg fade-in">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">CASHES Policies</h3>
              <p className="text-gray-600 mb-4">
                CASHES stands for Community Affairs, Safety, Health, Environment, and Security. 
                We carry out all business activities to ensure the safety, health, and protection of our clients and third parties.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Developing practicable CASHES programs with top management commitment</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Providing necessary CASHES training for safe task performance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Supplying protective equipment for accident prevention</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">Implementing meaningful safety monitoring measures</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Engineering Excellence</h4>
              <p className="text-gray-600">
                Our success depends on brilliant engineers offering diverse projects, fascinating challenges, and global opportunities.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Field Operations</h4>
              <p className="text-gray-600">
                We provide suitable field technicians for smooth operations with outstanding training and real advancement opportunities.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Career Development</h4>
              <p className="text-gray-600">
                An attractive place for energetic individuals seeking rewarding opportunities in a fast-paced, agile environment.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Safety Training</h4>
              <p className="text-gray-600">
                Comprehensive fire safety training programs for personnel at all organizational levels.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Risk Assessment</h4>
              <p className="text-gray-600">
                Detailed fire risk assessments and safety audits to identify vulnerabilities and recommend solutions.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">Emergency Response</h4>
              <p className="text-gray-600">
                24/7 emergency response services with rapid deployment capabilities across Nigeria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Certifications & Accreditations
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Our commitment to excellence is validated by leading industry certifications and partnerships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">NFPA Certified</h4>
              <p className="text-secondary-300 text-sm">
                National Fire Protection Association certified for fire safety standards compliance
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">ISO 9001:2015</h4>
              <p className="text-secondary-300 text-sm">
                Quality Management System certification ensuring consistent service delivery
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Shield className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">OHSAS 18001</h4>
              <p className="text-secondary-300 text-sm">
                Occupational Health & Safety Management System certification
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-white bg-opacity-10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                <Globe className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">FMC Nigeria</h4>
              <p className="text-secondary-300 text-sm">
                Licensed fire protection contractor with Federal Ministry of Commerce
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <img
                src="https://images.pexels.com/photos/1662770/pexels-photo-1662770.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Professional fire safety team"
                className="rounded-xl shadow-2xl"
              />
            </div>

            <div className="slide-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose WalWorking Technologies?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-2 rounded-lg flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Proven Track Record</h4>
                    <p className="text-gray-600">
                      Over 500 successful projects completed across various industries in Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-info-100 p-2 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 text-info-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Expert Team</h4>
                    <p className="text-gray-600">
                      Certified fire protection engineers and safety specialists with extensive experience
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-success-100 p-2 rounded-lg flex-shrink-0">
                    <Clock className="w-6 h-6 text-success-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">24/7 Support</h4>
                    <p className="text-gray-600">
                      Round-the-clock emergency response and technical support services
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-warning-100 p-2 rounded-lg flex-shrink-0">
                    <Award className="w-6 h-6 text-warning-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">Quality Assurance</h4>
                    <p className="text-gray-600">
                      ISO certified processes ensuring highest standards in all our services
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warning-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Experience the WalWorking difference. Contact us today for a comprehensive fire safety consultation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-medium text-lg group"
          >
            Start Your Project Today
            <CheckCircle className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;