const {
	VITE_CONTACT_ADDRESS: companyAddress,
	VITE_CONTACT_PHONE_MAIN: contactPhoneMain,
	VITE_CONTACT_PHONE_SECONDARY: contactPhoneSecondary,
	VITE_CONTACT_EMAIL_GMAIL: contactGmail,
	VITE_CONTACT_EMAIL_DANGER: contactEmailEmergency,
	VITE_CONTACT_EMAIL_INFO: contactEmailInfo,
} = import.meta.env;

export {
	companyAddress,
	contactPhoneMain,
	contactPhoneSecondary,
	contactGmail,
	contactEmailEmergency,
	contactEmailInfo,
};
