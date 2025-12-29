import { Phone, ArrowRight } from "lucide-react";
import { conversationTopics } from "../assets/assets.js";
const practiceTopics = [
  {
    title: "Favorite Animals",
    desc: "Talk about your favorite animals and pets",
    img: conversationTopics.FavoriteAnimal,
  },
  {
    title: "Hobbies & Fun",
    desc: "Share what you love to do in your free time",
    img: conversationTopics.Hobbiesandfun,
  },
  {
    title: "School Life",
    desc: "Chat about school, friends, and learning",
    img: conversationTopics.SchoolLife,
  },
  {
    title: "Favorite Foods",
    desc: "Discuss yummy foods and recipes",
    img: conversationTopics.FavoriteFood,
  },
  {
    title: "Books & Stories",
    desc: "Talk about favorite books and stories",
    img: conversationTopics.BookandStories,
  },
  {
    title: "Family & Traditions",
    desc: "Share about your family and special traditions",
    img: conversationTopics.FamilyandTraditions,
  },
];


const PracticeWithHumans = () => {
  return (
    <section className="mt-10 sm:mt-12 lg:mt-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6 px-4 sm:px-6 lg:px-8">
        <h2 className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900">
          <span className="p-2 sm:p-3 rounded-full bg-purple-100 text-purple-600">
            <Phone size={18} />
          </span>
          Practice with Humans
        </h2>

        <button className="flex items-center gap-1 text-xs sm:text-sm lg:text-base
          font-semibold text-[#16BF75] hover:underline">
          Show all
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Scrollable Cards */}
      <div className="mx-4 sm:mx-6 lg:mx-8">
        <div
          className="flex space-x-4 sm:space-x-5 lg:space-x-6 overflow-x-auto pb-2
          snap-x snap-mandatory
          [-ms-overflow-style:none]
          [scrollbar-width:none]
          [&::-webkit-scrollbar]:hidden"
        >
          {practiceTopics.map((item, index) => (
            <div
              key={index}
              className="flex-none snap-start
                w-[85%] sm:w-[60%] lg:w-[40%]
                h-[220px] sm:h-[240px] lg:h-[260px]
                rounded-3xl shadow-md relative overflow-hidden"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.img})` }}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-5 lg:p-6 text-white">
                {/* Top row */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-semibold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>

                  <span className="text-xs bg-black/40 px-3 py-1 rounded-full">
                    Be first!
                  </span>
                </div>

                {/* Button */}
                <button
                  className="w-full bg-white/90 text-[#16BF75]
                  font-semibold text-sm sm:text-base py-2 sm:py-2.5
                  rounded-full shadow hover:bg-white transition"
                >
                  Join & Start Call
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeWithHumans;
