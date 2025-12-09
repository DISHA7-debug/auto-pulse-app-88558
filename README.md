# 🚗 Auto Pulse

A **mobile-first, multi-page web application** focused on vehicle health, maintenance tracking, and automotive insights.  
The app is designed to feel like a **native mobile application**, with clean navigation, structured screens, and an intuitive user experience.

---

## 🚀 Live Demo

🔗 **Live Application**  
https://auto-pulse-app-88558.vercel.app

---

## 📱 Overview

**Auto Pulse** is a mobile-based web app designed for the automotive domain.  
It provides users with a simple, accessible interface to view vehicle-related information, track maintenance status, and navigate between different functional screens.

Unlike single-page landing apps, Auto Pulse is a **multi-page application** with page-level routing and a clear navigation flow, making it closer to a real-world product experience.

The project focuses on:
- Mobile-first UX
- Reusable UI components
- Clean routing structure
- Scalable frontend architecture

---

## ✨ Key Features

- 📱 **Mobile-First Design**  
  UI is optimized primarily for mobile devices, with layouts and components designed for small screens.

- 🧭 **Multi-Page Navigation**  
  Separate screens handled through client-side routing instead of a single scroll-based page.

- 📊 **Dashboard-Style Interfaces**  
  Information presented using cards, lists, and structured sections.

- 🧾 **Form Handling & Validation**  
  Structured forms with proper validation for user input.

- 🔔 **User Feedback & Notifications**  
  Toasts and alerts for better interactivity and UX.

- 🎨 **Modern UI System**  
  Clean, consistent design using a component-based UI library.

- ⚡ **Fast Performance**  
  Built with a modern bundler and optimized rendering.

---

## 🛠 Tech Stack

### Frontend
- React
- TypeScript
- Vite
- React Router DOM

### UI & Styling
- Tailwind CSS
- shadcn/ui
- Radix UI
- Lucide Icons

### State & Utilities
- TanStack React Query
- React Hook Form
- Zod
- Class Variance Authority
- Tailwind Merge

### Tooling
- Vite
- ESLint
- PostCSS
- Autoprefixer

---

## 📂 Project Structure

```bash
auto-pulse-app-88558/
├── public/
├── src/
│   ├── assets/               # Images, icons, static assets
│   ├── components/
│   │   ├── ui/               # Shared UI components
│   │   └── ...               # Feature-specific components
│   ├── pages/
│   │   ├── Index.tsx         # Landing / entry screen
│   │   ├── Auth.tsx          # Authentication screen
│   │   ├── Dashboard.tsx     # Main dashboard
│   │   └── NotFound.tsx      # 404 page
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility/helper functions
│   ├── App.tsx               # App layout & routes
│   └── main.tsx              # Application entry point
├── index.html
├── vite.config.ts
├── tailwind.config.ts
├── postcss.config.js
├── package.json
└── README.md
```

---

## 🧭 Application Flow

- **Index / Landing Page**  
  Entry point introducing the app and guiding users forward.

- **Authentication Page**  
  Handles user access and onboarding-style interactions.

- **Dashboard Page**  
  Core application screen showing vehicle-related insights and actions.

- **Not Found Page**  
  Fallback UI for invalid routes.

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DISHA7-debug/auto-pulse-app-88558.git
cd auto-pulse-app-88558
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run Locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

---

## 📦 Build for Production

```bash
npm run build
```

---

## 🌍 Deployment

This project is deployed using **Vercel**.

### Deploy Your Own Version

1. Fork the repository
2. Import it into https://vercel.com
3. Set framework to **Vite**
4. Build command:
```bash
npm run build
```
5. Output directory:
```bash
dist
```

---

## 🎯 Project Purpose

This project was built to:
- Practice mobile-first frontend design
- Implement multi-page routing in React
- Build a realistic automotive-themed application
- Showcase frontend skills for **internships and portfolio evaluation**

---

## 📄 License

Personal project created for learning and portfolio purposes.

---

## 👤 Author

**Disha**  
GitHub: https://github.com/DISHA7-debug
