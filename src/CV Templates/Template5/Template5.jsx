import { FaPhoneAlt, FaMapMarkedAlt, FaGlobe, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import styles from "./template5.module.css";

const Template5 = ({ name, jobTitle, phoneNumber, email, address, about, workExperience, education, skills, hobbies, socialLinks, languages }) => {
	return (
		<main className={`w-[210mm] min-h-[297mm] relative overflow-hidden grid grid-cols-8 gap-y-10 px-4 pt-36 pb-20 border  ${styles.main}`}>
			<div className={styles.blueCircle}></div>

			<img
				src='https://img.freepik.com/premium-vector/dotted-simple-seamless-vector-pattern_547648-1241.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700092800&semt=ais'
				alt=''
				className='absolute top-0 left-0 w-full h-[100px] opacity-25 object-cover scale-75 object-center z-[-100]'
			/>

			<section className='col-span-3 pl-1'>
				<h1 className='text-3xl font-semibold'>{name}</h1>
				<p className='text-lg text-gray-500 font-medium'>{jobTitle}</p>
			</section>

			<section className='col-span-5 pl-16 flex flex-col'>
				<div className='flex flex-col gap-8 pr-10'>
					<div className='flex flex-col font-bold'>
						<span>{address}</span>
						<span>{phoneNumber}</span>
						<span>{email}</span>
					</div>
				</div>
			</section>

			<section className='col-span-3 flex flex-col gap-4'>
				<div className='py-5 flex flex-col gap-5 border-2 border-dotted border-l-0 border-r-0 border-gray-500'>
					<Heading text='About' />
					<p className='text-xs font-medium'>{about}</p>
				</div>

				<div className='flex flex-col gap-5'>
					<Heading text='Skills' />

					<ul className='flex flex-col gap-2.5'>
						{skills.map((s, i) => (
							<li
								key={i}
								className='list-disc text-sm flex justify-between'>
								<span className=''>{s.name}</span> <span className='font-bold'>{s.efficiency}</span>
							</li>
						))}
					</ul>
				</div>

				{languages && (
					<div className='py-5 flex flex-col gap-5 border-2 border-dotted border-l-0 border-r-0 border-gray-500'>
						<Heading text='Languages' />
						<ul className='flex flex-col gap-2.5'>
							{languages.map((l, i) => (
								<li
									key={i}
									className='list-disc text-sm flex justify-between'>
									<span className=''>{l.name}</span> <span className='font-bold'>{l.efficiency}</span>
								</li>
							))}
						</ul>
					</div>
				)}
				<div className='py-5 flex flex-col gap-5'>
					<Heading text='Interests' />
					<ul className='flex flex-col gap-2.5'>
						{hobbies.map((h, i) => (
							<li
								key={i}
								className='list-disc text-sm flex justify-between'>
								<span className=''>{h.name}</span>
							</li>
						))}
					</ul>
				</div>
			</section>

			<section className='col-span-5 pl-16'>
				<div className='py-5 flex flex-col gap-4 border-2 border-dotted border-l-0 border-r-0 border-gray-500'>
					<Heading text='Work Experience' />

					{workExperience.map((w, i) => (
						<WorkElement
							key={i}
							{...w}
						/>
					))}
				</div>
				<div className='py-5 flex flex-col gap-5'>
					<Heading text='Education' />

					{education.map((e, i) => (
						<EducationElement
							key={i}
							{...e}
						/>
					))}
				</div>
			</section>
		</main>
	);
};

export default Template5;

const Heading = ({ text }) => <h1 className='font-bold text-xl'>{text}</h1>;

const WorkElement = ({ role, company, startDate, endDate, location, jobDescription }) => {
	return (
		<div className='flex flex-col gap-1 capitalize'>
			<h1 className='font-bold text-sm'>{role}</h1>

			<h2 className='font-bold text-sm'>{company}</h2>

			<span className='font-medium text-sm text-gray-500'>
				{startDate} - {endDate}
			</span>

			<span className='text-gray-400 text-sm'>{location}</span>

			<p className='text-xs font-medium normal-case'>{jobDescription}</p>
		</div>
	);
};
const EducationElement = ({ course, institute, startDate, endDate, location, detail }) => {
	return (
		<div className='flex flex-col gap-0.5 capitalize'>
			<h1 className='font-bold text-sm'>{course}</h1>

			<h2 className='font-bold text-sm'>{institute}</h2>

			<span className='font-medium text-sm text-gray-500'>
				{startDate} - {endDate}
			</span>

			<span className='text-gray-400 text-sm'>{location}</span>

			<p className='text-xs font-medium normal-case'>{detail}</p>
		</div>
	);
};
