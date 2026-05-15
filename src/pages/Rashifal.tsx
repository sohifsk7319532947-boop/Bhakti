import { motion } from "motion/react";
import { ZODIAC_SIGNS } from "../constants";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Rashifal() {
  const [selectedSign, setSelectedSign] = useState(ZODIAC_SIGNS[0]);

  return (
    <div className="space-y-8 pb-24">
      <header className="pt-6">
        <h1 className="text-3xl font-display font-bold gold-text">আজকের রাশিফল</h1>
        <p className="text-white/60 text-sm">Daily Horoscope in Bengali</p>
      </header>

      <div className="flex gap-3 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4">
        {ZODIAC_SIGNS.map((sign) => (
          <button
            key={sign.id}
            onClick={() => setSelectedSign(sign)}
            className={cn(
              "flex-shrink-0 w-24 aspect-[4/5] rounded-2xl flex flex-col items-center justify-center transition-all border shadow-lg",
              selectedSign.id === sign.id 
                ? "bg-[#161616] border-[#D4AF37]/50 shadow-[#D4AF37]/10" 
                : "bg-[#111] border-white/5 opacity-60 hover:opacity-100"
            )}
          >
            <span className={cn(
              "text-3xl mb-1 transition-colors",
              selectedSign.id === sign.id ? "text-[#D4AF37]" : "text-white/40"
            )}>{sign.symbol}</span>
            <span className="text-[10px] uppercase font-black tracking-widest text-white/80">{sign.bengaliName}</span>
          </button>
        ))}
      </div>

      <motion.div
        key={selectedSign.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#161616] border border-white/5 rounded-[2.5rem] p-8 min-h-[300px] relative overflow-hidden"
      >
        <div className="absolute -top-10 -right-10 text-[200px] text-white/5 font-display select-none">
          {selectedSign.symbol}
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F27D26] to-[#D4AF37] shadow-lg flex items-center justify-center text-3xl text-black font-bold">
              {selectedSign.symbol}
            </div>
            <div>
              <p className="text-[#F27D26] text-[10px] font-black uppercase tracking-[0.2em] mb-1">আপনার রাশিফল</p>
              <h2 className="text-3xl font-bold leading-none">{selectedSign.bengaliName}</h2>
            </div>
          </div>

          <p className="text-xl leading-relaxed text-[#D4AF37]/90 font-medium font-serif italic">
            “{selectedSign.prediction}”
          </p>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-4">
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">শুভ সংখ্যা</p>
              <p className="font-black text-2xl text-[#D4AF37]">{Math.floor(Math.random() * 9) + 1}</p>
            </div>
            <div className="bg-[#0a0a0a]/50 backdrop-blur-md border border-white/5 rounded-2xl p-4">
              <p className="text-[10px] text-white/40 uppercase tracking-widest mb-1">শুভ রং</p>
              <p className="font-black text-2xl text-[#F27D26]">কমলা</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
