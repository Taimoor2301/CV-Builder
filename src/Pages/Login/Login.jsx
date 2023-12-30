import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../utils/auth";
import { useAuthStore } from "../../store/authStore";

function Loging() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { isLoggedIn, setUser, setIsLoggedIn } = useAuthStore();
	const navigate = useNavigate();

	useEffect(() => {
		if (isLoggedIn) navigate("/");
	}, [isLoggedIn]);

	async function handleLogin(e) {
		e.preventDefault();
		const { user, error } = await login(email, password);
		if (user) {
			setIsLoggedIn(true);
			setUser(user);
		}
		if (error) console.log(error);
	}

	return (
		<div className='max-w-7xl mx-auto py-10 flex flex-col gap-10 justify-center items-center'>
			<form className='flex flex-col gap-10 rounded-xl px-4 py-8 border-2'>
				<h1 className='text-4xl font-medium text-center'>Login</h1>

				<div className='flex flex-col gap-2 max-w-4xl md:w-[35rem] w-[300px]'>
					<label
						htmlFor='email'
						className='font-medium px-1 text-lg'>
						Email
					</label>
					<input
						type='text'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder='email'
						className='border p-2 rounded-md focus:bg-orange-50'
					/>
				</div>
				<div className='flex flex-col gap-2 max-w-4xl md:w-[35rem] w-[300px]'>
					<label
						htmlFor='password'
						className='font-medium px-1 text-lg'>
						Password
					</label>
					<input
						type='password'
						name='password'
						value={password}
						placeholder='password'
						onChange={(e) => setPassword(e.target.value)}
						className='border p-2 rounded-md focus:bg-orange-50'
					/>
				</div>

				<button
					onClick={(e) => handleLogin(e)}
					className='w-full bg-orange-500 text-white font-medium p-2 rounded-md hover:bg-orange-600 hover:scale-[1.02] transition-all duration-500'>
					Login
				</button>
			</form>

			<div className='px-5 text-sm font-medium text-center'>
				Don't have an account?{" "}
				<Link
					className='underline text-sky-500'
					to='/signup'>
					Create account here
				</Link>
			</div>
		</div>
	);
}

export default Loging;
