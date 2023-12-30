import React from "react";

const Template6 = ({
	name,
	jobTitle,
	phoneNumber,
	email,
	address,
	about,
	workExperience,
	education,
	skills,
	hobbies,
	socialLinks,
	languages,
	references,
}) => {
	return (
		<main className='w-[210mm] min-h-[297mm] relative overflow-hidden grid grid-cols-8 border'>
			<section className='col-span-3 bg-gray-800 text-white flex flex-col gap-5'>
				<div>
					<img
						src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
						alt=''
						className='max-w-full object-cover object-center'
					/>
				</div>

				<div className='flex flex-col gap-2 pl-5'>
					<Heading
						text='Education'
						border='yellow'
						bold
					/>

					<div className='flex flex-col gap-3 pr-5'>
						{education.map((e, i) => (
							<EducationElement
								key={i}
								{...e}
							/>
						))}
					</div>
				</div>
				{references && (
					<div className='flex flex-col gap-2 pl-5'>
						<Heading
							text='Reference'
							bold
							border='yellow'
						/>

						<div className='flex flex-col gap-3 pl-6'>
							{refrences.map((r, i) => (
								<ReferenceElement
									key={i}
									{...r}
								/>
							))}
						</div>
					</div>
				)}

				<div className='flex flex-col gap-2'>
					<ContactElement
						name='Phone'
						contact={phoneNumber}
					/>
					<ContactElement
						name='Email'
						contact={email}
					/>
					<ContactElement
						name='website'
						contact='www.example.com'
					/>
				</div>
			</section>

			<section className='flex flex-col gap-6 col-span-5'>
				<div className='bg-yellow-500 uppercase text-black pl-12 py-10 mt-20'>
					<h1 className='font-bold text-4xl tracking-wider'>
						{name.split(" ")[0]} <span className='font-normal'>{name.split(" ")[1]}</span>
					</h1>
					<p className='tracking-widest font-normal'>{jobTitle}</p>
				</div>

				<div className='flex flex-col gap-3 pl-10 pr-3 pt-5'>
					<Heading text='About me' />
					<Paragraph>{about}</Paragraph>
				</div>
				<div className='flex flex-col gap-3 pl-10 pr-3'>
					<Heading text='work experience' />
					{workExperience.map((w, i) => (
						<WorkElement
							key={i}
							{...w}
						/>
					))}
				</div>

				<div className='flex flex-col gap-3 pl-10 pr-3 py-5'>
					<Heading text='skills' />

					<div className='grid grid-cols-2 gap-3 pl-24'>
						{skills.map((s, i) => (
							<SkillElement
								key={i}
								{...s}
							/>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Template6;

const Heading = ({ text, bold, border }) => {
	return (
		<h1
			className={`text-xl uppercase border-b-2 pb-2 ${border === "yellow" ? "border-yellow-400" : "border-gray-800"} ${
				bold ? "font-bold" : "font-medium"
			}`}>
			{text}
		</h1>
	);
};

const Paragraph = ({ children }) => {
	return <p className='text-sm font-medium text-justify'>{children}</p>;
};

const EducationElement = ({ startDate, endDate, course, location, institute, detail }) => {
	return (
		<div className='flex flex-col gap-1 capitalize'>
			<h1 className='font-bold text-sm'>{course}</h1>
			<p className='text-xs font-medium'>{institute}</p>
			<p className='text-xs font-medium'>{location}</p>
			<div className='text-xs font-medium'>
				{startDate}-{endDate}
			</div>
			<p className='text-xs normal-case'>{detail}</p>
		</div>
	);
};
const ReferenceElement = ({ name, designation, company, contact }) => {
	return (
		<div className='flex flex-col gap-1'>
			<h1 className='font-bold text-sm'>{name}</h1>
			<p className='text-xs font-medium'>
				{designation} | {company}
			</p>
			<div className='text-xs font-medium'>T : {contact}</div>
		</div>
	);
};

const ContactElement = ({ name, contact }) => {
	return (
		<div className='flex'>
			<div className='bg-yellow-400 h-6 w-14'></div>
			<div className='flex flex-col gap-0.5 w-full'>
				<span className='font-bold capitalize text-sm bg-gray-500 h-6'>{name}</span>
				<span className='font-medium text-xs text-gray-200'>{contact}</span>
			</div>
		</div>
	);
};

const WorkElement = ({ role, location, startDate, endDate, company, jobDescription }) => {
	return (
		<div className='grid grid-cols-6 gap-2 capitalize'>
			<span className='text-xs col-span-2'>
				{startDate} -{endDate}
			</span>

			<div className='flex flex-col gap-1 col-span-4'>
				<h1 className='text-sm font-semibold'>{role}</h1>
				<p className='text-xs font-medium'>
					{company}
					{location && "/" + location}
				</p>
				<p className='text-xs text-justify normal-case'>{jobDescription}</p>
			</div>
		</div>
	);
};

const SkillElement = ({ name, efficiency }) => {
	const width = efficiency === "biggner" ? "30%" : efficiency === "intermediate" ? "60%" : efficiency === "advance" ? "75%" : "87%";
	return (
		<div className='flex flex-col gap-3 col-span-1 capitalize'>
			<h1 className='text-sm font-medium'>{name}</h1>

			<div className='w-full h-[4px] bg-gray-400'>
				<div
					className='bg-gray-700 h-full'
					style={{ width: width }}></div>
			</div>
		</div>
	);
};
