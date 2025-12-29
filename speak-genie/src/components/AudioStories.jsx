import { Sparkles, ArrowRight } from "lucide-react";

import { useNavigate } from "react-router-dom";
import { audioStories } from "../assets/assets";


const AudioStories = () => {
    const navigate = useNavigate()
  return (
    <section className="mt-8 sm:mt-10 lg:mt-12">
      
      <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-6 lg:px-8">
        <h2 className="flex items-center gap-2 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
          <span className="p-2 rounded-full bg-green-100 text-green-600">
            <Sparkles size={24} />
          </span>
          Audio Stories
        </h2>

        <button className="flex items-center gap-1 text-xs sm:text-sm lg:text-base
          font-semibold text-[#16BF75] hover:underline cursor-pointer">
          Show all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Scrollable Row */}
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div
          className="flex gap-3 sm:gap-4 overflow-x-auto pb-2
          snap-x snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden"
        >
          {audioStories.map((story, index) => (
            <div onClick={()=> {navigate(`/stories/${story.id}`); scrollTo(0 , 0)}}
              key={index}
              className="flex-none snap-start"
              style={{ width: 128 }}
            >
              {/* Image */}
              <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src={story.img}
                  alt={story.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title */}
              <p className="mt-2 text-sm font-medium text-gray-900 text-center leading-snug">
                {story.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudioStories;
