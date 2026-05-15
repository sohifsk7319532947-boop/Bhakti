import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-bhakti-black flex flex-col items-center justify-center p-8 text-center overscroll-none touch-none"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            {/* Silhouette-like icon */}
            <div className="w-32 h-32 bg-gradient-to-br from-[#F27D26] to-[#D4AF37] rounded-[2rem] flex items-center justify-center shadow-[0_0_50px_rgba(242,125,38,0.3)] animate-float">
              <span className="text-black text-6xl font-display font-black">ॐ</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-5xl font-display font-bold text-[#D4AF37] mb-2 tracking-tighter uppercase">Bangla Bhakti</h1>
            <p className="text-[#F27D26] text-xs font-black tracking-[0.4em] uppercase">ভক্তির অমৃত ধারা</p>
          </motion.div>

          <div className="absolute bottom-16 flex flex-col items-center">
            <div className="w-16 h-1 bg-white/5 rounded-full overflow-hidden border border-white/5 shadow-inner">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-transparent via-[#F27D26] to-transparent"
              />
            </div>
            <p className="text-[10px] text-white/30 mt-4 tracking-widest uppercase">Initializing Divine Experience</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
