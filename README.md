🌐 Personal Portfolio Website

Welcome to my interactive, visually engaging developer portfolio — built with **React**, **Three.js**, and **Blender**! It showcases not only my projects and skills but also my personality, creativity, and unique approach to frontend development.

🚀 Live Site
🔗 [View the website](https://techujimbei.github.io/portfolio-website/)  

✨ Features
- 🦖 3D Animated Dino Model that follows your mouse with head-tracking
- 🎨 Vibrant UI blending creativity and tech, built with `@react-three/fiber`, `drei`, and Blender models
- 💬 About Me section that reflects personality, interests, and aspirations
- 📫 Contact Dialog with links to my Gmail, Instagram, and Discord
- 🫧 Floating animated bubbles and soft backdrops that enhance interactivity
- 🎥 HDR environment lighting for real-world depth and ambiance
- 📱 Responsive across devices

🧱 Built With
- React – Frontend framework
- Three.js + @react-three/fiber** – For real-time 3D rendering
- Blender – Custom designed 3D models
- @react-three/drei – Helpers for lights, controls, and environment
- HTML/CSS – Custom animations and responsive styling
- GitHub Pages – For deployment

📂 Folder Structure (Core Highlights)

portfolio-website/
│
├── public/
│ ├── portfolio_dino_final.glb # Main Blender 3D model
│ ├── bghdr.hdr # HDR environment for lighting
│
├── src/
│ ├── components/
│ │ ├── DinoScene.js # 3D canvas with lighting and interactivity
│ │ ├── AboutDialog.js # About me modal with 3D model
│ │ ├── ContactDialog.js # Contact modal with links
│ │ ├── Bubbles.js # Visual animated bubble elements
│ │ ├── NameBackdrop.js # Blurred title backdrop
│
├── README.md
├── package.json

🛠️ Run Locally
To run the project locally:

```bash
git clone https://github.com/techyjimbei/portfolio-website.git
npm install
npm start
