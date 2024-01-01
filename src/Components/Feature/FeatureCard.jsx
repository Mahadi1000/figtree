import { featured } from "../../Utils/data";
import { motion } from "framer-motion";
const FeatureCard = () => {
  return (
    <>
      <motion.div className="flex justify-center items-center flex-wrap gap-6 mx-auto my-4">
        {featured.map((items, index) => (
          <div className="box" key={index}>
            <img src={items.cover} alt="" />
            <h4 className="mt-2 font-semibold">{items.name}</h4>
            <label className="font-thin">{items.total}</label>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default FeatureCard
