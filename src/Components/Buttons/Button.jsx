import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Button = ({ link, text }) => {
	return (
		<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9, rotate: "15deg" }}>
			<Link to={link} className='bg-orange-600 hover:bg-orange-400 text-white  font-semibold  px-10 py-3 rounded-[50px]'>
				{text}
			</Link>
		</motion.button>
	);
};

export default Button;
