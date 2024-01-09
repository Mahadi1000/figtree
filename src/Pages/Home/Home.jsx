
import Leading from "../../Components/Leading/Leading";
import Feature from "../../Components/Feature/Feature";
import Hero from "../../Components/Hero/Hero";
import News from "../../Components/News/News";
import FeatureCommunity from "../../Components/FeaturedListing/FeatureCommunity";
import { Helmet } from "react-helmet-async";
import Regions from "../../Components/Regions/Regions";
import New from "../../Components/New/New";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FigTree Property | Home</title>
        <meta
          name="Find Your Dream Property in FigTree Property!"
          content="We manage Better Living. Exceptional service for your real estate journey. Rent or buy in Doha-Qatar. Find your dream home today"
        />
      </Helmet>
      <Hero></Hero>
      <Regions></Regions>
      <Feature></Feature>
      <Leading></Leading>
      <New></New>
      <FeatureCommunity></FeatureCommunity>
      <News></News>
    </div>
  );
};

export default Home;
