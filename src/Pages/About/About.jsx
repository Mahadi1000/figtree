import "./about.css";
import bg from "../../assets/aboutBg.jpg";
import logo from "../../assets/logo.png";
import bg2 from "../../assets/bg2.jpg"
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
import Services from "./Services";
const About = () => {
  return (
    <>
      <section className="about">
        <div
          className="w-full bg-cover  bg-no-repeat h-[60vh] flex  flex-col items-center justify-center "
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
            <img className="h-[600px] w-full" src={bg2} alt="" />
          </div>
        </div>
        <div className="mt-10 mx-auto  max-w-7xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold font-cinzel">Meet Our Team </h1>

            <p className="my-4 text-gray-600  ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
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
        <Services></Services>
      </section>
    </>
  );
};

export default About;
