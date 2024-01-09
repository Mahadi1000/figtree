import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ThreeDots } from "react-loader-spinner";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useLoaderData } from "react-router-dom";
import "swiper/css/pagination";
import { CiBookmark } from "react-icons/ci";
AOS.init();

const FeaturedListing = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="mb-20  mt-20 max-w-6xl mx-auto">
      <div data-aos-duration="500" className="text-center" data-aos="fade-up">
        <h1 className="text-3xl font-cinzel my-3 font-semibold">
          Discover Our Featured Listings
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div>
        {data.length === 0 ? (
          <div className="flex justify-center items-center">
            <ThreeDots
              visible={true}
              height={80}
              width={50}
              color="#4fa94d"
              radius={9}
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </div>
        ) : (
          <div className="h-[480px] my-10 gap-5 ">
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
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1536: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }} // Show 5 cards in a row
              spaceBetween={40}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper mb-24"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    data-aos-duration="500"
                    data-aos="fade-up"
                    className="card shadow-xl relative h-[480px] w-[360px] gap-6"
                  >
                    <div className="overflow-hidden relative h-2/3 ">
                      {/* Black overlay from bottom to top */}

                      <img
                        className="card-image h-full w-full object-contain absolute transform transition-transform duration-500 hover:scale-105 "
                        src={item.images[0]}
                        alt=""
                      />

                      {/* Tag at the top */}
                      <div className="absolute  top-5 left-2  text-center p-2  text-white">
                        <button className="bg-black bg-opacity-65 px-2 py-1 hover:bg-opacity-50 uppercase text-xs rounded-lg">
                          Feature
                        </button>
                      </div>
                      <div className="absolute  bottom-5 left-2  text-center p-2  text-white">
                        <button className="bg-black bg-opacity-65 px-2 py-1 hover:bg-opacity-50 text-xs  rounded-lg">
                          $ {item.prices}/mo
                        </button>
                      </div>
                      <div className="absolute  bottom-5 right-3  text-center p-2  text-white">
                        <button className="bg-black bg-opacity-65 px-4 py-1 hover:bg-opacity-50 text-sm rounded-lg">
                          <CiBookmark />
                        </button>
                      </div>
                    </div>
                    <div className="card-content px-4">
                      <h2 className="card-title text-base font-normal text-black my-2">
                        {item.title}
                      </h2>
                      <h2 className="card-title text-base font-normal text-black ">
                        {item.propertyType}
                      </h2>
                      <p className="card-description">{}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedListing;
