import { RiDeleteBin6Fill, RiGraduationCapLine } from "react-icons/ri";
import { FaUserGraduate } from "react-icons/fa6";

const Education = ({ index, handelEducation, id }) => {
	return (
		<div className='col-span-full px-5 py-6 grid grid-cols-8 gap-2 border focus-within:border-orange-400 rounded-lg'>
			<div className='col-span-full py-3 flex items-center justify-between'>
				<div className='flex gap-3 items-end text-orange-500'>
					<RiGraduationCapLine className='text-4xl' />

					<h1 className='text-2xl font-semibold'>Education {index + 1}</h1>
				</div>

				<RiDeleteBin6Fill
					onClick={() => handelEducation("delete", id)}
					title='delete'
					className='text-5xl text-orange-500 hover:text-red-600 drop-shadow-md hover:scale-105 hover:drop-shadow-lg transition-all duration-300'
				/>
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label className='text-md text-2xl'>Course</label>
				<input type='text' placeholder='coure/degree' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label className='text-md text-2xl'>Institute</label>
				<input type='text' placeholder='institute' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label className='text-md text-2xl'>Start Date</label>
				<input type='text' placeholder='start date' className='p-4 rounded-lg border-2' />
			</div>
			<div className='flex gap-2 flex-col col-span-2'>
				<label className='text-md text-2xl'>End Date</label>
				<input type='text' placeholder='End date' className='p-4 rounded-lg border-2' />
			</div>

			<div className='flex flex-col gap-2 col-span-full'>
				<label className='text-md text-2xl'>Detail</label>
				<textarea name='detail' cols='30' rows='5' className='p-4 border-2 rounded-xl' placeholder='enter details' />
			</div>
		</div>
	);
};

export default Education;
