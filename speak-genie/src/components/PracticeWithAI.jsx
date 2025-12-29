import { Bot, ArrowRight } from "lucide-react";
import { avatars } from "../assets/assets.js";

const practiceWithAI = [
  {
    title: "Talk with Doraemon",
    img: avatars.doraemon,
    bg: "bg-[#B3E5FC]",
  },
  {
    title: "Talk with Spider Man",
    img: avatars.spiderman,
    bg: "bg-[#FFD6C9]",
  },
  {
    title: "Talk with Shinchan",
    img: avatars.shinchan,
    bg: "bg-[#D9F2D9]",
  },
  {
    title: "Talk with Virat Kohli",
    img: avatars.kohli,
    bg: "bg-[#E3F2FD]",
  },
  {
    title: "Talk with Shashi Tharoor",
    img: avatars.shashiTharur,
    bg: "bg-[#F1F8E9]",
  },
];

const PracticeWithAI = () => {
  return (
    <section className="mt-10 sm:mt-12 lg:mt-16 mb-8 sm:mb-10 lg:mb-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-6 lg:px-8">
        <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
          <span
            className="inline-flex items-center justify-center
            w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12
            rounded-full bg-[#FFE4E6] text-[#E11D48]"
          >
            <Bot size={18} />
          </span>
          Practice with AI
        </h2>

        <button
          className="flex items-center gap-1 text-xs sm:text-sm lg:text-base
          font-semibold text-[#16BF75] hover:underline"
        >
          Show all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Scroll row */}
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div
          className="flex gap-2 overflow-x-auto pb-2
          snap-x snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden"
        >
          {practiceWithAI.map((item, index) => (
            <div
              key={index}
              className="flex-none snap-start"
              style={{ width: 154, height: 182 }}
            >
              <div className="w-full h-full flex flex-col">
                {/* IMAGE BUTTON */}
                <button
                  className={`flex-shrink-0 flex items-center justify-center
                  ${item.bg} overflow-hidden cursor-pointer
                  hover:opacity-90 transition-opacity`}
                  style={{ width: 154, height: 154, borderRadius: 12 }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-contain p-3"
                  />
                </button>

                {/* TITLE */}
                <div className="flex-1 flex items-center justify-center pt-1">
                  <button
                    className="text-xs font-medium text-gray-900
                    hover:text-[#27CDC7] transition-colors text-center"
                  >
                    {item.title}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeWithAI;

