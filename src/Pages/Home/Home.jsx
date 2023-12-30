import React, { useState } from "react";
import image from "../../assets/images/resume-builder-banner.webp";
import brands from "../../assets/images/brand-logo-dark-d.svg";
import Steps from "./Steps";
import Button from "../../Components/Buttons/Button";
import WhyItWorks from "./WhyItWorks";
import ResumeSection from "./ResumeSection";
import Faq from "./Faq";
import Reviews from "./Reviews";
import { motion } from "framer-motion";
import { slideIn } from "../../animation/motion";
import BlueBox from "./BlueBox";
import Slider from "./Slider";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
	return (
		<motion.div
			initial='initial'
			whileInView='animate'
			className='px-2 py-20 max-w-7xl mx-auto overflow-x-hidden md:overflow-x-visible'>
			<Landing />
			<Customers />
			<Steps />
			<Slider />
			<WhyItWorks />
			<ResumeSection />
			<Reviews />
			<Faq />
			<BlueBox />
		</motion.div>
	);
}

export default Home;

const Customers = () => {
	return (
		<motion.div
			variants={slideIn("down", 0.5, 0.5)}
			className='flex items-center flex-wrap gap-5 px-5 justify-evenly py-8 shadow-md my-20 border rounded-md'>
			<span>Our Customers have been hired by:</span>
			<img
				src={brands}
				alt=''
			/>
		</motion.div>
	);
};

const Landing = () => {
	return (
		<div className='flex gap-10 flex-col items-center xl:flex-row text-center xl:text-left'>
			<div className='flex flex-col items-center xl:items-start justify-center gap-8 lg:max-w-2xl'>
				<motion.h1
					variants={slideIn("down", 0.5)}
					className='lg:text-6xl text-3xl font-semibold font-serif'
					style={{ lineHeight: "1.2" }}>
					Free Online Resume Builder: Make Yours in Minutes
				</motion.h1>

				<motion.p
					variants={slideIn("down", 0.5, 0.3)}
					className='md:text-xl'>
					Create a job-winning professional resume easily. Our builder features 30+ resume templates, step-by-step guidance and endless customizable
					content options.
				</motion.p>

				<Button
					link='/build'
					text='Build a resume'
				/>
			</div>

			<motion.div variants={slideIn("right", 0.5)}>
				<img
					src={image}
					className='w-[90%] mx-auto'
					alt=''
				/>
			</motion.div>
		</div>
	);
};
