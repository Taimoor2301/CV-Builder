import React from "react";
import Button from "../../Components/Buttons/Button";
import { motion } from "framer-motion";

const BlueBox = () => {
	return (
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			whileInView={{ x: 0, opacity: 1, transition: { delay: 0.5, duration: 0.5 } }}
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1606978297876-ca1d2a75e631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMHRleHR1cmUlMjBibHVlfGVufDB8fDB8fHww)",
			}}
			className='flex w-[90%]  mx-auto flex-col items-center justify-center gap-8 py-20 bg-purple-400 mt-20 relative'>
			<h1 className='text-3xl md:text-5xl text-white text-center font-bold font-serif max-w-5xl'>
				You need a strong resume to win the job, don't miss out!
			</h1>
			<Button text='Build my resume' link='/' />

			<motion.div
				whileInView={{ skewX: -10, transition: { duration: 1 } }}
				className='absolute w-[105%] md:w-full h-[95%] md:h-[110%] border-[8px] border-orange-400 pointer-events-none'></motion.div>
		</motion.div>
	);
};

export default BlueBox;
