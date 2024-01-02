import React from "react";
import Heading from "../../Components/Heading/Heading";
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { slideIn } from "../../animation/motion";
import { useGlobalState } from "../../store/globalStates";

export default function MainTemplatePage() {
	return (
		<main className='py-20'>
			<Heading>Choose a Template!</Heading>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 my-10 p-5'>
				{data.map((i, index) => (
					<Template
						key={i.id}
						{...i}
						index={index}
					/>
				))}
			</div>
		</main>
	);
}

const Template = ({ id, image, name, index }) => {
	const navigate = useNavigate();
	const queryParam = new URLSearchParams(window.location.search);
	const next = queryParam.get("next");

	const { setCurrentTemplate, currentTemplate } = useGlobalState();

	const handleClick = () => {
		setCurrentTemplate(id);
		if (next) navigate(`/${next}`);
		else navigate("/build");
	};

	return (
		<motion.div
			onClick={handleClick}
			variants={slideIn("down", 0.75, index * 0.3)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='col-span-1 border border-orange-400 overflow-hidden rounded-xl cursor-pointer'>
			<img
				src={image}
				className='max-w-full hover:scale-105 transition-all duration-300'
				alt={name}
			/>
		</motion.div>
	);
};
