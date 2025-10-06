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
import SEO from '../components/SEO';

// Import product images from assets
import fireExtinguisherFull from '../assets/image/products/fire-extinguisher-zoomed.png';
import fireExtinguisherWall from '../assets/image/products/fire-extinguisher-wall.png';
import fm200 from '../assets/image/products/fm-200.png';
import fireAlarm from '../assets/image/products/fire-alarm.png';
import co2Flooding from '../assets/image/products/CO2-flooding.png';
import waterSprinkler from '../assets/image/products/activated-water-sprinkler.png';
import indoorSprinkler from '../assets/image/products/indoor-water-spinkler.png';
import fireCoverall from '../assets/image/products/fire-resistant-coverall.png';
import breathingApparatus from '../assets/image/products/selcontained-breathing-aparatus.png';
import exitSign from '../assets/image/products/emergency-exit-sign.png';
import { contactPhoneMain } from '../util/contact';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver>();
  const filterRef = useRef<HTMLDivElement>(null);

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

    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          filterRef.current.classList.add('sticky', 'top-0', 'shadow-md', 'bg-white', 'z-50');
        } else {
          filterRef.current.classList.remove('sticky', 'top-0', 'shadow-md', 'bg-white', 'z-50');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
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
      image: fireExtinguisherFull,
      imageSizes: {
        sm: fireExtinguisherWall,
        lg: fireExtinguisherFull
      },
      price: 'From ₦15,000',
      rating: 4.8,
      description: 'Portable fire extinguishers for controlling minor fires in emergency situations. Suitable for offices, factories, homes, and industrial settings.',
      features: ['Sales & Installation', 'Maintenance & Servicing', 'Refilling Services', 'Multiple Types Available'],
      applications: ['Offices', 'Factories', 'Homes', 'Industrial Areas', 'Hotels']
    },
    {
      id: 2,
      name: 'FM-200 Fire Suppression System',
      category: 'suppression',
      image: fm200,
      imageSizes: {
        sm: fm200,
        lg: fm200
      },
      price: 'Quote on Request',
      rating: 4.9,
      description: 'FM-200™ (HFC-227ea) clean agent fire suppressant for Class A, B, and C fires. Safe, residue-free, and NFPA 2001 compliant.',
      features: ['Clean Agent Technology', 'No Residue', 'Safe in Occupied Spaces', 'NFPA 2001 Compliant'],
      applications: ['Server Rooms', 'UPS Rooms', 'Control Rooms', 'Data Centers', 'Transmission Rooms']
    },
    {
      id: 3,
      name: 'Fire Alarm/Detection System',
      category: 'detection',
      image: fireAlarm,
      imageSizes: {
        sm: fireAlarm,
        lg: fireAlarm
      },
      price: 'From ₦250,000',
      rating: 4.9,
      description: 'Advanced systems to detect and alert for fire, smoke, or carbon monoxide emergencies. Essential for commercial buildings.',
      features: ['Smoke Detectors', 'Heat Detectors', 'Manual Activation Devices', 'Fire Alarm Control Panel'],
      applications: ['Offices', 'Factories', 'Equipment Areas', 'Hotels', 'Homes']
    },
    {
      id: 4,
      name: 'CO2 Flooding System',
      category: 'suppression',
      image: co2Flooding,
      imageSizes: {
        sm: co2Flooding,
        lg: co2Flooding
      },
      price: 'Quote on Request',
      rating: 4.8,
      description: 'Fixed installation to displace oxygen and extinguish fires using CO2 cylinders and diffusing nozzles.',
      features: ['Oxygen Displacement Technology', 'Large CO2 Cylinders', 'Diffusing Nozzles', 'Alarm System Integration'],
      applications: ['Engine Rooms', 'Boiler Rooms', 'Pump Rooms', 'Equipment Holds']
    },
    {
      id: 5,
      name: 'Water Sprinkler System',
      category: 'suppression',
      image: waterSprinkler,
      imageSizes: {
        sm: indoorSprinkler,
        lg: waterSprinkler
      },
      price: 'Quote on Request',
      rating: 4.8,
      description: 'Automatic water sprinkler system with heat-activated heads for reliable fire suppression.',
      features: ['Various Head Types', 'Pressure Monitoring', 'Zone Control', 'Reliable Activation'],
      applications: ['Warehouses', 'Factories', 'Retail Spaces', 'Offices']
    },
    {
      id: 6,
      name: 'Fire Resistant Coveralls',
      category: 'ppe',
      image: fireCoverall,
      imageSizes: {
        sm: fireCoverall,
        lg: fireCoverall
      },
      price: 'From ₦25,000',
      rating: 4.7,
      description: 'Flame-resistant coveralls designed for industrial fire protection and worker safety.',
      features: ['Multiple Sizes', 'Flame Resistant', 'Comfortable Fit', 'Durable Material'],
      applications: ['Oil & Gas', 'Welding', 'Chemical Plants', 'Electrical Work']
    },
    {
      id: 7,
      name: 'Self-Contained Breathing Apparatus',
      category: 'ppe',
      image: breathingApparatus,
      imageSizes: {
        sm: breathingApparatus,
        lg: breathingApparatus
      },
      price: 'From ₦180,000',
      rating: 4.9,
      description: 'Professional SCBA for firefighting and emergency response in hazardous environments.',
      features: ['45-Minute Air Supply', 'Full Face Mask', 'Pressure Gauge', 'Emergency Whistle'],
      applications: ['Fire Departments', 'Industrial Rescue', 'Emergency Response', 'Confined Spaces']
    },
    {
      id: 8,
      name: 'Emergency Exit Signs',
      category: 'emergency',
      image: exitSign,
      imageSizes: {
        sm: exitSign,
        lg: exitSign
      },
      price: 'From ₦12,000',
      rating: 4.5,
      description: 'LED emergency exit signs with battery backup for safe and reliable evacuation.',
      features: ['LED Illumination', 'Battery Backup', 'Multiple Mounting Options', 'Energy Efficient'],
      applications: ['All Buildings', 'Corridors', 'Stairwells', 'Emergency Exits']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCatalog",
    "name": "Fire Safety Products - Walworking Technologies",
    "description": "Explore our range of fire safety products including fire extinguishers, suppression systems, detection systems, PPE, and emergency equipment for industrial and commercial use in Nigeria.",
    "url": `${baseUrl}/products`,
    "publisher": {
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
      "name": "Fire Safety Equipment",
      "itemListElement": products.map(product => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "sku": `WWT-${product.id}`,
          "category": product.category,
          "offers": {
            "@type": "Offer",
            "price": product.price.includes('From') ? product.price.replace('From ', '') : product.price,
            "priceCurrency": product.price.includes('₦') ? "NGN" : undefined,
            "availability": "https://schema.org/InStock"
          }
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
          "name": "Products",
          "item": `${baseUrl}/products`
        }
      ]
    }
  };

  return (
    <div className="pt-16 font-sans">
      <SEO
        title="Fire Safety Products | Walworking Technologies - Nigeria"
        description="Discover premium fire safety products including fire extinguishers, suppression systems, detection systems, PPE, and emergency equipment for industrial and commercial use in Nigeria."
        canonicalUrl="/products"
        ogImage={`${baseUrl}/assets/images/products/fire-safety-equipment.jpg`}
        schemaMarkup={productSchema}
      />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 tracking-tight">
              Fire Safety Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Premium fire protection equipment and PPE from leading manufacturers, ensuring reliable safety solutions for all applications.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-white border-b transition-all duration-300" ref={filterRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Search Bar */}
            <div className="relative w-full sm:max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base focus:outline-none bg-white"
                aria-label="Search fire safety products"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="lg:hidden flex items-center justify-center w-full py-2 px-4 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Toggle filter menu"
              >
                <Filter className="w-5 h-5 mr-2" />
                <span>Filter Categories</span>
              </button>
              <div className={`${isFilterOpen ? 'block' : 'hidden'} lg:block lg:flex lg:items-center lg:space-x-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide`}>
                <Filter className="w-5 h-5 text-gray-600 flex-shrink-0 hidden lg:block" aria-hidden="true" />
                <div className="flex flex-col lg:flex-row gap-2 mt-2 lg:mt-0">
                  {categories.map((category) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => {
                          setActiveCategory(category.id);
                          setIsFilterOpen(false);
                        }}
                        className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 text-sm sm:text-base font-medium whitespace-nowrap ${
                          activeCategory === category.id
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-200'
                        } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        aria-label={`Filter by ${category.name}`}
                      >
                        <IconComponent className="w-4 h-4 mr-2" aria-hidden="true" />
                        <span>{category.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 fade-in group focus-within:shadow-xl">
                  <div className="relative overflow-hidden">
                    <picture>
                      <source srcSet={product.imageSizes.lg} media="(min-width: 768px)" />
                      <img
                        src={product.imageSizes.sm}
                        srcSet={`${product.imageSizes.sm} 400w, ${product.imageSizes.lg} 800w`}
                        sizes="(max-width: 767px) 400px, 800px"
                        alt={`Image of ${product.name} for fire safety`}
                        className="w-full h-48 sm:h-56 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base md:text-lg line-clamp-3">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base md:text-lg">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm md:text-base text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base md:text-lg">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.slice(0, 3).map((app, index) => (
                          <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs sm:text-sm">
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 3 && (
                          <span className="text-gray-500 text-xs sm:text-sm">+{product.applications.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="hidden text-lg sm:text-xl md:text-2xl font-bold text-blue-600">{product.price}</div>
                      <Link
                        to="/contact"
                        className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 focus:bg-primary-700 transition-all duration-300 text-sm sm:text-base font-medium flex items-center group focus:outline-none focus:ring-2 focus:ring-primary-500"
                        aria-label={`Get a quote for ${product.name}`}
                      >
                        Get Quote
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-500">
                <Shield className="w-12 h-12 mx-auto mb-4 opacity-50" aria-hidden="true" />
                <p className="text-lg sm:text-xl md:text-2xl font-medium">No products found.</p>
                <p className="text-sm sm:text-base md:text-lg">Adjust your search or filter settings to find products.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Complete Product Range
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From fire extinguishers to advanced suppression systems, we provide comprehensive fire protection solutions for all needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Flame,
                color: 'red',
                title: 'Fire Extinguishers',
                desc: 'Portable extinguishers including dry powder, CO2, foam, and clean agent for all fire classes.',
                items: ['Dry Powder (ABC)', 'Carbon Dioxide (CO2)', 'Foam Extinguishers', 'Clean Agent Systems']
              },
              {
                icon: AlertTriangle,
                color: 'blue',
                title: 'Detection Systems',
                desc: 'Advanced fire detection with smoke, heat, and flame detectors, plus intelligent control panels.',
                items: ['Smoke Detectors', 'Heat Detectors', 'Flame Detectors', 'Control Panels']
              },
              {
                icon: Wind,
                color: 'green',
                title: 'Suppression Systems',
                desc: 'Automatic suppression systems including water sprinklers, gas, and foam systems.',
                items: ['Water Sprinkler Systems', 'Gas Suppression Systems', 'Foam Systems', 'Deluge Systems']
              },
              {
                icon: HardHat,
                color: 'yellow',
                title: 'Personal Protective Equipment',
                desc: 'Fire-resistant clothing, breathing apparatus, helmets, and safety gear for personnel protection.',
                items: ['Fire Resistant Coveralls', 'Breathing Apparatus', 'Safety Helmets', 'Protective Gloves']
              },
              {
                icon: Eye,
                color: 'purple',
                title: 'Emergency Equipment',
                desc: 'Exit signs, emergency lighting, first aid stations, and evacuation equipment.',
                items: ['Emergency Exit Signs', 'Emergency Lighting', 'First Aid Stations', 'Evacuation Equipment']
              },
              {
                icon: Shield,
                color: 'indigo',
                title: 'Accessories & Parts',
                desc: 'Fire safety accessories and spare parts to maintain system performance.',
                items: ['Fire Hoses & Reels', 'Mounting Brackets', 'Spare Parts', 'Maintenance Supplies']
              }
            ].map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl fade-in">
                <div className={`bg-${category.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-600`} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg">{category.desc}</p>
                <ul className="text-sm md:text-base text-gray-600 space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-200 mb-8 sm:mb-12 max-w-3xl mx-auto">
              Our products meet international standards and are certified for maximum reliability and performance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { icon: CheckCircle, title: 'CE Certified', desc: 'European Conformity standards' },
                { icon: Shield, title: 'ISO Compliant', desc: 'International quality standards' },
                { icon: Flame, title: 'NFPA Approved', desc: 'National Fire Protection standards' },
                { icon: Star, title: 'Warranty', desc: 'Comprehensive product warranties' }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white bg-opacity-10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <item.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-base sm:text-lg md:text-xl mb-2">{item.title}</h4>
                  <p className="text-blue-200 text-sm sm:text-base md:text-lg">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our fire safety experts are ready to assist you in selecting the perfect products for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-primary-700 focus:bg-primary-700 transition-all duration-300 font-medium text-sm sm:text-lg flex items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary-500"
              aria-label="Get a product consultation"
            >
              Get Product Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${contactPhoneMain}`}
              className="bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-200 focus:bg-gray-200 transition-all duration-300 font-medium text-sm sm:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Call for product inquiries"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call: {contactPhoneMain}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;