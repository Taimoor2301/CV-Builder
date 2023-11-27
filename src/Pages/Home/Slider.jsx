import { register } from "swiper/element";
import { useEffect, useRef, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Heading from "../../Components/Heading/Heading";
register();
import { data } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/store";

function Slider() {
	const ref = useRef(null);
	const handleSlides = (command) => {
		if (command === "next") ref.current.swiper.slideNext();
		else ref.current.swiper.slidePrev();
	};
	const [isMobile, setIsMobile] = useState(window.matchMedia("(width < 768px)").matches);
	useEffect(() => {
		const checkMobile = () => setIsMobile(window.matchMedia("(width < 768px)").matches);

		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, []);
	const slidesPerView = isMobile ? "1" : "3";

	return (
		<div className='p-3 py-20 relative'>
			<div className='pb-20'>
				<Heading>Choose a Template</Heading>
				<p className='text-center pt-8 max-w-2xl mx-auto font-medium'>
					Professional graphic designers made our resume templates easy to read and eye-catching! Select one you like and personalize it in our
					builder.
				</p>
			</div>

			<BsFillArrowLeftCircleFill
				className='cursor-pointer absolute top-[60%] left-0 text-5xl text-orange-500 z-[100000]'
				onClick={() => handleSlides("prev")}
			/>
			<swiper-container autoPlay='true' loop='true' slides-per-view={slidesPerView} gap='3' ref={ref}>
				{data.map((data) => (
					<Slide key={data.name} {...data} />
				))}
			</swiper-container>
			<BsFillArrowRightCircleFill
				className='cursor-pointer absolute top-[60%] right-0 text-5xl text-orange-500 z-[100000]'
				onClick={() => handleSlides("next")}
			/>
		</div>
	);
}

export default Slider;

const Slide = ({ image, id }) => {
	const navigate = useNavigate();
	const setCurrentTemplate = useStore((store) => store.setCurrentTemplate);
	const handleClick = () => {
		setCurrentTemplate(id);
		navigate("/build");
	};
	return (
		<swiper-slide>
			<div onClick={handleClick} className='mx-10 select-none border-2 cursor-pointer'>
				<img src={image} className='max-w-full' alt='' />
			</div>
		</swiper-slide>
	);
};
