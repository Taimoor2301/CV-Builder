import React from "react";
import { useDetails } from "../../store/details";

function GeneralDetails() {
	const setDetails = useDetails((details) => details.setDetails);
	const name = useDetails((d) => d.name);
	const email = useDetails((d) => d.email);
	const phoneNumber = useDetails((d) => d.phoneNumber);
	const address = useDetails((d) => d.address);
	const jobTitle = useDetails((d) => d.jobTitle);
	const about = useDetails((d) => d.about);

	function handleChange(e) {
		const { name, value } = e.target;

		setDetails(name, value);
	}
	return (
		<>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<label htmlFor='name' className='text-2xl font-medium'>
					Name
				</label>
				<input
					type='text'
					value={name}
					onChange={(e) => handleChange(e)}
					name='name'
					id='name'
					placeholder='name'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<label htmlFor='jobTitle' className='text-2xl font-medium'>
					Job Title
				</label>
				<input
					type='text'
					value={jobTitle}
					onChange={(e) => handleChange(e)}
					name='jobTitle'
					id='jobTitle'
					placeholder='Job title'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<label htmlFor='phoneNumber' className='text-2xl font-medium'>
					Phone Number
				</label>
				<input
					type='phone'
					value={phoneNumber}
					onChange={(e) => handleChange(e)}
					name='phoneNumber'
					id='phoneNumber'
					placeholder='Phone number'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<label htmlFor='email' className='text-2xl font-medium'>
					Email
				</label>
				<input
					type='email'
					value={email}
					onChange={(e) => handleChange(e)}
					name='email'
					id='email'
					placeholder='Email'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-4'>
				<label htmlFor='address' className='text-2xl font-medium'>
					Address
				</label>
				<input
					type='address'
					value={address}
					onChange={(e) => handleChange(e)}
					name='address'
					id='address'
					placeholder='Address'
					className='p-4 rounded-lg border-2'
				/>
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<label htmlFor='about' className='text-2xl font-medium'>
					Tell us about yourself
				</label>
				<textarea
					name='about'
					value={about}
					onChange={(e) => handleChange(e)}
					cols='30'
					id='about'
					rows='10'
					className='border-2 rounded-xl w-full p-4'
					placeholder='tell us about yourself...'></textarea>
			</div>
		</>
	);
}

export default GeneralDetails;
