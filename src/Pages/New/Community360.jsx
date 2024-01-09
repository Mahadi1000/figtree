import img from "../../assets/360.jpg"
const Community360 = () => {
  return (
    <div className="mt-28 px-5">
      <h1 className="text-center text-4xl ">COMMUNITIES 360° TOUR</h1>
      <p className="text-center my-10 text-lg text-gray-600">
        Explore the future of modern living with our Qatar Hills Estate Reality
        360° Tour. Step into opulence, innovation, and exquisite properties, all
        <br /> from the comfort of your screen. Discover Qatar Hills Estate’s
        world-class amenities and redefine modern living in the green heart of
        Qatar. <br /> Welcome to a new dimension of real estate. Your dream home
        awaits.
      </p>
      <div className="mt-20 w-[400px]">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          <h3 className="text-lg">THE GREEN HEART OF QATAR</h3>
          <h1 className="text-2xl font-cinzel">QATAR HILLS ESTATE</h1>
          <p>
            Wake up to luscious landscaped greens <br /> and pristine fairways
            with an iconic <br /> backdrop of the Burj Khali...
          </p>
          <button className="uppercase mt-5 px-10 py-4 duration-500 text-black hover:text-white bg-white  hover:bg-[#071C35]">
            try it now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Community360
