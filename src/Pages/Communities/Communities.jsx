import { Link } from "react-router-dom";
import { regionsData } from "../../Utils/regionsData";

const Communities = () => {
  return (
    <div className="px-5 mt-32">
      <h1 className="text-4xl font-semibold ">FigTree COMMUNITIES</h1>
      <div className="mt-10 grid gap-8 grid-cols-1 lg:grid-cols-2 ">
        {regionsData.map((item, index) => (
          <div className="flex " key={index}>
            <Link to={`/regions/${encodeURIComponent(item.area)}`}>
              <div>
                <img className="h-[350px]  " src={item.image} alt="" />
              </div>
              <h1 className="text-xl hover:text-blue-500 py-4 font-manrope font-medium">{item.area}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Communities
