import { motion } from "framer-motion";
import "./Hero.css";
import { useState } from "react";
const Hero = () => {
  const [propertyType, setPropertyType] = useState("");
  const [location, setLocation] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [budget, setBudget] = useState("");
   const handleSearch = () => {
     // Perform search logic based on selected values
     console.log("Search:", { propertyType, location, propertySize, budget });
   };
  return (
    <>
      <section className="flex mb-16 justify-center items-center">
        <div className="hero">
          <div className="container text-center">
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.5,
                type: "ease-in",
              }}
              className="font-cinzel font-semibold text-white text-xl md:text-2xl uppercase lg:text-3xl"
            >
              Welcome To FigTree Property
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
              <span className="text-2xl "> We manage Better Living. </span>
              <br /> Exceptional service for your real estate journey. <br />{" "}
              Rent or buy in Doha-Qatar. Find your dream home today!
            </motion.p>
          </div>
        </div>
        <form className="flex  lg:bottom-10 bottom-40 flex-wrap justify-center absolute max-w-7xl mx-auto bg-white shadow-lg gap-4 p-6 transition-all duration-300 border border-gray-200 rounded-md">
          <div className="mb-4">
            <label
              htmlFor="propertyType"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Property Type
            </label>
            <select
              id="propertyType"
              className="w-[180px] p-2 border border-gray-300 rounded-md"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option className="" value="">
                Property Type
              </option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="land">Land</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          {/* Location */}
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Location
            </label>
            <select
              id="location"
              className="w-[180px] p-2 border border-gray-300 rounded-md"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">All Cities</option>
              <option value="city1">City 1</option>
              <option value="city2">City 2</option>
              <option value="city3">City 3</option>
              <option value="city4">City 4</option>
              <option value="city5">City 5</option>
            </select>
          </div>
          {/* Property Size */}
          <div className="mb-4">
            <label
              htmlFor="propertySize"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Property Size
            </label>
            <select
              id="propertySize"
              className="w-[180px] p-2 border border-gray-300 rounded-md"
              value={propertySize}
              onChange={(e) => setPropertySize(e.target.value)}
            >
              <option value="">Bedrooms</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
              <option value="extraLarge">Extra Large</option>
              <option value="huge">Huge</option>
            </select>
          </div>
          {/* Budget */}
          <div className="mb-4">
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-gray-600 mb-1"
            >
              Budget
            </label>
            <select
              id="budget"
              className="w-[180px] p-2 border border-gray-300 rounded-md"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            >
              <option value="">Max Price</option>
              <option value="100000">$100,000</option>
              <option value="200000">$200,000</option>
              <option value="300000">$300,000</option>
              <option value="400000">$400,000</option>
              <option value="500000">$500,000</option>
            </select>
          </div>
          <button
            className=" bg-[#00aeff] btn mt-4 hover:bg-[#00aeffbe] text-white rounded-md "
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </section>
    </>
  );
};

export default Hero;
