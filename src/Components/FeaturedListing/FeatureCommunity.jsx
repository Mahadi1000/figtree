import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/img9.jpg";
import img2 from "../../assets/img10.jpg";
import img3 from "../../assets/img11.jpg";
import img4 from "../../assets/img12.jpg";
import img5 from "../../assets/img13.webp";
import img6 from "../../assets/img8.jpg";
import img7 from "../../assets/img7.jpg";
import { Pagination } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const FeatureCommunity = () => {
  const imageData = [
    {
      src: img1,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img2,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img3,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img4,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img5,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },

    {
      src: img6,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
    {
      src: img7,
      title: "The Oasis",
      title2: "Immerse in Pure Luxury",
      title3: "Villas and Mansions",
    },
  ];
  return (
    <div className="px-4 my-16">
      <div data-aos-duration="500" data-aos="fade-up-left">
        <div className="flex items-center my-3 gap-8">
          <h3 className="font-cinzel">Communities</h3>
          <hr className="w-[200px] text-black border border-black " />
        </div>
        <h1 className="text-4xl font-cinzel font-medium">
          FEATURED COMMUNITIES
        </h1>
      </div>
      <div data-aos-duration="700" data-aos="fade-up-left" className=" mt-5">
        <Swiper
          breakpoints={{
            // when window width is <= 576px (for mobile devices)
            576: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is <= 768px (for tablets)
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is <= 992px (for laptops/desktops)
            992: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is <= 1200px (for larger screens)
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1536: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }} // Show 5 cards in a row
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-24"
        >
          {imageData.map((item, index) => (
            <div className="" key={index}>
              <SwiperSlide>
                <div className="overflow-hidden rounded-xl">
                  <img
                    className="rounded-xl object-contain w-full h-full transition-transform duration-700 hover:scale-110 "
                    src={item.src}
                    alt=""
                  />
                </div>
                <div className="text-center">
                  <h1 className="text-2xl font-cinzel font-medium">
                    {" "}
                    {item.title}{" "}
                  </h1>
                  <h2 className="font-manrope text-xl ">
                    {" "}
                    <span> {item.title2} </span> <br />{" "}
                    <span> {item.title3} </span>{" "}
                  </h2>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeatureCommunity;
