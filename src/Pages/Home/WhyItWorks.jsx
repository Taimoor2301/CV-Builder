import React, { useEffect, useState } from "react";
import { workImages } from "../../assets/images";
import Button from "../../Components/Buttons/Button";
import { userCommentsData, workData } from "../../data";
import Heading from "../../Components/Heading/Heading";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../animation/motion";

const WhyItWorks = () => {
	return (
		<div className='flex flex-col gap-20  items-center px-3 py-10 mt-20'>
			<Heading>Why our Resume Builder Works</Heading>

			<section className='flex flex-col gap-20 items-center py-5'>
				{workData.map((work, index) => (
					<Work key={index} {...work} index={index} />
				))}
			</section>

			<WorkBox />

			<Heading>
				What users say about our <br />
				resume builder
			</Heading>

			<section className='flex justify-evenly flex-wrap w-full items-center gap-10'>
				{userCommentsData.map((data, index) => (
					<UserComment key={index} {...data} index={index} />
				))}
			</section>

			<div className='w-full h-[2px] bg-gray-300 my-20' />
		</div>
	);
};

export default WhyItWorks;

const UserComment = ({ img, name, comment, index }) => {
	return (
		<motion.div
			variants={slideIn("down", 0.3, index * 0.3)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='relative rounded-xl shadow-md border w-64 xl:w-80 h-[350px] xl:h-[280px]'>
			<div className='w-full h-[8px] bg-orange-400 rounded-tl-xl rounded-tr-xl'></div>

			<div className='px-5 py-10 flex flex-col justify-between gap-10 h-full text-[.95rem] overflow-hidden'>
				<p>{comment}</p>

				<h2 className='font-bold font-serif'>{name}</h2>
			</div>

			<img src={img} alt='' className='absolute bottom-[-30px] right-[-50px] z-[1000] rounded-full w-24 aspect-square' />
		</motion.div>
	);
};

const Work = ({ img, h, p, index }) => {
	const isEven = index % 2 === 0 ? true : false;

	return (
		<div className={`flex gap-20 items-center flex-wrap justify-center ${isEven ? "flex-row-reverse" : "flex-row"}`}>
			<motion.img
				variants={slideIn(!isEven ? "left" : "right", 0.5, 0.2)}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				src={img}
				className='md:w-1/3 w-full'
			/>

			<motion.div
				variants={slideIn(isEven ? "left" : "right", 0.5, 0.2)}
				initial='initial'
				whileInView='animate'
				viewport={{ once: true }}
				className='flex flex-col gap-3 justify-center md:w-1/3 w-full'>
				<div className='bg-orange-500 h-[6px] w-20'></div>

				<h1 className='font-serif text-3xl font-semibold'>{h}</h1>

				<p className='text-lg pt-6'>{p}</p>
			</motion.div>
		</div>
	);
};

const WorkBox = () => {
	return (
		<div
			className='flex items-center flex-wrap lg:flex-nowrap gap-5 xl:p-20 p-5 pb-0 xl:pb-0 justify-between text-white bg-cover'
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1606978297876-ca1d2a75e631?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFja2dyb3VuZCUyMHRleHR1cmUlMjBibHVlfGVufDB8fDB8fHww)",
			}}>
			<div className='flex flex-col xl:items-start items-center gap-5 text-center xl:text-start max-w-xl py-10'>
				<h1 className='font-serif font-bold md:text-5xl text-2xl'>Make your resume now, get hired sooner!</h1>
				<p className='md:text-lg text-sm lg:w-3/4'>Thousands of people have used our resume builder to win their dream jobs and you can too!</p>
				<Button link='/resume' text='Create a resume' />
			</div>

			<img src={workImages.boxImage} alt='' className='mx-auto' />
		</div>
	);
};
