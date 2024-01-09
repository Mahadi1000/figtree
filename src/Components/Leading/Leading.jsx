import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../../assets/img1.jpg"
import img2 from "../../assets/img2.jpg"
import img3 from "../../assets/img3.jpg"
import img4 from "../../assets/img4.jpg"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
AOS.init();

const Leading = () => {
    const imageData = [
      {
        src: img1,
        title: "Address Residence",
        title2: "lorem",
      },
      {
        src: img2,
        title: "Address Residence",
        title2: "lorem",
      },
      {
        src: img3,
        title: "Address Residence",
        title2: "lorem",
      },
      {
        src: img4,
        title: "Address Residence",
        title2: "lorem",
      },
      {
        src: img2,
        title: "Address Residence",
        title2: "lorem",
      },

      {
        src: img1,
        title: "Address Residence",
        title2: "lorem",
      },

    ];
  return (
    <div className="px-3 flex-1 items-center md:flex md:mt-10 md:h-[750px] justify-evenly md:gap-5">
      <div className="md:w-[35%] w-full my-4">
        <div
          data-aos-duration="500"
          data-aos="fade-right"
          className="w-full flex flex-col justify-center"
        >
          <h3 className="flex items-center my-3 font-manrope text-lg">
            Figtree
            <hr className="w-28 ml-5  " />
          </h3>
          <h1 className="font-cinzel font-[500] text-4xl">
            Figtree LEADING PROPERTY DEVELOPER <br /> IN Qatar
          </h1>
          <p className="text-wrap my-5 ">
            Our properties each have a unique design aesthetic, providing an
            aspirational lifestyle within a thriving community supported by the
            Emaar Communities Management team.
          </p>
          <Link to={"/property"}>
            <button className="uppercase px-10 py-4 text-white  bg-[#071C35] ">
              View ALl Properties
            </button>
          </Link>
        </div>
      </div>
      <div className="w-[70%]  ">
        <div
          data-aos-duration="600"
          data-aos="fade-left"
          className="masonry-grid mx-auto "
        >
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
          >
            <Masonry gutter="20px">
              {imageData.map((item, index) => (
                <div className="overflow-hidden" key={index}>
                  <div className="overflow-hidden">
                    <img
                      className="object-contain w-full h-full transition-transform duration-700 hover:scale-110 "
                      src={item.src}
                      alt=""
                    />
                  </div>
                  <p className=" items-center my-1">
                    {" "}
                    <span className="border-r-[1px] border-black ">
                      {" "}
                      {item.title}{" "}
                    </span>{" "}
                    <span className="px-4  border-black">
                      {item.title2}
                    </span>
                  </p>
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </div>
  );
}

export default Leading
