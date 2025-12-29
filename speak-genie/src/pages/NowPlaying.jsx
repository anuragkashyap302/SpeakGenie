import {
  ChevronDown,
  FileText,
  Heart,
  Volume2,
  RotateCcw,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { audioStories } from "../assets/assets";

const NowPlaying = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
  const navigate = useNavigate()

  useEffect(() => {
    const foundStory = audioStories.find(
      (story) => story.id === id
    );
    setStory(foundStory);
  }, [id]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
  <div className="h-screen bg-emerald-50 flex flex-col overflow-hidden">

    {/* ===== SCROLLABLE WHITE CONTENT ===== */}
    <div
      className="
        flex-1
        bg-gradient-to-b from-white via-emerald-50 to-emerald-100
        overflow-y-auto
        [scrollbar-width:none]
        [&::-webkit-scrollbar]:hidden
      "
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-white z-20">
        <button onClick={()=> navigate('/')} className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center">
          <ChevronDown size={20} />
        </button>

        <p className="text-sm font-semibold tracking-wide text-gray-700">
          NOW PLAYING
        </p>

        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center">
            <FileText size={18} />
          </button>

          <button className="relative px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center gap-1.5 sm:gap-2 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
            Quiz
            <span className="bg-yellow-400 text-black text-xs px-2 py-0.5 rounded-full">
              7
            </span>
          </button>
        </div>
      </div>

      {/* Artwork */}
      <div className="mt-4 flex justify-center">
        <div className="relative">
          <div className="absolute inset-0 blur-3xl bg-green-400/30 rounded-[28px]" />
          <div className="relative border-2 border-green-500 rounded-3xl p-2 bg-white">
            <img
              src={story.img}
              alt={story.title}
             className="w-[360px] sm:w-[360px] md:w-[520px] rounded-2xl object-cover"

            />
          </div>
        </div>
      </div>

      {/* Story Info */}
      <div className="mt-6 px-4 max-w-md mx-auto pb-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {story.title}
          </h2>
          <Heart size={20} className="text-gray-600" />
        </div>

         <p className="text-base text-gray-600 mt-2">
          {story.description}
        </p>
          
        <button
        
          className="
            w-full py-3 px-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 active:scale-98 group text-white
          "
        >
           <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-clipboard-check"
>
  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
  <path d="m9 14 2 2 4-4" />
</svg>

          Test Your Understanding
          <span className="bg-white/30 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            7 Questions
          </span>
        </button>
      </div>
    </div>

    {/* ===== FIXED AUDIO PLAYER (UNCHANGED) ===== */}
    <div
      className="
        backdrop-blur-xl
        bg-white/60
        border-t border-black/10
        pb-safe
      "
    >
      <div className="px-4 pt-4 max-w-xl mx-auto">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span className="text-green-600 font-semibold">0:00</span>
          <span>{story.duration}</span>
        </div>

        <div className="w-full h-1.5 rounded-full bg-gray-300 overflow-hidden">
          <div className="h-full w-[5%] bg-green-500 rounded-full" />
        </div>
      </div>

      <div className="mt-4 pb-6 flex items-center justify-center gap-6">
        + <Volume2 size={22} className="text-gray-800" />
        <RotateCcw size={22} className="text-gray-800" />
        <SkipBack size={26} className="text-gray-800" />

        <button className=" w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 hover:scale-105 flex items-center justify-center shadow-2xl transition-all active:scale-95">
          <Play fill="white" size={28} className="text-white ml-1 " />
        </button>

        <SkipForward size={26} className="text-gray-800" />
        <Repeat size={22} className="text-gray-800" />
        <button
  className="
    w-8 h-8 sm:w-9 sm:h-9
    rounded-full
    flex items-center justify-center
    transition-all
    active:scale-95
    hover:bg-white/80
    dark:hover:bg-gray-800
  "
  title="Playback Speed"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="
      lucide lucide-gauge
      w-4 h-4 sm:w-5 sm:h-5
      text-gray-700 dark:text-gray-300
      hover:text-gray-900 dark:hover:text-white
    "
    aria-hidden="true"
  >
    <path d="m12 14 4-4" />
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
  </svg>
</button>

      </div>
    </div>

  </div>
);

};

export default NowPlaying;
