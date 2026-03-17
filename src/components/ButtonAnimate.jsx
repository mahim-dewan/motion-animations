// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const ButtonAnimate = () => {
  return (
    <motion.div
      whileHover={{ y: -10, rotateX: 25, rotateY: 20 }}
      whileTap={{ y: 10 }}
      className="relative group"
    >
      <motion.button
        transition={{ duration: 300, ease: "easeInOut" }}
        className="bg-gray-900 px-6 py-4 rounded-lg text-2xl cursor-pointer group-hover:text-cyan-400"
      >
        Subscribe
      </motion.button>
      <span className="w-4/5 h-0.5 absolute inset-x-0 bottom-0 bg-linear-to-l from-transparent via-cyan-400 to-transparent mx-auto"></span>
      <span className="w-full h-1 absolute inset-x-0 bottom-0.5 bg-linear-to-l from-transparent via-cyan-400 blur-md to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
    </motion.div>
  );
};

export default ButtonAnimate;
