import { audioStories, icons } from "../assets/assets";
import XPProgress from "./XPProgress";

const Header = () => {
  return (
    <div
      className="
        bg-gradient-to-b 
        from-[#27CD7C] 
        via-[#1FB86C] 
        to-[#18A55D]
        rounded-b-[32px]
        px-10 sm:px-8 lg:px-12
        pt-8 pb-8
        shadow-[0_20px_45px_-20px_rgba(39,205,124,0.6)]
        text-white 
      "
    >
      
      <div className="flex items-start justify-between mb-6 mt-3 mr-4 m-2">
        {/* Left - User Info */}
        <div className="flex items-center  mt-2 space-x-3 sm:space-x-4">
          
          <div className="w-14 h-14 rounded-full bg-pink-300 border-3 border-white overflow-hidden flex items-center justify-center">
             <img src={icons.boyDefault} alt="User" className="w-full h-full object-cover" />
          </div>
          
          <div className="flex flex-col gap-1">
            <p className="text-xs font-medium opacity-80">Good Night</p>
            <h1 className="text-2xl sm:text-3xl font-semibold leading-tight">Lorenzo</h1>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors border border-white/10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
            <img src={icons.diamond} alt="Diamond" className="w-[57px] h-[28.133px]" /> 
          
          

          {/* PRO Badge - sme hahi */}
         <img src= {icons.pro} alt=""  className="w-[51px] h-[36px]"/>
        </div>
      </div>

      {/* XP Card */}
      <div className="mt-5 sm:mt-6 lg:mt-8">
        <XPProgress
          currentXP={40}
          totalXP={100}
          level={1}
          nextLevel={2}
          earnedXP={40}
        />
      </div>
    </div>
  );
};

export default Header;