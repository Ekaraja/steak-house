import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line import/no-unresolved
import "swiper/css";
// eslint-disable-next-line import/no-unresolved
import "swiper/css/pagination";
import "./slider.scss";
import { Pagination, Autoplay } from "swiper";

import { slideData } from "../../utils/slide";
import Slide from "./Slide";

const pagination = {
	clickable: true,
};

const { slide1, slide2, slide3 } = slideData;

export default function Slider() {
	return (
		<Swiper
			pagination={pagination}
			modules={[Pagination, Autoplay]}
			className="mySwiper"
			loop
			autoplay={{
				delay: 4500,
			}}
		>
			<SwiperSlide>
				<Slide title={slide1.title} description={slide1.description} />
			</SwiperSlide>
			<SwiperSlide>
				<Slide title={slide2.title} description={slide2.description} />
			</SwiperSlide>
			<SwiperSlide>
				<Slide title={slide3.title} description={slide3.description} />
			</SwiperSlide>
		</Swiper>
	);
}
