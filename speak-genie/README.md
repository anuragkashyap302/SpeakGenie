🎧 Frontend Engineer Interview Task

This project is a pixel-close recreation of given UI screens from an existing learning app, built as part of a Frontend Engineer interview assignment.

The focus of this assignment is UI accuracy, component structure, responsiveness, and clean frontend practices, rather than backend or API integration.

🚀 Live Demo

👉 Live URL:
<ADD YOUR VERCEL / NETLIFY LINK HERE>

📦 Tech Stack

React (Vite)

JavaScript

Tailwind CSS

React Router DOM

Lucide React (icons)

Native HTML Audio API

🎯 Features Implemented
✅ Screen 1 — Home Screen

Gradient header with user greeting

XP Progress card (responsive, stretches on desktop)

Action grid (Video, Stories, AI Calls, etc.)

Horizontal story carousels

Bottom navigation with active state

Mobile-first layout

✅ Screen 2 — Now Playing (Audio Story Player)

Real audio playback using native <audio>

Play / Pause functionality

Seekable progress bar

Time tracking (current time / duration)

Centered artwork (mobile & desktop)

Quiz CTA with badge

Fully responsive UI

✅ Screen 3 — Craft a Custom Quiz (Learn Tab)

Topic selection with chips

Difficulty selection (Easy / Medium / Hard)

Gradient difficulty cards

Selected state handling

Disabled / enabled Generate Quiz button

Toast notification feedback

📱 Responsive Design Approach

This project follows a mobile-first design strategy, as specified in the assignment:

Mobile: Primary focus, pixel-close UI

Tablet: Graceful scaling, no broken layouts

Desktop: Enhanced spacing and centering (bonus)

Layouts are built to naturally stretch on larger screens without fixed widths.

🧩 Component Structure
src/
│── components/
│   ├── BottomNav.jsx
│   ├── Header.jsx
│   ├── XPProgress.jsx
│   ├── StoryCard.jsx
│   ├── ScrollToTop.jsx
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

Managed via useRef and useState

Supports:

Play / Pause

Progress sync

Click-to-seek

Time formatting

This approach keeps the solution lightweight and production-friendly.

🧠 Assumptions Made

Static data is used for stories, XP, and quiz topics

No backend or API integration was required

Authentication and persistence are out of scope

Images and audio files are served locally from /public

🛠️ How to Run Locally
# Clone repository
git clone <your-repo-url>

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

Accurate spacing & hierarchy

Mobile-first thinking

Production-style component design

Thank you for the opportunity to demonstrate my frontend skills.