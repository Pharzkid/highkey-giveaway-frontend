import React from "react";
import { motion } from "framer-motion";

export default function AlertModal({ setAlertVisible }) {
  return (
    <motion.div
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 200, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed left-0 right-0 bottom-0 z-50"
    >
      <div className="mx-4 mb-6 bg-black/75 text-white rounded-2xl p-4 shadow-lg">
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-full bg-hkgold/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2v2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M5 8v1a7 7 0 0014 0V8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"></path>
              <path d="M18 21a2 2 0 01-2-2H8a2 2 0 01-2 2" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
          </div>
          <div className="flex-1">
            <div className="font-semibold text-lg">⚠️ Withdrawal to $mlrayhill not possible right now</div>
            <div className="text-sm text-gray-200 mt-1">💸 5.5% fee not confirmed</div>
          </div>
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={() => setAlertVisible(false)}
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
}
