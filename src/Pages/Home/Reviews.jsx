import { BsStar, BsStarFill, BsStarHalf, BsCheckCircleFill, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { reviews } from "../../data";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { register } from "swiper/element";

register();

const Reviews = () => {
	return (
		<div className='py-20'>
			<h1 className=' text-3xl text-center md:text-5xl font-serif font-bold max-w-4xl mx-auto'>Our reviews speak for themselves</h1>

			<div className='flex flex-col md:flex-row py-10 gap-10'>
				<Leftreview />
				<Carosel />
			</div>

			<div className='bg-gray-300 w-full h-[1px] my-10'></div>
		</div>
	);
};

export default Reviews;

const Leftreview = () => {
	return (
		<div className='flex items-center flex-col justify-center gap-2'>
			<h1 className='text-3xl'>Average</h1>

			<div className='flex gap-2 text-2xl text-yellow-400'>
				<BsStarFill />
				<BsStarFill />
				<BsStarFill />
				<BsStarHalf />
				<BsStar />
			</div>

			<span className='text-sm font-thin'>Based on 1750 reviews</span>

			<div className='flex gap-1 items-center'>
				<BsStarFill className='text-green-500 text-4xl' /> <span className='font-semibold text-2xl'>Trustpilot</span>
			</div>
		</div>
	);
};

const Review = ({ review, name, date }) => {
	const title = review.length > 20 ? review.slice(0, 17) + "..." : review;

	return (
		<div className='flex flex-col gap-0.5 p-1 min-w-[300px] cursor-grab'>
			<div className='flex gap-2 items-center'>
				<span className='flex gap-1 items-center text-green-500'>
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
					<BsStarFill />
				</span>

				<span className='text-neutral-500 flex items-center gap-1'>
					<BsCheckCircleFill />
					Verified
				</span>
			</div>
			<h1 className='font-bold text-lg'>{title}</h1>
			<p className='text-md font-thin max-w-[70%]'>{review}</p>
			<h2 className='font-semibold text-md text-neutral-500'>
				{name},<span className='font-thin'>{date}</span>{" "}
			</h2>
		</div>
	);
};

const Carosel = () => {
	const ref = useRef(null);

	const nextSlide = () => {
		ref.current.swiper.slideNext();
	};
	const prevSlide = () => {
		ref.current.swiper.slidePrev();
	};

	const [isMobile, setIsMobile] = useState(window.matchMedia("(width < 1025px)").matches);

	useEffect(() => {
		window.addEventListener("resize", () => setIsMobile(window.matchMedia("(width < 1025px)").matches));
	}, []);

	const slidesPerView = isMobile ? "1" : "3.2";

	return (
		<div className='flex-1 p-5 overflow-hidden relative pl-14 select-none'>
			<div className='text-2xl absolute top-0 left-0 flex items-center h-full  bg-white/80 px-4 z-[100000]'>
				<BsFillArrowLeftCircleFill className='cursor-pointer' onClick={() => prevSlide()} />
			</div>

			<swiper-container slides-per-view={slidesPerView} loop='true' ref={ref}>
				{reviews.map((review, index) => (
					<swiper-slide key={index}>
						<Review {...review} />
					</swiper-slide>
				))}
			</swiper-container>

			<div className='text-2xl absolute top-0 right-0 h-full flex items-center bg-white/80 px-4 z-[100000]'>
				<BsFillArrowRightCircleFill className='cursor-pointer' onClick={() => nextSlide()} />
			</div>
		</div>
	);
};
