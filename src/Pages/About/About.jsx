/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import bg from "../../assets/aboutBg.jpg";
import logo from "../../assets/logo.png";
import img1 from "../../assets/about-img1.png"
import img2 from "../../assets/about-img2.png"
import img3 from "../../assets/about-img3.png"
import img4 from "../../assets/about-img4.jpg"
import img6 from "../../assets/about-img6.jpg"
import img5 from "../../assets/about-img5.png"
import { motion } from "framer-motion";
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import team3 from '../../assets/team-1.jpg'
import team4 from '../../assets/agent1.jpg'
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { Link } from "react-router-dom";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import News from "../../Components/News/News";
import { Helmet } from "react-helmet-async";
const About = () => {
  const images = [{ src: img1 }, { src: img4 }, { src: img5 }, { src: img2 },{src:img3}];
  return (
    <>
      <Helmet>
        <title>FigTree Property | About Us</title>
        <meta
          name="Find Your Dream Property in FigTree Property "
          content="We manage Better Living. Exceptional service for your real estate journey. Rent or buy in Doha-Qatar. Find your dream home today!"
        />
      </Helmet>
      <section className="about">
        <div
          className="w-full bg-cover bg-fixed bg-no-repeat h-[70vh] flex  flex-col items-center justify-center "
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.63), rgba(0, 0, 0, 0.747)), url(${bg})`,
          }}
        >
          <motion.div
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.5,
              type: "ease-in",
            }}
            className=""
          >
            <img
              className="lg:w-28 w-14 mt-6"
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-once="false"
              data-aos-duration="1000"
              src={logo}
              alt=""
            />
          </motion.div>
          <motion.div
            initial={{ y: "1rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1.8,
              type: "ease-in",
            }}
          >
            <h1 className="lg:text-4xl md:text-2xl text-xl text-white  font-bold font-cinzel mt-16">
              ABOUT
            </h1>
          </motion.div>
        </div>
        <div>
          <div className="text-center my-16">
            <h1 className="text-5xl font-medium font-cinzel">
              Reimagining real estate to <br /> make it easier to unlock.
            </h1>
            <p className="text-gray-700 font-normal font-manrope mt-5 ">
              On the other hand, we denounce with righteous indignation and
              dislike men who <br /> are so beguiled and demoralized by the
              charms of pleasure of the moment, <br /> so blinded by desire,
              that they cannot foresee the pain and trouble.
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                {images.map((item, index) => (
                  <div key={index}>
                    <img src={item.src} alt="" />
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
        <div className="lg:h-[550px] mt-28">
          <h1 className="text-center text-4xl font-cinzel ">WHO WE ARE</h1>
          <div className="max-w-6xl mt-20 gap-10 flex-1 md:flex  mx-auto  ">
            <div className="px-10 bg-[#f0f0f198] rounded-xl py-10 md:w-1/2">
              <h1 className="text-xl font-cinzel font-medium">
                BOARD OF DIRECTORS
              </h1>
              <p className="text-wrap my-8 font-manrope ">
                Emaar's leadership team is comprised of the industry's most
                experienced leaders, who have secured our place as one of the
                world's greatest real estate and lifestyle developers.
              </p>
              <button className="uppercase px-16 hover:text-white py-3 bg-[#9D9D9C] ">
                Learn More
              </button>
            </div>
            <div className="md:w-1/2 bg-[#f0f0f198] rounded-xl px-10 py-10">
              <h1 className="text-xl font-cinzel">PRINCIPAL OFFICERS</h1>
              <p className="text-wrap my-8 font-manrope">
                Emaar has structured a motivated and passionate team of officers
                with an unwavering commitment to excellence, despite our
                numerous achievements, awards and accolades.
              </p>
              <button className="uppercase hover:text-white  px-16 py-3 bg-[#9D9D9C] ">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="container my-20 w-full flex justify-center items-center mx-auto ">
          <div className="left row w-1/2 ">
            <h1 className="mb-6 text-4xl font-bold ">Our Agency Story</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <button className="btn ">More About Us</button>
          </div>
          <div className="right flex justify-center items-center row w-1/2">
            <img className="h-[600px] w-full" src={img6} alt="" />
          </div>
        </div>
        <div className="mt-10 mx-auto  max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-cinzel">Meet Our Team </h1>

            <p className="my-4 text-gray-600  ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </p>
          </div>

          <div className="flex mt-14 justify-center flex-wrap mx-auto gap-5">
            {/* card 1 */}
            <div className="card relative overflow-hidden">
              <div className="h-[400px] ">
                <img className="object-contain h-full" src={team1} alt="" />
                <div className="Card-body">
                  <h1 className="text-xl text-center font-semibold font-cinzel">
                    Keith Bailey
                  </h1>
                  <h2 className="text-center font-normal">CEO</h2>
                  <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    malesuada, odio sit amet pharetra vehicula, sapien leo
                    egestas magna, vitae auctor diam magna cursus arcu.
                  </p>
                  <div className="flex gap-5 justify-center">
                    <Link>
                      <SlSocialFacebook />
                    </Link>
                    <Link>
                      <SlSocialLinkedin />
                    </Link>
                    <Link>
                      {" "}
                      <BsTwitterX />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card -2 */}
            <div className="card relative overflow-hidden">
              <div className="h-[400px] ">
                <img className="object-contain h-full" src={team2} alt="" />
                <div className="Card-body">
                  <h1 className="text-xl text-center font-semibold font-cinzel">
                    Kathleen Grant
                  </h1>
                  <h2 className="text-center font-normal">Manager</h2>
                  <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    malesuada, odio sit amet pharetra vehicula, sapien leo
                    egestas magna, vitae auctor diam magna cursus arcu.
                  </p>
                  <div className="flex gap-5 justify-center">
                    <Link>
                      <SlSocialFacebook />
                    </Link>
                    <Link>
                      <SlSocialLinkedin />
                    </Link>
                    <Link>
                      {" "}
                      <BsTwitterX />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="card relative overflow-hidden">
              <div className="h-[400px] ">
                <img
                  className="object-contain h-full w-[280px]"
                  src={team3}
                  alt=""
                />
                <div className="Card-body">
                  <h1 className="text-xl text-center font-semibold font-cinzel">
                    Danielle Murray
                  </h1>
                  <h2 className="text-center font-normal">Funder</h2>
                  <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    malesuada, odio sit amet pharetra vehicula, sapien leo
                    egestas magna, vitae auctor diam magna cursus arcu.
                  </p>
                  <div className="flex gap-5 justify-center">
                    <Link>
                      <SlSocialFacebook />
                    </Link>
                    <Link>
                      <SlSocialLinkedin />
                    </Link>
                    <Link>
                      {" "}
                      <BsTwitterX />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="card relative overflow-hidden">
              <div className="h-[400px] ">
                <img
                  className="object-contain h-full w-[280px]"
                  src={team4}
                  alt=""
                />
                <div className="Card-body">
                  <h1 className="text-xl text-center font-semibold font-cinzel">
                    Thomas Stevens
                  </h1>
                  <h2 className="text-center font-normal">Manager</h2>
                  <p className="mt-5 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    malesuada, odio sit amet pharetra vehicula, sapien leo
                    egestas magna, vitae auctor diam magna cursus arcu.
                  </p>
                  <div className="flex gap-5 justify-center">
                    <Link>
                      <SlSocialFacebook />
                    </Link>
                    <Link>
                      <SlSocialLinkedin />
                    </Link>
                    <Link>
                      {" "}
                      <BsTwitterX />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Testimonial></Testimonial>
        </div>
        <div>
          <News></News>
        </div>
      </section>
    </>
  );
};

export default About;
