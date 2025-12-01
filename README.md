# Personal Portfolio (Vite + React + Tailwind)

This is a starter personal portfolio built with React, Vite, Tailwind CSS, and Framer Motion. Replace the sample data in `src/data.tsx` with your real resume data.

Features
- React + Vite (TypeScript)
- React Router for page navigation
- Tailwind CSS for utility-first styling
- Framer Motion for animations
- Dark/Light theme toggle

Local development
1. Install dependencies: npm install
2. Start dev server: npm run dev
3. Build: npm run build

Deploy
- Vercel: import the repo and use `npm run build` as build command
- Netlify: configure the site to run `npm run build` and publish `dist`

More detailed steps

Vercel
1. Push the repo to GitHub.
2. On Vercel, choose "Import Project" and select your repository.
3. Use the Vite framework preset or set the build command to `npm run build` and the output directory to `dist`.
4. Deploy — Vercel will build and publish your site.

Netlify
1. Push the repo to GitHub.
2. On Netlify, create a new site from Git.
3. Connect your repository and set the build command to `npm run build` and publish directory to `dist`.
4. Optionally enable Netlify Forms if you want form handling without a separate backend. To use Netlify Forms, add `data-netlify="true"` to the `<form>` element in `src/pages/Contact.tsx` and redeploy.

Local verification checklist
- Run `npm install`.
- Start the dev server `npm run dev` and open http://localhost:5173.
- Verify the following pages: Home, Skills, Projects, Experience, About, Contact.
- Verify `public/resume.pdf` downloads when clicking the Resume button/link.

Assets
- Add your `resume.pdf` to `public/resume.pdf` (already present in this repo).
- Add project thumbnails to `src/assets/` and reference them in `src/data.tsx` as `thumb` fields (example: `src/assets/portfolio-thumb.svg`).
- Add certification images to `src/assets/` and they will display in the Certifications carousel.

Netlify Forms (optional)
1. The contact form in `src/pages/Contact.tsx` is configured with `data-netlify="true"` and posts URL-encoded data — Netlify will capture submissions when deployed.
2. If you prefer the form to use the classic Netlify redirect (and allow the success page), remove the `onSubmit` handler in `Contact.tsx` so the browser posts the form directly.
3. To test Netlify forms locally, deploy to a draft site on Netlify and submit the form there; submissions appear in your Netlify dashboard.

Suggested next improvements
- Add real project thumbnails and cert images.
- Replace placeholder copy in `src/data.tsx` with your finalized resume text.
- Add unit tests for critical components and a small Lighthouse check in CI.


Replace the placeholders in `src/data.tsx` with your real information (name, projects, skills, experience, resume link).
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
