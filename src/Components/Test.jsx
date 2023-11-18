import React from "react";
import { useDetails } from "../store/details";

const Test = () => {
	const name = useDetails((d) => d.name);
	const email = useDetails((d) => d.email);
	const phoneNumber = useDetails((d) => d.phoneNumber);
	const address = useDetails((d) => d.address);
	const jobTitle = useDetails((d) => d.jobTitle);
	const about = useDetails((d) => d.about);
	const workHistory = useDetails((d) => d.workExperience);
	const edu = useDetails((d) => d.education);
	const skills = useDetails((d) => d.skills);
	const hobbies = useDetails((d) => d.hobbies);
	const socialLinks = useDetails((d) => d.socialLinks);

	return (
		<div className='flex gap-5 flex-col text-lg font-medium mx-auto max-w-7xl py-10'>
			<div>name : {name}</div>
			<div>email : {email}</div>
			<div>phoneNumber : {phoneNumber}</div>
			<div>address : {address}</div>
			<div>jobTitle : {jobTitle}</div>
			<div>about : {about}</div>

			{workHistory.map((h, i) => (
				<div key={i}>
					{h.role} , {h.company},{h.detail},{h.startDate}-{h.endDate}
				</div>
			))}
			{edu.map((h, i) => (
				<div key={i}>
					{h.institute} , {h.course},{h.detail},{h.startDate}-{h.endDate}
				</div>
			))}
			{skills.map((h, i) => (
				<div key={i}>
					{h.name} , {h.efficiency}
				</div>
			))}
			{hobbies.map((h, i) => (
				<div key={i}>{h.name}</div>
			))}
			{socialLinks.map((h, i) => (
				<div key={i}>
					{h.name} , {h.link}
				</div>
			))}
		</div>
	);
};

export default Test;
