// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const HorizontalCard = ({ data, setCurrent, isActive }) => {
  if (isActive) {
    return <div className="w-full max-w-lg h-24" />;
  }

  return (
    <motion.div
      layoutId={`card-${data.id}`}
      onClick={() => setCurrent(data)}
      className="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-white/10 group cursor-pointer w-1/2 max-w-lg overflow-hidden"
    >
      <motion.img
        layoutId={`image-${data?.id}`}
        src={data?.image}
        alt={data?.title}
        className="w-16 h-16 rounded-lg object-cover shadow-md"
      />
      <div className="flex-1 min-w-0">
        <motion.h3
          layoutId={`title-${data?.id}`}
          className="text-sm font-bold text-white truncate"
        >
          {data?.title}
        </motion.h3>
        <motion.p
          layoutId={`artist-${data?.id}`}
          className="text-xs text-gray-400 truncate"
        >
          {data?.artist}
        </motion.p>
      </div>
      <button className="p-2.5 bg-indigo-600 rounded-full hover:bg-indigo-500 hover:scale-110 transition-all shadow-lg shadow-indigo-500/20">
        <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </button>
    </motion.div>
  );
};

export default HorizontalCard;
