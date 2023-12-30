import React, { useEffect, useState } from "react";

import { dummyData } from "../../CV Templates/dummyData";
import Template1 from "../../CV Templates/Template1/Template1";
import Template2 from "../../CV Templates/Template2/Template2";
import Template3 from "../../CV Templates/Template3/Template3";
import Template4 from "../../CV Templates/Template4/Template4";
import Template5 from "../../CV Templates/Template5/Template5";
import Template6 from "../../CV Templates/Template6/Template6";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { getCVData } from "../../utils/auth";
import { useAuthStore } from "../../store/authStore";

export default function SelectTemplate() {
	const [data, setData] = useState(dummyData);
	const { user } = useAuthStore();

	const { id } = useParams();

	useEffect(() => {
		async function fetchData() {
			const { cv, error } = await getCVData(id);
			console.log(cv);
			if (cv) setData(cv);
		}

		if (id) fetchData();
	}, [id, user]);

	return (
		<div className='grid place-items-center gap-10 py-10 min-h-screen w-full max-w-7xl mx-auto'>
			<Heading>Resume Templates </Heading>
			<Template1 {...data} />
			<Template2 {...data} />
			<Template3 {...data} />
			<Template4 {...data} />
			<Template5 {...data} />
			<Template6 {...data} />
		</div>
	);
}
