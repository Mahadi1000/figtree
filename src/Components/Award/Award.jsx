import CountUp, { useCountUp } from "react-countup";
import { awards } from "../../Utils/data";
import "./award.css";
const Award = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <>
      <section className="awards padding mt-8">
        <div className="container">
          <div>
            <h1 className="font-cinzel text-3xl my-3">Our Awards</h1>
            <p className="text-center text-xl text-white">
              Over 1,24,000+ Happy User Bieng With Us Still They Love Our
              Services
            </p>
          </div>
          <div className="content flex justify-center gap-8 flex-wrap">
            {awards.map((val, index) => (
              <div className="box" key={index}>
                <div className="icon flex justify-center items-center">
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
