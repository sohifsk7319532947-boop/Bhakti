import { motion } from "motion/react";
import { FESTIVALS } from "../constants";
import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

function calculateTimeLeft(date: string) {
  const difference = +new Date(date) - +new Date();
  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;
}

interface CountdownCardProps {
  festival: typeof FESTIVALS[0];
  key?: string | number;
}

function CountdownCard({ festival }: CountdownCardProps) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(festival.date));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(festival.date));
    }, 1000);
    return () => clearInterval(timer);
  }, [festival.date]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#161616] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,#F27D2611,transparent_60%)]"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_red]"></div>
          <span className="text-[#F27D26] text-[10px] font-black uppercase tracking-[0.3em]">Upcoming Festival</span>
        </div>
        
        <h2 className="text-4xl font-black mb-6 tracking-tight">{festival.name.toUpperCase()}</h2>

        <div className="flex gap-6 items-center mb-8">
          <div className="flex flex-col">
            <span className="text-4xl font-mono font-bold text-[#D4AF37]">{String(timeLeft.days).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Days</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-4xl font-mono font-bold text-[#D4AF37]">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Hours</span>
          </div>
          <div className="w-[1px] h-10 bg-white/10"></div>
          <div className="flex flex-col">
            <span className="text-4xl font-mono font-bold text-[#D4AF37]">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-bold opacity-40 tracking-widest">Mins</span>
          </div>
        </div>

        <p className="text-sm text-white/50 leading-relaxed font-medium italic border-l-2 border-[#D4AF37]/50 pl-4">
          {festival.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Countdown() {
  return (
    <div className="space-y-8 pb-24">
      <header className="pt-6">
        <h1 className="text-3xl font-display font-bold gold-text">Festival Countdown</h1>
        <p className="text-white/60 text-sm">Days until the divine celebrations</p>
      </header>

      <div className="space-y-6">
        {FESTIVALS.map((festival) => (
          <CountdownCard key={festival.id} festival={festival} />
        ))}
      </div>
    </div>
  );
}
