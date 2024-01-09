
import { featured } from "../../Utils/Data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Feature = () => {
  return (
    <>
      <section className="featured my-5 py-5 bg-[#F9F9F9] mt-14 ">
        <div data-aos-duration="500" data-aos="fade-up" className="text-center">
          <h1 className="lg:text-4xl md:text-2xl text-xl my-3 font-cinzel font-semibold">
            Featured Property Types
          </h1>
          <p className="font-medium">Find All Type of Property.</p>
        </div>
        <div
          data-aos-duration="600"
          data-aos="fade-up"
          className="flex justify-center flex-wrap items-center my-8 gap-10"
        >
          {featured.map((items, index) => (
            <div
              className="justify-center text-center items-center flex-col"
              key={index}
            >
              <img className="w-16 mx-auto" src={items.cover} alt="" />
              <h4 className="mt-2 font-semibold">{items.name}</h4>
              <label className="font-thin">{items.total}</label>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Feature
