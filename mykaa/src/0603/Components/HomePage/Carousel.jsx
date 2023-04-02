// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const CarouselSlider = () => {
//   return (
// 		<Carousel
// 			autoPlay
// 			infiniteLoop
// 			stopOnHover
// 			showIndicators={false}
// 			width={"100%"}
//       height={"100%"}
//        border='1px solid green'
//       >
// 			{images.map((image, i) => (
// 				<Box key={i}>
// 					<Image src={image} alt='' width='100%' />
// 				</Box>
// 			))}
// 		</Carousel>
//   );
// };
// export default CarouselSlider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";
const images = [
	"https://images-static.nykaa.com/uploads/04d0c1d0-3bd5-49cd-8d38-655a9f3c003b.jpg",
	"https://images-static.nykaa.com/uploads/a294f8d2-8bb6-4912-9ac9-896cfa2685dc.jpg",
	"https://images-static.nykaa.com/uploads/a908e8ad-3bd3-4d87-bca2-2fca7c54bf98.jpg",
	"https://images-static.nykaa.com/uploads/722e2d8c-476e-4993-be69-a505143ceca2.jpg",
	"https://images-static.nykaa.com/uploads/a908e8ad-3bd3-4d87-bca2-2fca7c54bf98.jpg",
	"https://images-static.nykaa.com/uploads/9ef6a6c2-9107-487c-8a4b-e886becea619.jpg",
];

const CarouselSlider = ({ src = images }) => {
	return (
		<div>
			<Swiper
				modules={[Navigation, Pagination,Autoplay]}
				navigation={true}
				spaceBetween={30}
				pagination={{
					clickable: true,
				}}
        autoplay={{
          "delay": 2500,
          "disableOnInteraction": false
        }}
				style={{
					width: "90%",
					height: "100%",
					"--swiper-navigation-color": "#ffffff",
					"--swiper-navigation-size": "2rem",
					"--swiper-pagination-color": "#ffffff",
				}}
				loop={true}>
				{src.map((item, index) => {
					return (
						<SwiperSlide key={index}>
							<Image src={item} alt={item} />
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};

export default CarouselSlider;
