import { motion, AnimatePresence } from "motion/react";
import { Play, Pause, X } from "lucide-react";
import { BHAJANS } from "../constants";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Bhajans() {
  const [activeBhajan, setActiveBhajan] = useState<typeof BHAJANS[0] | null>(null);

  return (
    <div className="space-y-8 pb-32">
      <header className="pt-6">
        <h1 className="text-3xl font-display font-bold gold-text">Bhajans</h1>
        <p className="text-white/60 text-sm">Listen to soulful devotional songs</p>
      </header>

      <div className="space-y-4">
        {BHAJANS.map((bhajan, index) => (
          <motion.div
            key={bhajan.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
          >
            <button
              onClick={() => setActiveBhajan(bhajan)}
              className="w-full flex items-center gap-5 p-4 bg-[#161616] border border-white/5 rounded-[1.5rem] hover:bg-white/5 transition-all text-left active:scale-[0.98] group-hover:border-[#D4AF37]/30"
            >
              <div className="relative w-14 h-14 flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={bhajan.thumbnail} 
                  alt={bhajan.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Play className={cn("w-6 h-6 text-white fill-white", activeBhajan?.id === bhajan.id && "text-[#F27D26] fill-[#F27D26]")} />
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base truncate group-hover:text-[#D4AF37] transition-colors">{bhajan.title}</h3>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-black mt-1">{bhajan.artist}</p>
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#F27D26] group-hover:bg-[#F27D26]/10 transition-all">
                <Play className="w-4 h-4 text-white/20 group-hover:text-[#F27D26]" />
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeBhajan && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-24 left-4 right-4 z-50"
          >
            <div className="glass rounded-2xl p-4 shadow-2xl border border-bhakti-saffron/30">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={activeBhajan.thumbnail} 
                  alt="" 
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h4 className="font-bold text-sm">{activeBhajan.title}</h4>
                  <p className="text-[10px] text-white/50 uppercase">Now Playing from YouTube</p>
                </div>
                <button 
                  onClick={() => setActiveBhajan(null)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-white/50" />
                </button>
              </div>
              
              <div className="rounded-xl overflow-hidden aspect-video bg-black shadow-inner">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${activeBhajan.youtubeId}?autoplay=1&mute=0`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
