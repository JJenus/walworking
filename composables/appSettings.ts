import moment from "moment";

export const useAppSettings = () => {
	const activeNav = useState<string>("active-nav", () => "Trade");
	const isPageLoading = useState("load-page", () => true);

	const navs = ref([
		{
			name: "Home",
			path: "/",
		},
		{
			name: "About",
			path: "/about",
		},
		{
			name: "Services",
			path: "/services",
		},
		{
			name: "Certification",
			path: "/certification",
		},
		{
			name: "Contact",
			path: "contact-us",
		},
	]);
	const setActiveNav = (active: string) => {
		activeNav.value = active;
	};

	const time = (data: string) => {
		const now = moment();
		const inputTime = moment(data);

		if (now.diff(inputTime, "hours") <= 1) {
			return inputTime.fromNow();
		} else if (now.isSame(inputTime, "day")) {
			return inputTime.format("hh:mm A");
		} else {
			return inputTime.format("DD/MM/YYYY hh:mm A");
		}
	};

	return {
		isPageLoading,
		navs,
		activeNav,
		time,
		setActiveNav,
	};
};
