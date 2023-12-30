import { BsFillPersonFill } from "react-icons/bs";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn } from "../../animation/motion";
import { FaBarsStaggered } from "react-icons/fa6";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import logo from "../../assets/logo.png";
import { useAuthStore } from "../../store/authStore";
import Cookies from "js-cookie";

const Navbar = () => {
	const [navOpen, setNavOpen] = useState(false);
	const { isLoggedIn, setUser, setIsLoggedIn } = useAuthStore();
	document.body.style.overflowY = navOpen ? "hidden" : "visible";

	function logout() {
		Cookies.remove("token");
		setUser(null);
		setIsLoggedIn(false);
	}

	return (
		<nav
			className='max-w-7xl mx-auto flex justify-between items-center px-2 relative'
			id='nav'>
			<div className='text-5xl font-bold text-neutral-800 w-36 pt-5'>
				<img
					src={logo}
					alt=''
				/>
			</div>

			<div className=' gap-5 uppercase text-[12px] py-3 font-medium hidden xl:flex items-center'>
				<NavLink to='/'>Home</NavLink>
				<NavLink to='/templates'>Templates</NavLink>
				<NavLink to='/resume'>Resume</NavLink>
				<NavLink to='/build'>Build</NavLink>
				<NavLink to='/cover'>Cover Letters</NavLink>

				{!isLoggedIn ? (
					<NavLink
						className='flex items-center gap-1 mx-4 px-2 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 transition-all duration-500 text-white'
						to='/login'>
						<BsFillPersonFill className='text-xl' /> Login
					</NavLink>
				) : (
					<button
						className='flex items-center gap-1 mx-4 px-2 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 transition-all duration-500 text-white'
						onClick={logout}>
						<BsFillPersonFill className='text-xl' /> Logout
					</button>
				)}
			</div>

			<FaBarsStaggered
				className='xl:hidden text-4xl text-orange-400'
				onClick={(e) => setNavOpen((prev) => !prev)}
			/>

			<motion.div
				initial={{ scaleX: 0 }}
				animate={{ scaleX: navOpen ? 1 : 0, transition: { duration: 0.25 } }}
				className='gap-4 uppercase font-medium text-xl flex flex-col xl:hidden items-center justify-center absolute w-screen h-screen top-0 left-0 bg-white bg-opacity-75 backdrop-blur origin-left z-[100000]'>
				<Link
					to='/'
					onClick={() => setNavOpen(false)}>
					Home
				</Link>
				<Link
					to='/templates'
					onClick={() => setNavOpen(false)}>
					Templates
				</Link>
				<Link
					to='/recent'
					onClick={() => setNavOpen(false)}>
					Recent{" "}
				</Link>
				<Link
					to='/resume'
					onClick={() => setNavOpen(false)}>
					Resume
				</Link>
				<Link
					to='/build'
					onClick={() => setNavOpen(false)}>
					Build
				</Link>
				<Link
					to='/cover'
					onClick={() => setNavOpen(false)}>
					Cover Letters
				</Link>

				{!isLoggedIn ? (
					<Link
						className='flex items-center gap-1 mx-4'
						to='/login'
						onClick={() => setNavOpen(false)}>
						<BsFillPersonFill className='text-xl' /> Login
					</Link>
				) : (
					<button
						className='flex items-center gap-1 mx-4'
						onClick={() => {
							logout();
							setNavOpen(false);
						}}>
						<BsFillPersonFill className='text-xl' /> Logout
					</button>
				)}
				<GrClose
					className='text-5xl text-orange-400'
					onClick={() => setNavOpen((prev) => !prev)}
				/>
			</motion.div>
		</nav>
	);
};

export default Navbar;
