import React, { useState } from "react";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, LayoutGroup, motion } from "motion/react";

const mediaData = [
  {
    id: 1,
    title: "Interstellar",
    artist: "Christopher Nolan",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=80",
    description:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    category: "Movie",
  },
  {
    id: 2,
    title: "Starboy",
    artist: "The Weeknd",
    image:
      "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=400&q=80",
    description:
      "The third studio album by Canadian singer The Weeknd, featuring a blend of R&B and synth-pop.",
    category: "Music",
  },
  {
    id: 3,
    title: "Midnight City",
    artist: "M83",
    image:
      "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=400&q=80",
    description:
      "An electronic masterpiece that captures the neon-lit energy of an urban landscape at night.",
    category: "Music",
  },

  {
    id: 5,
    title: "Dune: Part Two",
    artist: "Denis Villeneuve",
    image:
      "https://images.unsplash.com/photo-1506466010722-395aa2bef877?w=400&q=80",
    description:
      "Paul Atreides unites with Chani and the Fremen while on a warpath of revenge against the conspirators.",
    category: "Movie",
  },
  {
    id: 6,
    title: "Cyberpunk 2077",
    artist: "Marcin Przybyłowicz",
    image:
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&q=80",
    description:
      "The official soundtrack featuring high-octane industrial beats and futuristic ambient soundscapes.",
    category: "Soundtrack",
  },
];

const LayoutContainer = () => {
  const [current, setCurrent] = useState(null);

  return (
    <div className="w-full relative min-h-screen">
      {current && (
        <div
          onClick={() => setCurrent(null)}
          className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-xs"
        ></div>
      )}

      <AnimatePresence>
        {current && (
          <motion.div
            layoutId={`card-${current?.id}`}
            className="fixed top-20 left-1/2 -translate-x-1/2 shadow-2xl z-20"
          >
            <VerticalCard data={current} />
          </motion.div>
        )}
      </AnimatePresence>

      <div className=" flex flex-col items-center justify-center gap-6">
        {mediaData?.map((data) => (
          <HorizontalCard
            key={data?.id}
            data={data}
            setCurrent={setCurrent}
            isActive={current?.id === data?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LayoutContainer;
