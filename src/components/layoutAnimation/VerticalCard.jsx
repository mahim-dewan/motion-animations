// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const VerticalCard = ({ data }) => {
  const { title, artist, image, description, category } = data;

  return (
    <div className="flex flex-col w-full max-w-70 p-4 bg-white  rounded-2xl hover:border-white/20 transition-all">
      <div className="relative mb-4 overflow-hidden rounded-xl aspect-square shadow-2xl">
        <motion.img
          layoutId={`image-${data?.id}`}
          src={image}
          alt={title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-2 right-2 px-2 py-1 text-[10px] font-bold uppercase bg-black/60 text-white backdrop-blur-md rounded-md">
            {category}
          </span>
        )}
      </div>

      <div className="space-y-1">
        <motion.h3
          layoutId={`title-${data?.id}`}
          className="text-lg font-bold text-black truncate"
        >
          {title}
        </motion.h3>
        <motion.p
          layoutId={`artist-${data.id}`}
          className="text-sm font-medium text-indigo-400"
        >
          {artist}
        </motion.p>
        <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed pt-2 ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VerticalCard;
