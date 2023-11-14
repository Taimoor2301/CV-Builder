import React from "react";

function GeneralDetails() {
	return (
		<>
			<div className='flex flex-col gap-2 col-span-2'>
				<label htmlFor='name' className='text-2xl font-medium'>
					Name
				</label>
				<input type='text' name='name' placeholder='name' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex flex-col gap-2 col-span-2'>
				<label htmlFor='jobTitle' className='text-2xl font-medium'>
					Job Title
				</label>
				<input type='text' name='jobTitle' placeholder='Job title' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex flex-col gap-2 col-span-2'>
				<label htmlFor='phoneNumber' className='text-2xl font-medium'>
					Phone Number
				</label>
				<input type='number' name='phoneNumber' placeholder='Phone number' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex flex-col gap-2 col-span-2'>
				<label htmlFor='email' className='text-2xl font-medium'>
					Email
				</label>
				<input type='email' name='email' placeholder='Email' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex flex-col gap-2 col-span-4'>
				<label htmlFor='address' className='text-2xl font-medium'>
					Address
				</label>
				<input type='address' name='address' placeholder='Address' className='p-4 rounded-lg border-2' />
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<label htmlFor='about' className='text-2xl font-medium'>
					Tell us about yourself
				</label>
				<textarea name='about' cols='30' rows='10' className='border-2 rounded-xl w-full p-4' placeholder='tell us about yourself...'></textarea>
			</div>
		</>
	);
}

export default GeneralDetails;
