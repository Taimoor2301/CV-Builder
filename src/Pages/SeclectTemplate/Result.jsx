import React, { useEffect, useState } from "react";

import { dummyData } from "../../CV Templates/dummyData";
import { useParams } from "react-router-dom";
import Heading from "../../Components/Heading/Heading";
import { getCVData } from "../../utils/auth";
import { useAuthStore } from "../../store/authStore";
import { useGlobalState } from "../../store/globalStates";

export default function SelectTemplate() {
	const [data, setData] = useState(dummyData);
	const { user } = useAuthStore();
	const { id } = useParams();
	const { currentTemplate } = useGlobalState();

	useEffect(() => {
		async function fetchData() {
			const { cv, error } = await getCVData(id);
			console.log(cv);
			if (cv) setData(cv);
		}

		if (id) fetchData();
	}, [id, user]);

	return (
		<div className='grid place-items-center py-10 min-h-screen w-full max-w-7xl mx-auto'>
			<Heading>Here is Your CV </Heading>
			<div className='scale-90'>{currentTemplate && <currentTemplate.template {...data} />}</div>
		</div>
	);
}
