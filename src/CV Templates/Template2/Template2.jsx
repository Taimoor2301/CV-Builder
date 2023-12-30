import { HiChatBubbleBottomCenterText, HiAcademicCap } from "react-icons/hi2";
import { ImLab } from "react-icons/im";
import { IoPerson } from "react-icons/io5";
import { MdOutlineLocationOn, MdDateRange, MdOutlineWork, MdOutlineInterests } from "react-icons/md";
import { CgDanger } from "react-icons/cg";
const Template2 = ({ name, jobTitle, phoneNumber, email, address, about, workExperience, education, skills, hobbies, socialLinks, languages }) => {
	return (
		<div className='w-[210mm] min-h-[297mm] relative overflow-hidden p-6 grid grid-cols-2 gap-3 border'>
			<section className='col-span-full pl-4'>
				<div className='py-3'>
					<h1 className='text-4xl'>{name}</h1>
					<h1>{jobTitle}</h1>
				</div>
				<div className='flex justify-between items-center text-xs'>
					<div>
						<div className='font-semibold'>
							Phone Number: <span className='font-medium'>{phoneNumber}</span>
						</div>
						<div className='font-semibold'>
							Email Address: <span className='font-medium'>{email}</span>
						</div>
						<div className='font-semibold'>
							Location: <span className='font-medium'>{address}</span>
						</div>
						<div className='font-semibold'>
							Website: <span className='font-medium'>www.example.com</span>
						</div>
					</div>

					<HiChatBubbleBottomCenterText className='text-orange-200 text-7xl' />
				</div>
			</section>

			<section className='col-span-1 flex flex-col gap-7'>
				<div className='flex flex-col gap-2'>
					<IconHeading
						text='Profile'
						Icon={IoPerson}
					/>
					<p className='text-[13px] tracking-wide font-medium pl-5'>{about}</p>
				</div>

				<div className='flex flex-col gap-2'>
					<IconHeading
						text='Skills'
						Icon={ImLab}
					/>

					<div className='pl-5 flex gap-5 flex-col'>
						{languages && (
							<div className='flex flex-col gap-1'>
								<h1 className='font-semibold text-[15px] flex items-center gap-1'>
									<CgDanger />
									Languages
								</h1>
								{languages.map((lang) => (
									<Language
										key={lang.name}
										{...lang}
									/>
								))}
							</div>
						)}
						<div className='flex flex-col gap-1'>
							<h1 className='font-semibold text-[15px] flex items-center gap-1'>
								<CgDanger />
								Skills
							</h1>
							{skills.map((skill) => (
								<Skill
									key={skill.name}
									{...skill}
								/>
							))}
						</div>
					</div>
				</div>

				<div>
					<IconHeading
						text='Education'
						Icon={HiAcademicCap}
					/>
					<div className='flex flex-col gap-5 pt-5 pl-5'>
						{education.map((edu, i) => (
							<Education
								key={i}
								{...edu}
							/>
						))}
					</div>
				</div>
			</section>

			<section className='col-span-1 flex flex-col gap-7'>
				{/* {education.length > 2 && (
					<div>
						<IconHeading text='Education' variant='dark' Icon={HiAcademicCap} />
						<div className='flex flex-col gap-5 pt-5 pl-5'>
							{education.slice(2).map((edu) => (
								<Education key={edu.course} {...edu} />
							))}
						</div>
					</div>
				)} */}

				<div>
					<IconHeading
						text='Work History'
						variant='dark'
						Icon={MdOutlineWork}
					/>
					<div className='flex flex-col gap-5 pt-5 pl-5'>
						{workExperience.map((work, i) => (
							<Work
								key={i}
								{...work}
							/>
						))}
					</div>
				</div>

				<div>
					<IconHeading
						text='Hobbies'
						variant='dark'
						Icon={MdOutlineInterests}
					/>
					<div className='flex items-center py-5 font-medium gap-6 flex-wrap px-5'>
						{hobbies.map((hobbie, i) => (
							<span
								key={i}
								className='text-[13px]'>
								{hobbie.name}
							</span>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Template2;

const IconHeading = ({ Icon, text, variant = "light" }) => {
	return (
		<div className={`flex gap-2 items-center py-1 px-3 font-bold text-2xl rounded-xl ${variant === "dark" ? "bg-gray-400" : "bg-yellow-200"}`}>
			<Icon /> {text}
		</div>
	);
};

const Language = ({ name, efficiency }) => {
	return (
		<div className='grid grid-cols-2'>
			<h1 className='col-span-1 font-medium text-[13px]'>{name}</h1>
			<div className='col-span-1 flex items-center text-yellow-400 font-semibold'>{efficiency}</div>
		</div>
	);
};
const Skill = ({ name, efficiency }) => {
	const width = efficiency === "biggner" ? "30%" : efficiency === "intermediate" ? "60%" : efficiency === "advance" ? "75%" : "87%";
	return (
		<div className='grid grid-cols-2'>
			<h1 className='col-span-1 font-medium text-[13px]'>{name}</h1>

			<div className='col-span-1 flex items-center'>
				<div className='w-full h-[1px] bg-gray-400 flex items-center'>
					<div
						className='h-[4px] bg-yellow-300'
						style={{ width: width }}></div>
					<div className='w-4 bg-gray-700 rounded-full aspect-square'></div>
				</div>
			</div>
		</div>
	);
};

const Education = ({ startDate, endDate, course, institute, details, location }) => {
	return (
		<div className='flex flex-col gap-0.5'>
			<span className='flex items-center gap-2'>
				<MdDateRange />
				{startDate}-{endDate}
			</span>
			<span className='flex gap-2 items-center'>
				<MdOutlineLocationOn />
				{location}
			</span>

			<span className='flex gap-2 items-center font-semibold'>{course}</span>
			<span className='font-medium'>{institute}</span>

			<p className='text-[13px]'>{details}</p>
		</div>
	);
};

const Work = ({ startDate, endDate, role, company, jobDescription, location }) => {
	return (
		<div className='flex flex-col gap-0.5'>
			<span className='flex items-center gap-2'>
				<MdDateRange />
				{startDate}-{endDate}
			</span>
			<span className='flex gap-2 items-center'>
				<MdOutlineLocationOn />
				{location}
			</span>

			<span className='flex gap-2 items-center font-semibold'>{role}</span>
			<span className='font-medium'>{company}</span>

			<p className='text-[13px]'>{jobDescription}</p>
		</div>
	);
};
