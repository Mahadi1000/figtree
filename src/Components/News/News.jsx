import { FaArrowRight } from "react-icons/fa6";
import img1 from "../../assets/news1.png";
import img2 from "../../assets/news2.png";
import img3 from "../../assets/news3.png";
const News = () => {
  return (
    <div className=" lg:h-[960px] bg-[#131212] ">
      <div className="max-w-6xl mx-auto py-24 ">
        <div className="md:flex flex-1 justify-center text-center md:justify-between w-full ">
          <div className="text-white">
            <h1 className="text-2xl md:text-4xl">News & Consult</h1>
          </div>
          <div className="flex items-center text-xl gap-2 md:justify-end text-center justify-center my-2 md:text-end text-orange-600">
            <h2>Explore All </h2>
            <FaArrowRight />
          </div>
        </div>
        <div className="grid grid-cols-1 mt-10 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <div>
              <img src={img1} alt="" />
            </div>
            <h1 className="text-white text-xl py-3">
              9 Easy-to-Ambitious DIY <br /> Projects to Improve Your Home
            </h1>
            <p className="flex items-center gap-3 text-orange-600  font-semibold ">
              Read the Article <FaArrowRight />{" "}
            </p>
          </div>
          <div>
            <div>
              <img src={img2} alt="" />
            </div>
            <h1 className="text-white text-xl py-3">
              Serie Shophouse Launch In July, Opportunity For Investors
            </h1>
            <p className="flex items-center text-orange-600  font-semibold">
              Read the Article <FaArrowRight />{" "}
            </p>
          </div>
          <div>
            <div>
              <img src={img3} alt="" />
            </div>
            <h1 className="text-white text-xl py-3">
              Looking for a New Place? Use This Time to Create Your Wishlist
            </h1>
            <p className="flex items-center text-orange-600  font-semibold">
              Read the Article <FaArrowRight />
            </p>
          </div>
        </div>
        <div className="bg-[#C0C0C0] rounded-xl mt-5 w-full">
          <div className="py-10">
            {" "}
            <h1 className="text-center text-3xl font-cinzel font-semibold">
              For Recent Update, News.
            </h1>
            <p className="text-center my-3 font-manrope flex-col justify-center text-lg ">
              We helps businesses customize, automate and scale up their <br />
              ad production and delivery.
            </p>
            <div className="md:flex flex-1 justify-center gap-4">
              <input
                className="px-3 w-72 md:w-96 py-3 rounded-xl text-black"
                type="text"
                placeholder="Enter Your Email "
              />
              <button className="px-8 py-3 rounded-xl font-medium bg-[#131212] text-white">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
