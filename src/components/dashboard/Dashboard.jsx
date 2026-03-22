// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

const commonVariant = {
  hidden: { opacity: 0, y: 20 },
  view: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.3,
      staggerDirection: 1,
    },
  },
};
const Dashboard = () => {
  return (
    <main className="p-8 bg-slate-50 h-full overflow-auto">
      <motion.div
        className="mb-8"
        variants={commonVariant}
        initial="hidden"
        whileInView="view"
      >
        <motion.h1
          variants={commonVariant}
          className="text-2xl font-bold text-slate-900"
        >
          Dashboard Overview
        </motion.h1>
        <motion.p variants={commonVariant} className="text-slate-500">
          Welcome back to your project control panel.
        </motion.p>
      </motion.div>

      {/* Static Body Section - Grid of Stats */}
      <motion.div
        variants={commonVariant}
        initial="hidden"
        whileInView="view"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
      >
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            variants={commonVariant}
            key={i}
            className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
          >
            <motion.div
              variants={commonVariant}
              className="text-slate-500 text-sm font-medium mb-1"
            >
              Total Revenue
            </motion.div>
            <motion.div
              variants={commonVariant}
              className="text-2xl font-bold text-slate-900"
            >
              $45,231.89
            </motion.div>
            <motion.div
              variants={commonVariant}
              className="mt-2 text-xs text-green-600 font-medium"
            >
              +20.1% from last month
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Placeholder for Data Table or Charts */}
      <motion.div
        variants={commonVariant}
        initial={{ opacity: 0, y: 40 }}
        whileInView="view"
        className="bg-white rounded-xl border border-slate-200 shadow-sm h-30 flex items-center justify-center border-dashed"
      >
        <span className="text-slate-400 italic">
          Main Content Area (Charts/Tables)
        </span>
      </motion.div>
    </main>
  );
};

export default Dashboard;
