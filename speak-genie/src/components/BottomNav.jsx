import { NavLink } from "react-router-dom";
import { icons } from "../assets/assets";

const navItems = [
  { to: "/", label: "Home", icon: icons.homeGreen },
  { to: "/quiz", label: "Learn", icon: icons.learn },
  { to: "/call", label: "Call", icon: icons.call },
  { to: "/profile", label: "Profile", icon: icons.profile },
];

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white  flex justify-around py-5 z-50">
      {navItems.map(({ to, label, icon }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex flex-col items-center transition-all duration-200 ${
              isActive ? "text-green-600" : "text-gray-400"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {/* Icon */}
              <img
                src={icon}
                alt={label}
                className={`w-7 h-7 ${
                  isActive ? "opacity-100" : "opacity-70"
                }`}
              />

              {/* Label */}
              <span className="text-sm mt-1">{label}</span>

              {/* Active dot */}
              <span
                className={`mt-1 h-1.5 w-1.5 rounded-full transition-opacity duration-200 ${
                  isActive ? "bg-green-600 opacity-100" : "opacity-0"
                }`}
              />
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
