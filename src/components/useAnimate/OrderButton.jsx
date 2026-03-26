import { useAnimate } from "motion/react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { useState } from "react";

const OrderButton = () => {
  const [scope, animate] = useAnimate();
  const [isDone, setIsDone] = useState(false);

  const handleAnimate = async () => {
    await animate(".text", { display: "none" }, { duration: 0.3 });
    await animate("button", { width: "0px", padding: 0 }, { duration: 0.5 });
    await animate("button", {
      width: "6rem",
      height: "6rem",
      borderRadius: "100%",
      scale: [1.2, 0.8, 1],
    });
    await animate(
      "svg",
      { display: "block", opacity: 1, scale: 1.2 },
      { duration: 0.1 },
    );
    await animate(".check-path", { pathLength: 1 }, { duration: 0.3 });

    setIsDone(true);
  };

  return (
    <div
      ref={scope}
      className="relative p-4 w-full min-h-screen flex items-center justify-center"
    >
      <motion.button
        style={{ width: "16rem" }}
        onClick={handleAnimate}
        disabled={isDone}
        className="h-22 bg-linear-to-l from-blue-500 to-purple-600 rounded-lg cursor-pointer text-xl font-black"
      >
        <span className="text">Place Order Now</span>
      </motion.button>

      <motion.svg
        initial={{ display: "none", opacity: 0, scale: 0.8 }}
        xmlns="http://www.w3.org/2000/svg"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check-icon lucide-check absolute top-1/2 left-1/2 -translate-1/2"
      >
        <motion.path
          className="check-path"
          initial={{ pathLength: 0 }}
          d="M4 12 9 17 20 6"
        />
      </motion.svg>
    </div>
  );
};

export default OrderButton;
