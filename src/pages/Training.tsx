import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
	GraduationCap,
	AlignCenterVertical as Certificate,
	Users,
	Clock,
	CheckCircle,
	BookOpen,
	Shield,
	Flame,
	AlertTriangle,
	HardHat,
	ArrowRight,
	Award,
	Calendar,
	MapPin,
	Phone,
} from "lucide-react";
import SEO from "../components/SEO";
import fireExtinguisherFull from "../assets/image/products/fire-extinguisher-full.png";
import { contactPhoneMain } from "../util/contact";

const Training: React.FC = () => {
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

	const trainingPrograms = [
		{
			id: 1,
			title: "Basic Fire Safety Awareness",
			duration: "4 hours",
			participants: "All employees",
			certification: "Certificate of Completion",
			icon: Flame,
			price: "₦25,000 per participant",
			description:
				"Fundamental fire safety training covering fire prevention, detection, and basic response procedures.",
			objectives: [
				"Understand fire behavior and common causes",
				"Identify fire hazards in the workplace",
				"Learn proper evacuation procedures",
				"Basic fire extinguisher operation",
			],
			modules: [
				"Fire Science Basics",
				"Fire Prevention Strategies",
				"Emergency Evacuation",
				"Fire Extinguisher Use",
			],
			targetAudience: "General workforce, office staff, retail employees",
			prerequisites: "None",
		},
		{
			id: 2,
			title: "Fire Warden Training",
			duration: "8 hours",
			participants: "10-20 per session",
			certification: "Fire Warden Certificate",
			icon: Shield,
			price: "₦45,000 per participant",
			description:
				"Comprehensive training for designated fire wardens responsible for fire safety coordination and emergency response.",
			objectives: [
				"Develop fire warden leadership skills",
				"Master evacuation coordination",
				"Learn fire system operations",
				"Understand legal responsibilities",
			],
			modules: [
				"Fire Warden Responsibilities",
				"Emergency Coordination",
				"Fire Safety Systems",
				"Legal Compliance",
			],
			targetAudience:
				"Designated fire wardens, safety officers, team leaders",
			prerequisites: "Basic fire safety awareness",
		},
		{
			id: 3,
			title: "Fire Risk Assessment Training",
			duration: "16 hours (2 days)",
			participants: "6-12 per session",
			certification: "Risk Assessment Certificate",
			icon: AlertTriangle,
			price: "₦85,000 per participant",
			description:
				"Advanced training on conducting comprehensive fire risk assessments and developing mitigation strategies.",
			objectives: [
				"Conduct systematic risk assessments",
				"Identify and evaluate fire hazards",
				"Develop risk mitigation strategies",
				"Create comprehensive reports",
			],
			modules: [
				"Risk Assessment Methodology",
				"Hazard Identification",
				"Risk Evaluation Techniques",
				"Mitigation Planning",
			],
			targetAudience: "Safety managers, facility managers, consultants",
			prerequisites: "Fire warden certification or equivalent experience",
		},
		{
			id: 4,
			title: "Industrial Fire Protection",
			duration: "24 hours (3 days)",
			participants: "8-15 per session",
			certification: "Industrial Fire Protection Certificate",
			icon: HardHat,
			price: "₦120,000 per participant",
			description:
				"Specialized training for industrial environments with focus on complex fire hazards and protection systems.",
			objectives: [
				"Understand industrial fire hazards",
				"Operate specialized fire systems",
				"Manage emergency response",
				"Ensure regulatory compliance",
			],
			modules: [
				"Industrial Fire Hazards",
				"Specialized Suppression Systems",
				"Emergency Response Planning",
				"Regulatory Requirements",
			],
			targetAudience:
				"Industrial safety officers, plant managers, engineers",
			prerequisites: "Technical background and fire safety experience",
		},
		{
			id: 5,
			title: "Fire Extinguisher Training",
			duration: "3 hours",
			participants: "15-25 per session",
			certification: "Hands-on Certificate",
			icon: Flame,
			price: "₦18,000 per participant",
			description:
				"Practical hands-on training on proper selection, use, and maintenance of fire extinguishers.",
			objectives: [
				"Identify different extinguisher types",
				"Learn PASS technique",
				"Practice live fire exercises",
				"Understand maintenance requirements",
			],
			modules: [
				"Extinguisher Types & Classes",
				"Operating Procedures",
				"Live Fire Practice",
				"Maintenance Basics",
			],
			targetAudience:
				"All employees, especially those in higher-risk areas",
			prerequisites: "None",
		},
		{
			id: 6,
			title: "Emergency Response Team Training",
			duration: "40 hours (5 days)",
			participants: "6-10 per session",
			certification: "Emergency Response Certificate",
			icon: Users,
			price: "₦180,000 per participant",
			description:
				"Intensive training for emergency response team members including advanced firefighting and rescue operations.",
			objectives: [
				"Advanced firefighting techniques",
				"Rescue operations procedures",
				"Incident command system",
				"Team coordination skills",
			],
			modules: [
				"Advanced Firefighting",
				"Search and Rescue",
				"Incident Management",
				"Team Leadership",
			],
			targetAudience:
				"Emergency response team members, security personnel",
			prerequisites:
				"Fire warden certification and physical fitness requirements",
		},
	];

	const upcomingSchedule = [
		{
			course: "Fire Warden Training",
			date: "February 15-16, 2024",
			location: "Lagos Training Center",
			spots: "8 available",
		},
		{
			course: "Fire Risk Assessment",
			date: "February 22-23, 2024",
			location: "Abuja Training Center",
			spots: "5 available",
		},
		{
			course: "Basic Fire Safety Awareness",
			date: "March 5, 2024",
			location: "Port Harcourt Training Center",
			spots: "12 available",
		},
		{
			course: "Emergency Response Team",
			date: "March 12-16, 2024",
			location: "Lagos Training Center",
			spots: "3 available",
		},
	];

	const baseUrl =
		import.meta.env.VITE_BASE_URL ||
		"https://walworkingtechnologiesltd.com";

	const trainingSchema = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Fire Safety Training Programs by Walworking Technologies",
		description:
			"Explore our comprehensive fire safety training programs designed for all industries in Nigeria, including fire warden, risk assessment, and emergency response training.",
		url: `${baseUrl}/training`,
		publisher: {
			"@type": "Organization",
			name: "Walworking Technologies Limited",
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
		hasPart: trainingPrograms.map((program) => ({
			"@type": "Course",
			name: program.title,
			description: program.description,
			provider: {
				"@type": "Organization",
				name: "Walworking Technologies Limited",
				sameAs: baseUrl,
			},
			offers: {
				"@type": "Offer",
				price: program.price,
				priceCurrency: "NGN",
			},
			hasCourseInstance: upcomingSchedule
				.filter((schedule) => schedule.course === program.title)
				.map((schedule) => ({
					"@type": "CourseInstance",
					courseMode: "onsite",
					location: schedule.location,
					startDate: schedule.date,
					availability: schedule.spots,
				})),
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
					name: "Training",
					item: `${baseUrl}/training`,
				},
			],
		},
	};

	return (
		<>
			<SEO
				title="Fire Safety Training & Certification | Walworking Technologies - Nigeria"
				description="Explore our comprehensive fire safety training programs designed for all industries in Nigeria, including fire warden, risk assessment, and emergency response training."
				canonicalUrl={`${baseUrl}/training`}
				ogImage={`${baseUrl}${fireExtinguisherFull}`}
				ogType="website"
				twitterCard="summary_large_image"
				schemaMarkup={trainingSchema}
			/>
			<div className="pt-16">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-r from-blue-600 to-red-500">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
						<div className="fade-in">
							<h1 className="text-4xl md:text-5xl font-bold mb-6">
								Fire Safety Training & Certification
							</h1>
							<p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed">
								Comprehensive fire safety training programs
								designed to protect lives, ensure compliance,
								and build competent safety professionals across
								all industries.
							</p>
						</div>
					</div>
				</section>

				{/* Training Overview */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16 fade-in">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Professional Fire Safety Education
							</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Our certified instructors deliver world-class
								fire safety training using industry best
								practices and the latest safety standards.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							<div className="text-center fade-in">
								<div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<GraduationCap className="w-8 h-8 text-primary-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Expert Instructors
								</h3>
								<p className="text-gray-600">
									Certified fire safety professionals with
									extensive field experience and teaching
									expertise.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Certificate className="w-8 h-8 text-info-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Recognized Certification
								</h3>
								<p className="text-gray-600">
									Internationally recognized certifications
									that meet industry standards and regulatory
									requirements.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<BookOpen className="w-8 h-8 text-success-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Practical Training
								</h3>
								<p className="text-gray-600">
									Hands-on training with real equipment and
									simulated emergency scenarios for practical
									experience.
								</p>
							</div>

							<div className="text-center fade-in">
								<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Users className="w-8 h-8 text-orange-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Customized Programs
								</h3>
								<p className="text-gray-600">
									Tailored training programs designed to meet
									specific industry requirements and
									organizational needs.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Training Programs */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16 fade-in">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Our Training Programs
							</h2>
							<p className="text-xl text-gray-600">
								Choose from our comprehensive range of fire
								safety training courses
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{trainingPrograms.map((program) => {
								const IconComponent = program.icon;
								return (
									<div
										key={program.id}
										className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 fade-in"
									>
										<div className="flex items-start space-x-4">
											<div className="bg-red-100 p-3 rounded-lg flex-shrink-0">
												<IconComponent className="w-8 h-8 text-primary-600" />
											</div>
											<div className="flex-1">
												<h3 className="text-xl font-bold text-gray-900 mb-2">
													{program.title}
												</h3>
												<p className="text-gray-600 mb-4">
													{program.description}
												</p>

												<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
													<div className="flex items-center text-gray-600">
														<Clock className="w-4 h-4 mr-2 text-primary-600" />
														<span className="text-sm">
															Duration:{" "}
															{program.duration}
														</span>
													</div>
													<div className="flex items-center text-gray-600">
														<Users className="w-4 h-4 mr-2 text-primary-600" />
														<span className="text-sm">
															Participants:{" "}
															{
																program.participants
															}
														</span>
													</div>
													<div className="flex items-center text-gray-600">
														<Certificate className="w-4 h-4 mr-2 text-primary-600" />
														<span className="text-sm">
															{
																program.certification
															}
														</span>
													</div>
													<div className="flex items-center text-gray-600 font-medium">
														<span className="text-sm text-primary-600">
															{program.price}
														</span>
													</div>
												</div>

												<div className="mb-6">
													<h4 className="font-semibold text-gray-900 mb-3">
														Learning Objectives:
													</h4>
													<ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
														{program.objectives.map(
															(
																objective,
																index
															) => (
																<li
																	key={index}
																	className="flex items-start text-sm text-gray-600"
																>
																	<CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
																	<span>
																		{
																			objective
																		}
																	</span>
																</li>
															)
														)}
													</ul>
												</div>

												<div className="mb-6">
													<h4 className="font-semibold text-gray-900 mb-3">
														Course Modules:
													</h4>
													<div className="flex flex-wrap gap-2">
														{program.modules.map(
															(module, index) => (
																<span
																	key={index}
																	className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
																>
																	{module}
																</span>
															)
														)}
													</div>
												</div>

												<div className="mb-6 text-sm text-gray-600">
													<p>
														<strong>
															Target Audience:
														</strong>{" "}
														{program.targetAudience}
													</p>
													<p className="mt-1">
														<strong>
															Prerequisites:
														</strong>{" "}
														{program.prerequisites}
													</p>
												</div>

												<Link
													to="/contact"
													className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium group"
												>
													Enroll Now
													<ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
												</Link>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Upcoming Schedule */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
							<div className="slide-in-left">
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									Career Opportunities
								</h2>
								<p className="text-xl text-gray-600 mb-8">
									Walworking Technologies Limited is an
									attractive place for energetic individuals
									seeking rewarding opportunities. As a market
									leader with unparalleled capabilities, we
									offer an agile, fast-paced environment.
								</p>

								<div className="space-y-6">
									<div className="bg-gray-50 p-6 rounded-lg">
										<h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
											<GraduationCap className="w-6 h-6 mr-3 text-info-600" />
											Engineering Positions
										</h3>
										<p className="text-gray-600">
											Our success depends on brilliant
											engineers. We attract exceptional
											talent by offering diverse projects,
											fascinating challenges, active
											collaboration, and global
											opportunities with a strong program
											for development and advancement.
										</p>
									</div>

									<div className="bg-gray-50 p-6 rounded-lg">
										<h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center">
											<HardHat className="w-6 h-6 mr-3 text-orange-600" />
											Field Technicians
										</h3>
										<p className="text-gray-600">
											We provide suitable field
											technicians for smooth operations in
											today's largest and fastest-growing
											industries worldwide. Our
											technicians receive outstanding
											training in a mentoring environment
											with real opportunities for
											advancement.
										</p>
									</div>
								</div>

								<div className="mt-8">
									<Link
										to="/contact"
										className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium group"
									>
										Apply for Positions
										<ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
									</Link>
								</div>
							</div>

							<div className="slide-in-right">
								<div className="bg-gradient-to-br from-info-600 to-primary-600 p-8 rounded-xl text-white">
									<h3 className="text-2xl font-bold mb-6">
										Training & Development
									</h3>
									<p className="text-info-100 mb-6">
										We provide comprehensive training and
										consultancy for fire safety equipment
										and personal protective equipment,
										helping organizations maintain
										compliance and safety standards.
									</p>

									<div className="space-y-4 mb-8">
										<div className="flex items-center">
											<CheckCircle className="w-5 h-5 mr-3 text-info-200" />
											<span>
												Fire safety equipment training
											</span>
										</div>
										<div className="flex items-center">
											<CheckCircle className="w-5 h-5 mr-3 text-info-200" />
											<span>
												PPE usage and maintenance
											</span>
										</div>
										<div className="flex items-center">
											<CheckCircle className="w-5 h-5 mr-3 text-info-200" />
											<span>
												Safety compliance consulting
											</span>
										</div>
										<div className="flex items-center">
											<CheckCircle className="w-5 h-5 mr-3 text-info-200" />
											<span>
												Industry-specific programs
											</span>
										</div>
										<div className="flex items-center">
											<CheckCircle className="w-5 h-5 mr-3 text-info-200" />
											<span>
												Ongoing support and consultation
											</span>
										</div>
									</div>

									<a
										href={`tel:${contactPhoneMain}`}
										className="inline-flex items-center bg-white text-info-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium"
									>
										<Phone className="w-5 h-5 mr-2" />
										Call for Training Info
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Certification Benefits */}
				<section className="py-20 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="text-center mb-16 fade-in">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								Why Choose Our Certification Programs?
							</h2>
							<p className="text-xl text-gray-600">
								Invest in your team's safety knowledge and your
								organization's compliance
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Award className="w-8 h-8 text-primary-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Industry Recognition
								</h3>
								<p className="text-gray-600">
									Our certifications are recognized by leading
									organizations and meet international safety
									standards.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Shield className="w-8 h-8 text-info-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Legal Compliance
								</h3>
								<p className="text-gray-600">
									Meet regulatory requirements and demonstrate
									due diligence in workplace safety
									management.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Users className="w-8 h-8 text-success-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Team Competency
								</h3>
								<p className="text-gray-600">
									Build a competent safety team capable of
									managing fire risks and emergency situations
									effectively.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<CheckCircle className="w-8 h-8 text-orange-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Risk Reduction
								</h3>
								<p className="text-gray-600">
									Significantly reduce fire-related incidents
									and improve overall workplace safety
									performance.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<BookOpen className="w-8 h-8 text-primary-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Continued Learning
								</h3>
								<p className="text-gray-600">
									Access to refresher courses and ongoing
									professional development opportunities.
								</p>
							</div>

							<div className="bg-white p-6 rounded-xl shadow-lg text-center fade-in">
								<div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
									<Certificate className="w-8 h-8 text-info-600" />
								</div>
								<h3 className="text-lg font-bold text-gray-900 mb-4">
									Career Advancement
								</h3>
								<p className="text-gray-600">
									Enhance professional credentials and open
									doors to safety leadership opportunities.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Training Facilities */}
				<section className="py-20 bg-white">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
							<div className="slide-in-left">
								<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
									State of the Art Training Facilities
								</h2>
								<p className="text-lg text-gray-600 mb-8 leading-relaxed">
									Our modern training centers across Nigeria
									are equipped with the latest fire safety
									equipment and simulation technology to
									provide the most realistic and effective
									learning experience.
								</p>

								<div className="space-y-6">
									<div className="flex items-start space-x-4">
										<div className="bg-danger-100 p-2 rounded-lg flex-shrink-0">
											<Flame className="w-6 h-6 text-danger-600" />
										</div>
										<div>
											<h4 className="font-semibold text-lg text-gray-900 mb-2">
												Live Fire Training Areas
											</h4>
											<p className="text-gray-600">
												Controlled fire environments for
												hands-on extinguisher training
												and emergency response practice.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-info-100 p-2 rounded-lg flex-shrink-0">
											<BookOpen className="w-6 h-6 text-info-600" />
										</div>
										<div>
											<h4 className="font-semibold text-lg text-gray-900 mb-2">
												Modern Classrooms
											</h4>
											<p className="text-gray-600">
												Well-equipped classrooms with
												audio-visual systems for
												interactive learning sessions.
											</p>
										</div>
									</div>

									<div className="flex items-start space-x-4">
										<div className="bg-success-100 p-2 rounded-lg flex-shrink-0">
											<HardHat className="w-6 h-6 text-success-600" />
										</div>
										<div>
											<h4 className="font-semibold text-lg text-gray-900 mb-2">
												Equipment Simulation
											</h4>
											<p className="text-gray-600">
												Real fire safety equipment for
												practical training and system
												operation experience.
											</p>
										</div>
									</div>
								</div>
							</div>

							<div className="slide-in-right">
								<img
									src={fireExtinguisherFull}
									alt="Fire safety training in progress"
									className="rounded-xl shadow-2xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-900">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white fade-in">
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Ready to Enhance Your Fire Safety Knowledge?
						</h2>
						<p className="text-xl text-secondary-300 mb-8 max-w-2xl mx-auto">
							Join thousands of professionals who have enhanced
							their fire safety competency through our training
							programs.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link
								to="/contact"
								className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium text-lg flex items-center justify-center group"
							>
								Enroll Today
								<GraduationCap className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
							</Link>
							<a
								href={`tel:${contactPhoneMain}`}
								className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-900 transition-all duration-300 font-medium text-lg flex items-center justify-center"
							>
								<Phone className="w-5 h-5 mr-2" />
								Call for Information
							</a>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Training;
