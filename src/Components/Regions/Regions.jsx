/* eslint-disable react/no-unescaped-entities */
import { Swiper, SwiperSlide } from "swiper/react";
import { regionsData } from "../../Utils/regionsData";
// import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import { Link} from "react-router-dom";
import "swiper/css/navigation";
import "swiper/scss/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Regions = () => {

  return (
    <div className="px-16 gap-5 mt-48">
      <div
        data-aos-duration="500"
        data-aos="fade-up"
        className="flex my-10 justify-between"
      >
        <div>
          <h1 className="text-3xl">
            EXPLORE UNIQUE PROPERTIES IN QATAR'S TOP REGIONS
          </h1>
          <p className="mt-4 text-gray-500">
            Discover Luxury Apartments, Villas, and Offices in Qatar's most
            popular areas. Get insights of the best properties in Qatar by using
            the <br /> FigTree property finding portal
          </p>
        </div>
      </div>
      <div className="flex  ">
        <Swiper
          breakpoints={{
            // when window width is <= 576px (for mobile devices)
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            // when window width is <= 768px (for tablets)
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is <= 992px (for laptops/desktops)
            992: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            // when window width is <= 1200px (for larger screens)
            1200: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }} // Show 5 cards in a row
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mb-24"
        >
          {regionsData?.map((item, index) => (
            <SwiperSlide key={index}>
              <Link to={`/regions/${encodeURIComponent(item.area)}`}>
                <div
                  data-aos-duration="600"
                  data-aos="fade-down"
                  className="h-[400px] relative "
                >
                  <div className="w-[300px] cursor-pointer relative h-full ">
                    <img
                      className="w-full h-[430px] "
                      src={item?.image[0]}
                      alt=""
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)",
                      }}
                    >
                      <div className="absolute flex-1 justify-center items-center text-white bottom-4 mb-4 left-[40%] right-auto">
                        <h1 className="">{item.area}</h1>
                        <p>Properties</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Regions;
