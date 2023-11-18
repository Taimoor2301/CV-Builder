import { skills, education, workHistory, languages, hobbies } from "../dummyData";
import { FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Template4() {
	return (
		<main className='w-[210mm] min-h-[297mm] relative overflow-hidden flex flex-col gap-5 border-2 pb-20'>
			<div className='bg-blue-900 text-white flex justify-between'>
				<div className='flex-1 pl-10 flex flex-col justify-center'>
					<h1 className='capitalize text-4xl font-bold'>Ayesha Jones</h1>
					<p className='underline underline-offset-2 font-semibold text-xl'>Student</p>
				</div>

				<img
					className='h-[200px] object-cover object-center'
					src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
				/>
			</div>

			<div className='flex justify-center items-center py-2 gap-6'>
				<ConatctElement contact='+92555-55-555' Icon={FaPhoneAlt} />
				<ConatctElement contact='example@exampple.com' Icon={MdEmail} />
				<ConatctElement contact='Rawalpindi, Pakistan' Icon={FaMapMarkedAlt} />
			</div>

			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='Professional profile' />

				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa repudiandae distinctio tenetur odit inventore quasi, delectus tempore velit
					nostrum dignissimos excepturi enim accusantium. Quidem unde perferendis consequatur vitae maiores velit? Accusamus aliquid libero quisquam
					autem porro, adipisci corporis nobis nesciunt! Soluta recusandae tempore, aliquid ab quos necessitatibus maxime atque accusantium.
				</p>
			</div>
			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='Core skills' />

				<ul className='grid grid-cols-2 px-12'>
					{skills.map((s, i) => (
						<li key={i} className='list-disc font-medium col-span-1'>
							{s.name}
						</li>
					))}
				</ul>
			</div>

			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='education' />
				<ul className='flex flex-col gap-2 pl-10'>
					{education.map((e, i) => (
						<li key={i} className='list-disc'>
							<EducationElement {...e} />
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='career summary' />
				<ul className='flex flex-col gap-2 pl-10'>
					{workHistory.map((w, i) => (
						<li key={i} className='list-disc'>
							<WorkElememnt {...w} />
						</li>
					))}
				</ul>
			</div>

			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='languages' />

				<ul className='grid grid-cols-2 px-12'>
					{languages.map((l, i) => (
						<li key={i} className='list-disc font-medium col-span-1'>
							{l.name}
						</li>
					))}
				</ul>
			</div>
			<div className='flex flex-col gap-4 mx-auto w-[90%]'>
				<Heading text='hobbies' />

				<ul className='grid grid-cols-2 px-12'>
					{hobbies.map((h, i) => (
						<li key={i} className='list-disc font-medium col-span-1'>
							{h}
						</li>
					))}
				</ul>
			</div>
		</main>
	);
}

export default Template4;

const ConatctElement = ({ Icon, contact }) => {
	return (
		<div className='font-bold flex items-center gap-0.5'>
			<Icon />
			<span>{contact}</span>
		</div>
	);
};

const Heading = ({ text }) => {
	return <h1 className='capitalize px-1 py-0.5 bg-black text-white font-bold w-max'>{text}</h1>;
};

const EducationElement = ({ course, institute, startDate, endDate, details, location }) => {
	return (
		<div className='flex flex-col gap-1'>
			<h1 className='font-medium'>
				<span className='font-bold'>{course}</span> | {institute} | {startDate} - {endDate} | {location}
			</h1>

			<p>{details}</p>
		</div>
	);
};

const WorkElememnt = ({ role, company, location, startDate, endDate, detail }) => {
	return (
		<div className='flex flex-col gap-2'>
			<div className='flex gap-20 font-bold'>
				<span>
					{startDate} - {endDate}
				</span>

				<div className='flex flex-col'>
					<span>
						{company} - {location}
					</span>
					<span>{role}</span>
				</div>
			</div>

			<p>{detail}</p>
		</div>
	);
};
