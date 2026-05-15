import { Bhajan, Festival, ZodiacSign, Wallpaper } from "./types";

export const BENGALI_QUOTES = [
  "মা সবসময় তোমার সাথে আছেন",
  "ভক্তির পথই শান্তির পথ",
  "শিবের আশীর্বাদ তোমার উপর বর্ষিত হোক",
  "ধর্মের জয় অবধারিত",
  "শান্তি অন্তরেই খুঁজে পাও"
];

export const FESTIVALS: Festival[] = [
  {
    id: "durga-puja",
    name: "Durga Puja",
    date: "2026-10-18T00:00:00Z",
    description: "The grandest festival of Bengal celebrating the victory of Maa Durga."
  },
  {
    id: "kali-puja",
    name: "Kali Puja",
    date: "2026-11-09T00:00:00Z",
    description: "Festival dedicated to the goddess Kali, celebrated with lights and fireworks."
  },
  {
    id: "saraswati-puja",
    name: "Saraswati Puja",
    date: "2027-02-11T00:00:00Z",
    description: "Worship of the goddess of knowledge, music, and art."
  }
];

export const ZODIAC_SIGNS: ZodiacSign[] = [
  { id: "aries", name: "Aries", bengaliName: "মেষ", symbol: "♈", prediction: "আজ আপনার জন্য শুভ দিন। নতুন কাজের সুযোগ আসতে পারে।" },
  { id: "taurus", name: "Taurus", bengaliName: "বৃষ", symbol: "♉", prediction: "আর্থিক দিকে উন্নতির যোগ আছে। স্বাস্থ্যের যত্ন নিন।" },
  { id: "gemini", name: "Gemini", bengaliName: "মিথুন", symbol: "♊", prediction: "পরিবারের সাথে ভালো সময় কাটবে। ভ্রমনের যোগ আছে।" },
  { id: "cancer", name: "Cancer", bengaliName: "কর্কট", symbol: "♋", prediction: "মানসিক শান্তি বজায় রাখুন। কর্মক্ষেত্রে সাফল্য পাবেন।" },
  { id: "leo", name: "Leo", bengaliName: "সিংহ", symbol: "♌", prediction: "আত্মবিশ্বাস বাড়বে। সৃজনশীল কাজে মন দিন।" },
  { id: "virgo", name: "Virgo", bengaliName: "কন্যা", symbol: "♍", prediction: "অপ্রত্যাশিত খবর আসতে পারে। সংযত থাকুন।" },
  { id: "libra", name: "Libra", bengaliName: "তুলা", symbol: "♎", prediction: "ব্যবসায় লাভ হওয়ার সম্ভাবনা। বন্ধুদের সাহায্য পাবেন।" },
  { id: "scorpio", name: "Scorpio", bengaliName: "বৃশ্চিক", symbol: "♏", prediction: "চ্যালেঞ্জ মোকাবিলা করতে হবে। ধৈর্য ধরুন।" },
  { id: "sagittarius", name: "Sagittarius", bengaliName: "ধনু", symbol: "♐", prediction: "নতুন বিনিয়োগের জন্য শুভ সময়। এগিয়ে যান।" },
  { id: "capricorn", name: "Capricorn", bengaliName: "মকর", symbol: "♑", prediction: "দায়িত্ব বাড়বে। কঠোর পরিশ্রমের ফল পাবেন।" },
  { id: "aquarius", name: "Aquarius", bengaliName: "কুম্ভ", symbol: "♒", prediction: "সামাজিক মর্যাদা বৃদ্ধি পাবে। উপকারের সুযোগ পাবেন।" },
  { id: "pisces", name: "Pisces", bengaliName: "মীন", symbol: "♓", prediction: "আধ্যাত্মিক চিন্তায় মন দিন। দিনটি অনুকূল।" }
];

export const BHAJANS: Bhajan[] = [
  { id: "1", title: "Durga Chalisa", artist: "Anuradha Paudwal", thumbnail: "https://images.unsplash.com/photo-1590059378735-373f707f7c46?q=80&w=400", youtubeId: "Sc6-BghsX9I" },
  { id: "2", title: "Govind Bolo Hari", artist: "Jagjit Singh", thumbnail: "https://images.unsplash.com/photo-1544322476-8f2868ff528a?q=80&w=400", youtubeId: "c_E-7wD9dYk" },
  { id: "3", title: "Aigiri Nandini", artist: "Stotram", thumbnail: "https://images.unsplash.com/photo-1561053720-76cd73ff22c3?q=80&w=400", youtubeId: "asWstf99CZA" }
];

export const WALLPAPERS: Wallpaper[] = [
  { id: "1", title: "Maa Durga", url: "https://images.unsplash.com/photo-1590059378735-373f707f7c46?q=80&w=1080" },
  { id: "2", title: "Lord Shiva", url: "https://images.unsplash.com/photo-1544322476-8f2868ff528a?q=80&w=1080" },
  { id: "3", title: "Maa Kali", url: "https://images.unsplash.com/photo-1614032338048-8d00062400ee?q=80&w=1080" },
  { id: "4", title: "Ganesha", url: "https://images.unsplash.com/photo-1567591958480-2ac793106211?q=80&w=1080" }
];
