import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Shield, 
  HardHat, 
  AlertTriangle, 
  Eye, 
  Wind,
  Search,
  Filter,
  ArrowRight,
  CheckCircle,
  Star,
  Phone
} from 'lucide-react';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

  const categories = [
    { id: 'all', name: 'All Products', icon: Shield },
    { id: 'extinguishers', name: 'Fire Extinguishers', icon: Flame },
    { id: 'detection', name: 'Detection Systems', icon: AlertTriangle },
    { id: 'suppression', name: 'Suppression Systems', icon: Wind },
    { id: 'ppe', name: 'Personal Protective Equipment', icon: HardHat },
    { id: 'emergency', name: 'Emergency Equipment', icon: Eye }
  ];

  const products = [
    {
      id: 1,
      name: 'Fire Extinguishers',
      category: 'extinguishers',
      image: 'https://images.pexels.com/photos/7476775/pexels-photo-7476775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'From ₦15,000',
      rating: 4.8,
      description: 'External fire safety systems used to extinguish or control minor fires in emergency situations. Available for offices, factories, homes, industrial areas, and hotels.',
      features: ['Sales & Installation', 'Maintenance & Servicing', 'Refilling Services', 'Multiple Types Available'],
      applications: ['Offices', 'Factories', 'Homes', 'Industrial Areas', 'Hotels']
    },
    {
      id: 2,
      name: 'FM-200 Fire Suppression System',
      category: 'suppression',
      image: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'Quote on Request',
      rating: 4.9,
      description: 'FM-200™ (HFC-227ea) is a clean agent fire suppressant for Class A, B, and C fires, meeting NFPA Standard 2001. Fast, effective, safe in occupied spaces, and leaves no residue.',
      features: ['Clean Agent Technology', 'No Residue', 'Safe in Occupied Spaces', 'NFPA 2001 Compliant'],
      applications: ['Server Rooms', 'UPS Rooms', 'Control Rooms', 'Data Centers', 'Transmission Rooms']
    },
    {
      id: 3,
      name: 'Fire Alarm/Detection System',
      category: 'detection',
      image: 'https://images.pexels.com/photos/6249525/pexels-photo-6249525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'From ₦250,000',
      rating: 4.9,
      description: 'Designed to detect and alert occupants and emergency forces to fire, smoke, carbon monoxide, or other fire-related emergencies. Required in most commercial buildings.',
      features: ['Smoke Detectors', 'Heat Detectors', 'Manual Activation Devices', 'Fire Alarm Control Panel'],
      applications: ['Offices', 'Factories', 'Equipment Areas', 'Hotels', 'Homes']
    },
    {
      id: 4,
      name: 'CO2 Flooding System',
      category: 'suppression',
      image: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'Quote on Request',
      rating: 4.8,
      description: 'Fixed installation designed to displace oxygen in protected spaces to extinguish fires. Consists of large CO2 cylinders supplying gas to diffusing nozzles.',
      features: ['Oxygen Displacement Technology', 'Large CO2 Cylinders', 'Diffusing Nozzles', 'Alarm System Integration'],
      applications: ['Engine Rooms', 'Boiler Rooms', 'Pump Rooms', 'Equipment Holds']
    },
    {
      id: 5,
      name: 'FM200 Gas Suppression System',
      category: 'suppression',
      image: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'Quote on Request',
      rating: 4.9,
      description: 'Clean agent gas suppression system for protecting critical equipment.',
      features: ['Environmentally friendly', 'No residue', 'Fast discharge', 'Automatic activation'],
      applications: ['Data centers', 'Museums', 'Telecommunication', 'Archives']
    },
    {
      id: 6,
      name: 'Water Sprinkler System',
      category: 'suppression',
      image: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'Quote on Request',
      rating: 4.8,
      description: 'Automatic water sprinkler system with heat-activated sprinkler heads.',
      features: ['Various head types', 'Pressure monitoring', 'Zone control', 'Reliable activation'],
      applications: ['Warehouses', 'Factories', 'Retail spaces', 'Offices']
    },
    {
      id: 7,
      name: 'Fire Resistant Coveralls',
      category: 'ppe',
      image: 'https://images.pexels.com/photos/8142969/pexels-photo-8142969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'From ₦25,000',
      rating: 4.7,
      description: 'Flame-resistant coveralls for industrial fire protection and safety.',
      features: ['Multiple sizes', 'Flame resistant', 'Comfortable fit', 'Durable material'],
      applications: ['Oil & Gas', 'Welding', 'Chemical plants', 'Electrical work']
    },
    {
      id: 8,
      name: 'Self-Contained Breathing Apparatus',
      category: 'ppe',
      image: 'https://images.pexels.com/photos/6937004/pexels-photo-6937004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'From ₦180,000',
      rating: 4.9,
      description: 'Professional SCBA for firefighting and emergency response operations.',
      features: ['45-minute air supply', 'Full face mask', 'Pressure gauge', 'Emergency whistle'],
      applications: ['Fire departments', 'Industrial rescue', 'Emergency response', 'Confined spaces']
    },
    {
      id: 9,
      name: 'Emergency Exit Signs',
      category: 'emergency',
      image: 'https://images.pexels.com/photos/5407090/pexels-photo-5407090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      price: 'From ₦12,000',
      rating: 4.5,
      description: 'LED emergency exit signs with battery backup for safe evacuation.',
      features: ['LED illumination', 'Battery backup', 'Multiple mounting options', 'Energy efficient'],
      applications: ['All buildings', 'Corridors', 'Stairwells', 'Emergency exits']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-warning-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fire Safety Products
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Premium fire protection equipment and personal protective equipment from leading 
              manufacturers, ensuring reliable safety solutions for every application.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
                        activeCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 fade-in group">
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{product.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-1">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-1 flex-shrink-0" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.applications.slice(0, 3).map((app, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 3 && (
                          <span className="text-gray-500 text-xs">+{product.applications.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="text-2xl font-bold text-primary-600">{product.price}</div>
                      <Link
                        to="/contact"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center text-sm font-medium group"
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500 mb-4">
                <Shield className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No products found matching your criteria.</p>
                <p className="text-sm">Try adjusting your search or filter settings.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Product Range
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From basic fire extinguishers to advanced suppression systems, we offer comprehensive 
              fire protection solutions for every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-danger-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Flame className="w-8 h-8 text-danger-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Fire Extinguishers</h3>
              <p className="text-gray-600 mb-6">
                Complete range of portable fire extinguishers including dry powder, CO2, foam, 
                and clean agent extinguishers for all fire classes.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Dry Powder (ABC)</li>
                <li>• Carbon Dioxide (CO2)</li>
                <li>• Foam Extinguishers</li>
                <li>• Clean Agent Systems</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-info-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Detection Systems</h3>
              <p className="text-gray-600 mb-6">
                Advanced fire detection and alarm systems including smoke detectors, heat detectors, 
                and flame detectors with intelligent control panels.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Smoke Detectors</li>
                <li>• Heat Detectors</li>
                <li>• Flame Detectors</li>
                <li>• Control Panels</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Wind className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suppression Systems</h3>
              <p className="text-gray-600 mb-6">
                Automatic fire suppression systems including water sprinklers, gas suppression, 
                and foam systems for comprehensive fire protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Water Sprinkler Systems</li>
                <li>• Gas Suppression Systems</li>
                <li>• Foam Systems</li>
                <li>• Deluge Systems</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <HardHat className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Personal Protective Equipment</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive PPE solutions including fire-resistant clothing, breathing apparatus, 
                helmets, and safety equipment for personnel protection.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fire Resistant Coveralls</li>
                <li>• Breathing Apparatus</li>
                <li>• Safety Helmets</li>
                <li>• Protective Gloves</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emergency Equipment</h3>
              <p className="text-gray-600 mb-6">
                Emergency safety equipment including exit signs, emergency lighting, 
                first aid stations, and evacuation equipment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Emergency Exit Signs</li>
                <li>• Emergency Lighting</li>
                <li>• First Aid Stations</li>
                <li>• Evacuation Equipment</li>
              </ul>
            </div>

            <div className="text-center p-8 bg-gray-50 rounded-xl fade-in">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accessories & Parts</h3>
              <p className="text-gray-600 mb-6">
                Complete range of fire safety accessories, spare parts, and maintenance supplies 
                to keep your systems operating at peak performance.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fire Hoses & Reels</li>
                <li>• Mounting Brackets</li>
                <li>• Spare Parts</li>
                <li>• Maintenance Supplies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-xl text-secondary-300 mb-12 max-w-3xl mx-auto">
              All our products meet international standards and are certified by leading authorities 
              to ensure maximum reliability and performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">CE Certified</h4>
                <p className="text-secondary-300 text-sm">European Conformity standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">ISO Compliant</h4>
                <p className="text-secondary-300 text-sm">International quality standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Flame className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">NFPA Approved</h4>
                <p className="text-secondary-300 text-sm">National Fire Protection standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-lg mb-2">Warranty</h4>
                <p className="text-secondary-300 text-sm">Comprehensive product warranties</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Our fire safety experts are here to help you select the perfect products for your specific needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium text-lg flex items-center justify-center group"
            >
              Get Product Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+2341234567890"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-medium text-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +234 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;