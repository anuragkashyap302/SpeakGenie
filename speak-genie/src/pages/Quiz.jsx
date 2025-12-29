import { useState } from "react";
import toast from "react-hot-toast";
import {
  ArrowLeft,
  Sparkles,
  Lightbulb,
  Star,
  Target,
} from "lucide-react";
import BottomNav from "../components/BottomNav";
import { useNavigate } from "react-router-dom";

const topics = [
  "My Best Friend",
  "Cricket Basics",
  "Solar System",
  "Healthy Habits",
  "Animals & Birds",
  "School Picnic",
];

export default function Quiz() {
  const navigate = useNavigate();
  const [level, setLevel] = useState(null);

  const generateQuiz = () => {
    toast.success("Quiz Generated!");
  };

  return (
    
    <div className="bg-gray-50 min-h-screen relative">
      <div className="fixed top-0 left-0 z-50 p-4">
  <button
    onClick={() => navigate("/")}
    className="
      flex items-center gap-2
      text-green-600 font-medium
      bg-white/80 backdrop-blur-md
      px-3 py-2 rounded-xl
      shadow-sm cursor-pointer
    "
  >
    <ArrowLeft size={18} />
    Back
  </button>
</div>

      
      {/* SCROLLABLE CONTENT */}
      <div className="mx-auto w-full max-w-[420px] pt-20 pb-32">
        

        {/* Header Card */}
        <div className="px-4">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-semibold text-green-500 tracking-wide">
              LEARN TAB
            </p>
            <h1 className="text-xl font-semibold mt-1">
              Craft a custom quiz
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Pick a topic, choose difficulty, and we will build four fun
              questions instantly.
            </p>
          </div>
        </div>

        {/* STEP 1 */}
        <div className="px-4 mt-6">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <p className="text-xs font-semibold text-green-500">STEP 1</p>
            <h2 className="font-semibold mt-1">Choose a topic</h2>

            <input
              placeholder='e.g. "My school day" or "Planets in space"'
              className="w-full mt-3 px-4 py-3 rounded-xl border text-sm outline-none"
            />

            <div className="flex flex-wrap gap-2 mt-4">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* STEP 2 — UNCHANGED */}
        <div className="px-4 mt-6">
          <p className="text-xs font-semibold text-green-500 mb-2">
            STEP 2
          </p>
          <h2 className="font-semibold mb-3">
            Pick a challenge level
          </h2>

          <div className="space-y-4">
            {/* Easy */}
            <div
              onClick={() => setLevel("Easy")}
              className={`p-4 rounded-2xl cursor-pointer border bg-gradient-to-br from-green-50 to-white ${
                level === "Easy"
                  ? "border-green-400"
                  : "border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-green-600">Easy</p>
                <Lightbulb size={18} className="text-green-500" />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Short sentences & gentle vocabulary.
              </p>
            </div>

            {/* Medium */}
            <div
              onClick={() => setLevel("Medium")}
              className={`p-4 rounded-2xl cursor-pointer border bg-gradient-to-br from-orange-50 to-white ${
                level === "Medium"
                  ? "border-green-400"
                  : "border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-orange-500">Medium</p>
                <Star size={18} className="text-orange-400" />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Everyday situations with detail.
              </p>

              {level === "Medium" && (
                <span className="inline-block mt-3 px-3 py-1 text-xs rounded-full bg-green-50 text-green-600">
                  Selected
                </span>
              )}
            </div>

            {/* Hard */}
            <div
              onClick={() => setLevel("Hard")}
              className={`p-4 rounded-2xl cursor-pointer border bg-gradient-to-br from-purple-50 to-white ${
                level === "Hard"
                  ? "border-green-400"
                  : "border-transparent"
              }`}
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-purple-500">Hard</p>
                <Target size={18} className="text-purple-500" />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Longer thinking and tricky choices.
              </p>
            </div>
          </div>
        </div>

        {/* WHAT YOU'LL GET */}
        <div className="px-4 mt-6">
          <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl p-5 text-white">
            <p className="text-xs font-semibold mb-1">WHAT YOU’LL GET</p>
            <h3 className="text-lg font-semibold">
              Friendly quiz with instant feedback
            </h3>

            <ul className="text-sm mt-3 space-y-2 list-disc list-inside">
              <li>Bite-sized explanations for every answer.</li>
              <li>Tone automatically matches the learner profile.</li>
            </ul>
          </div>
        </div>

      </div>

     
      <div className="fixed bottom-0 left-0 right-0 bg-white">
        <div className="mx-auto max-w-[420px] p-4">
          <button
            disabled={!level}
            onClick={generateQuiz}
            className={`w-full py-4 rounded-xl font-semibold ${
              level
                ? "bg-green-500 text-white"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            Generate Quiz
          </button>
        </div>
      </div>

    </div>
  );
}

