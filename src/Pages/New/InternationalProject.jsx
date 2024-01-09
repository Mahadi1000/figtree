import Button from "../../Components/Button/Button";
import img1 from "../../assets/International-Properties.jpg"
import img2 from "../../assets/egypt.jpg"
import img3 from "../../assets/INDIA.jpg"
import img4 from "../../assets/Pakistan.jpg"
import img5 from "../../assets/Turkey.jpg"
import img6 from "../../assets/KSA.jpg"
import img7 from "../../assets/LEBANON.jpg"
const InternationalProject = () => {
  return (
    <div className="my-20">
      <div>
        <img src={img1} alt="" />
      </div>
      <div className="mt-20 text-center">
        <h1 className="text-4xl font-cinzel">FigTree INTERNATIONAL PROJECTS</h1>
        <p className="mt-10 text-lg text-gray-500">
          As one of the most innovative, customer-focused and trusted Real
          Estate groups worldwide, Emaar has built a solid reputation as the
          name behind some of Dubai’s most significant developments and
          landmarks. Emaar International carries this global legacy with a
          portfolio of international projects in the most exclusive locations,
          creating wealth and long-term value for local and international
          clientele across Egypt, Saudi Arabia, Morocco, India, Pakistan,
          Turkey, Lebanon and the United States.
        </p>
        <h3 className="mt-10 text-xl font-cinzel">
          OUR DEVELOPMENTS ALL OVER THE WORLD
        </h3>
        <p className="my-10 text-lg text-gray-500">
          Explore our destinations and discover our properties in the most
          fascinating locations around the world.
        </p>
      </div>
      <div className="my-10 px-4 flex-1 md:flex justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img2} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">EGYPT</h1>
          <p className="py-10 text-lg text-gray-500">
            Emaar Misr is one of Egypt’s largest real estate companies and the
            developer of iconic projects such as Uptown Cairo, Cairo Gate,
            Mivida and Marassi. Its notable developments provide significant
            impetus to the local economy by creating vibrant mix-use projects
            that define a new way of life.
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="my-10 px-4 flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img3} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">INDIA</h1>
          <p className="py-10 text-lg text-gray-500">
            Emaar started its business operations in India in 2005 and has since
            created a portfolio of world-class living spaces and work
            environments in Gurugram, Delhi, Mohali, Lucknow, Jaipur, Indore and
            Chennai. The company has over 11,500 residential and commercial
            units in its portfolio and 8,500 units currently under development.
            Each of our properties has unique design aesthetics, providing an
            aspirational lifestyle within a thriving community supported by
            Emaar’s community management team.
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="my-10 px-4 flex-1 md:flex justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img4} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">PAKISTAN</h1>
          <p className="py-10 text-lg text-gray-500">
            Emaar Pakistan is pioneering the concept of building world-class
            master-planned communities that integrate residential amenities with
            schools, healthcare, shopping malls, hotels, dining, and
            entertainment. Emaar Oceanfront is the biggest oceanfront community
            in Karachi consisting of luxurious high-rise towers, of which five
            have already been delivered. Additionally, Canyon Views in Islamabad
            offers superb villas, townhomes and apartments with the most
            exquisite architecture, facilities, security, views and green open
            spaces available in the capital.
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="my-10 px-4 flex flex-col md:flex-row-reverse  justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img5} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">TURKEY</h1>
          <p className="py-10 text-lg text-gray-500">
            Underlining its reputation as a high-quality developer in the
            Turkish real estate market, Emaar Turkey pioneered the development
            of integrated communities. Its exceptional portfolio includes the
            fully sold-out Tuscan Valley project, and Emaar Square, presenting
            world-class luxury brands in hospitality and retail, such as the
            Address five-star hotel and a high-end shopping mall featuring the
            world’s most prestigious labels.
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="my-10 px-4 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img6} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">SAUDI ARABIA</h1>
          <p className="py-10 text-lg text-gray-500">
            Emaar Middle East is one of Saudi Arabia’s Real Estate companies
            known for redefining contemporary living by developing distinctive
            properties that offer enhanced quality of life, and incomparable
            value including one of Emaar Middle East’s latest achievements in
            Saudi Arabia, the highly successful and fully occupied community
            mall in Jeddah Gate.
          </p>
          <Button></Button>
        </div>
      </div>
      <div className="my-10 px-4 flex flex-col md:flex-row-reverse justify-center items-center">
        <div className="md:w-[70%] p-5">
          <img className="w-full" src={img7} alt="" />
        </div>
        <div className="md:w-[30%]  ">
          <h1 className="text-xl font-cinzel">LEBANON</h1>
          <p className="py-10 text-lg text-gray-500">
            Emaar earned hearts and trust by building BeitMisk in Lebanon.
            BeitMisk is a 655,000 sqm community unravelling itself in the
            mountains and surrounded by a vast community center with retail and
            public squares.
          </p>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}

export default InternationalProject
