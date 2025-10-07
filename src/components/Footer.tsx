import React from "react";
import { Link } from "react-router-dom";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Facebook,
	Twitter,
	Linkedin,
	Instagram,
	ArrowRight,
} from "lucide-react";
import Logo from "./Logo";
import {
	companyAddress,
	contactEmailInfo,
	contactPhoneMain,
	contactPhoneSecondary,
} from "../util/contact";

const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white">
			{/* Newsletter Section */}
			<div className="bg-primary-500">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
					<div className="text-center">
						<h3 className="text-xl sm:text-2xl font-bold mb-4">
							Stay Updated on Fire Safety
						</h3>
						<p className="text-primary-100 mb-6 max-w-2xl mx-auto text-sm sm:text-base">
							Get the latest fire safety tips, industry updates,
							and exclusive offers delivered to your inbox.
						</p>
						<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
							<input
								type="email"
								placeholder="Enter your email address"
								className="flex-1 px-4 py-3 rounded-lg text-secondary-900 focus:outline-none focus:ring-2 focus:ring-white text-sm sm:text-base"
								required
							/>
							<button
								type="submit"
								className="bg-white text-primary-600 px-6 py-3 rounded-lg hover:bg-secondary-100 transition-colors font-medium flex items-center justify-center"
							>
								Subscribe
								<ArrowRight className="w-4 h-4 ml-2" />
							</button>
						</form>
					</div>
				</div>
			</div>

			{/* Main Footer Content */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
					{/* Company Info */}
					<div className="lg:col-span-1">
						<div className="flex items-center space-x-3 mb-6">
							<Logo />
						</div>
						<p className="text-secondary-400 mb-6 leading-relaxed text-sm sm:text-base">
							Nigeria's trusted partner for comprehensive fire
							protection and safety solutions. Protecting lives
							and property with professional expertise and
							cutting-edge technology.
						</p>
						
						<div className="flex space-x-4">
							{[
								{
									href: "https://www.facebook.com/walworkingtechnologiesltd?mibextid=ZbWKwL",
									Icon: Facebook,
									label: "Facebook",
								},
								{
									href: "https://x.com/WalWorkingTech?t=pL42Nf6cl_suKhIE3ygypQ&s=09",
									Icon: Twitter,
									label: "Twitter",
								},
								{
									href: "https://www.linkedin.com/company/wal-working-technologies-ltd",
									Icon: Linkedin,
									label: "LinkedIn",
								},
								{
									href: "https://www.instagram.com/wal_working_technologies_ltd",
									Icon: Instagram,
									label: "Instagram",
								},
							].map(({ href, Icon, label }) => (
								<a
									key={label}
									href={href}
									className="text-secondary-400 hover:text-white transition-colors"
									aria-label={`Follow us on ${label}`}
									target="blank"
								>
									<Icon className="w-5 h-5 sm:w-6 sm:h-6" />
								</a>
							))}
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-bold text-lg sm:text-xl mb-6">
							Quick Links
						</h4>
						<ul className="space-y-3 text-sm sm:text-base">
							{[
								{ to: "/about", label: "About Us" },
								{ to: "/services", label: "Our Services" },
								{ to: "/products", label: "Products" },
								{ to: "/projects", label: "Projects" },
								{
									to: "/training",
									label: "Training & Certification",
								},
								{ to: "/contact", label: "Contact Us" },
							].map(({ to, label }) => (
								<li key={label}>
									<Link
										to={to}
										className="text-secondary-400 hover:text-white transition-colors"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Services */}
					<div>
						<h4 className="font-bold text-lg sm:text-xl mb-6">
							Our Services
						</h4>
						<ul className="space-y-3 text-sm sm:text-base">
							{[
								"Fire Equipment Sales",
								"System Installation",
								"Maintenance Services",
								"Safety Training",
								"Fire Consultancy",
								"PPE Solutions",
								"Emergency Response",
							].map((service) => (
								<li
									key={service}
									className="text-secondary-400"
								>
									{service}
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="font-bold text-lg sm:text-xl mb-6">
							Contact Information
						</h4>
						<div className="space-y-4 text-sm sm:text-base">
							<div className="flex items-start space-x-3">
								<MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
								<div>
									<p className="text-secondary-400">
										{companyAddress}
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-primary-400" />
								<div>
									<p className="text-secondary-400">
										{contactPhoneMain}
									</p>
									<p className="text-secondary-500 text-sm">
										Main Office
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Phone className="w-5 h-5 text-primary-400" />
								<div>
									<p className="text-secondary-400">
										{" "}
										{contactPhoneSecondary}
									</p>
									<p className="text-primary-400 text-sm font-medium">
										Secondary Line
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Mail className="w-5 h-5 text-primary-400" />
								<div>
									<p className="text-secondary-400">
										{contactEmailInfo}
									</p>
								</div>
							</div>
							<div className="flex items-center space-x-3">
								<Clock className="w-5 h-5 text-primary-400" />
								<div>
									<p className="text-secondary-400">
										Mon - Fri: 8:00 AM - 5:00 PM
									</p>
									<p className="text-secondary-500 text-sm">
										Saturday - Sunday: Closed
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Footer */}
			<div className="border-t border-secondary-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
						<div className="text-secondary-400 text-sm">
							<p>
								&copy; {currentYear} Walworking Technologies
								Limited. All rights reserved.
							</p>
							<p className="mt-1">
								Licensed Fire Protection & PPE Supply Company
							</p>
						</div>
						<div className="flex flex-wrap gap-4 sm:gap-6">
							{[
								{ to: "/privacy", label: "Privacy Policy" },
								{ to: "/terms", label: "Terms of Service" },
								{ to: "/sitemap", label: "Sitemap" },
							].map(({ to, label }) => (
								<Link
									key={label}
									to={to}
									className="text-secondary-400 hover:text-white transition-colors text-sm"
								>
									{label}
								</Link>
							))}
						</div>
					</div>

					{/* Certifications */}
					<div className="mt-8 pt-8 border-t border-secondary-800">
						<div className="text-center">
							<p className="text-secondary-500 text-sm mb-4">
								Certified & Accredited By:
							</p>
							<div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 opacity-60">
								{[
									"ISO 9001:2008",
									"ISO 14001:2004",
									"OHSAS 18001",
									"IMO: ISM Code",
								].map((cert) => (
									<div
										key={cert}
										className="text-secondary-600 font-bold text-sm"
									>
										{cert}
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
