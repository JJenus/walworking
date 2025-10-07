import React, { useState, useRef, useEffect } from "react";
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
	MessageSquare,
} from "lucide-react";
import SEO from "../components/SEO";
import fighterImg from "../assets/image/team/back-view-firefighters-trying-put-out-wildfire.jpg";
import {
	companyAddress,
	contactEmailEmergency,
	contactEmailInfo,
	contactPhoneMain,
	contactPhoneSecondary,
} from "../util/contact";
import ContactForm from "../components/ContactForm";


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
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		company: "",
		service: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const [errors, setErrors] = useState<Partial<ContactForm>>({});

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

	const contactSchema = {
		"@context": "https://schema.org",
		"@type": "ContactPage",
		name: "Contact Walworking Technologies - Fire Safety Experts in Nigeria",
		description:
			"Get professional fire protection solutions in Nigeria. Contact our safety experts for equipment sales, installation, training, and 24/7 emergency services.",
		mainEntity: {
			"@type": "Organization",
			name: "Walworking Technologies Limited",
			description:
				"Fire Protection & Safety Solutions Company in Nigeria",
			url: baseUrl,
			logo: `${baseUrl}/assets/images/logo/logo-w.png`,
			telephone: "+234-810-698-1539",
			email: "info@walworkingtechnologiesltd.com",
			address: {
				"@type": "PostalAddress",
				streetAddress:
					"15 Custom Street, Alakuko, Lagos/Abeokuta Expressway",
				addressLocality: "Lagos State",
				addressCountry: "Nigeria",
			},
			areaServed: "Nigeria",
			serviceArea: {
				"@type": "GeoCircle",
				geoMidpoint: {
					"@type": "GeoCoordinates",
					latitude: 6.5244,
					longitude: 3.3792,
				},
				geoRadius: "1000000",
			},
		},
	};

	const validateForm = (): boolean => {
		const newErrors: Partial<ContactForm> = {};

		if (!formData.firstName.trim())
			newErrors.firstName = "First name is required";
		if (!formData.lastName.trim())
			newErrors.lastName = "Last name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}
		if (!formData.phone.trim())
			newErrors.phone = "Phone number is required";
		if (!formData.service.trim())
			newErrors.service = "Please select a service";
		if (!formData.message.trim()) newErrors.message = "Message is required";

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error for this field
		if (errors[name as keyof ContactForm]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setIsSubmitting(true);
		setSubmitStatus("idle");

		try {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// In a real application, you would send the form data to your backend
			console.log("Form submitted:", formData);

			setSubmitStatus("success");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				company: "",
				service: "",
				message: "",
			});
		} catch (error) {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<div className="pt-16">
			<SEO
				title="Contact Walworking Technologies - Fire Safety Experts in Nigeria"
				description="Get professional fire protection solutions in Nigeria. Contact our safety experts for equipment sales, installation, training, and 24/7 emergency services."
				canonicalUrl={`${baseUrl}/contact`}
				ogImage={`${baseUrl}${fighterImg}`}
				ogType="website"
				twitterCard="summary_large_image"
				schemaMarkup={contactSchema}
			/>
			{/* Hero Section */}
			<section className="py-20 bg-gradient-to-r from-blue-600 to-red-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
					<div className="fade-in">
						<h1 className="text-4xl md:text-5xl font-bold mb-6">
							Contact Us
						</h1>
						<p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
							Ready to secure your facility? Get in touch with our
							fire safety experts for a comprehensive consultation
							and customized solutions.
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
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								Our Location
							</h3>
							<p className="text-gray-600 ">
								{companyAddress
									.split(", ")
									.map((content, index) => (
										<span>
											{content}
											{companyAddress.split(", ").length >
												index + 1 && (
												<span>
													, <br />
												</span>
											)}{" "}
										</span>
									))}
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="bg-info-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Phone className="w-8 h-8 text-info-600" />
							</div>
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								Phone Numbers
							</h3>
							<p className="text-gray-600">
								Main: {contactPhoneMain}
								<br />
								<span className="text-primary-600 font-medium">
									Secondary: {contactPhoneSecondary}
								</span>
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="bg-success-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Mail className="w-8 h-8 text-success-600" />
							</div>
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								Email Addresses
							</h3>
							<p className="text-gray-600">
								{contactEmailInfo}
								<br />
								{contactEmailEmergency}
							</p>
						</div>

						<div className="text-center fade-in">
							<div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Clock className="w-8 h-8 text-orange-600" />
							</div>
							<h3 className="text-lg font-bold text-gray-900 mb-4">
								Business Hours
							</h3>
							<p className="text-gray-600">
								Mon - Fri: 8:00 AM - 6:00 PM
								<br />
								<span className="text-red-600 font-medium">
									Emergency: 24/7
								</span>
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
							<ContactForm />
						</div>

						{/* Map and Additional Info */}
						<div className="slide-in-right space-y-8">
							{/* Map Placeholder */}
							{/* Embedded Google Map */}
							<div className="bg-white rounded-xl shadow-lg overflow-hidden">
								<iframe
									title="Walworking Technologies Location"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1981.9045102872948!2d3.282000115803901!3d6.679056410912863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9456cd52c0d7%3A0xa9dd6fcdbf8301b!2s15%20Custom%20Street%2C%20Alakuko%2C%20Lagos%2FAbeokuta%20Expressway!5e0!3m2!1sen!2sng!4v1696511891217!5m2!1sen!2sng"
									width="100%"
									height="320"
									style={{ border: 0 }}
									allowFullScreen
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
								></iframe>
							</div>

							{/* Emergency Contact */}
							<div className="bg-primary-600 text-white p-8 rounded-xl">
								<h3 className="text-xl font-bold mb-4 flex items-center">
									<Phone className="w-6 h-6 mr-3" />
									Emergency Contact
								</h3>
								<p className="mb-4">
									For fire emergencies or urgent safety
									concerns, contact our 24/7 emergency
									response team:
								</p>
								<div className="space-y-2">
									<a
										href={`tel:${contactPhoneMain}`}
										className="block text-2xl font-bold hover:text-primary-200 transition-colors"
									>
										{contactPhoneMain}
									</a>
									<a
										href={`mailto:${contactEmailEmergency}`}
										className="block hover:text-primary-200 transition-colors"
									>
										{contactEmailEmergency}
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
										<span className="text-gray-600">
											Monday - Friday
										</span>
										<span className="font-medium">
											8:00 AM - 6:00 PM
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">
											Saturday
										</span>
										<span className="font-medium">
											9:00 AM - 2:00 PM
										</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">
											Sunday
										</span>
										<span className="font-medium">
											Closed
										</span>
									</div>
									<div className="pt-3 border-t border-gray-200">
										<div className="flex justify-between">
											<span className="text-primary-600 font-medium">
												Emergency Support
											</span>
											<span className="font-bold text-primary-600">
												24/7
											</span>
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
								We service clients in the oil and gas,
								manufacturing, power, ICT, and individual
								sectors across Nigeria with comprehensive fire
								protection and PPE solutions.
							</p>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg fade-in">
							<h4 className="font-semibold text-lg text-gray-900 mb-3">
								What fire protection systems do you offer?
							</h4>
							<p className="text-gray-600">
								We offer FM-200 fire suppression systems, CO2
								flooding systems, fire alarm/detection systems,
								fire extinguishers, and comprehensive PPE
								solutions with full engineering design, supply,
								installation, and maintenance services.
							</p>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg fade-in">
							<h4 className="font-semibold text-lg text-gray-900 mb-3">
								Do you provide training and consultancy
								services?
							</h4>
							<p className="text-gray-600">
								Yes, we provide comprehensive training and
								consultancy services for fire safety equipment
								and personal protective equipment, helping
								organizations maintain compliance and safety
								standards.
							</p>
						</div>

						<div className="bg-gray-50 p-6 rounded-lg fade-in">
							<h4 className="font-semibold text-lg text-gray-900 mb-3">
								What makes your PPE supply different?
							</h4>
							<p className="text-gray-600">
								We prioritize quality, delivering reliable
								personal protective and safety equipment
								tailored to meet individual needs and
								satisfaction. Our equipment meets the highest
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
