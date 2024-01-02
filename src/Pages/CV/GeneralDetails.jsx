import React from "react";
import { useDetails } from "../../store/details";
import { inputClasses } from "../../utils/styles";
import CustomLabel from "./CustomLabel";

function GeneralDetails() {
	const { setDetails, name, email, phoneNumber, address, jobTitle, about } = useDetails();

	function handleChange(e) {
		const { name, value } = e.target;
		setDetails(name, value);
	}

	return (
		<>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<CustomLabel target='name'>Name</CustomLabel>
				<input
					type='text'
					value={name}
					onChange={(e) => handleChange(e)}
					name='name'
					id='name'
					placeholder='name'
					className={inputClasses}
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<CustomLabel target='jobTitle'>Job Title</CustomLabel>
				<input
					type='text'
					value={jobTitle}
					onChange={(e) => handleChange(e)}
					name='jobTitle'
					id='jobTitle'
					placeholder='Job title'
					className={inputClasses}
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<CustomLabel target='phoneNumber'>Phone</CustomLabel>
				<input
					type='phone'
					value={phoneNumber}
					onChange={(e) => handleChange(e)}
					name='phoneNumber'
					id='phoneNumber'
					placeholder='Phone number'
					className={inputClasses}
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-full md:col-span-2'>
				<CustomLabel target='email'>Email</CustomLabel>
				<input
					type='email'
					value={email}
					onChange={(e) => handleChange(e)}
					name='email'
					id='email'
					placeholder='Email'
					className={inputClasses}
				/>
			</div>
			<div className='flex flex-col gap-2 col-span-4'>
				<CustomLabel target='address'>Address</CustomLabel>
				<input
					type='address'
					value={address}
					onChange={(e) => handleChange(e)}
					name='address'
					id='address'
					placeholder='Address'
					className={inputClasses}
				/>
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<CustomLabel target='about'>About/Objective</CustomLabel>
				<textarea
					name='about'
					value={about}
					onChange={(e) => handleChange(e)}
					cols='30'
					id='about'
					rows='10'
					className={inputClasses}
					placeholder='tell us about yourself...'></textarea>
			</div>
		</>
	);
}

export default GeneralDetails;
