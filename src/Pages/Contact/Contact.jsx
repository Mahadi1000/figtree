import "./contact.css";
import bg from "../../assets/aboutBg.jpg";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>FigTree Property | Home</title>
        <meta
          name="Find Your Dream Property in FigTree Property!"
          content="We manage Better Living. Exceptional service for your real estate journey. Rent or buy in Doha-Qatar. Find your dream home today"
        />
      </Helmet>
      <div
        className="w-full bg-cover bg-fixed bg-no-repeat h-[60vh] flex  flex-col items-center justify-center "
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
            Contact
          </h1>
        </motion.div>
      </div>
      <div className="max-w-7xl lg:flex flex-wrap justify-around mx-auto mt-16">
        <ContactForm></ContactForm>
        <div className="flex-col  ">
          <div className="p-10 bg-white shadow-xl">
            <h1 className="text-xl font-semibold">For inquiries contact:</h1>
            <div className="my-4">
              <h2 className="font-medium">Amy Miller</h2>
              <p>
                Public Relations Manager <br /> 774 NE 84th St Miami, FL 33879{" "}
                <br />
                amy.miller@houzez.com
              </p>
            </div>
            <div>
              <h2 className="font-medium">Kyle Parker</h2>
              <p>
                Public Relations Manager <br /> 774 NE 84th St Miami, FL 33879{" "}
                <br />
                amy.miller@houzez.com
              </p>
            </div>
          </div>
          <div className="mt-3 lg:mt-28 p-10 bg-white shadow-xl">
            <h1 className="font-medium">Corporate Headquarters</h1>
            <p>
              1584 Biscayne Boulevard <br /> Miami FL, 33176
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
