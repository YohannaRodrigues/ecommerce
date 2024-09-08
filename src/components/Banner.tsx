import { FC } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const banners = [
  {
    img: "banners/banner01.png",
    link: "/product/4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    img: "banners/banner02.jpg",
    link: "/product/4",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];

const Banner: FC = () => (
  <div className="font-montserrat">
    <div className="min-w-full relative">
      {" "}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ dynamicBullets: true }}
        centeredSlides={true}
        loop={true}
        autoplay={false}
      >
        {" "}
        {banners.map((item) => {
          return (
            <SwiperSlide key={item.link}>
              <div>
                <img
                  src={item.img}
                  alt="banner"
                  className="max-h-[700px] w-full"
                />
                <div className="absolute top-1/4 p-[5%] text-slate-50">
                  <p className="text-sm lg:text-4xl">Veja</p>
                  <p className="text-4xl">Nova coleção</p>
                  <p className="text-base">{item.text}</p>
                  <Link to={item.link}>TESTANDO</Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  </div>
);

export default Banner;
