import { skills, education, workHistory, languages, hobbies } from "../dummyData";
import { FaPhoneAlt, FaMapMarkedAlt, FaGlobe, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Template3() {
	const Heading = ({ text }) => {
		return <h2 className='font-semibold text-2xl'>{text}</h2>;
	};
	return (
		<main className='w-[210mm] min-h-[297mm] relative overflow-hidden grid grid-cols-7 grid-rows-6 border-2'>
			<section className='row-span-1 col-span-4 border-b-[4px] border-b-yellow-500 flex flex-col gap-0.5 tracking-wider justify-center pl-14'>
				<h1 className='font-semibold text-4xl'>Cirsten jobs</h1>
				<span className='font-thin text-2xl'>Engineer</span>
			</section>
			<section className='row-span-1 col-span-4 border-b-[4px] border-b-yellow-500 flex flex-col gap-0.5 py-2 tracking-wider justify-center pl-14'>
				<Heading text='Profile' />
				<p className='font-thin text-sm pr-2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi magni recusandae tempore obcaecati tempora earum aspernatur corporis facere ad
					sequi quae ipsum dicta ducimus tenetur, natus praesentium exercitationem illum dolor?
				</p>
			</section>
			<section className='bg-yellow-500 col-span-3 row-span-2 row-start-[1] col-start-5 flex justify-center items-center'>
				<img
					className='aspect-square rounded-full h-[60%] object-cover object-center'
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				/>
			</section>

			<section className='flex flex-col gap-4 pl-14 pr-3 py-10 row-span-4 col-span-4 border-r-[4px] border-r-yellow-500'>
				<Heading text='Experience' />
				{workHistory.map((work, i) => (
					<ExperienceElement key={i} {...work} />
				))}
			</section>

			{/* right side */}
			<section className='col-span-3 row-span-4 py-10 px-6 flex flex-col gap-4'>
				<div className='grid grid-cols-2 gap-y-4'>
					<span className='col-span-full mb-4'>
						<Heading text='Education' />
					</span>
					{education.map((e, i) => (
						<EducationElement key={i} {...e} />
					))}
				</div>

				<div className='flex flex-col gap-4'>
					<Heading text='Skills' />
					<ul className='flex flex-col pl-8 gap-1'>
						{skills.map((s, i) => (
							<li className='list-disc' key={i}>
								{s.name}
							</li>
						))}
					</ul>
				</div>

				<div className='flex flex-col gap-4'>
					<span>
						<Heading text='Contact' />
					</span>
					<div className='flex flex-col gap-3'>
						<ConatctElement contact='(+01)555-555-555' Icon={FaPhoneAlt} />
						<ConatctElement contact='exapmple@example.com' Icon={MdEmail} />
						<ConatctElement contact='Rawalpindi, Pakistan' Icon={FaMapMarkedAlt} />
						<ConatctElement contact='www.example.com' Icon={FaGlobe} />
						<ConatctElement contact='linkedin/kaal123' Icon={FaLinkedin} />
					</div>
				</div>

				<div className='flex flex-col gap-4'>
					<Heading text='Interests' />
					<ul className='flex flex-col pl-8 gap-1'>
						{hobbies.map((h, i) => (
							<li className='list-disc' key={i}>
								{h}
							</li>
						))}
					</ul>
				</div>
				<div className='flex flex-col gap-4'>
					<Heading text='Languages' />
					<ul className='flex flex-col pl-8 gap-1'>
						{languages.map((l, i) => (
							<li className='list-disc' key={i}>
								{l.name}
							</li>
						))}
					</ul>
				</div>
			</section>
		</main>
	);
}

export default Template3;

const ExperienceElement = ({ startDate, endDate, role, company, location, detail }) => {
	return (
		<div className='flex flex-col gap-0.5 font-semibold text-md'>
			<h1>
				{role}/{company}
			</h1>
			<h1>{location}</h1>
			<h1>
				{startDate}-{endDate}
			</h1>
			<p className='font-medium text-sm'>{detail}</p>
		</div>
	);
};

const EducationElement = ({ course, institute, startDate, endDate }) => {
	return (
		<div className='flex flex-col gap-0.5 col-span-1'>
			<span className='text-md font-semibold '>{institute}</span>
			<span className='text-md font-semibold '>
				{startDate}-{endDate}
			</span>
			<span className='text-sm font-medium'>{course}</span>
		</div>
	);
};

const ConatctElement = ({ Icon, contact }) => {
	return (
		<div className='flex justify-between items-center'>
			<Icon className='text-xl' />
			<span>{contact}</span>
		</div>
	);
};
