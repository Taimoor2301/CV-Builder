import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { useDetails } from "../../store/details";
import { motion } from "framer-motion";
import { slideIn } from "../../animation/motion";

import CustomLabel from "./CustomLabel";
import { inputClasses } from "../../utils/styles";

const WorkExperience = ({ index, id }) => {
	const removeWorkExperience = useDetails((s) => s.removeWorkExperience);
	const editWorkExperience = useDetails((s) => s.editWorkExperience);

	const thisWorkExperience = useDetails((d) => d.workExperience.find((w) => w.id === id));

	const handelChange = (e) => {
		const { name, value } = e.target;
		editWorkExperience(id, name, value);
	};

	return (
		<motion.div
			variants={slideIn("down", 1, 0.3)}
			initial='initial'
			whileInView='animate'
			viewport={{ once: true }}
			className='col-span-full px-5 py-6 grid grid-cols-8 gap-2 border border-orange-400 rounded'>
			<div className='col-span-full py-3 flex items-center justify-between'>
				<div className='flex gap-3 items-end text-orange-500'>
					<MdWorkOutline className='text-4xl' />

					<h1 className='text-2xl font-semibold'>Work {index + 1}</h1>
				</div>

				<RiDeleteBin6Fill
					onClick={() => removeWorkExperience(id)}
					title='delete'
					className='md:text-5xl text-3xl text-orange-500 hover:text-red-600 drop-shadow-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Role</CustomLabel>
				<input
					type='text'
					value={thisWorkExperience.role}
					onChange={(e) => handelChange(e)}
					name='role'
					placeholder='role'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Company</CustomLabel>
				<input
					type='text'
					value={thisWorkExperience.company}
					onChange={(e) => handelChange(e)}
					name='company'
					placeholder='company name'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Starting Date</CustomLabel>
				<input
					type='text'
					value={thisWorkExperience.startDate}
					onChange={(e) => handelChange(e)}
					name='startDate'
					placeholder='start date'
					className={inputClasses}
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<CustomLabel>Ending Date</CustomLabel>
				<input
					type='text'
					value={thisWorkExperience.endDate}
					onChange={(e) => handelChange(e)}
					name='endDate'
					placeholder='End date'
					className={inputClasses}
				/>
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<CustomLabel>Job Description</CustomLabel>
				<textarea
					name='jobDescription'
					value={thisWorkExperience.jobDescription}
					onChange={(e) => handelChange(e)}
					cols='30'
					rows='5'
					className={inputClasses}
					placeholder='enter job description'
				/>
			</div>
		</motion.div>
	);
};

export default WorkExperience;
