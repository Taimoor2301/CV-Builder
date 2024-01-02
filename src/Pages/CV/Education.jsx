import { RiDeleteBin6Fill, RiGraduationCapLine } from "react-icons/ri";
import { useDetails } from "../../store/details";
import { inputClasses } from "../../utils/styles";
import CustomLabel from "./CustomLabel";
import { motion } from "framer-motion";
import { slideIn } from "../../animation/motion";

const Education = ({ index, id }) => {
	const thisEducation = useDetails((s) => s.education.find((e) => e.id === id));
	const editEdition = useDetails((s) => s.editEducation);
	const removeEducation = useDetails((s) => s.removeEducation);

	const handleChange = (e) => {
		const { name, value } = e.target;
		editEdition(id, name, value);
	};

	return (
		<motion.div
			variants={slideIn("down", 1, 0.3)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='col-span-full px-5 py-6 grid grid-cols-8 gap-2 border border-orange-400 rounded-lg'>
			<div className='col-span-full py-3 flex items-center justify-between'>
				<div className='flex gap-3 items-end text-orange-500'>
					<RiGraduationCapLine className='text-4xl' />

					<h1 className='text-2xl font-semibold font-serif'>Education {index + 1}</h1>
				</div>

				<RiDeleteBin6Fill
					onClick={() => removeEducation(id)}
					title='delete'
					className='md:text-5xl text-3xl text-orange-500 hover:text-red-600 drop-shadow-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Course Name</CustomLabel>
				<input
					type='text'
					name='course'
					value={thisEducation.course}
					onChange={(e) => handleChange(e)}
					placeholder='coure/degree'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Institute Name</CustomLabel>
				<input
					type='text'
					name='institute'
					value={thisEducation.institute}
					onChange={(e) => handleChange(e)}
					placeholder='institute'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Start Date</CustomLabel>
				<input
					type='text'
					name='startDate'
					value={thisEducation.startDate}
					onChange={(e) => handleChange(e)}
					placeholder='start date'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>End Date</CustomLabel>
				<input
					type='text'
					name='endDate'
					value={thisEducation.endDate}
					onChange={(e) => handleChange(e)}
					placeholder='End date'
					className={inputClasses}
				/>
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<CustomLabel>Details of Course</CustomLabel>
				<textarea
					name='detail'
					value={thisEducation.detail}
					onChange={(e) => handleChange(e)}
					cols='30'
					rows='5'
					className={inputClasses}
					placeholder='enter details'
				/>
			</div>
		</motion.div>
	);
};

export default Education;
