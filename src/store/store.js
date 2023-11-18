import { create } from "zustand";
import { data } from "../data/data";

const store = (set) => {
	return {
		currentTemplate: null,
		setCurrentTemplate: (id) => set((store) => ({ currentTemplate: id })),
	};
};

export const useStore = create(store);
