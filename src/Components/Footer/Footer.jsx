import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='bg-white rounded-lg shadow-md m-4 border max-w-7xl mx-auto w-[95%]'>
			<div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<a href='#' className='flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse'>
						<img src={logo} className='h-10' alt='Logo' />
					</a>
					<ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
						<li>
							<Link to='/' className='hover:underline me-4 md:me-6'>
								About
							</Link>
						</li>
						<li>
							<Link to='/' className='hover:underline me-4 md:me-6'>
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link to='/' className='hover:underline me-4 md:me-6'>
								Licensing
							</Link>
						</li>
						<li>
							<Link to='/' className='hover:underline'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
					© 2023{" "}
					<a href='#' className='hover:underline'>
						resume craft
					</a>
					. All Rights Reserved.
				</span>
			</div>
		</footer>
	);
};

export default Footer;
