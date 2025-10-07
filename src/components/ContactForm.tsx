import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { contactGmail } from "../util/contact";

const ContactForm: React.FC = () => {
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "loading" | "success" | "error"
	>("idle");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSubmitStatus("loading");

		const form = e.currentTarget;
		const formData = new FormData(form);

		fetch(`https://formsubmit.co/${contactGmail}`, {
			method: "POST",
			body: formData,
			headers: {
				Accept: "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					setSubmitStatus("success");
					form.reset();
				} else {
					setSubmitStatus("error");
				}
			})
			.catch(() => setSubmitStatus("error"));
	};

	return (
		<div className="bg-white p-8 rounded-xl shadow-lg">
			<h2 className="text-2xl font-bold text-gray-900 mb-6">Get a Free Consultation</h2>

			{submitStatus === "success" && (
				<div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center">
					<CheckCircle className="w-5 h-5 text-green-600 mr-3" />
					<p className="text-green-700">Message sent successfully!</p>
				</div>
			)}

			{submitStatus === "error" && (
				<div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center">
					<AlertCircle className="w-5 h-5 text-red-600 mr-3" />
					<p className="text-red-700">Failed to send message. Please try again.</p>
				</div>
			)}

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* Hidden FormSubmit Config */}
				<input type="hidden" name="_captcha" value="false" />
				<input type="hidden" name="_template" value="table" />
				<input type="hidden" name="_subject" value="New Message from Walworking Website" />
				<input type="hidden" name="_next" value={window.location.href} />

				<div className="grid md:grid-cols-2 gap-6">
					<input name="First Name" placeholder="First Name *" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
					<input name="Last Name" placeholder="Last Name *" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
				</div>

				<div className="grid md:grid-cols-2 gap-6">
					<input name="Email" type="email" placeholder="Email *" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
					<input name="Phone" type="tel" placeholder="Phone *" required className="w-full border border-gray-300 rounded-lg px-4 py-3" />
				</div>

				<input name="Company" placeholder="Company (optional)" className="w-full border border-gray-300 rounded-lg px-4 py-3" />

				<select name="Service" required className="w-full border border-gray-300 rounded-lg px-4 py-3">
					<option value="">Select a Service *</option>
					<option value="Fire Equipment Sales">Fire Equipment Sales</option>
					<option value="System Installation">System Installation</option>
					<option value="Maintenance Services">Maintenance Services</option>
					<option value="Safety Training">Safety Training</option>
					<option value="Fire Consultancy">Fire Consultancy</option>
					<option value="PPE Solutions">PPE Solutions</option>
					<option value="Emergency Response">Emergency Response</option>
					<option value="Risk Assessment">Risk Assessment</option>
				</select>

				<textarea name="Message" rows={5} placeholder="Your Message *" required className="w-full border border-gray-300 rounded-lg px-4 py-3"></textarea>

				<button
					type="submit"
					className="w-full py-4 px-6 rounded-lg font-medium text-lg flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white transition-all duration-300 disabled:bg-primary-400 disabled:cursor-not-allowed"
					disabled={submitStatus === "loading"}
				>
					{submitStatus === "loading" ? (
						<>
							<Loader2 className="w-5 h-5 mr-2 animate-spin" />
							<span>Submitting...</span>
						</>
					) : (
						<>
							Send Message <Send className="w-5 h-5 ml-2" />
						</>
					)}
				</button>
			</form>
		</div>
	);
};

export default ContactForm;
