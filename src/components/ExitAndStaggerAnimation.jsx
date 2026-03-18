import { Trash2 } from "lucide-react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

/* =========================
   Animation Variants
========================= */
const cardVariant = {
  start: { opacity: 0, scale: 0.98 },
  view: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const exitAnimation = {
  opacity: 0,
  x: -40,
};

/* =========================
   Component
========================= */
const ExitAndStaggerAnimation = () => {
  const [items, setItems] = useState([
    { id: 1, text: "Finalize MongoDB Schema" },
    { id: 2, text: "Optimize Express Middleware" },
    { id: 3, text: "Build React Component Library" },
    { id: 4, text: "Test Node.js API Endpoints" },
  ]);

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <motion.div
      variants={cardVariant}
      initial="start"
      whileInView="view"
      className="flex justify-center items-center p-4"
    >
      <div className="w-full md:w-md min-h-96 relative overflow-hidden bg-white rounded-xl shadow-lg pb-20 border border-gray-200">
        {/* Header */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Tasks
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Manage your MERN stack progress.
          </p>

          {/* Task List */}
          <motion.ul
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            className="space-y-3"
          >
            <AnimatePresence mode="popLayout">
              {items.length > 0 ? (
                items.map((item) => (
                  <motion.li
                    layout
                    variants={itemVariant}
                    exit={exitAnimation}
                    key={item.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg group hover:bg-red-50 transition-colors duration-200"
                  >
                    <span className="text-gray-700 font-medium">
                      {item.text}
                    </span>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 text-gray-400 hover:text-red-600 hover:bg-white rounded-full transition-all duration-200 shadow-sm"
                      aria-label="Delete item"
                    >
                      <Trash2 size={18} />
                    </button>
                  </motion.li>
                ))
              ) : (
                <p className="text-center py-10 text-gray-400 italic">
                  All caught up!
                </p>
              )}
            </AnimatePresence>
          </motion.ul>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 absolute inset-x-0 bottom-0 bg-gray-50 border-t border-gray-100 text-right">
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            {items.length} Items Remaining
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ExitAndStaggerAnimation;
