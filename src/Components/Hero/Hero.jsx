import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section className="">
        <div className="hero">
          <div className="container text-center">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
              className="font-cinzel font-semibold text-white text-2xl md:text-3xl lg:text-4xl"
            >
              Welcome To FigTree
            </motion.h1>
            <motion.p
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className=" text-white text-md hidden my-4 lg:text-center"
              transition={{
                duration: 1.5,

                type: "ease-in",
              }}
            >
              Houzez is an innovative real estate WordPress theme that helps to{" "}
              <br />
              ensure your website’s success in this super-competitive market.
            </motion.p>
            <form className="lg:flex hidden ">
              <div className="box">
                <span>City/Street</span>
                <input type="text" placeholder="Location" />
              </div>
              <div className="box">
                <span>Property Type</span>
                <input type="text" placeholder="Property Type" />
              </div>
              <div className="box">
                <span>Price Range</span>
                <input type="text" placeholder="Price Range" />
              </div>
              <div className="box search-box ">
                <h4 className="px-4">Advance Filter</h4>

                <button className="btn  px-6 bg-green-600  items-center text-center flex justify-center">
                  <FaSearch className="" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
