# 🏠 R&J Property Post Maker

A professional real-estate marketing tool that turns four simple property details into a polished, share-ready property post.

Users enter:

- Property & Type
- Location
- Price
- Highlights

The application automatically generates a **1080 × 1080 property creative** with professional styling, branding, and contact information.

Built as a practical AI/Automation internship assignment.

---

## ✨ Features

- 🏠 Generate professional real-estate property posts
- 🎨 Multiple professionally designed themes
- 📱 Responsive web interface
- 🖼️ Live property post preview
- 📥 Download posts as high-quality PNG images
- 🏷️ Automatic company branding
- 📞 Automatic contact information
- ✍️ Dynamic property title, location, price and highlights
- 📐 Fixed 1080 × 1080 export resolution
- ⚡ Client-side image generation
- 🔒 No backend required
- 🔑 No API keys required

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

- **React**
- **Vite**
- **Tailwind CSS**
- **JavaScript**
- **html-to-image**
- **Google Fonts**

### Main Libraries

- React – UI development
- Vite – development and production build tool
- Tailwind CSS – styling
- html-to-image – converting the property card into PNG

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