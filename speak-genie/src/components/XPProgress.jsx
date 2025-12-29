const XPProgress = ({ currentXP, totalXP, level, nextLevel, earnedXP = 0 }) => {
  const progress = (currentXP / totalXP) * 100;

  return (
    <div className="w-full -mb-5">
      <div
        className="
          flex items-center gap-5
          rounded-3xl
          px-6
          py-5
          bg-white/15
          backdrop-blur-md
          border border-white/20
          shadow-lg
        "
      >
        {/* Level Circle */}
        <div className="w-14 h-14 rounded-full bg-white/25 border-2 border-white/30 flex items-center justify-center font-bold text-lg shrink-0">
          L{level}
        </div>

        <div className="flex-1 min-w-0">
          {/* Title Row */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-sm font-bold tracking-wide">XP PROGRESS</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </div>
          <div className="relative w-full h-2 rounded-full bg-white/20 overflow-hidden mb-2">
            <div
              className="absolute left-0 top-0 h-full bg-white rounded-full transition-all duration-700 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex justify-between text-xs font-semibold opacity-90">
            <span>{currentXP}/{totalXP} XP</span>
            <span>Next: L{nextLevel}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0 ml-auto flex-nowrap">

          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z" />
                <path d="M19 3L19.5 5L21.5 5.5L19.5 6L19 8L18.5 6L16.5 5.5L18.5 5L19 3Z" opacity="0.7" />
              </svg>
            </div>
            {/* XP Value  aise hi calculate ramdon*/}
            <span className="text-base font-bold whitespace-nowrap">
              {earnedXP} XP
            </span>
          </div>

          {/* Three Dots Menu - HORIZONTAL ROW intaillay */}
          <button className="flex items-center gap-1.5 p-2 hover:opacity-70 transition-opacity">
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
            <div className="w-1.5 h-1.5 rounded-full bg-white/70" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default XPProgress;