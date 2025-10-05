import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
	Building,
	Factory,
	Guitar as Hospital,
	GraduationCap,
	Zap,
	MapPin,
	Calendar,
	Users,
	CheckCircle,
	ArrowRight,
	Filter,
	Eye,
} from "lucide-react";
import SEO from "../components/SEO";

const Projects: React.FC = () => {
	const [activeFilter, setActiveFilter] = useState("all");
	const [selectedProject, setSelectedProject] = useState<number | null>(null);
	const observerRef = useRef<IntersectionObserver>();

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{ threshold: 0.1 }
		);

		const elements = document.querySelectorAll(
			".fade-in, .slide-in-left, .slide-in-right"
		);
		elements.forEach((el) => observerRef.current?.observe(el));

		return () => observerRef.current?.disconnect();
	}, []);

	const baseUrl =
		import.meta.env.VITE_BASE_URL ||
		"https://walworkingtechnologiesltd.com";

	const projectCategories = [
		{ id: "all", name: "All Projects", icon: Building },
		{ id: "commercial", name: "Commercial", icon: Building },
		{ id: "industrial", name: "Industrial", icon: Factory },
		{ id: "healthcare", name: "Healthcare", icon: Hospital },
		{ id: "education", name: "Education", icon: GraduationCap },
		{ id: "oil-gas", name: "Oil & Gas", icon: Zap },
	];

	const projects = [
		{
			id: 1,
			title: "Eko Atlantic City Fire Protection",
			category: "commercial",
			location: "Lagos, Nigeria",
			duration: "18 months",
			teamSize: "25 specialists",
			completionDate: "2023",
			image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Complete fire protection system installation for the prestigious Eko Atlantic City development, including high-rise towers and commercial complexes.",
			services: [
				"Fire Detection Systems",
				"Sprinkler Installation",
				"Emergency Lighting",
				"Fire Safety Training",
			],
			challenges: [
				"Complex high-rise systems",
				"Multiple building types",
				"Strict timeline requirements",
				"International standards compliance",
			],
			solutions: [
				"Advanced addressable systems",
				"Integrated control panels",
				"Phased installation approach",
				"Comprehensive testing protocols",
			],
			results: [
				"100% compliance achieved",
				"500+ units protected",
				"Zero safety incidents",
				"24/7 monitoring established",
			],
			clientTestimonial:
				"WalWorking Technologies delivered exceptional service for our Eko Atlantic project. Their expertise in large-scale developments is unmatched.",
			clientName: "Eko Atlantic Development Company",
		},
		{
			id: 2,
			title: "Dangote Refinery Fire Safety Systems",
			category: "industrial",
			location: "Lagos, Nigeria",
			duration: "24 months",
			teamSize: "40 specialists",
			completionDate: "2023",
			image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Comprehensive fire protection and safety systems for Africa's largest single-train petroleum refinery, ensuring world-class safety standards.",
			services: [
				"Industrial Fire Suppression",
				"Gas Detection Systems",
				"Foam Systems",
				"Emergency Response Training",
			],
			challenges: [
				"Petrochemical hazards",
				"Large-scale coverage",
				"International standards",
				"Operational integration",
			],
			solutions: [
				"Multi-agent suppression systems",
				"Advanced detection networks",
				"Specialized foam systems",
				"Integrated safety protocols",
			],
			results: [
				"Full regulatory compliance",
				"Industry-leading safety record",
				"Certified operations team",
				"Emergency response capability",
			],
			clientTestimonial:
				"The fire safety systems installed by WalWorking have exceeded our expectations. Their industrial expertise is truly world-class.",
			clientName: "Dangote Industries Limited",
		},
		{
			id: 3,
			title: "Lagos University Teaching Hospital",
			category: "healthcare",
			location: "Lagos, Nigeria",
			duration: "12 months",
			teamSize: "20 specialists",
			completionDate: "2022",
			image: "https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Specialized fire protection system for healthcare facility with focus on patient safety and medical equipment protection.",
			services: [
				"Healthcare Fire Systems",
				"Clean Agent Suppression",
				"Medical Gas Protection",
				"Staff Safety Training",
			],
			challenges: [
				"Critical patient areas",
				"Medical equipment sensitivity",
				"Continuous operations",
				"Complex regulations",
			],
			solutions: [
				"Clean agent systems",
				"Zone-specific protection",
				"Non-disruptive installation",
				"Healthcare-specific protocols",
			],
			results: [
				"Zero patient disruption",
				"Medical equipment protection",
				"Regulatory compliance",
				"Trained hospital staff",
			],
			clientTestimonial:
				"WalWorking understood our unique healthcare requirements and delivered solutions that protect both patients and equipment.",
			clientName: "Lagos University Teaching Hospital",
		},
		{
			id: 4,
			title: "University of Lagos Fire Safety Upgrade",
			category: "education",
			location: "Lagos, Nigeria",
			duration: "8 months",
			teamSize: "15 specialists",
			completionDate: "2022",
			image: "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Campus-wide fire safety system upgrade covering dormitories, lecture halls, laboratories, and administrative buildings.",
			services: [
				"Campus Fire Detection",
				"Emergency Evacuation Systems",
				"Laboratory Safety Systems",
				"Student Safety Training",
			],
			challenges: [
				"Multiple building types",
				"Large student population",
				"Budget constraints",
				"Minimal disruption requirement",
			],
			solutions: [
				"Phased implementation",
				"Cost-effective solutions",
				"Student-friendly systems",
				"Comprehensive training programs",
			],
			results: [
				"Campus-wide coverage",
				"Enhanced student safety",
				"Regulatory compliance",
				"Emergency preparedness",
			],
			clientTestimonial:
				"The fire safety upgrades have significantly improved our campus safety. WalWorking's educational expertise is evident.",
			clientName: "University of Lagos",
		},
		{
			id: 5,
			title: "Shell Petroleum Development Company",
			category: "oil-gas",
			location: "Port Harcourt, Nigeria",
			duration: "15 months",
			teamSize: "30 specialists",
			completionDate: "2023",
			image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Advanced fire protection systems for oil and gas facilities including processing plants and storage terminals.",
			services: [
				"Petrochemical Fire Systems",
				"Explosion Protection",
				"Emergency Response Systems",
				"Specialized Training",
			],
			challenges: [
				"Explosive atmospheres",
				"Remote locations",
				"Environmental concerns",
				"International standards",
			],
			solutions: [
				"Explosion-proof systems",
				"Specialized detection",
				"Environmental compliance",
				"Remote monitoring",
			],
			results: [
				"Zero incidents record",
				"Environmental compliance",
				"International certification",
				"Expert operations team",
			],
			clientTestimonial:
				"WalWorking's expertise in oil and gas fire protection has helped us maintain our excellent safety record.",
			clientName: "Shell Petroleum Development Company",
		},
		{
			id: 6,
			title: "Shoprite Shopping Centers",
			category: "commercial",
			location: "Multiple Locations, Nigeria",
			duration: "10 months",
			teamSize: "20 specialists",
			completionDate: "2022",
			image: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
			description:
				"Fire protection systems for multiple Shoprite shopping centers across Nigeria, ensuring customer and staff safety.",
			services: [
				"Retail Fire Protection",
				"Public Address Systems",
				"Emergency Lighting",
				"Evacuation Training",
			],
			challenges: [
				"High occupancy areas",
				"Multiple locations",
				"Public safety priority",
				"Coordinated implementation",
			],
			solutions: [
				"Scalable systems design",
				"Centralized monitoring",
				"Public safety protocols",
				"Multi-site coordination",
			],
			results: [
				"All locations compliant",
				"Enhanced public safety",
				"Unified safety standards",
				"Trained staff network",
			],
			clientTestimonial:
				"WalWorking successfully implemented consistent fire safety standards across all our locations in Nigeria.",
			clientName: "Shoprite Holdings",
		},
	];

	const filteredProjects =
		activeFilter === "all"
			? projects
			: projects.filter((project) => project.category === activeFilter);

      const projectSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Fire Protection Projects by WalWorking Technologies",
        description:
          "Explore our portfolio of fire protection projects across commercial, industrial, healthcare, education, and oil & gas sectors in Nigeria.",
        url: `${baseUrl}/projects`,
        publisher: {
          "@type": "Organization",
          name: "WalWorking Technologies Limited",
          url: baseUrl,
          logo: `${baseUrl}/assets/images/logo/logo-w.png`,
          telephone: "+234-810-698-1539",
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "15 Custom Street, Alakuko, Lagos/Abeokuta Expressway",
            addressLocality: "Lagos State",
            addressCountry: "Nigeria",
          },
        },
        hasPart: filteredProjects.map((project) => ({
          "@type": "Project",
          name: project.title,
          description: project.description,
          location: project.location,
          startDate: project.completionDate,
          image: project.image,
        })),
        breadcrumbList: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: baseUrl,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Projects",
              item: `${baseUrl}/projects`,
            },
          ],
        },
      };

	const ProjectModal = ({ project }: { project: (typeof projects)[0] }) => (
		<div
			className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
			onClick={() => setSelectedProject(null)}
		>
			<div
				className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="relative">
					<img
						src={project.image}
						alt={project.title}
						className="w-full h-64 object-cover rounded-t-xl"
					/>
					<button
						onClick={() => setSelectedProject(null)}
						className="absolute top-4 right-4 bg-white bg-opacity-90 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all"
					>
						×
					</button>
				</div>

				<div className="p-8">
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						{project.title}
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
						<div className="flex items-center text-gray-600">
							<MapPin className="w-5 h-5 mr-2 text-red-600" />
							<span>{project.location}</span>
						</div>
						<div className="flex items-center text-gray-600">
							<Calendar className="w-5 h-5 mr-2 text-red-600" />
							<span>{project.duration}</span>
						</div>
						<div className="flex items-center text-gray-600">
							<Users className="w-5 h-5 mr-2 text-red-600" />
							<span>{project.teamSize}</span>
						</div>
					</div>

					<p className="text-gray-600 mb-8 text-lg leading-relaxed">
						{project.description}
					</p>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Services Provided
							</h3>
							<ul className="space-y-2">
								{project.services.map((service, index) => (
									<li
										key={index}
										className="flex items-start"
									>
										<CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
										<span className="text-gray-600">
											{service}
										</span>
									</li>
								))}
							</ul>
						</div>

						<div>
							<h3 className="text-xl font-bold text-gray-900 mb-4">
								Key Results
							</h3>
							<ul className="space-y-2">
								{project.results.map((result, index) => (
									<li
										key={index}
										className="flex items-start"
									>
										<CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
										<span className="text-gray-600">
											{result}
										</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="bg-gray-50 p-6 rounded-xl mb-6">
						<h3 className="text-xl font-bold text-gray-900 mb-4">
							Client Testimonial
						</h3>
						<blockquote className="text-gray-600 italic mb-4">
							"{project.clientTestimonial}"
						</blockquote>
						<cite className="font-medium text-red-600">
							— {project.clientName}
						</cite>
					</div>

					<div className="text-center">
						<Link
							to="/contact"
							className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
						>
							Start Your Project
							<ArrowRight className="w-5 h-5 ml-2" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<>
			<SEO
				title="Fire Protection Projects | WalWorking Technologies - Nigeria"
				description="Explore our portfolio of fire protection projects across commercial, industrial, healthcare, education, and oil & gas sectors in Nigeria."
				canonicalUrl="/projects"
				ogImage={`${baseUrl}/assets/images/projects/fire-safety-projects.jpg`}
				schemaMarkup={projectSchema}
			/>
			<div className="pt-16">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-r from-primary-600 to-danger-500">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
						<div className="fade-in">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Our Projects
							</h1>
							<p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
								Explore our portfolio of successful fire
								protection projects across Nigeria. From small
								commercial buildings to large industrial
								complexes, we deliver excellence every time.
							</p>
						</div>
					</div>
				</section>

				{/* Project Stats */}
				<section className="py-16 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
							<div className="fade-in">
								<div className="text-4xl font-bold text-primary-600 mb-2">
									500+
								</div>
								<div className="text-gray-600">
									Projects Completed
								</div>
							</div>
							<div className="fade-in">
								<div className="text-4xl font-bold text-primary-600 mb-2">
									50+
								</div>
								<div className="text-gray-600">
									Major Clients
								</div>
							</div>
							<div className="fade-in">
								<div className="text-4xl font-bold text-primary-600 mb-2">
									10+
								</div>
								<div className="text-gray-600">
									Years Experience
								</div>
							</div>
							<div className="fade-in">
								<div className="text-4xl font-bold text-primary-600 mb-2">
									100%
								</div>
								<div className="text-gray-600">
									Client Satisfaction
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Project Filter */}
				<section className="py-12 bg-gray-50 border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-center">
							<div className="flex items-center space-x-2">
								<Filter className="w-5 h-5 text-gray-600" />
								<div className="flex flex-wrap gap-2">
									{projectCategories.map((category) => {
										const IconComponent = category.icon;
										return (
											<button
												key={category.id}
												onClick={() =>
													setActiveFilter(category.id)
												}
												className={`flex items-center px-4 py-2 rounded-lg transition-all duration-200 ${
													activeFilter === category.id
														? "bg-primary-600 text-white"
														: "bg-white text-gray-700 hover:bg-gray-100"
												}`}
											>
												<IconComponent className="w-4 h-4 mr-2" />
												<span className="font-medium">
													{category.name}
												</span>
											</button>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Projects Grid */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project) => (
								<div
									key={project.id}
									className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 fade-in group"
								>
									<div className="relative overflow-hidden">
										<img
											src={project.image}
											alt={project.title}
											className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-4 left-4">
											<span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
												{project.category.replace(
													"-",
													" & "
												)}
											</span>
										</div>
									</div>

									<div className="p-6">
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{project.title}
										</h3>

										<div className="space-y-2 mb-4">
											<div className="flex items-center text-gray-600 text-sm">
												<MapPin className="w-4 h-4 mr-2 text-primary-600" />
												<span>{project.location}</span>
											</div>
											<div className="flex items-center text-gray-600 text-sm">
												<Calendar className="w-4 h-4 mr-2 text-primary-600" />
												<span>
													Completed:{" "}
													{project.completionDate}
												</span>
											</div>
											<div className="flex items-center text-gray-600 text-sm">
												<Users className="w-4 h-4 mr-2 text-primary-600" />
												<span>{project.teamSize}</span>
											</div>
										</div>

										<p className="text-gray-600 mb-6 line-clamp-3">
											{project.description}
										</p>

										<div className="mb-6">
											<h4 className="font-semibold text-gray-900 mb-2">
												Services:
											</h4>
											<div className="flex flex-wrap gap-2">
												{project.services
													.slice(0, 2)
													.map((service, index) => (
														<span
															key={index}
															className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
														>
															{service}
														</span>
													))}
												{project.services.length >
													2 && (
													<span className="text-gray-500 text-xs">
														+
														{project.services
															.length - 2}{" "}
														more
													</span>
												)}
											</div>
										</div>

										<button
											onClick={() =>
												setSelectedProject(project.id)
											}
											className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center justify-center group"
										>
											<Eye className="w-5 h-5 mr-2" />
											View Project Details
											<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Process Section */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16 fade-in">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Our Project Delivery Process
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								A proven methodology that ensures successful
								project completion on time and within budget
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center fade-in">
								<div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-2xl font-bold text-red-600">
										1
									</span>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Project Assessment
								</h3>
								<p className="text-gray-600">
									Comprehensive site evaluation and
									requirements analysis to understand project
									scope and objectives.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-2xl font-bold text-info-600">
										2
									</span>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Design & Planning
								</h3>
								<p className="text-gray-600">
									Detailed system design and project planning
									with timeline, resources, and compliance
									requirements.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-2xl font-bold text-success-600">
										3
									</span>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Implementation
								</h3>
								<p className="text-gray-600">
									Professional installation by certified
									technicians with quality control at every
									stage.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<span className="text-2xl font-bold text-orange-600">
										4
									</span>
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Testing & Handover
								</h3>
								<p className="text-gray-600">
									Comprehensive system testing, documentation,
									training, and formal project handover.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Ready to Start Your Fire Safety Project?
						</h2>
						<p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
							Join our growing list of satisfied clients. Contact
							us today to discuss your fire protection
							requirements.
						</p>
						<Link
							to="/contact"
							className="inline-flex items-center bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium text-lg group"
						>
							Start Your Project
							<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</section>

				{/* Project Modal */}
				{selectedProject && (
					<ProjectModal
						project={
							projects.find((p) => p.id === selectedProject)!
						}
					/>
				)}
			</div>
		</>
	);
};

export default Projects;
