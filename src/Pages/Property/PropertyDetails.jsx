import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLoaderData, useParams } from "react-router-dom";
import "./modal.css";
import { useEffect, useState } from "react";

const PropertyDetails = () => {
  // const data = useLoaderData();
  const [data, setData] = useState([]);
  const [isload, setload] = useState(true);   
  console.log(data);
  const { id } = useParams();
  const idInt = parseInt(id);

  useEffect(() => {
    fetch("/Data.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setload(false);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  // Ensure data is an array
  const dataArray = Array.isArray(data) ? data : [];

  const singleData = dataArray.find((item) => item.id === idInt);

  if (!singleData) {
    return <p>Property not found.</p>;
  }

  // State to store the lightbox open status

  return (
    <div className="container mx-auto mt-24 max-w-7xl flex-col">
      <h1 className="text-3xl text-center font-bold mb-4">
        {singleData.title}
      </h1>
      <div className="flex-col gap-8">
        <div className="mb-8 md:mb-0 max-w-5xl mx-auto">
          {/* Carousel */}
          <Carousel>
            {singleData.images.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slide ${index}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="max-w-5xl mx-auto p-5">
          <h1 className="text-xl mb-3 font-medium">Description</h1>
          <p className="">{singleData.description}</p>
        </div>
        <div className="max-w-5xl mx-auto p-5 ">
          <h1 className="text-xl mb-3 font-medium">Property feature :</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <h3>Area: {singleData.area}</h3>
            <h3>Property Type: {singleData.propertyType}</h3>
            <h3>Furnishing: {singleData.furnishing}</h3>
            <h3>Floor No: {singleData.floorNo}</h3>
            <h3>Balcony / Terrace: {singleData?.balconyTerrace}</h3>
            <h3>Total Bedrooms: {singleData.totalBedrooms}</h3>
            <h3>Total Bathrooms: {singleData.totalBathrooms}</h3>
            <h3>Master Bedrooms: {singleData.masterBedrooms}</h3>
            <h3> Living / Dining:{singleData.livingDining}</h3>
            <h3>Parking Space: {singleData.parkingSpace}</h3>
            <h3>Kitchen Type: {singleData.kitchenType} </h3>
            <h1>AC Type: {singleData.acType} </h1>
            <h3>Facilities: {singleData.attractions}</h3>
            <h3>Utilities/Bill: {singleData.utilitiesBill}</h3>
            <h3>Duration: {singleData.duration}</h3>
            <h3>Requirements: {singleData.requirements}</h3>
          </div>
          <div className="mt-3">
            <h1 className="text-xl mb-3 font-medium">Features:</h1>
            <div>
              <ol className="list-disc grid grid-cols-2 lg:grid-cols-3 mx-auto px-5">
                {singleData.features.map((li, index) => (
                  <li className=" " key={index}>
                    {li}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
