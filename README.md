# ❄ themeFrost – Web Template Preview Platform

 **wep app** – a professional and modern platform built to showcase web UI template with a clean interface and live documentation support.  

This project serves as a **template preview environment**, and will also include **additional templates in the future**, each with its own documentation and demo.

---

## 🔗 Live Preview

Vercel .

---

##  Features

-  Built with the latest versions of:
  - **React 18**
  - **Tailwind CSS**
  - **Vite**
  - **TypeScript**
  - **Bun**
- ⚡ Super-fast build and dev environment
- 📄 Dynamic routing between preview and documentation pages
- 🧩 Reusable and modular components
- 📚 Integrated template documentation (with `Docs.tsx`)

---

## 🧱 Project Structure

```bash
Preview-_themeFrost-/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   ├── pages/
│   │   ├── Preview.tsx       # Main template display
│   │   └── Docs.tsx          # Template documentation
│   ├── router/
│   │   └── index.tsx
│   ├── styles/
│   │   └── global.css
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.ts
├── tsconfig.json
├── vite.config.ts
├── bun.lockb
└── README.md
