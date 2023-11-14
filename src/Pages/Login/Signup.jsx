import React from "react";
import { Link } from "react-router-dom";

function Signup() {
	return (
		<div className='max-w-7xl mx-auto py-10 flex flex-col gap-10 justify-center items-center'>
			<form className='flex flex-col gap-10 rounded-xl px-4 py-8 border-2'>
				<h1 className='text-4xl font-medium text-center'>Signup</h1>

				<div className='flex flex-col gap-2 max-w-4xl md:w-[35rem] w-[300px]'>
					<label htmlFor='username' className='font-medium px-1 text-lg'>
						Username
					</label>
					<input type='text' name='username' placeholder='username' className='border p-2 rounded-md focus:bg-orange-50' />
				</div>
				<div className='flex flex-col gap-2 max-w-4xl md:w-[35rem] w-[300px]'>
					<label htmlFor='email' className='font-medium px-1 text-lg'>
						Email
					</label>
					<input type='text' name='email' placeholder='email' className='border p-2 rounded-md focus:bg-orange-50' />
				</div>
				<div className='flex flex-col gap-2 max-w-4xl md:w-[35rem] w-[300px]'>
					<label htmlFor='password' className='font-medium px-1 text-lg'>
						Password
					</label>
					<input type='password' name='password' placeholder='password' className='border p-2 rounded-md focus:bg-orange-50' />
				</div>

				<button className='w-full bg-orange-500 text-white font-medium p-2 rounded-md hover:bg-orange-600 hover:scale-[1.02] transition-all duration-500'>
					Signup
				</button>
			</form>

			<div className='px-5 text-sm font-medium text-center'>
				Already have an account?{" "}
				<Link className='underline text-sky-500' to='/login'>
					Login here
				</Link>
			</div>
		</div>
	);
}

export default Signup;
