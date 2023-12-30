import { CiSaveDown1 } from "react-icons/ci";
import { useDetails } from "../../store/details";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Save() {
	const { name, jobTitle, phoneNumber, email, address, about, workExperience, education, skills, hobbies, socialLinks } = useDetails();

	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const token = Cookies.get("token");

	async function saveData() {
		setLoading(true);
		try {
			const res = await axios.post(
				"http://localhost:3000/api/v1/cv/create",
				{
					name,
					jobTitle,
					phoneNumber,
					email,
					address,
					about,
					workExperience,
					education,
					skills,
					hobbies,
					socialLinks,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);

			setLoading(false);
			console.log(res);
			navigate(`/templates/${res.data._id}`);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}

		console.log("local", {
			name,
			jobTitle,
			phoneNumber,
			email,
			address,
			about,
			workExperience,
			education,
			skills,
			hobbies,
			socialLinks,
		});
	}
	return (
		<button
			onClick={saveData}
			className='rounded-lg flex items-center justify-center gap-2 p-4 shadow hover:bg-orange-600 hover:scale-105 bg-orange-500 transition-all duration-300 text-white font-medium w-56'>
			{loading ? "please wait..." : "Save"}
			{!loading && <CiSaveDown1 className='text-2xl' />}
		</button>
	);
}
