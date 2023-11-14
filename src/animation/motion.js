import { delay } from "framer-motion";

export const slideIn = (direction, duration, delay) => {
	return {
		initial: {
			x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
			y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
			opacity: 0,
		},
		viewport: { once: true },

		animate: {
			x: 0,
			y: 0,
			opacity: 1,
			transition: {
				duration: duration || 1,
				delay: delay || 0,
			},
		},
	};
};

export const fadeIn = (duration, delay) => {
	return {
		initial: {
			opacity: 0,
		},
		animate: {
			opacity: 1,

			transition: {
				duration: duration || 1,
				delay: delay || 0,
			},
		},
	};
};
