import { RiDeleteBin6Fill } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";

const WorkExperience = ({ index, handelWorkExperience, id }) => {
	return (
		<div className='col-span-full px-5 py-6 grid grid-cols-8 gap-2 border focus-within:border-orange-400 rounded-lg'>
			<div className='col-span-full py-3 flex items-center justify-between'>
				<div className='flex gap-3 items-end text-orange-500'>
					<MdWorkOutline className='text-4xl' />

					<h1 className='text-2xl font-semibold'>Work {index + 1}</h1>
				</div>

				<RiDeleteBin6Fill
					onClick={() => handelWorkExperience("delete", id)}
					title='delete'
					className='text-5xl text-orange-500 hover:text-red-600 drop-shadow-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label htmlFor='prevJobtitle' className='text-md text-2xl'>
					Role
				</label>
				<input type='text' placeholder='role' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label htmlFor='prevCompanyName' className='text-md text-2xl'>
					Company
				</label>
				<input type='text' placeholder='company name' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label htmlFor='startDate' className='text-md text-2xl'>
					Start Date
				</label>
				<input type='text' placeholder='start date' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label htmlFor='endDate' className='text-md text-2xl'>
					End Date
				</label>
				<input type='text' placeholder='End date' className='p-4 rounded-lg border-2' />
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<label htmlFor='jobDescription' className='text-md text-2xl'>
					Job Description
				</label>
				<textarea name='jobDescription' cols='30' rows='5' className='p-4 border-2 rounded-xl' placeholder='enter job description' />
			</div>
		</div>
	);
};

export default WorkExperience;
