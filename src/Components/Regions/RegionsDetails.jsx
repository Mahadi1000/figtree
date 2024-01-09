/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { regionsData } from "../../Utils/regionsData";
import {  useNavigate, useParams } from "react-router-dom";
import { FaShare, FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";

const RegionsDetails = () => {
  const { areaName } = useParams();
  const [data, setData] = useState([]);
  const [isload, setload] = useState(true);   
  const navigate = useNavigate()
   const decodedAreaName = decodeURIComponent(areaName);
   const selectedRegion = regionsData.find(
     (region) => region.area === decodedAreaName
  );

  useEffect(() => {
    fetch('/Data.json')
    .then((res) => res.json())
    .then((data) => {
      setData(data)
      console.log(data)
      setload(false)
    })
    .catch((error) => {
    console.error(error)
  })
  },[])
   
  const selectedData = Array.isArray(data)
    ? data.filter((item) => item.area === decodedAreaName)
    : [];

  console.log(areaName, selectedData, data, selectedRegion);
  
  const handleCardClick = (item) => {
    navigate(`/propertyDetails/${item.id}`);
  }

  return (
    <div className=" mt-5 md:p-6 lg:p-16 pt-5">
      <div className="h-[400px] ">
        <img
          className="w-full rounded-xl h-full"
          src={selectedRegion?.image[1]}
          alt=""
        />
      </div>
      <div className="mt-10 flex gap-5">
        <div className="w-[60%]">
          <h1 className="text-3xl text-gray-800 font-cinzel">
            Welcome to {selectedRegion.area}{" "}
          </h1>
          <p className="text-gray-900 mt-5 ">{selectedRegion.description}</p>
          {/* collapse 1 */}
          <div className="mt-10">
            <div
              tabIndex={0}
              className="collapse collapse-plus rounded-none border-gray-400 border-t border-b bg-base-200"
            >
              <div className="collapse-title text-gray-600 text-lg font-medium">
                LIFESTYLE
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 p-4">{selectedRegion?.lifestyle}</p>
              </div>
            </div>
            {/* collapse 2 */}
            <div
              tabIndex={0}
              className="collapse collapse-plus rounded-none border-gray-400  border-b bg-base-200"
            >
              <div className="collapse-title text-gray-600 text-lg font-medium">
                TRANSPORTATION
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 p-4">
                  {selectedRegion?.transportation}
                </p>
              </div>
            </div>
            {/* collapse 3 */}
            <div
              tabIndex={0}
              className="collapse collapse-plus rounded-none border-gray-400 border-b bg-base-200"
            >
              <div className="collapse-title text-gray-600 text-lg font-medium">
                ABOUT THE AREA
              </div>
              <div className="collapse-content">
                <p className="text-gray-500 p-4">{selectedRegion?.about}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[40%] ">
          <h1 className="text-lg font-semibold">
            Exclusive properties in {selectedRegion.area}
          </h1>
          <div className="mt-4">
            <div className="flex flex-col gap-5 h-[370px]">
              {selectedData.map((item, index) => (
                <div
                  className="border-[#bbb15bf1] rounded-xl border pb-2 flex-1 "
                  key={index}
                >
                  <div className="h-[70%] flex gap-4">
                    <div>
                      <img className="w-[140px]" src={item.images[0]} alt="" />
                    </div>
                    <div
                      onClick={() => handleCardClick(item)}
                      className="pt-2 cursor-pointer pr-2"
                    >
                      <h2 className="text-gray-500">{item.area}</h2>
                      <h2 className="py-2">{item.title}</h2>
                      <p className="text-[#bbb15bf1] py-2">
                        QAR {item.prices}/mon
                      </p>
                    </div>
                  </div>
                  <div className="h-[30%] flex items-center justify-around">
                    <button className="px-6 flex items-center gap-2 rounded-xl border py-2">
                      {" "}
                      <MdCall></MdCall>
                      Call Now
                    </button>
                    <button className="px-6 rounded-xl border py-2 flex items-center gap-2">
                      <FaWhatsapp></FaWhatsapp> Whatsapp
                    </button>
                    <button className="px-6 rounded-xl border py-2 flex items-center gap-2">
                      <FaShare></FaShare> Share Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegionsDetails
