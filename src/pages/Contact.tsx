import React, { useState, useRef, useEffect } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  MessageSquare
} from 'lucide-react';
import SEO from '../components/SEO';

interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<ContactForm>>({});
  
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

  const baseUrl = import.meta.env.VITE_BASE_URL || 'https://walworkingtechnologiesltd.com';

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Wal Working Technologies - Fire Safety Experts in Nigeria",
    "description": "Get professional fire protection solutions in Nigeria. Contact our safety experts for equipment sales, installation, training, and 24/7 emergency services.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Wal Working Technologies Limited",
      "description": "Fire Protection & Safety Solutions Company in Nigeria",
      "url": baseUrl,
      "logo": `${baseUrl}/assets/images/logo/logo-w.png`,
      "telephone": "+234-810-698-1539",
      "email": "info@walworkingtechnologiesltd.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "15 Custom Street, Alakuko, Lagos/Abeokuta Expressway",
        "addressLocality": "Lagos State",
        "addressCountry": "Nigeria"
      },
      "areaServed": "Nigeria",
      "serviceArea": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": 6.5244,
          "longitude": 3.3792
        },
        "geoRadius": "1000000"
      }
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactForm> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.service.trim()) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field
    if (errors[name as keyof ContactForm]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real application, you would send the form data to your backend
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-16">
      <SEO
        title="Contact Wal Working Technologies - Fire Safety Experts in Nigeria"
        description="Get professional fire protection solutions in Nigeria. Contact our safety experts for equipment sales, installation, training, and 24/7 emergency services."
        canonicalUrl="/contact"
        ogImage={`${baseUrl}/assets/images/contact/fire-safety-experts.jpg`}
        schemaMarkup={contactSchema}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warning-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to secure your facility? Get in touch with our fire safety experts for a 
              comprehensive consultation and customized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Our Location</h3>
              <p className="text-gray-600">
                123 Fire Safety Street<br />
                Victoria Island, Lagos<br />
                Nigeria
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-info-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Phone Numbers</h3>
              <p className="text-gray-600">
                Main: +234 (0) 123 456 7890<br />
                <span className="text-primary-600 font-medium">Secondary: +234 915 106 0130</span>
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Email Addresses</h3>
              <p className="text-gray-600">
                info@walworkingtech.com<br />
                emergency@walworkingtech.com
              </p>
            </div>

            <div className="text-center fade-in">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Business Hours</h3>
              <p className="text-gray-600">
                Mon - Fri: 8:00 AM - 6:00 PM<br />
                <span className="text-red-600 font-medium">Emergency: 24/7</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="slide-in-left">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Get a Free Consultation
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and our fire safety experts will get back to you within 24 hours.
                </p>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-green-700">Thank you! Your message has been sent successfully. We'll contact you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-600 mr-3" />
                    <p className="text-red-700">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.firstName ? 'border-danger-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your first name"
                        />
                      </div>
                      {errors.firstName && (
                        <p className="mt-1 text-sm text-danger-600">{errors.firstName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.lastName ? 'border-danger-500' : 'border-gray-300'
                          }`}
                          placeholder="Enter your last name"
                        />
                      </div>
                      {errors.lastName && (
                        <p className="mt-1 text-sm text-danger-600">{errors.lastName}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.email ? 'border-danger-500' : 'border-gray-300'
                          }`}
                          placeholder="your.email@company.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-danger-600">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                            errors.phone ? 'border-danger-500' : 'border-gray-300'
                          }`}
                          placeholder="+234 XXX XXX XXXX"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-danger-600">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Required *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                        errors.service ? 'border-danger-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="fire-equipment-sales">Fire Equipment Sales</option>
                      <option value="system-installation">System Installation</option>
                      <option value="maintenance-services">Maintenance Services</option>
                      <option value="safety-training">Safety Training</option>
                      <option value="fire-consultancy">Fire Consultancy</option>
                      <option value="ppe-solutions">PPE Solutions</option>
                      <option value="emergency-response">Emergency Response</option>
                      <option value="risk-assessment">Risk Assessment</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-danger-600">{errors.service}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical ${
                          errors.message ? 'border-danger-500' : 'border-gray-300'
                        }`}
                        placeholder="Please describe your fire safety requirements, facility details, or any specific questions you have..."
                      />
                    </div>
                    {errors.message && (
                      <p className="mt-1 text-sm text-danger-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-medium text-lg flex items-center justify-center transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-[1.02]'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map and Additional Info */}
            <div className="slide-in-right space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gray-200 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-medium">Interactive Map</p>
                    <p className="text-sm">123 Fire Safety Street, Victoria Island, Lagos</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-primary-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Phone className="w-6 h-6 mr-3" />
                  Emergency Contact
                </h3>
                <p className="mb-4">
                  For fire emergencies or urgent safety concerns, contact our 24/7 emergency response team:
                </p>
                <div className="space-y-2">
                  <a 
                    href="tel:+2349876543210" 
                    className="block text-2xl font-bold hover:text-primary-200 transition-colors"
                  >
                    +234 (0) 987 654 3210
                  </a>
                  <a 
                    href="mailto:emergency@walworkingtech.com" 
                    className="block hover:text-primary-200 transition-colors"
                  >
                    emergency@walworkingtech.com
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3 text-info-600" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="font-medium">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                  <div className="pt-3 border-t border-gray-200">
                    <div className="flex justify-between">
                      <span className="text-primary-600 font-medium">Emergency Support</span>
                      <span className="font-bold text-primary-600">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                What industries do you serve?
              </h4>
              <p className="text-gray-600">
                We service clients in the oil and gas, manufacturing, power, ICT, and individual sectors 
                across Nigeria with comprehensive fire protection and PPE solutions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                What fire protection systems do you offer?
              </h4>
              <p className="text-gray-600">
                We offer FM-200 fire suppression systems, CO2 flooding systems, fire alarm/detection 
                systems, fire extinguishers, and comprehensive PPE solutions with full engineering design, 
                supply, installation, and maintenance services.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                Do you provide training and consultancy services?
              </h4>
              <p className="text-gray-600">
                Yes, we provide comprehensive training and consultancy services for fire safety equipment 
                and personal protective equipment, helping organizations maintain compliance and safety standards.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg fade-in">
              <h4 className="font-semibold text-lg text-gray-900 mb-3">
                What makes your PPE supply different?
              </h4>
              <p className="text-gray-600">
                We prioritize quality, delivering reliable personal protective and safety equipment 
                tailored to meet individual needs and satisfaction. Our equipment meets the highest 
                standards and is governed by our core values.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;