import React from "react";
import Heading from "../../Components/Heading/Heading";
import Button from "../../Components/Buttons/Button";
import { data } from "../../data/data";
import { useStore } from "../../store/store";
import { useNavigate } from "react-router-dom";
const ResumeSection = () => {
	return (
		<div className='flex flex-col gap-10 my-20 text-center items-center'>
			<Heading>Winning resume examples that will help inspire you</Heading>
			<p className='max-w-3xl text-sm'>
				The power of a good example can help take your resume to the next level! Check out our resume examples! We’ve got hundreds of well-written
				professional resume examples that can give you an edge. See how you can surpass your job competition and get some great ideas for your resume!
			</p>

			<div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 p-1'>
				{data.map((data) => (
					<CVTemplate key={data.name} {...data} />
				))}
			</div>
		</div>
	);
};

export default ResumeSection;

const CVTemplate = ({ image, name, id }) => {
	const currentTemplate = useStore((store) => store.currentTemplate);
	const setCurrentTemplate = useStore((store) => store.setCurrentTemplate);
	const navigate = useNavigate();
	const handleClick = () => {
		setCurrentTemplate(id);
		navigate("/build");
	};
	return (
		<div className='col-span-1 shadow-md relative group'>
			<img src={image} className='max-w-full' alt='' />
			<div className='absolute bottom-10 left-[50%] translate-x-[-50%] w-max opacity-0 group-hover:opacity-100 transition-all'>
				<Button text='Use this template' onClick={() => handleClick()} />
			</div>
		</div>
	);
};
