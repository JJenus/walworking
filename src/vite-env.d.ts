/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_BASE_URL: string;
	readonly VITE_CONTACT_ADDRESS: string;
	readonly VITE_CONTACT_PHONE_MAIN: string;
	readonly VITE_CONTACT_PHONE_SECONDARY: string;
	readonly VITE_CONTACT_EMAIL_INFO: string;
	readonly VITE_CONTACT_EMAIL_DANGER: string;
	readonly VITE_CONTACT_EMAIL_GMAIL: string;
	// more env variables...
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
