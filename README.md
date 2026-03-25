# Bharat

Bharat is a **fully original web application** built to present the history, languages, symbolism, and cultural identity of India through a modern, interactive, and scalable web architecture.

This project was **designed, architected, and implemented from scratch** as a portfolio-grade application, focusing on clean UI composition, dynamic data consumption, authentication flows, and responsive behavior across devices.

![bharat](https://github.com/user-attachments/assets/05331190-a5bc-47c8-9308-7b089d18b49f)

---

## ✨ Project Overview

Bharat is not a template, clone, or tutorial follow-along project.

It is a **custom-designed platform** that combines:

- Structured content served via APIs
- A modern frontend architecture using Next.js
- User authentication and protected routes
- A responsive, mobile-first UI
- Interactive components such as sliders and dynamic sections

The project emphasizes **clarity of domain**, **scalability**, and **production-ready patterns**.

---
## 📖 Pages

### Home Page

This page serves as a multidimensional introduction to both ancient and modern India, utilizing a dynamic grid layout that alternates across eight fundamental pillars: from politics and economy to geography and society. Technically, it stands out for its advanced conditional rendering, which reorders content (images and secondary paragraphs) based on the user's device to ensure a logical visual hierarchy. The color palette (Saffron, White, and Green) reinforces the national identity, while the integration of an external API ensures that macroeconomic and demographic data remain accurate and up-to-date.

<img width="765" height="633" alt="bharat-home" src="https://github.com/user-attachments/assets/6399c783-2fdc-4bdd-b68c-4073d098b932" />

### History Page

The History page offers a profound chronological journey spanning over 5,000 years, from the Indus Valley Civilization to the contemporary era. The technical core of this section is its intelligent URL-parameter navigation system, which allows users to jump to specific eras with a smooth-scroll effect calibrated to offset the fixed Navbar height. Each historical block is enriched with archaeological evidence and detailed descriptions, managed through a sorting algorithm that ensures narrative integrity regardless of the asynchronous data loading sequence.

<img width="765" height="631" alt="bharat-history" src="https://github.com/user-attachments/assets/01fa9bda-1212-4be9-ac02-9c6d0c99bfbd" />

### Languages Page

Designed as a high-performance educational catalog, this page manages the staggering diversity of India's 22 official languages. It implements a dual-state React architecture to allow instantaneous filtering by language families (Indo-Aryan, Dravidian, etc.) without network latency. The user experience is elevated through a nested modal system built with Portals, allowing users to dive deep into each language's description and view scripts in high resolution via an immersive gallery, all while maintaining a clean interface optimized with Skeleton Loaders.

<img width="763" height="631" alt="bharat-languages" src="https://github.com/user-attachments/assets/5d47b057-8a7a-4499-a0e4-b9f34185311c" />

### Languages Modal

The Languages Modal is a sophisticated interaction component that leverages React Portals to decouple complex UI elements from the main DOM tree, ensuring a seamless overlay experience without z-index conflicts. It features a dual-layered navigation system where the first layer provides a structured overview of the language’s family, speakers, and geographic reach, while a secondary, nested portal allows users to trigger a high-resolution, full-screen immersive view of the image. To optimize user experience, the component integrates custom React Hooks (useRef and useEffect) for intelligent outside-click detection and event listener cleanup, all while maintaining the project's thematic integrity through a responsive design styled with the national colors of Bharat.

<img width="763" height="631" alt="bharat-languages-1" src="https://github.com/user-attachments/assets/3aefc8bb-f7b7-4e47-a905-1e392d1b5410" />

---

## 🧠 Key Features

- 📚 **Dynamic cultural and historical content**
- 🔐 **Authentication with protected routes**
- 🧭 **Responsive navigation with mobile menu**
- 🖼️ **Interactive image slider**
- ⚡ **Client-side data fetching with loading skeletons**
- 📱 **Fully responsive design** (mobile, tablet, desktop)
- 🎨 **Consistent UI theming and layout system**

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js (App Router) |
| **Language** | JavaScript (ES6+) |
| **Styling** | Tailwind CSS |
| **Authentication** | Firebase Authentication |
| **Data Layer** | External REST APIs (custom content repository) |
| **HTTP Client** | Axios |
| **State Management** | React Hooks |
| **Icons** | React Icons |
| **Deployment** | Vercel |

---

## 🧩 Architecture Notes

- The application follows a **component-driven architecture**
- Content is **decoupled from the UI** and consumed via APIs
- Authentication logic is centralized using a custom `AuthContext`
- Protected routes are enforced client-side
- UI components are reusable and domain-oriented
- Layout decisions prioritize scalability and maintainability

---

## 🔐 Authentication & Protected Routes

- Users can sign in and sign out using Firebase Authentication
- Certain routes are restricted to authenticated users
- Redirection logic ensures unauthorized access is prevented
- Session state is handled via React Context

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/SALVADORPOETA/Bharat-sm.git
cd Bharat-sm
npm install
```

### Development Server

```bash
npm run dev
```

The application will be available at:

```
http://localhost:3000
```

---

## 📁 Project Structure

```
app/
 ├─ components/
 ├─ context/
 ├─ protected/
 ├─ pages/
 └─ layout.js

public/
 ├─ images/
 └─ assets/
```

The structure is intentionally simple and explicit to keep domain logic clear and readable.

---

## 🧪 Code Quality & Standards

- Clear component responsibilities
- Predictable state handling
- Consistent naming conventions
- No autogenerated boilerplate logic
- No copy-pasted UI kits or templates

This repository reflects **intentional design decisions**, not experimental code.

---

## 📌 Originality Statement

This project is **100% original**.

- No starter templates were used
- No UI kits were copied
- No tutorial projects were followed
- All components, layouts, and logic were independently designed and implemented

Bharat was built as a **serious portfolio project**, intended to demonstrate real-world frontend architecture and engineering judgment.

---

## 👨🏽‍💻 Author

**Salvador Martínez**  
*Full-Stack Developer*

- **GitHub:** [https://github.com/SALVADORPOETA](https://github.com/SALVADORPOETA)
- **LinkedIn:** [https://www.linkedin.com/in/salvador-martinez-sm/](https://www.linkedin.com/in/salvador-martinez-sm/)

---

## ⚖️ License

This is a portfolio project by **Salvador Martinez**.

No commercial use intended.  
All rights reserved to the author.

---

## 🤝 Contributing

This is a personal portfolio project and is not open for contributions at this time.

---

## 📧 Contact

For inquiries or feedback, please reach out via [LinkedIn](https://www.linkedin.com/in/salvador-martinez-sm/) or GitHub.

---

## 🙏 Acknowledgments

Inspired by the enduring legacy and fascinating history of India.
