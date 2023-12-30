import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiSaveDown1 } from "react-icons/ci";
import { MdCancel } from "react-icons/md";
import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import GeneralDetails from "./GeneralDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import { useDetails } from "../../store/details";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";
import Save from "./Save";

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
		<div className='max-w-7xl mx-auto py-5 px-2 grid lg:grid-cols-8 md:grid-cols-6 grid-cols-4 gap-5'>
			<h1 className='text-center text-3xl md:text-5xl font-bold py-10 m-5 col-span-full'>Start making your CV</h1>

			<GeneralDetails />

			<h1 className='col-span-full text-3xl font-bold text-center underline py-10'>Work Experience</h1>

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

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Education Details</h1>

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

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Skills</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
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
					<div>No skills added...</div>
				)}
			</div>
			<input
				type='text'
				name='skills'
				value={currentSkill.name}
				onChange={(e) => setCurrentSkill((prev) => ({ ...prev, name: e.target.value }))}
				placeholder='type a skill'
				id='skillName'
				className='py-2 px-5 rounded-xl border col-span-3'
			/>
			<select
				name='efficiency'
				value={currentSkill.efficiency}
				onChange={(e) => setCurrentSkill((prev) => ({ ...prev, efficiency: e.target.value }))}
				className='p-2 rounded-xl border col-span-2 md:col-span-3'>
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

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Hobbies</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
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
					<div>No hobbies added...</div>
				)}
			</div>
			<input
				type='text'
				name='hobbie'
				value={currentHobbie}
				onChange={(e) => setCurrentHobbie(e.target.value)}
				placeholder='type a hobbie'
				id='hobbie'
				className='py-2 px-5 rounded-xl border md:col-span-3 col-span-full'
			/>

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleAddHobbie()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Hobbie
			</button>

			<h1 className='col-span-full text-3xl font-bold text-center py-10 underline'>Social Links</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
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
					<div>No social links added...</div>
				)}
			</div>
			<input
				type='text'
				placeholder='type name'
				value={currentSocailLink.name}
				onChange={(e) => setCurrentSocialLink((prev) => ({ ...prev, name: e.target.value }))}
				className='py-2 px-5 rounded-xl border col-span-full md:col-span-3'
			/>
			<input
				type='text'
				placeholder='enter link'
				value={currentSocailLink.link}
				onChange={(e) => setCurrentSocialLink((prev) => ({ ...prev, link: e.target.value }))}
				className='py-2 px-5 rounded-xl border col-span-full md:col-span-3'
			/>

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleAddSocialLinks()}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Link
			</button>

			<div className='col-span-full flex items-center justify-center py-6'>
				<Save />
			</div>
		</div>
	);
}

export default CreateCv;
