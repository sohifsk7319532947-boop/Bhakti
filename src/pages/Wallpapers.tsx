import { motion } from "motion/react";
import { Download, Share2, Heart } from "lucide-react";
import { WALLPAPERS } from "../constants";
import { useState } from "react";

export default function Wallpapers() {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-8 pb-24">
      <header className="pt-6">
        <h1 className="text-3xl font-display font-bold gold-text">Wallpaper</h1>
        <p className="text-white/60 text-sm">Download devotional backgrounds</p>
      </header>

      <div className="grid grid-cols-2 gap-5">
        {WALLPAPERS.map((wp, index) => (
          <motion.div
            key={wp.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group relative aspect-[9/16] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#111]"
          >
            <img 
              src={wp.url} 
              alt={wp.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            {/* Download Badge */}
            <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity z-20">
              <Download className="w-4 h-4 text-[#D4AF37]" />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
              <p className="text-[#F27D26] text-[8px] font-black uppercase tracking-[0.3em] mb-1">Featured</p>
              <h3 className="text-white font-bold text-lg leading-tight transition-transform group-hover:-translate-y-1">{wp.title}</h3>
              
              <div className="flex gap-2 mt-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  onClick={() => toggleFavorite(wp.id)}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-colors border border-white/5"
                >
                  <Heart className={`w-4 h-4 ${favorites.includes(wp.id) ? 'fill-red-500 text-red-500' : 'text-white'}`} />
                </button>
                <button className="flex-1 bg-[#F27D26] hover:bg-[#D4AF37] text-black font-black text-[10px] uppercase tracking-widest rounded-xl transition-colors">
                  Set Setup
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
