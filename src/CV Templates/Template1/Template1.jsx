const Template1 = ({ name, jobTitle, phoneNumber, email, address, about, workExperience, education, skills, hobbies, socialLinks, languages }) => {
	return (
		<>
			{/* cv 1  */}
			<div className='w-[210mm] min-h-[297mm] h-full relative overflow-hidden p-6'>
				{/* backgrounds  */}
				<div className='absolute inset-0 bg-yellow-300 z-[-1]'></div>
				<div className='absolute inset-0 bg-yellow-600 left-[30%] z-[-1]'></div>

				<main className='bg-white w-full min-h-full p-5 grid grid-cols-3 place-content-start gap-5'>
					<section className='flex items-end h-[200px] col-span-full'>
						<div className='flex items-center justify-start w-1/3'>
							<img
								className='w-44 object-cover'
								src={"https://connectkaro.org/wp-content/uploads/2019/03/placeholder-profile-male-500x500.png"}
								alt=''
							/>
						</div>
						<div className='flex flex-col gap-2 items-start h-full pt-10'>
							<h1 className='uppercase font-bold text-4xl tracking-wider'>{name}</h1>
							<h1 className='font-medium tracking-wider text-xl'>{jobTitle}</h1>
							<div className='bg-yellow-300 w-16 h-[5px]'></div>
						</div>
					</section>

					<section className='col-span-1 flex flex-col gap-6'>
						{/* contact  */}
						<div className='flex flex-col gap-1 text-sm font-medium'>
							<BoldHeading text='Contact' />
							<span>{address}</span>
							<span className='text-sm'>
								<span>Mobile : </span>
								{phoneNumber}
							</span>
							<span>{email}</span>
						</div>
						{/* skills  */}
						<div className='flex flex-col gap-3 font-medium text-sm'>
							<BoldHeading text='Skills' />
							<ul className='pl-6'>
								{skills.map((skill) => (
									<li
										className='list-disc'
										key={skill.name}>
										{skill.name}
									</li>
								))}
							</ul>
						</div>
						{/* education  */}
						<div className='flex flex-col gap-3'>
							<BoldHeading text='Education' />
							{education.map((edu, i) => (
								<div
									key={i}
									className='font-medium text-sm'>
									<div>
										<span>{edu.startDate}</span>/<span>{edu.endDate}</span>
									</div>
									<div className='font-semibold'>{edu.course}</div>
									<div>{edu.institute}</div>
									<div>{edu.detail}</div>
								</div>
							))}
						</div>
						{/* Languages  */}
						{languages && (
							<div className='flex flex-col gap-3'>
								<BoldHeading text='Languages' />
								<div className='flex flex-col gap-2 text-xs'>
									{languages.map((lang) => (
										<div
											className='font-semibold'
											key={lang.name}>
											{lang.name} : <span className='font-medium'>{lang.efficiency}</span>
										</div>
									))}
								</div>
							</div>
						)}
						{/* hobbies */}
						{hobbies && (
							<div className='flex flex-col gap-3'>
								<BoldHeading text='Hobbies' />
								<ul className='flex flex-col gap-1 text-xs pl-5'>
									{hobbies.map((hobbie) => (
										<li
											className='font-medium list-disc'
											key={hobbie.name}>
											{hobbie.name}
										</li>
									))}
								</ul>
							</div>
						)}
					</section>

					{/* section divider  */}

					<section className='col-span-2 flex flex-col relative'>
						{/* details  */}
						<div className='absolute h-[90%] w-[3px] bg-gray-800 top-0 left-0'></div>
						<div className='flex flex-col gap-4 pl-8'>
							<div className='flex flex-col gap-2'>
								<BoldHeading text='professional summary' />
								<p className='text-sm font-medium'>{about}</p>
							</div>

							<div className='flex flex-col gap-2'>
								<BoldHeading text='work history' />
								{workExperience.map((work, i) => (
									<Work
										key={i}
										{...work}
									/>
								))}
							</div>
						</div>
					</section>
				</main>
			</div>

			{/* cv 1 */}
		</>
	);
};

export default Template1;

const BoldHeading = ({ text }) => {
	return (
		<h2 className='text-lg font-bold uppercase'>
			{text} <div className='w-10 h-[4px] bg-yellow-300'></div>
		</h2>
	);
};

const Work = ({ startDate, endDate, company, role, location, jobDescription }) => {
	return (
		<div className='text-[13px] py-2'>
			<div className='font-medium underline underline-offset-4'>{startDate + "-" + endDate}</div>
			<div className='font-bold flex gap-2'>
				{role},
				<span className='font-medium'>
					{company},{location}
				</span>
			</div>
			<p>{jobDescription}</p>
		</div>
	);
};
