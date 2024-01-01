import FeatureCard from "./FeatureCard";
import "./Feature.css";
const Feature = () => {
  return (
    <>
      <section className="featured background mt-14 ">
        <div className="container">
          <div className="text-center">
            <h1 className="lg:text-4xl md:text-2xl text-xl my-3 font-cinzel font-semibold">Featured Property Types</h1>
            <p className="font-medium">Find All Type of Property.</p>
          </div>

          <FeatureCard />
        </div>
      </section>
    </>
  );
}

export default Feature
