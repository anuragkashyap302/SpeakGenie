import { actionIcons } from "../assets/assets.js";

const actions = [
  {
    label: "Video Learning",
    type: "svg",
    bg: "bg-blue-50",
    iconColor: "text-blue-600",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-9 h-9 sm:w-10 sm:h-10"
      >
        <path d="m16 13 3.223 3.482a.5.5 0 0 0 .777-.416V7.934a.5.5 0 0 0-.777-.416L16 11" />
        <rect x="2" y="6" width="14" height="12" rx="2" />
      </svg>
    ),
  },
  {
    label: "Peer Calls",
    type: "image",
    bg: "bg-indigo-50",
    icon: actionIcons.peerCall,
  },
  {
    label: "Stories",
    type: "image",
    bg: "bg-orange-50",
    icon: actionIcons.stories,
  },
  {
    label: "AI Calls",
    type: "image",
    bg: "bg-pink-50",
    icon: actionIcons.aiCalls,
  },
];

export const ActionGrid = () => {
  return (
    <div className="px-4 sm:px-6 mt-10">
      <div className="grid grid-cols-4 gap-6 sm:gap-8">
        {actions.map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center space-y-3 focus:outline-none"
          >
            
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white
              shadow-md flex items-center justify-center">
              
              {/* INNER PASTEL CIRCLE */}
              <div
                className={`w-24 h-24 md:w-24 md:h-24 sm:w-20 sm:h-20 rounded-full ${item.bg}
                flex items-center justify-center`}
              >
                {item.type === "svg" ? (
                  <div className={item.iconColor}>
                    {item.icon}
                  </div>
                ) : (
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                  />
                )}
              </div>
            </div>

            {/* LABEL */}
            <span className="text-sm sm:text-base font-semibold text-gray-900 text-center">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

