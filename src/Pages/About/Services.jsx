import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const Services = () => {
const images = [
  "https://picsum.photos/200/300?image=1050",
  "https://picsum.photos/300/300?image=1006",
  "https://picsum.photos/300/300?image=806",
  "https://picsum.photos/300/300?image=406",
  "https://picsum.photos/300/300?image=506",
  "https://picsum.photos/300/300?image=501",
    "https://ibb.co/BZhRNtT",
  
];
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center">
        <h1 className="text-4xl font-bold mt-20">Services</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
      </div>
      <div className="masonry-grid">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry columnsCount={4} gutter="10px">
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{
                  width: "100%",
                  display: "block",
                  transition: "transform 0.3s ease-in-out",
                }}
                alt=""
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
};

export default Services;
