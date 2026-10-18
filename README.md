# Jayveer Singh — Developer Portfolio

A production-quality developer portfolio built with **React**, **Vite**, **Vanilla CSS Design System**, and **Lucide React**, inspired by the visual design language of [umang.safecode.workers.dev](https://umang.safecode.workers.dev/).

---

## 🌟 Highlights & Features

- **Aesthetic**: Warm charcoal/navy dark mode with terracotta accents (`#d97757`), editorial serif typography, and an alternate cream linen light mode.
- **Floating Pill Navigation**: Glassmorphic centered pill navbar with numbered sections (`01 About`, `02 Experience`, `03 Projects`, `04 Skills`, `05 Achievements`, `06 Contact`), active section tracking, mobile drawer, and working theme toggle with `localStorage` persistence.
- **Dynamic Editorial Hero**: Greets visitors based on current local time (*"Good morning"*, *"Good afternoon"*, *"Good evening"*), status indicator (*"Available for entry-level Java & Full-Stack Developer roles"*), and quick stat highlights (BCA 8.2 CGPA, 250+ LeetCode solved).
- **Interactive Profile Navigator**: Quick prompt buttons allowing recruiters to explore Jayveer's tech stack, Spring Boot projects, academic background, and contact options with instant smooth jump links.
- **Honest Career & Education Timeline**: Clear presentation of BCA at D.S. College, Aligarh (RMPSU, 2024–2025, 8.2 CGPA), independent full-stack project development, and algorithmic problem-solving.
- **Featured Projects**: Expandable project cards with *"Show more / Show less"* toggle, technology tags, and direct repository links:
  1. **AI Resume Analyzer** (Java, Spring Boot, Gemini API, Spring WebClient, REST APIs)
  2. **Smart Research Assistant** (Java, Spring Boot, Spring WebClient, Gemini API, Hindi Translation)
  3. **Book Store Management System** (Java, Spring Boot, Spring Data JPA, Hibernate, MySQL, Thymeleaf)
- **Categorized Technical Skills**: Visual cards for Programming Languages, Backend & Frameworks, Database & Storage, Frontend, and Developer Tools.
- **Verified Achievements**: 250+ LeetCode problems, LeetCode 50 Days Badge, 1st Place in 7-day Employability Skills Development Program, and NSDC Certification.
- **Direct Contact & Message Builder**: Quick copy buttons for email, phone, and location, plus an honest message composer that dispatches via mailto or one-click clipboard copying.
- **Cloudflare Ready**: Configured for Cloudflare Workers (with static assets binding) and Cloudflare Pages.

---

## 📁 Project Structure

```text
jayveer-portfolio/
├── public/
│   ├── robots.txt
│   └── resume.pdf                 <-- [Place your real resume PDF here]
├── src/
│   ├── components/
│   │   ├── About.jsx              <-- About section narrative & engineering pillars
│   │   ├── Achievements.jsx       <-- LeetCode & certification highlight cards
│   │   ├── BrandIcons.jsx         <-- SVG icons for GitHub, LinkedIn, LeetCode, Starburst
│   │   ├── Contact.jsx            <-- Direct contact channels & honest message form
│   │   ├── Education.jsx          <-- BCA degree details & institution highlights
│   │   ├── Experience.jsx         <-- Honest timeline of education & project development
│   │   ├── Footer.jsx             <-- Copyright, social links, back-to-top button
│   │   ├── Hero.jsx               <-- Editorial greeting, stats, and quick navigator
│   │   ├── Navbar.jsx             <-- Floating pill navbar & mobile drawer
│   │   ├── Projects.jsx           <-- Expandable project cards with tech tags
│   │   └── Skills.jsx             <-- Categorized skill badges with color dots
│   ├── data/
│   │   └── portfolioData.js       <-- [CENTRAL CONFIG] Update all your details here!
│   ├── styles/
│   │   └── index.css              <-- Light & Dark theme variables, layout & animations
│   ├── App.jsx                    <-- Main container with theme & scroll-spy
│   └── main.jsx                   <-- React entry point
├── index.html                     <-- SEO title, meta descriptions, and Google Fonts
├── package.json                   <-- Dependencies and build scripts
├── vite.config.js                 <-- Vite bundling configuration
├── wrangler.jsonc                 <-- Cloudflare Workers configuration
└── README.md                      <-- Documentation and deployment guide
```

---

## ⚙️ How to Update Your Personal Details

All personal details, links, project repositories, and resume paths are centralized in **[`src/data/portfolioData.js`](file:///d:/Jayveer%20Portfolio/src/data/portfolioData.js)**.

Open that file to update:

1. **Email**:
   ```javascript
   email: "your.real.email@gmail.com",
   ```
2. **Phone Number**:
   ```javascript
   phone: "+91 98765 43210",
   ```
3. **LinkedIn URL**:
   ```javascript
   linkedin: "https://www.linkedin.com/in/your-actual-profile",
   ```
4. **LeetCode Profile URL**:
   ```javascript
   leetcode: "https://leetcode.com/u/Jayveer-Singh0017",
   ```
5. **Resume PDF**:
   - Save your PDF resume as `public/resume.pdf`.
   - In `src/data/portfolioData.js`, set:
     ```javascript
     resumeAvailable: true,
     ```
6. **Project Repository & Live Demo URLs**:
   - In `projectsData`, update `githubUrl` for each project to the exact repository link:
     ```javascript
     githubUrl: "https://github.com/Jayveer-Singh0017/ai-resume-analyzer",
     demoUrl: "https://your-demo-url.com", // Or keep null until deployed
     ```

---

## 💻 Local Development & Testing

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```
This produces optimized production assets in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚀 Cloudflare Deployment Guide

You can deploy the portfolio to a **`workers.dev`** subdomain (matching the reference site style) or to **Cloudflare Pages**.

### Option A: Cloudflare Workers (Recommended — `workers.dev` Subdomain)

1. **Log in to Cloudflare from your terminal**:
   ```bash
   npx wrangler login
   ```
   A browser window will open asking you to authorize Wrangler with your Cloudflare account.

2. **Verify `wrangler.jsonc`**:
   The file is already pre-configured in your workspace:
   ```jsonc
   {
     "name": "jayveer-portfolio",
     "compatibility_date": "2024-09-23",
     "assets": {
       "directory": "./dist",
       "binding": "ASSETS"
     }
   }
   ```

3. **Deploy to Cloudflare Workers**:
   ```bash
   npm run deploy:worker
   ```
   Wrangler will build the app and publish it to:
   `https://jayveer-portfolio.<your-subdomain>.workers.dev`

---

### Option B: Cloudflare Pages (Git Integration)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: complete Jayveer Singh portfolio"
   git branch -M main
   git remote add origin https://github.com/Jayveer-Singh0017/portfolio.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**:
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com/).
   - Click **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
   - Select your `portfolio` repository.
   - Configure Build Settings:
     - **Framework preset**: `Vite`
     - **Build command**: `npm run build`
     - **Build output directory**: `dist`
   - Click **Save and Deploy**.
   - Cloudflare will automatically build and give you a `*.pages.dev` URL with automatic continuous deployments on every `git push`.

---

## 🛠️ Redeploying After Changes

Whenever you update code or your profile in `src/data/portfolioData.js`:
```bash
npm run build
npm run deploy:worker
```
Your live website will be updated immediately.
