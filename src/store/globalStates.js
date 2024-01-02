import { create } from "zustand";
import { data } from "../data/data";
import { json } from "react-router-dom";

const store = (set) => {
	return {
		currentTemplate: null,
		setCurrentTemplate: (id) =>
			set((store) => {
				const template = data.find((item) => item.id === id);
				localStorage.setItem("currentTemplate", JSON.stringify(template));
				return { currentTemplate: template };
			}),
	};
};

export const useGlobalState = create(store);
