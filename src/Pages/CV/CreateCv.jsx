import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import { fadeIn, slideIn } from "../../animation/motion";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import GeneralDetails from "./GeneralDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { useDetails } from "../../store/details";
import { useAuthStore } from "../../store/authStore";
import Save from "./Save";
import { motion } from "framer-motion";

function CreateCv() {
	const { isLoggedIn, user } = useAuthStore();

	// !temporary states
	const [currentSkill, setCurrentSkill] = useState({ name: "", efficiency: "" });
	const [currentHobbie, setCurrentHobbie] = useState("");
	const [currentSocailLink, setCurrentSocialLink] = useState({ name: "", link: "" });

	const {
		workExperience,
		addWorkExperience,
		skills,
		addSkill,
		removeSkill,
		education,
		addEducation,
		hobbies,
		addHobbie,
		removeHobbie,
		socialLinks,
		addSocialLink,
		removeSocialLink,
	} = useDetails();

	const handleAddSkill = () => {
		addSkill(currentSkill.name, currentSkill.efficiency);
		setCurrentSkill({ name: "", efficiency: "" });
	};

	const handleAddHobbie = () => {
		addHobbie(currentHobbie);
		setCurrentHobbie("");
	};

	const handleAddSocialLinks = () => {
		addSocialLink(currentSocailLink.name, currentSocailLink.link);
		setCurrentSocialLink({ name: "", link: "" });
	};

	return (
		<motion.div
			variants={fadeIn(0.75)}
			initial='initial'
			whileInView='animate'
			className='max-w-7xl mx-auto py-5 px-2 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-5'>
			<Sidebar />
			<div className='text-3xl md:text-5xl font-bold py-10 mt-10 col-span-full font-serif text-gray-800 tracking-tighte text-center'>
				Start creating your CV!
			</div>

			<GeneralDetails />

			<CustomHeading>Work Experience</CustomHeading>

			{workExperience.map((work, index) => (
				<WorkExperience
					key={work.id}
					{...work}
					index={index}
				/>
			))}

			<button
				className='rounded-lg flex justify-center items-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => addWorkExperience()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Work Experience
			</button>

			<CustomHeading>Education Details</CustomHeading>

			{education.map((edu, idx) => (
				<Education
					key={edu.id}
					{...edu}
					index={idx}
				/>
			))}

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => addEducation()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Education
			</button>

			<CustomHeading>Skills</CustomHeading>

			<div className='col-span-full rounded-md border border-orange-400 px-4 py-3 flex gap-3 flex-wrap'>
				{skills.length ? (
					skills.map((skill) => (
						<span
							className='bg-gray-200 rounded-md p-2 relative group'
							key={skill.id}>
							{skill.name} : {skill.efficiency}
							<MdCancel
								onClick={() => removeSkill(skill.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div className='font-medium w-full text-center text-gray-500'>No skills added...</div>
				)}
			</div>
			<input
				type='text'
				name='skills'
				value={currentSkill.name}
				onChange={(e) => setCurrentSkill((prev) => ({ ...prev, name: e.target.value }))}
				placeholder='type a skill'
				id='skillName'
				className='px-3 py-2 rounded-md focus:outline-none focus:border-orange-600 bg-gray-50 border placeholder:text-gray-400 col-span-3'
			/>
			<select
				name='efficiency'
				value={currentSkill.efficiency}
				onChange={(e) => setCurrentSkill((prev) => ({ ...prev, efficiency: e.target.value }))}
				className='px-3 py-2 rounded-md focus:outline-none focus:border-orange-600 bg-gray-50 border placeholder:text-gray-400 col-span-2 md:col-span-3'>
				<option value='none'>Select Level</option>
				<option value='biggner'>Biggner</option>
				<option value='intermediate'>Intermediate</option>
				<option value='advance'>Advance</option>
				<option value='pro'>Pro</option>
			</select>
			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleAddSkill()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Skill
			</button>

			<CustomHeading>Hobbies</CustomHeading>

			<div className='col-span-full rounded-md border border-orange-400 px-4 py-3 flex gap-3 flex-wrap'>
				{hobbies.length ? (
					hobbies.map((hobbie) => (
						<span
							className='bg-gray-200 rounded-md p-2 relative group'
							key={hobbie.id}>
							{hobbie.name}
							<MdCancel
								onClick={() => removeHobbie(hobbie.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div className='font-medium w-full text-center text-gray-500'>No hobbies added...</div>
				)}
			</div>
			<input
				type='text'
				name='hobbie'
				value={currentHobbie}
				onChange={(e) => setCurrentHobbie(e.target.value)}
				placeholder='type a hobbie'
				id='hobbie'
				className='px-3 py-2 rounded-md focus:outline-none focus:border-orange-600 bg-gray-50 border placeholder:text-gray-400 col-span-3'
			/>

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleAddHobbie()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Hobbie
			</button>

			<CustomHeading>Social</CustomHeading>

			<div className='col-span-full rounded-md border border-orange-400 px-4 py-3 flex gap-3 flex-wrap'>
				{socialLinks.length ? (
					socialLinks.map((social) => (
						<span
							className='bg-gray-200 rounded-md p-2 relative group flex flex-col gap-1'
							key={social.id}>
							<span className='font-medium'>{social.name}</span>
							<span>{social.link}</span>
							<MdCancel
								onClick={() => removeSocialLink(social.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div className='font-medium w-full text-center text-gray-500'>No social links added...</div>
				)}
			</div>
			<input
				type='text'
				placeholder='type name'
				value={currentSocailLink.name}
				onChange={(e) => setCurrentSocialLink((prev) => ({ ...prev, name: e.target.value }))}
				className='py-2 px-5 rounded-md border focus:border-orange-400 bg-gray-50 focus:outline-none col-span-full md:col-span-3'
			/>
			<input
				type='text'
				placeholder='enter link'
				value={currentSocailLink.link}
				onChange={(e) => setCurrentSocialLink((prev) => ({ ...prev, link: e.target.value }))}
				className='py-2 px-5 rounded-md border focus:border-orange-400 bg-gray-50 focus:outline-none col-span-full md:col-span-3'
			/>

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleAddSocialLinks()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Link
			</button>

			<div className='col-span-full flex items-center justify-center py-6'>
				<Save />
			</div>
		</motion.div>
	);
}

export default CreateCv;

const CustomHeading = ({ children }) => {
	return (
		<motion.h1
			variants={slideIn("down", 1, 0.3)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='col-span-full text-3xl font-bold text-center underline py-10 text-gray-900 font-serif'>
			{children}
		</motion.h1>
	);
};
