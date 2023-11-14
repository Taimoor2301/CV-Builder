import { motion } from "framer-motion";

import { stepsImages } from "../../assets/images";
import Button from "../../Components/Buttons/Button";
import Heading from "../../Components/Heading/Heading";
import { slideIn } from "../../animation/motion";

const Steps = () => {
	return (
		<div className='flex flex-col gap-10 items-center text-center px-3 py-10'>
			<Heading>Steps to a perfect resume</Heading>

			<section className='flex justify-evenly flex-col md:flex-row flex-wrap gap-10 items-center'>
				{stepsData.map((step, index) => (
					<Step key={index} index={index} {...step} />
				))}
			</section>

			<Button link='/resume' text='Make a resume' />
		</div>
	);
};

export default Steps;

const Step = ({ img, title, detail, index }) => {
	return (
		<motion.div
			variants={slideIn("down", 0.75, index * 0.2)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='flex flex-col items-center justify-center gap-5 text-center w-[350px] p-3'>
			<img src={img} className='w-70' alt='' />

			<h1 className='text-2xl font-bold'>{title}</h1>
			<p className='text-lg  w-[80%]'>{detail}</p>
		</motion.div>
	);
};

const stepsData = [
	{
		img: stepsImages.step1,
		title: "Pick a template and follow the prompts",
		detail: "Our builder will tailor your resume to the desired role once we know your details.",
	},
	{
		img: stepsImages.step2,
		title: "Choose customized text that fits your story",
		detail: "The builder features professionally written content and keywords that you can select.",
	},
	{
		img: stepsImages.step3,
		title: "Download and send to employers",
		detail: "Save and send as a PDF, Word DOC or any other file format the employer wants.",
	},
];
