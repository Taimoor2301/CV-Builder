import Heading from "../Components/Heading/Heading";
import Template1 from "./Template1/Template1";
import Template2 from "./Template2/Template2";
import Template3 from "./Template3/Template3";
import Template4 from "./Template4/Template4";
import Template5 from "./Template5/Template5";
import Template6 from "./Template6/Template6";

const Templates = () => {
	return (
		<div className='grid place-items-center gap-10 py-10 min-h-screen w-full max-w-7xl mx-auto'>
			<Heading>Resume Templates </Heading>
			<Template1 />
			<Template2 />
			<Template3 />
			<Template4 />
			<Template5 />
			<Template6 />
		</div>
	);
};

export default Templates;
