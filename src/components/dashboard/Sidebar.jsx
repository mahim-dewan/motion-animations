import {
  LayoutDashboard,
  Users,
  Settings,
  BarChart3,
  Package,
  SidebarIcon,
} from "lucide-react";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Package, label: "Products" },
  { icon: Users, label: "Customers" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
];

const sidebarVariants = {
  open: { width: "240px" },
  close: { width: "96px" },
};

const contentVariants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
};
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarState = isOpen ? "open" : "close";

  return (
    <motion.div
      variants={sidebarVariants}
      initial={false}
      animate={sidebarState}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`min-h-full  bg-slate-900 text-white flex flex-col border-r border-slate-800 `}
    >
      <div
        className={`p-6 h-16 text-2xl font-bold tracking-tight text-blue-400 flex items-center justify-between gap-6 ${isOpen ? "" : "ml-2"}`}
      >
        <AnimatePresence>
          {isOpen && (
            <motion.span
              variants={contentVariants}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              DashCore
            </motion.span>
          )}
        </AnimatePresence>
        <SidebarIcon onClick={() => setIsOpen(!isOpen)} className="min-w-fit" />
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                text-slate-400 hover:bg-slate-800 hover:text-white h-12
            `}
          >
            <item.icon size={20} />
            <AnimatePresence>
              {isOpen && (
                <motion.span
                  variants={contentVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className="font-medium whitespace-nowrap"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-2 h-14">
          <div className="min-w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center font-bold">
            M
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                variants={contentVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                className="text-sm"
              >
                <p className="font-semibold">Mahim</p>
                <p className="text-slate-500 text-xs whitespace-nowrap">
                  Admin Account
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
