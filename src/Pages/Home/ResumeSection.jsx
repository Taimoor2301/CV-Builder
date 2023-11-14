import React from "react";
import Heading from "../../Components/Heading/Heading";
import CV1 from "../../Components/Cvs/CV1/CV1";
import Button from "../../Components/Buttons/Button";

const ResumeSection = () => {
	return (
		<div className='flex flex-col gap-10 my-20 text-center items-center'>
			<Heading>Winning resume examples that will help inspire you</Heading>
			<p className='max-w-3xl text-sm'>
				The power of a good example can help take your resume to the next level! Check out our resume examples! We’ve got hundreds of well-written
				professional resume examples that can give you an edge. See how you can surpass your job competition and get some great ideas for your resume!
			</p>

			<div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 p-1'>
				<CVTemplate />
				<CVTemplate />
				<CVTemplate />
				<CVTemplate />
				<CVTemplate />
				<CVTemplate />
			</div>
		</div>
	);
};

export default ResumeSection;

const CVTemplate = () => {
	return (
		<div className='col-span-1 shadow-md relative group'>
			<img src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' className='max-w-full' alt='' />
			<div className='absolute bottom-10 left-14 opacity-0 group-hover:opacity-100 transition-all'>
				<Button text='Use this template' link='/resume' />
			</div>

			<h1 className='mx-auto mt-10 text-sky-500 font-bold'>CV Title</h1>
		</div>
	);
};
