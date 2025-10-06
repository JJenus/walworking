import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { contactPhoneMain } from "../util/contact";

const Header: React.FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isHomePage, setIsHomePage] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsHomePage(location.pathname === "/");
	}, [location]);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location]);

	const navigation = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Products", href: "/products" },
		{ name: "Projects", href: "/projects" },
		{ name: "Training", href: "/training" },
		{ name: "Contact", href: "/contact" },
	];

	// Determine text and background colors based on scroll state and page type
	const getNavStyles = () => {
		if (isHomePage && !isScrolled) {
			return {
				bgColor: "bg-transparent",
				textColor: "text-white",
				logoTextColor: "text-white",
				subtitleColor: "text-gray-200",
				menuButtonColor: "text-white",
			};
		} else {
			return {
				bgColor: `bg-bs-white ${isScrolled && "shadow-lg"}`,
				textColor: "text-bs-gray-700",
				logoTextColor: "text-bs-gray-800",
				subtitleColor: "text-bs-gray-600",
				menuButtonColor: "text-bs-gray-800",
			};
		}
	};

	const navStyles = getNavStyles();

	return (
		<header
			className={`fixed w-full z-50 transition-all duration-300 ${
				isScrolled ? "py-0" : "py-0"
			}`}
		>
			{/* Emergency Contact Bar */}
			<div className="bg-bs-primary text-bs-white py-2">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0 text-sm">
						<div className="flex items-center space-x-6">
							<a
								href="tel:+2348106981539"
								className="flex items-center hover:text-bs-warning transition-colors duration-200 group"
								aria-label="Emergency contact number"
							>
								<Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
								Contact: {contactPhoneMain}
							</a>
							<a
								href="mailto:info@walworkingtechnologiesltd.com"
								className="hidden sm:flex items-center hover:text-bs-warning transition-colors duration-200 group"
							>
								<Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
								info@walworkingtechnologiesltd.com
							</a>
						</div>
						<div className="text-xs hidden font-medium bg-bs-primary-dark/30 px-3 py-1 rounded-full border border-bs-white/20">
							🚨 24/7 Emergency Response Available
						</div>
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div
				className={`w-full transition-all duration-300 ${navStyles.bgColor} border-0`}
			>
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						{/* Logo */}
						<Logo
							logoTextColor={navStyles.logoTextColor}
							subtitleColor={navStyles.subtitleColor}
						/>

						{/* Desktop Navigation */}
						<div className="hidden lg:flex items-center space-x-1">
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg ${
										location.pathname === item.href
											? "text-bs-primary bg-bs-primary/10 border border-bs-primary text-bold"
											: `${navStyles.textColor} hover:text-bs-primary hover:bg-bs-gray-100`
									}`}
								>
									{item.name}
								</Link>
							))}
						</div>
						<Link
							to="/contact"
							className="hidden lg:flex bg-primary-500 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-200 font-medium transform hover:scale-105 shadow-lg"
						>
							Get Quote
						</Link>

						{/* Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className={`lg:hidden p-2 rounded-lg transition-all duration-200 hover:bg-bs-gray-100 ${navStyles.menuButtonColor}`}
							aria-expanded="false"
							aria-label="Toggle navigation menu"
						>
							{isMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="lg:hidden bg-bs-white border-t border-bs-gray-200">
							<div className="px-2 pt-2 pb-4 space-y-1">
								{navigation.map((item) => (
									<Link
										key={item.name}
										to={item.href}
										className={`block px-4 py-3 text-base font-medium rounded-lg transition-all duration-200 ${
											location.pathname === item.href
												? "text-bs-primary bg-bs-primary/10 border border-bs-primary/20"
												: "text-bs-gray-700 hover:text-bs-primary hover:bg-bs-gray-50"
										}`}
									>
										{item.name}
									</Link>
								))}
								<Link
									to="/contact"
									className="block w-full bg-primary-500 text-white px-4 py-3 rounded-lg hover:bg-primary-600 transition-all duration-200 font-medium text-lg transform hover:scale-105 mt-8 shadow-lg"
								>
									Get Quote
								</Link>
							</div>
						</div>
					)}
				</nav>
			</div>
		</header>
	);
};

export default Header;
