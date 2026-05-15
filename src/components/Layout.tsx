import { ReactNode } from "react";
import { Home as HomeIcon, Compass, Image, Music, Calendar } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion } from "motion/react";

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { path: "/", icon: HomeIcon, label: "Home" },
  { path: "/rashifal", icon: Compass, label: "Rashifal" },
  { path: "/wallpapers", icon: Image, label: "Wallpapers" },
  { path: "/bhajans", icon: Music, label: "Bhajans" },
  { path: "/countdown", icon: Calendar, label: "Festivals" },
];

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-bhakti-black flex flex-col shadow-2xl border-x border-white/5">
      {/* Top Header/App Bar */}
      <nav className="sticky top-0 z-40 bg-bhakti-black border-b border-bhakti-gold/20 py-5 px-6 flex justify-between items-center shadow-lg">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-[#F27D26] to-[#D4AF37] rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(242,125,38,0.3)]">
            <span className="text-xl font-bold text-black">ॐ</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-bhakti-gold uppercase">Bangla Bhakti</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-[#F27D26] rounded-full animate-pulse shadow-[0_0_8px_#F27D26]"></div>
        </div>
      </nav>

      <main className="flex-1 overflow-y-auto pt-6 pb-24 px-6">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto z-40">
        <div className="bg-[#0a0a0a] border-t border-white/10 px-4 py-4 flex justify-around shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex flex-col items-center gap-1.5 transition-all relative px-3",
                  isActive ? "text-[#F27D26]" : "text-white/30 hover:text-white/60"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "stroke-[2.5px]")} />
                <span className="text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-tab"
                    className="absolute -bottom-1 w-6 h-1 bg-[#F27D26] rounded-full shadow-[0_0_8px_#F27D26]"
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
