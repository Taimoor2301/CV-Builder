import { useState } from "react";
import { TbMessages } from "react-icons/tb";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Faqs } from "../../data";
import { AnimatePresence, motion } from "framer-motion";

const Faq = () => {
	return (
		<div className='flex justify-center items-center gap-10  flex-col'>
			<TbMessages className='text-7xl text-orange-500' />
			<h1 className='md:text-5xl text-3xl font-serif font-bold max-w-4xl  text-center'>Resume Builder FAQ</h1>

			<div className='flex flex-col gap-3 max-w-4xl'>
				{Faqs.map((faq, index) => (
					<FaqElement key={index} {...faq} />
				))}
			</div>
		</div>
	);
};

export default Faq;

const FaqElement = ({ question, answer }) => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div className='bg-gray-200 rounded-sm p-5 select-none cursor-pointer' onClick={() => setExpanded((prev) => !prev)}>
			<div className='md:text-2xl text-lg font-bold flex gap-5 justify-between border'>
				{question}
				<span>{expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}</span>{" "}
			</div>

			<p className={`text-lg overflow-hidden  ${!expanded ? "h-0" : "pt-5 h-auto"} transition-all duration-500`}>{answer}</p>
		</div>
	);
};
