import React, { useState } from "react";
import { RxDashboard, RxExit } from "react-icons/rx";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome, AiOutlineLogout, AiOutlinePlus, AiOutlineIdcard } from "react-icons/ai";
import { LuListTodo } from "react-icons/lu";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Dashoard() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen((prev) => !prev);

	return (
		<div
			className={`${
				open ? "w-[300px]" : "w-[60px]"
			} fixed left-0  gap-5 top-2 bottom-2 hidden xl:flex py-5 px-2 rounded-tr-lg rounded-br-lg border-2 border-zinc-300 flex-col justify-between items-start overflow-hidden z-[1000000000] bg-white transition-all duration-500`}>
			<Link
				to='/profile'
				className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'
				title='profile'>
				<CgProfile />{" "}
				<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} transition-all duration-500 text-lg font-medium`}>Profile</span>
			</Link>

			<div className='w-full flex text-sm flex-col justify-center items-start  gap-5'>
				<Link
					title='home'
					to='/'
					className='text-xl hover:bg-orange-100 flex items-center justify-start md:gap-20 gap-2  w-full rounded-lg p-2'>
					<AiOutlineHome />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} transition-all duration-500 text-lg font-medium`}>Home</span>
				</Link>
				<Link
					title='Create CV'
					to='/'
					className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'>
					<AiOutlinePlus />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} w-max transition-all duration-500 text-lg font-medium`}>
						Create a CV
					</span>
				</Link>
				<Link
					title='Recent'
					to='/'
					className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'>
					<LuListTodo />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} transition-all duration-500 text-lg font-medium`}>Recent</span>
				</Link>
				<Link
					title='Card Templates'
					to='/'
					className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'>
					<AiOutlineIdcard />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} w-max transition-all duration-500 text-lg font-medium`}>
						Card Templates
					</span>
				</Link>
				<Link
					title='Cover Letter'
					to='/'
					className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'>
					<RiPagesLine />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} w-max transition-all duration-500 text-lg font-medium`}>
						Cover Letter
					</span>
				</Link>

				<button
					title='Logout'
					className='text-xl hover:bg-orange-100 flex items-center justify-start gap-20 mx-auto w-full rounded-lg p-2'>
					<AiOutlineLogout />{" "}
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} w-max transition-all duration-500 text-lg font-medium`}>
						Logout
					</span>
				</button>
			</div>

			<div
				onClick={handleOpen}
				className='cursor-pointer text-xl hover:bg-orange-500 hover:text-white flex items-center justify-start mx-auto w-full rounded-lg p-2'>
				{open ? <RxExit className='rotate-180' /> : <RxDashboard />}
				{open && (
					<span className={`absolute left-[35%] ${open ? "opacity-100" : "opacity-0"} transition-all duration-500 text-lg font-medium`}>Close</span>
				)}
			</div>
		</div>
	);
}

export default Dashoard;
