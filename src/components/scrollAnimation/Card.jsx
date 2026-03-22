import {
  // eslint-disable-next-line no-unused-vars
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, useState, useEffect } from "react";

const Card = ({ item, container }) => {
  const cardRef = useRef(null);
  const [scrollContainer, setScrollContainer] = useState(null);

  // wait until container is mounted
  useEffect(() => {
    if (container?.current) {
      setScrollContainer(container.current);
    }
  }, [container]);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    container: scrollContainer,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const translate = useTransform(scrollYProgress, [0, 1], [-100, 80]);
  const blur = useTransform(scrollYProgress, [0, 0.5, 0.8, 1], [2, 0, 2, 10]);

  return (
    <motion.div
      ref={cardRef}
      style={{ opacity: opacity }}
      className="flex flex-col md:flex-row items-center justify-center pb-6 w-full md:w-3/4 mx-auto"
    >
      <motion.div
        className="flex-1 pr-6"
        style={{
          y: translate,
          filter: useMotionTemplate`blur(${blur}px)`,
        }}
      >
        <h2 className="text-4xl font-bold text-white mb-2">{item.title}</h2>
        <p className="text-lg text-gray-300">{item.description}</p>
      </motion.div>
      <div className="shrink-0">
        <img src={item.image} alt={item.title} className="w-full rounded-lg" />
      </div>
    </motion.div>
  );
};

export default Card;
