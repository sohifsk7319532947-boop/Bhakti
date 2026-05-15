import { motion } from "motion/react";
import { Compass, Image, Music, Calendar, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { BENGALI_QUOTES } from "../constants";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

const ACTIONS = [
  { id: "rashifal", name: "Daily Rashifal", icon: Compass, path: "/rashifal", color: "from-[#F27D26] to-[#D4AF37]" },
  { id: "wallpapers", name: "Wallpapers", icon: Image, path: "/wallpapers", color: "from-[#D4AF37] to-[#8B7500]" },
  { id: "bhajans", name: "Bhajans", icon: Music, path: "/bhajans", color: "from-[#F27D26] to-red-900" },
  { id: "countdown", name: "Festivals", icon: Calendar, path: "/countdown", color: "from-[#111] to-[#222]" },
];

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomQuote = BENGALI_QUOTES[Math.floor(Math.random() * BENGALI_QUOTES.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div className="space-y-8 pb-10">
      <motion.header 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="pt-2"
      >
        <p className="text-[#F27D26] text-[10px] font-bold uppercase tracking-[0.3em] mb-1">আজকের সুপ্রভাত</p>
        <h1 className="text-4xl font-bold leading-tight font-display tracking-tight">সুপ্রভাত, ভক্ত</h1>
      </motion.header>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="p-8 rounded-[2rem] bg-gradient-to-br from-[#161616] to-[#0a0a0a] border border-[#D4AF37]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group"
      >
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#F27D26]/5 rounded-full blur-3xl group-hover:bg-[#F27D26]/10 transition-colors"></div>
        <p className="text-xl italic font-serif text-[#D4AF37]/90 leading-relaxed mb-6">
          “{quote}”
        </p>
        <div className="h-1 w-16 bg-[#D4AF37] rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-2 gap-5">
        {ACTIONS.map((action, index) => (
          <motion.div
            key={action.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <Link to={action.path} className="block group">
              <div className="bg-[#161616] border border-white/5 group-hover:border-[#D4AF37]/50 rounded-[1.5rem] p-6 h-full transition-all duration-300 active:scale-95 shadow-inner">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br mb-5 shadow-lg transition-transform group-hover:scale-110",
                  action.color
                )}>
                  <action.icon className="text-white w-6 h-6 stroke-[1.5]" />
                </div>
                <h3 className="font-bold text-sm tracking-widest uppercase opacity-80 group-hover:opacity-100 group-hover:text-[#D4AF37] transition-all">{action.name}</h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="p-4 border border-dashed border-white/10 rounded-xl text-center"
      >
        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em]">Ad Content Placeholder</p>
      </motion.div>
    </div>
  );
}
