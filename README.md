🎧 Frontend Engineer Interview Task

This project is a pixel-close recreation of the provided UI screens from an existing learning app, built as part of a Frontend Engineer interview assignment.

The focus of this assignment is UI accuracy, component structure, responsiveness, and clean frontend practices, rather than backend or API integration.


👉 Live Demo:
https://speak-genie-inky.vercel.app/

📦 Tech Stack

React (Vite)

JavaScript

Tailwind CSS

React Router DOM

Lucide React (Icons)

Native HTML Audio API

🎯 Features Implemented
✅ Screen 1 — Home Screen

Gradient header with user greeting

Responsive XP Progress card (stretches on desktop)

Action grid (Video Learning, Stories, AI Calls, etc.)

Horizontal story carousels

Bottom navigation with active state handling

Mobile-first layout

✅ Screen 2 — Now Playing (Audio Story Player)

You can open this screen by clicking on any Audio Story from the Home page.

Real audio player UI

Play / Pause functionality

Seekable progress bar

Time tracking (current time / duration)

Centered artwork (mobile & desktop)

Quiz CTA with badge

Fully responsive layout

✅ Screen 3 — Craft a Custom Quiz (Learn Tab)

Topic selection with chips

Difficulty selection (Easy / Medium / Hard)

Gradient difficulty cards

Selected state handling

Disabled / enabled Generate Quiz button

Toast notification feedback

📱 Responsive Design Approach

This project follows a mobile-first design strategy, as specified in the assignment:

Mobile: Primary focus with pixel-close UI

Tablet: Graceful scaling without layout breaks

Desktop: Enhanced spacing and centering (bonus)

Layouts are designed to naturally stretch on larger screens without relying on fixed widths.

🧩 Component Structure
src/
│── components/
│   ├── BottomNav.jsx
│   ├── Header.jsx
│   ├── XPProgress.jsx
│   ├── ActionGrid.jsx
│   ├── AudioStories.jsx
│   ├── PracticeWithAI.jsx
│   ├── PracticeWithHuman.jsx
│
│── pages/
│   ├── Home.jsx
│   ├── NowPlaying.jsx
│   ├── Quiz.jsx
│
│── App.jsx
│── main.jsx
│── index.css


Components are designed to be:

Reusable

Focused on a single responsibility

Easy to maintain and extend

🎵 Audio Implementation

Uses native HTML Audio API

No external audio libraries

Managed using useRef and useState

Supports:

Play / Pause

Progress synchronization

Click-to-seek

Time formatting

This approach keeps the implementation lightweight and production-friendly.

🧠 Assumptions Made

Static data is used for stories, XP, and quiz topics

No backend or API integration was required

Authentication and persistence are out of scope

Images and audio files are served locally from /public

🛠️ How to Run Locally
# Clone repository
git clone https://github.com/anuragkashyap302/SpeakGenie

# Install dependencies
npm install

# Start development server
npm run dev


The app will be available at:
👉 http://localhost:5173

📌 Evaluation Alignment

This project aligns with the evaluation criteria mentioned in the assignment:

✅ UI Accuracy

✅ Clean Component Decomposition

✅ Tailwind Best Practices

✅ State & Interactivity

✅ Responsiveness

✅ Professional Project Structure

🙌 Final Notes

This project intentionally prioritizes frontend craftsmanship:

Clean layout logic

Accurate spacing & visual hierarchy

Mobile-first thinking

Production-style component design

Thank you for the opportunity to demonstrate my frontend skills.
