import { team } from "../../Utils/data";
import "./Team.css";

const Team = () => {
  return (
    <>
      <section className="team mt-20 mb-12  background flex justify-center items-center">
        <div className="container">
          <h1 className="lg:text-4xl text-2xl font-cinzel font-semibold text-center">
            Our Featured Agents
          </h1>
          <p className="text-center mt-4 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <div className="gap-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-7 w-full ">
            {team.map((val, index) => (
              <div className="box" key={index}>
                <button className=" px-6 py-3 rounded-3xl text-white border-none bg-orange-500">{val.list} Listings</button>
                <div className="details">
                  <div className="img">
                    <img src={val.cover} alt="" />
                    <i className="fa-solid fa-circle-check"></i>
                  </div>
                  <i className="fa fa-location-dot"></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className="button flex justify-between">
                    <button className="btn text-black">
                      <i className="fa fa-envelope text-black"></i>
                      Message
                    </button>
                    <button className="btn">
                      <i className="fa fa-phone-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Team
