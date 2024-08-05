import { type AuthToken } from "~/utils/interfaces/AuthToken";

export default defineNuxtRouteMiddleware((to, from) => {
	const auth = useAuth();

	if (
		!auth.isAuthenticated() ||
		auth.userData.value?.user.userRole !== "admin"
	) {
		// const user = useAuth().userData.value.
		return auth.logout();
	}
});
