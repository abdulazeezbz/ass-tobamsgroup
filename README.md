# 🚀 Tobams Group — Frontend Assessment

A pixel-perfect, responsive frontend implementation for **Tobams Group**, built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

---

## 🔗 Live Demo & Links

- **Live URL**: [https://ass.tobamsgroup.com](https://ass.tobamsgroup.com)
- **GitHub Repository**: [https://github.com/abdulazeezbz/ass-tobamsgroup](https://github.com/abdulazeezbz/ass-tobamsgroup)

---

## 🛠 Tech Stack

- **Framework**: [Next.js 15+ (App Router)](https://nextjs.org/)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Brand PNG icons
- **Typography**: [Google Fonts (Nunito & Nunito Sans)](https://fonts.google.com/) via `next/font`

---

## 💻 Quick Setup & Local Development

Getting the project running locally takes just a few steps:

### 1. Clone the repository
```bash
git clone https://github.com/abdulazeezbz/ass-tobamsgroup.git
cd ass-tobamsgroup
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the page.

### 4. Build for production
```bash
npm run build
npm run start
```

---

## 🎨 Thoughtful Design Decisions & UX Improvements

While matching the Figma design down to the pixel, I made a few intentional design and accessibility choices to ensure the best possible user experience across devices:

1. **Footer Brand Logo Visibility (`brightness-5 invert`)**:
   - The original logo had dark purple visual that blended into the dark `#11040E` footer background.
   - I applied `brightness-5 invert` to make the logo clean, crisp, and high-contrast while maintaining brand integrity.

2. **"Get In Touch" Button White Border**:
   - Added a subtle semi-transparent white border (`border border-white/20`) around the "Get In Touch" button. This prevents it from getting lost against the dark `#1D0617` CTA ribbon and gives it a refined, clickable feel.

3. **Updated Copyright Year (2024 ➔ 2026)**:
   - Rather than hardcoding static "2024" text from the design file, the copyright year is calculated dynamically using `new Date().getFullYear()`, keeping it accurate and production-ready for 2026 and beyond.

4. **No Broken Badges (`whitespace-nowrap`)**:
   - Added `whitespace-nowrap` to course tags and feature pills (e.g., *"Effective Communication"*). This keeps multi-word badges clean and readable as single cohesive chips instead of awkwardly wrapping mid-word.

5. **Interactive Testimonials Slider with Touch-Swipe**:
   - Created a responsive slider that shows **1 review on mobile**, **2 on tablet**, and **3 on desktop**.
   - Added both button controls and touch-swipe gestures on mobile for an intuitive phone experience.

6. **Custom Asymmetrical Shapes & Borders**:
   - Accurately recreated Figma’s custom diagonal corners, top-left curves, and circular profile cutouts using modular Tailwind utility presets inside `WebCard`.

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx              # Root layout with fonts & SEO metadata
│   ├── page.tsx                # Clean page composition assembling sections
│   └── globals.css             # Tailwind v4 theme, brand colors & global styles
├── components/
│   ├── button.tsx              # Reusable button with left/right icon support
│   ├── header.tsx              # Responsive header + mobile drawer
│   ├── menuLinks.tsx           # Nav links with active route indicator
│   ├── hero.tsx                # Hero section with dark overlay
│   ├── webCard.tsx             # Master reusable card engine powering feature sections
│   ├── learningManagement.tsx  # LMS section (circular image + grid)
│   ├── coorporateTraining.tsx  # Corporate Training (diagonal shape)
│   ├── personalisedTraining.tsx# Personalised Training (top-left shape)
│   ├── capacityDevelopment.tsx # Capacity Development section
│   ├── managementDevelopment.tsx# Management Development (dark theme)
│   ├── transformationHub.tsx   # CEO Transformation Hub (full header)
│   ├── trainingConsultant.tsx  # Consultant section (2x2 grid)
│   ├── consultationBanner.tsx  # Purple consultation CTA banner
│   ├── testimonials.tsx        # Interactive testimonial carousel
│   └── footer.tsx              # Responsive footer with CTA ribbon & offices
└── public/
    └── images/                 # Optimized local assets & brand icons
```

---

## ⚠️ Known Issues & Technical Assumptions

- **External Avatar Images**: Used Unsplash CDN images for testimonials and configured `images.remotePatterns` in `next.config.ts` to allow Next.js image optimization without security warnings.
- **Social Media Icons**: Figma featured custom filled circular brand badges for LinkedIn, Instagram, and X (Twitter). Sourced high-resolution circular PNG assets to ensure exact visual parity.

---

## 👤 Author

- **Abdulazeez (ABZ)**
- LinkedIn: [Abdulazeez](https://www.linkedin.com/in/abdulazeezabz/)
- X (Twitter): [@abdoulazeez_abz](https://x.com/abdoulazeez_abz)
- Instagram: [@abdulazeezabz](https://www.instagram.com/abdulazeezabz/)
