import { nanoid } from "nanoid";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import React, { useState } from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import GeneralDetails from "./GeneralDetails";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

function CreateCv() {
	const [workExperience, setWorkExperience] = useState([{ role: "", startDate: "", endDate: "", comapany: "", jobDescription: "", id: nanoid() }]);
	const handelWorkExperience = (action, id) => {
		if (action === "add")
			setWorkExperience((prev) => [...prev, { role: "", startDate: "", endDate: "", comapany: "", jobDescription: "", id: nanoid() }]);
		else if (action === "delete") {
			setWorkExperience((prev) => prev.filter((item) => item.id !== id));
		}
	};

	const [education, setEducation] = useState([{ course: "", startDate: "", endDate: "", institute: "", details: "", id: nanoid() }]);
	const handelEducation = (action, id) => {
		if (action === "add") setEducation((prev) => [...prev, { course: "", startDate: "", endDate: "", institite: "", details: "", id: nanoid() }]);
		else if (action === "delete") {
			setEducation((prev) => prev.filter((item) => item.id !== id));
		}
	};

	const [skills, setSkills] = useState([]);
	const handleSkills = (action, id) => {
		if (action === "add") {
			const input = document.getElementById("skillName");
			const status = document.getElementById("skillStatus");
			setSkills((prev) => [...prev, { name: input.value, status: status.value, id: nanoid() }]);
		} else if (action === "remove") setSkills((prev) => prev.filter((skill) => skill.id !== id));
	};

	const [hobbies, setHobbies] = useState([]);
	const handleHobies = (action, id) => {
		if (action === "add") {
			const input = document.getElementById("hobbie");
			setHobbies((prev) => [...prev, { name: input.value, id: nanoid() }]);
		} else if (action === "remove") setHobbies((prev) => prev.filter((hobbie) => hobbie.id !== id));
	};

	const [social, SetSocial] = useState([]);
	const handleSocial = (action, id) => {
		if (action === "add") {
			const input = document.getElementById("socialName");
			const link = document.getElementById("socialLink");
			SetSocial((prev) => [...prev, { name: input.value, id: nanoid(), link: link.value }]);
		} else if (action === "remove") SetSocial((prev) => prev.filter((social) => social.id !== id));
	};

	return (
		<div className='max-w-7xl mx-auto py-5 grid grid-cols-8 gap-5'>
			<Sidebar />
			<h1 className='text-center text-5xl font-bold py-10 m-5 col-span-full'>Start making your CV</h1>

			<GeneralDetails />

			<h1 className='col-span-full text-3xl font-bold text-center underline py-10'>Work Experience</h1>

			{workExperience.map((work, index) => (
				<WorkExperience key={work.id} {...work} index={index} handelWorkExperience={handelWorkExperience} />
			))}

			<button
				className='rounded-lg flex justify-center items-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handelWorkExperience("add")}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Work Experience
			</button>

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Education Details</h1>

			{education.map((edu, idx) => (
				<Education key={edu.id} {...edu} index={idx} handelEducation={handelEducation} />
			))}

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handelEducation("add")}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Education
			</button>

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Skills</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
				{skills.length ? (
					skills.map((skill) => (
						<span className='bg-gray-200 rounded-md p-2 relative group' key={skill.id}>
							{skill.name} : {skill.status}
							<MdCancel
								onClick={() => handleSkills("remove", skill.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div>No skills added...</div>
				)}
			</div>
			<input type='text' name='skills' placeholder='type a skill' id='skillName' className='py-2 px-5 rounded-xl border col-span-3' />
			<select name='skillStatus' id='skillStatus' className='p-2 rounded-xl border col-span-2'>
				<option value='none'>Select Level</option>
				<option value='biggner'>Biggner</option>
				<option value='intermediate'>Intermediate</option>
				<option value='advance'>Advance</option>
				<option value='pro'>Pro</option>
			</select>
			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleSkills("add")}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Skill
			</button>

			<h1 className='col-span-full underline text-3xl font-bold text-center py-10'>Hobbies</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
				{hobbies.length ? (
					hobbies.map((hobbie) => (
						<span className='bg-gray-200 rounded-md p-2 relative group' key={hobbie.id}>
							{hobbie.name}
							<MdCancel
								onClick={() => handleHobies("remove", hobbie.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div>No hobbies added...</div>
				)}
			</div>
			<input type='text' name='hobie' placeholder='type a hobbie' id='hobbie' className='py-2 px-5 rounded-xl border col-span-3' />

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleHobies("add")}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Hobbie
			</button>

			<h1 className='col-span-full text-3xl font-bold text-center py-10 underline'>Social Links</h1>

			<div className='col-span-full rounded-xl border px-4 py-5 flex gap-3 flex-wrap'>
				{social.length ? (
					social.map((social) => (
						<span className='bg-gray-200 rounded-md p-2 relative group flex flex-col gap-1' key={social.id}>
							<span className='font-medium'>{social.name}</span>
							<span>{social.link}</span>
							<MdCancel
								onClick={() => handleSocial("remove", social.id)}
								className='text-xl absolute text-red-500 top-[-5px] right-[-10px] opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-150 cursor-pointer'
							/>
						</span>
					))
				) : (
					<div>No social links added...</div>
				)}
			</div>
			<input type='text' name='socialName' placeholder='type name' id='socialName' className='py-2 px-5 rounded-xl border col-span-3' />
			<input type='text' name='socialLink' placeholder='enter link' id='socialLink' className='py-2 px-5 rounded-xl border col-span-3' />

			<button
				className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-max'
				onClick={() => handleSocial("add")}>
				<AiOutlinePlusCircle className='text-2xl' /> Add Link
			</button>
		</div>
	);
}

export default CreateCv;
