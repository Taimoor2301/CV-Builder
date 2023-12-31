import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button = ({ text, onClick, link }) => {
	const navigate = useNavigate();
	return (
		<motion.button
			className='bg-orange-500 hover:bg-orange-600 text-white  font-semibold  px-10 py-3 rounded'
			onClick={() => {
				if (onClick) onClick();
				else navigate(link);
			}}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.9, rotate: "15deg" }}>
			{text}
		</motion.button>
	);
};

export default Button;
