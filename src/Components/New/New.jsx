import img1 from "../../assets/360.jpg"
import img2 from "../../assets/international.jpg"
import img3 from "../../assets/blog.jpg"
import { Link } from "react-router-dom";
const New = () => {
  return (
    <div className="my-10 px-10">
      <div className="flex items-center">
        <h2 className="text-lg text-gray-500 my-5">NEW</h2>
        <hr className="w-[150px]  ml-4 " />
      </div>
      <div className="flex justify-around md:flex-row flex-col lg:px-0 px-5 ">
        <div>
          <Link to={"/community360"}>
            {" "}
            <div className="w-[387px] h-[338px]">
              <img src={img1} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              Communities 360° Tour
            </h1>
            <p>
              Experience Dubai Hills Estate communities and <br /> amenities
              from the comfort of your home.
            </p>
            <Link to={"/community360"}>
              {" "}
              <button className="uppercase mt-5 px-10 py-4 text-white  bg-[#071C35]">
                Try it now
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/international"}>
            {" "}
            <div className="w-[387px] h-[338px]">
              <img src={img2} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              International Projects
            </h1>
            <p>Explore our portfolio of international projects.</p>
            <Link to={"/international"}>
              {" "}
              <button className="uppercase mt-5  px-10 py-4 text-white  bg-[#071C35]">
                Read more
              </button>
            </Link>
          </div>
        </div>
        <div>
          <Link to={"/blog"}>
            {" "}
            <div className="w-[387px] h-[338px]">
              <img src={img3} alt="" />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <h1 className="uppercase text-3xl font-cinzel my-5 text-center">
              Discover our Blogs
            </h1>
            <p>
              Click to read our top tips and tricks for property <br />{" "}
              management, home decoration and more.
            </p>
            <Link to={"/blog"}>
              {" "}
              <button className="uppercase mt-5 px-10 py-4 text-white  bg-[#071C35]">
                Read more
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New
