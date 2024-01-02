import { motion } from "framer-motion";
const Heading = ({ children }) => {
	return (
		<motion.h1
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
			className='text-3xl text-center md:text-5xl font-serif font-bold max-w-4xl mx-auto'>
			{children}
		</motion.h1>
	);
};

export default Heading;
