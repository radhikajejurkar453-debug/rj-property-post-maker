# 🏠 R&J Property Post Maker

A professional real-estate marketing tool that turns four simple property details into a polished, share-ready property post.

Users enter:

* Property & Type
* Location
* Price
* Highlights

The application automatically generates a **1080 × 1080 property creative** with professional styling, branding, and contact information.

Built as a practical **AI/Automation internship assignment**.

---

## 🎯 Why I Built This

Real-estate businesses frequently need attractive property creatives for platforms such as **WhatsApp and Instagram**. Creating these posts manually for every property can be time-consuming.

I built **R&J Property Post Maker** to simplify this process. Instead of designing each post manually, users can enter four property details and instantly generate a professional, ready-to-share creative.

This project also gave me an opportunity to explore **React, Vite, frontend development, image generation, and deployment**, while using **Claude Code** as an AI-assisted development tool.

---

## 🤖 How I Built It

I developed this project with the assistance of **Claude Code**.

The development process involved:

* Using Claude Code to understand and structure the React application
* Building the property input form
* Creating reusable React components
* Designing multiple property-post themes
* Implementing automatic branding and contact information
* Making the interface responsive
* Implementing client-side PNG generation
* Testing different property inputs and layouts
* Debugging and improving the application
* Building and deploying the final application using **Vite and GitHub Pages**

The project does **not require a backend, API keys, or a database**.

---

## ✨ Features

* 🏠 Generate professional real-estate property posts
* 🎨 Multiple professionally designed themes
* 📱 Responsive web interface
* 🖼️ Live property post preview
* 📥 Download posts as high-quality PNG images
* 🏷️ Automatic company branding
* 📞 Automatic contact information
* ✍️ Dynamic property title, location, price and highlights
* 📐 Fixed 1080 × 1080 export resolution
* ⚡ Client-side image generation
* 🔒 No backend required
* 🔑 No API keys required

---

## 🎨 Available Themes

### Emerald Estate

Deep green and brass with a premium real-estate appearance.

### Ivory Minimal

Clean, light and editorial-style design.

### Sandstone Classic

Warm stone and brick colors with a traditional brochure feel.

### Midnight Skyline

Modern dark theme with gold accents and a high-rise aesthetic.

---

## 🛠️ Tech Stack

* **React** — UI and component development
* **Vite** — development server and production build
* **JavaScript** — application logic
* **Tailwind CSS** — styling
* **html-to-image** — client-side PNG generation
* **Google Fonts** — typography
* **Git & GitHub** — version control
* **GitHub Pages** — deployment
* **Claude Code** — AI-assisted development

---

## 🧠 What I Learned

This project was a new challenge for me because I had limited experience with **React and Vite** before starting it.

Through this project, I learned how to:

* Work with React components and props
* Manage application state
* Build responsive interfaces
* Create reusable UI components
* Work with Vite projects
* Generate images directly in the browser
* Handle dynamic user input
* Debug frontend issues
* Use Git and GitHub
* Deploy a React application using GitHub Pages
* Use **Claude Code effectively for development, debugging, and problem-solving**

---

## 📂 Project Structure

```text
property-post-maker/
│
├── public/
│   └── logo.png
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── PropertyForm.jsx
│   │   ├── PropertyPost.jsx
│   │   └── Preview.jsx
│   │
│   ├── config/
│   │   ├── branding.js
│   │   └── themes.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

For production:

```bash
npm run build
```

---

## 🌐 Live Demo

**Live Application:**
https://radhikajejurkar453-debug.github.io/rj-property-post-maker/

**GitHub Repository:**
https://github.com/radhikajejurkar453-debug/rj-property-post-maker

---

## 👩‍💻 Author

**Radhika Jejurkar**

Data Science Student | Python | Machine Learning | Data Analytics | AI Enthusiast

And because the assignment explicitly asks for **“building it with Claude”**, mentioning Claude Code transparently in the README is a **good idea**, not something to hide.
