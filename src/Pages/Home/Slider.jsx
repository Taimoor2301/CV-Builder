import { register } from "swiper/element";
import { useEffect, useRef, useState } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import Heading from "../../Components/Heading/Heading";
register();

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
			<swiper-container slides-per-view={slidesPerView} gap='3' loop='true' ref={ref}>
				<Slide />
				<Slide />
				<Slide />
				<Slide />
				<Slide />
				<Slide />
			</swiper-container>
			<BsFillArrowRightCircleFill
				className='cursor-pointer absolute top-[60%] right-0 text-5xl text-orange-500 z-[100000]'
				onClick={() => handleSlides("next")}
			/>
		</div>
	);
}

export default Slider;

const Slide = () => {
	return (
		<swiper-slide>
			<div className='mx-10 select-none'>
				<img src='https://d.novoresume.com/images/doc/minimalist-resume-template.png' className='max-w-full' alt='' />
			</div>
		</swiper-slide>
	);
};
