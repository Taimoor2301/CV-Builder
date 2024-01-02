import { create } from "zustand";

const store = (set) => {
	return {
		user: null,
		isLoggedIn: false,
		loading: true,
		setLoading: (value) => set((s) => ({ loading: value })),
		setUser: (user) => set((s) => ({ user: user })),
		setIsLoggedIn: (status) => set((s) => ({ isLoggedIn: status })),
	};
};

export const useAuthStore = create(store);
