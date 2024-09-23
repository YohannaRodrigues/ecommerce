import { FC } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

const banners = [
  {
    img: "banners/banner02.png",
    link: "/product/4",
    text: "Canecas artesanais",
  },
  {
    img: "banners/banner01.png",
    link: "/product/4",
    text: "Máquinas de espresso",
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
              <div className="flex justify-center">
                <img
                  src={item.img}
                  alt="banner"
                  className="max-h-[800px] w-full"
                />
                <div className="absolute top-1/3 mx-auto p-[2%] w-full text-slate-50">
                  <Link to={item.link}>
                    <p className="text-sm lg:text-3xl">CONFIRA</p>
                    <p className="text-4xl mb-1">NOVA COLEÇÃO</p>
                    {item.text}
                  </Link>
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
