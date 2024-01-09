import { Link } from "react-router-dom";
import Search from "../../Components/Search/Search";
import fetchData from "../../Utils/useFetchData";
import { GiBathtub } from "react-icons/gi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { ThreeDots } from "react-loader-spinner";
import { Helmet } from "react-helmet-async";
const Property = () => {
  const { data } = fetchData();


  console.log(data);
  return (
    <div>
      <Helmet>
        <title>FigTree Property | Home</title>
        <meta
          name="Find Your Dream Property in FigTree Property!"
          content="We manage Better Living. Exceptional service for your real estate journey. Rent or buy in Doha-Qatar. Find your dream home today"
        />
      </Helmet>
      <div className="mt-28">
        <Search />
      </div>
      <div className="mx-auto  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
        {/* Property Card */}
        <h1 className="mx-auto max-w-6xl text-3xl">
          Available Property: {data.length}{" "}
        </h1>
        {data.length === 0 ? (
          <div className="text-center mt-6 gap-3 flex justify-center items-center">
            {" "}
            <ThreeDots
              className=""
              visible={true}
              height={80}
              width={80}
              color="#4fa94d"
              radius={9}
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />{" "}
            No properties found.
          </div>
        ) : (
          <div className="grid mx-auto max-w-6xl  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {data.map((property) => (
              <div
                key={property.id}
                className="bg-white gap-3 flex flex-col lg:flex-row  justify-center items-center shadow-lg rounded-md "
              >
                {/* Image on the left side */}
                <div className="lg:w-1/2  ">
                  <img
                    src={property.images[0]}
                    alt=""
                    className="object-cover w-full h-full lg:h-64"
                  />
                </div>
                {/* Details on the right side */}
                <div className="p-4 lg:w-1/2 ">
                  <h1>Area: {property.area}</h1>
                  <h2 className="text-xl font-semibold mb-2">
                    {property.title}
                  </h2>
                  <p className="text-gray-600 mb-2">{property.location}</p>
                  <p className="text-gray-600 mb-2">{property.propertyType}</p>
                  <p className="text-blue-600  font-bold">
                    <span className="text-lg">{property.prices}</span>{" "}
                    <span className="text-sm">QAR/MONTH</span>
                  </p>
                  <div>
                    <p className="flex gap-5">
                      <span className="flex items-center gap-3">
                        <GiBathtub />
                        {property.bathrooms}
                      </span>
                      <span className="flex items-center gap-3">
                        <MdOutlineBedroomParent />
                        {property.bedrooms}
                      </span>
                    </p>
                  </div>
                  <Link
                    to={{
                      pathname: `/propertyDetails/${property.id}`,
                      state: { propertyData: property },
                    }}
                    className="mt-4 block w-full bg-blue-500 text-white hover:bg-blue-600 text-center py-2 rounded"
                  >
                    MORE DETAILS
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Property;
