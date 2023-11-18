import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import { useStore } from "../../store/store";
import { useDetails } from "../../store/details";

const WorkExperience = ({ index, id }) => {
	const removeWorkExperience = useDetails((s) => s.removeWorkExperience);
	const editWorkExperience = useDetails((s) => s.editWorkExperience);

	const thisWorkExperience = useDetails((d) => d.workExperience.find((w) => w.id === id));

	const handelChange = (e) => {
		const { name, value } = e.target;
		editWorkExperience(id, name, value);
	};

	return (
		<div className='col-span-full px-5 py-6 grid grid-cols-8 gap-2 border focus-within:border-orange-400 rounded-lg'>
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
				<label className='text-md text-2xl'>Role</label>
				<input
					type='text'
					value={thisWorkExperience.role}
					onChange={(e) => handelChange(e)}
					name='role'
					placeholder='role'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<label className='text-md text-2xl'>Company</label>
				<input
					type='text'
					value={thisWorkExperience.comapany}
					onChange={(e) => handelChange(e)}
					name='company'
					placeholder='company name'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<label className='text-md text-2xl'>Start Date</label>
				<input
					type='text'
					value={thisWorkExperience.startDate}
					onChange={(e) => handelChange(e)}
					name='startDate'
					placeholder='start date'
					className='p-4 rounded-lg border-2'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-full md:col-span-2'>
				<label className='text-md text-2xl'>End Date</label>
				<input
					type='text'
					value={thisWorkExperience.endDate}
					onChange={(e) => handelChange(e)}
					name='endDate'
					placeholder='End date'
					className='p-4 rounded-lg border-2'
				/>
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<label className='text-md text-2xl'>Job Description</label>
				<textarea
					name='detail'
					value={thisWorkExperience.detail}
					onChange={(e) => handelChange(e)}
					cols='30'
					rows='5'
					className='p-4 border-2 rounded-xl'
					placeholder='enter job description'
				/>
			</div>
		</div>
	);
};

export default WorkExperience;
