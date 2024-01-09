import CountUp, { useCountUp } from "react-countup";
import { awards } from "../../Utils/Data";
import "./award.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Award = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="awards  bg-fixed padding mt-8">
        <div data-aos-duration="500" data-aos="zoom-in" className="container">
          <div>
            <h1 className="font-cinzel text-2xl md:text-3xl my-3">
              Our Awards
            </h1>
            <p className="text-center text-lg md:text-xl text-wrap text-white">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </p>
          </div>
          <div className="content flex justify-center gap-8 flex-wrap">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div
                  className="icon md:w-[90px] md:h-[90px] w-[60px] h-[60px]
                 flex justify-center items-center"
                >
                  <span>{val.icon}</span>
                </div>
                <h1 className="text-3xl">
                  {" "}
                  <CountUp
                    enableScrollSpy
                    start={5}
                    end={val.num}
                    duration={1.5}
                  />{" "}
                  M
                </h1>
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Award;
