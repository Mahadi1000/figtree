/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { footer } from "../../Utils/Data";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <section className="footerContact  mt-20">
        <div className="container">
          <div className="send flex justify-between">
            <div className="text px-6">
              <h1 className="font-cinzel">Do You Have Questions ?</h1>
              <p className="font-manrope">We'll help you to grow your career and growth.</p>
            </div>
            <Link to={"/contact"}>
              {" "}
              <button className="px-6 py-2 rounded-3xl font-bold bg-[#dededffb] text-black">
                Contact Us Today
              </button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container flex flex-row-reverse">
          <div className="box">
            <div className="logo px-7">
              <img src={logo} alt="" />
              <h2 className="font-manrope">Do You Need Help With Anything?</h2>
              <p>
                Receive updates, hot deals, tutorials, discounts sent straignt
                in your inbox every month
              </p>

              <div className="gap-3  flex">
                <input
                  className="rounded-xl"
                  type="text"
                  placeholder="Email Address"
                />
                <button className="btn btn-outline btn-secondary">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {footer.map((val, index) => (
            <div key={index} className="box">
              <h3 className="font-manrope">{val.title}</h3>
              <ul>
                {val.text.map((items, index) => (
                  <li key={index}> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="legal">
        <span>© 2023 FigTree. Designd By Mahadi.</span>
      </div>
    </>
  );
};

export default Footer;
