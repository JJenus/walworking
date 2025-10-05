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

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
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

    // Sticky filter bar
    const handleScroll = () => {
      if (filterRef.current) {
        const rect = filterRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          filterRef.current.classList.add('sticky', 'top-0', 'shadow-md', 'bg-white', 'z-10');
        } else {
          filterRef.current.classList.remove('sticky', 'top-0', 'shadow-md', 'bg-white', 'z-10');
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
      image: 'https://images.pexels.com/photos/7476775/pexels-photo-7476775.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/7476775/pexels-photo-7476775.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/7476775/pexels-photo-7476775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/6249525/pexels-photo-6249525.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/6249525/pexels-photo-6249525.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/6249525/pexels-photo-6249525.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/6190329/pexels-photo-6190329.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/8062292/pexels-photo-8062292.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/8142969/pexels-photo-8142969.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/8142969/pexels-photo-8142969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/8142969/pexels-photo-8142969.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/6937004/pexels-photo-6937004.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/6937004/pexels-photo-6937004.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/6937004/pexels-photo-6937004.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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
      image: 'https://images.pexels.com/photos/5407090/pexels-photo-5407090.jpeg',
      imageSizes: {
        sm: 'https://images.pexels.com/photos/5407090/pexels-photo-5407090.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
        lg: 'https://images.pexels.com/photos/5407090/pexels-photo-5407090.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
      },
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCatalog",
    "name": "Fire Safety Products - Wal Working Technologies",
    "description": "Explore our range of fire safety products including fire extinguishers, suppression systems, detection systems, PPE, and emergency equipment for industrial and commercial use in Nigeria.",
    "url": `${baseUrl}/products`,
    "publisher": {
      "@type": "Organization",
      "name": "Wal Working Technologies Limited",
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
    <div className="pt-16 pb-16 min-h-screen">
      <SEO
        title="Fire Safety Products | Wal Working Technologies - Nigeria"
        description="Discover premium fire safety products including fire extinguishers, suppression systems, detection systems, PPE, and emergency equipment for industrial and commercial use in Nigeria."
        canonicalUrl="/products"
        ogImage={`${baseUrl}/assets/images/products/fire-safety-equipment.jpg`}
        schemaMarkup={productSchema}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-primary-600 to-danger-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Fire Safety Products
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
              Premium fire protection equipment and personal protective equipment from leading 
              manufacturers, ensuring reliable safety solutions for every application.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 md:py-12 bg-white border-b transition-all duration-300" ref={filterRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-full sm:max-w-md w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base focus:outline-none"
                aria-label="Search fire safety products"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              <Filter className="w-5 h-5 text-gray-600 flex-shrink-0" aria-hidden="true" />
              <div className="flex gap-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => setActiveCategory(category.id)}
                      className={`flex items-center px-3 py-2 sm:px-4 sm:py-2 rounded-lg transition-all duration-200 text-sm sm:text-base whitespace-nowrap ${
                        activeCategory === category.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:bg-gray-200'
                      } focus:outline-none focus:ring-2 focus:ring-primary-500`}
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
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
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
                        className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </picture>
                    <div className="absolute top-4 right-4 bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4 text-sm sm:text-base line-clamp-2">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
                        {product.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-3 h-3 text-green-500 mr-1 mt-1 flex-shrink-0" aria-hidden="true" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Applications:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
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
                      <div className="text-lg sm:text-2xl font-bold text-primary-600">{product.price}</div>
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
                <p className="text-lg sm:text-xl">No products found matching your criteria.</p>
                <p className="text-sm sm:text-base">Try adjusting your search or filter settings.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product Categories Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Product Range
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              From basic fire extinguishers to advanced suppression systems, we offer comprehensive 
              fire protection solutions for every need and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Flame,
                color: 'danger',
                title: 'Fire Extinguishers',
                desc: 'Complete range of portable fire extinguishers including dry powder, CO2, foam, and clean agent extinguishers for all fire classes.',
                items: ['Dry Powder (ABC)', 'Carbon Dioxide (CO2)', 'Foam Extinguishers', 'Clean Agent Systems']
              },
              {
                icon: AlertTriangle,
                color: 'info',
                title: 'Detection Systems',
                desc: 'Advanced fire detection and alarm systems including smoke detectors, heat detectors, and flame detectors with intelligent control panels.',
                items: ['Smoke Detectors', 'Heat Detectors', 'Flame Detectors', 'Control Panels']
              },
              {
                icon: Wind,
                color: 'success',
                title: 'Suppression Systems',
                desc: 'Automatic fire suppression systems including water sprinklers, gas suppression, and foam systems for comprehensive fire protection.',
                items: ['Water Sprinkler Systems', 'Gas Suppression Systems', 'Foam Systems', 'Deluge Systems']
              },
              {
                icon: HardHat,
                color: 'warning',
                title: 'Personal Protective Equipment',
                desc: 'Comprehensive PPE solutions including fire-resistant clothing, breathing apparatus, helmets, and safety equipment for personnel protection.',
                items: ['Fire Resistant Coveralls', 'Breathing Apparatus', 'Safety Helmets', 'Protective Gloves']
              },
              {
                icon: Eye,
                color: 'purple',
                title: 'Emergency Equipment',
                desc: 'Emergency safety equipment including exit signs, emergency lighting, first aid stations, and evacuation equipment.',
                items: ['Emergency Exit Signs', 'Emergency Lighting', 'First Aid Stations', 'Evacuation Equipment']
              },
              {
                icon: Shield,
                color: 'indigo',
                title: 'Accessories & Parts',
                desc: 'Complete range of fire safety accessories, spare parts, and maintenance supplies to keep your systems operating at peak performance.',
                items: ['Fire Hoses & Reels', 'Mounting Brackets', 'Spare Parts', 'Maintenance Supplies']
              }
            ].map((category, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl fade-in">
                <div className={`bg-${category.color}-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <category.icon className={`w-8 h-8 text-${category.color}-600`} aria-hidden="true" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">{category.desc}</p>
                <ul className="text-sm text-gray-600 space-y-1">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Quality You Can Trust
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-secondary-300 mb-8 sm:mb-12 max-w-3xl mx-auto">
              All our products meet international standards and are certified by leading authorities 
              to ensure maximum reliability and performance.
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
                  <h4 className="font-bold text-base sm:text-lg mb-2">{item.title}</h4>
                  <p className="text-secondary-300 text-sm sm:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Need Help Choosing the Right Products?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Our fire safety experts are here to help you select the perfect products for your specific needs and requirements.
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
              href="tel:+2341234567890"
              className="bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-200 focus:bg-gray-200 transition-all duration-300 font-medium text-sm sm:text-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-500"
              aria-label="Call for product inquiries"
            >
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call: +234 123 456 7890
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;