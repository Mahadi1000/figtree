import img1 from "../../assets/sustainability-banner.png";
import img2 from "../../assets/management.png";
import img3 from "../../assets/employee.png";
import img4 from "../../assets/sustainable-marketing.png";
import img5 from "../../assets/our-story.png";
import img6 from "../../assets/sustainable-chalange.png";
import img7 from "../../assets/environment.png";
import img8 from "../../assets/environmental-policy.webp";

const Sustainability = () => {
  const cardData = [
    {
      src: img2,
      h1: "Management approach",
    },
    {
      src: img3,
      h1: "Employes",
    },
    {
      src: img4,
      h1: "Sustainable Marketing",
    },
    {
      src: img5,
      h1: "Out Stories",
    },
    {
      src: img6,
      h1: "Innovation Challenge",
    },
    {
      src: img7,
      h1: "Enviroment",
    },
    {
      src: img8,
      h1: "Enviroment Policy",
    },
  ];
  return (
    <div>
      <div>
        <div>
          <img src={img1} alt="" />
        </div>
        <div className="lg:px-8 px-3 py-10 lg:py-16">
          <h1 className="text-5xl mb-5 font-cinzel">
            OUR APPROACH TOWARDS SUSTAINABILITY
          </h1>
          <p className="font-manrope text-lg">
            At Emaar, we consider sustainability to be a fundamental aspect of
            our lives. It is an investment in the future of both society and
            ourselves. Therefore, we are confident that integrating
            sustainability into our business strategy will result in economic,
            environmental, and social advancement. <br /> <br />
            <br /> Emaar’s overall approach to sustainability is guided by our
            Sustainable Development Goals. In addition, our Code of Conduct
            guides the behaviour of all employees in relation to their
            colleagues, local communities, and the environment. At an
            operational level, we have a suite of procedures and policies that
            we follow in line with national regulatory and international
            standards. <br /> <br /> <br /> All of these factors influence our
            approach to providing high-quality jobs, safe and secure employment,
            employee well-being, and opportunities for professional development.
            In addition, they influence how we communicate and consult with our
            investors, communities, government bodies, and suppliers in our
            operating areas, as well as how we monitor and enhance our
            sustainable performance.
          </p>
          <button className="px-16 hover:border-2 hover:border-gray-500 mt-5 lg:mt-10 py-4 bg-[#071C35] text-white">
            VIEW MORE
          </button>
        </div>
      </div>
      <div className="lg:px-8 px-3 py-10 lg:py-16">
        <div className="flex items-center">
          <h2 className="text-lg font-manrope text-gray-500 ">CORPORATE</h2>
          <hr className="w-[100px] ml-5 " />
        </div>
        <div className="mt-5">
          <h1 className="text-5xl font-cinzel">SUSTAINABILITY</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {cardData.map((item, index) => (
            <div className="w-[419.656px]  h-[228.844px]" key={index}>
              <div className="overflow-hidden ">
                <img
                  className=" object-contain  w-full h-full transition-transform duration-700 hover:scale-110"
                  src={item.src}
                  alt=""
                />
              </div>
              <div className="py-2 flex items-center justify-between ">
                <h1 className="font-manrope uppercase">{item.h1}</h1>
                <hr className="border-t-[1px] w-[100px]  border-gray-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
