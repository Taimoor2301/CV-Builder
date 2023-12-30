import { create } from "zustand";
import { nanoid } from "nanoid";

const store = (set) => {
	return {
		name: "",
		email: "",
		phoneNumber: "",
		jobTitle: "",
		address: "",
		about: "",
		setDetails: (n, value) => set((store) => ({ [n]: value })),

		// !work
		workExperience: [{ role: "", startDate: "", endDate: "", company: "", jobDescription: "", id: nanoid() }],
		editWorkExperience: (id, n, value) =>
			set((store) => ({ workExperience: store.workExperience.map((w) => (w.id === id ? { ...w, [n]: value } : w)) })),
		addWorkExperience: () =>
			set((store) => ({
				workExperience: [...store.workExperience, { role: "", startDate: "", endDate: "", company: "", jobDescription: "", id: nanoid() }],
			})),
		removeWorkExperience: (id) => set((store) => ({ workExperience: store.workExperience.filter((w) => w.id !== id) })),

		//  !education
		education: [{ course: "", startDate: "", endDate: "", institute: "", detail: "", id: nanoid() }],
		editEducation: (id, n, value) => set((store) => ({ education: store.education.map((e) => (e.id === id ? { ...e, [n]: value } : e)) })),
		addEducation: () =>
			set((store) => ({
				education: [...store.education, { course: "", startDate: "", endDate: "", institute: "", detail: "", id: nanoid() }],
			})),

		removeEducation: (id) => set((store) => ({ education: store.education.filter((e) => e.id !== id) })),

		// !skills
		skills: [],
		addSkill: (name, efficiency) => set((store) => ({ skills: [...store.skills, { name, efficiency, id: nanoid() }] })),
		removeSkill: (id) => set((store) => ({ skills: store.skills.filter((s) => s.id !== id) })),

		// !hobbies
		hobbies: [],
		addHobbie: (name) => set((s) => ({ hobbies: [...s.hobbies, { name, id: nanoid() }] })),
		removeHobbie: (id) => set((s) => ({ hobbies: s.hobbies.filter((h) => h.id !== id) })),
		// !social links
		socialLinks: [],
		addSocialLink: (name, link) => set((s) => ({ socialLinks: [...s.socialLinks, { name, link, id: nanoid() }] })),
		removeSocialLink: (id) => set((s) => ({ socialLinks: s.socialLinks.filter((s) => s.id !== id) })),
	};
};

export const useDetails = create(store);
