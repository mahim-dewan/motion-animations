import { ArrowLeft } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const ExitAnimate = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.99 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-2xl"
          >
            {/* Header Section */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              {/* Back Arrow */}
              <button className="group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-white/10">
                <ArrowLeft />
              </button>

              <h3 className="text-lg font-medium text-white">
                Project Details
              </h3>

              {/* Close Button (X) */}
              <button
                onClick={() => setIsOpen(false)}
                className="group flex h-10 w-10 items-center justify-center rounded-full transition-all hover:bg-red-500/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="h-6 w-6 opacity-70 group-hover:stroke-red-400 group-hover:opacity-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Body Section */}
            <div className="p-8 text-white">
              <div className="space-y-4">
                <div className="rounded-2xl bg-white/5 p-4 border border-white/5">
                  <span className="text-xs uppercase tracking-widest text-white/50">
                    Status
                  </span>
                  <p className="mt-1 text-lg font-semibold text-emerald-400">
                    Active Development
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-white/70">
                    Information
                  </h4>
                  <p className="mt-2 leading-relaxed text-white/90">
                    This modal layout is optimized for MERN stack applications
                    requiring high-fidelity UI. The background uses 10% white
                    opacity with a 20% border to maintain visibility on any
                    background.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExitAnimate;
