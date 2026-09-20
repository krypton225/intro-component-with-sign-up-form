import { defineConfig } from 'vite';

// GitHub Pages serves from a repo sub-path; Netlify serves from the domain root.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/intro-component-with-sign-up-form/' : '/',
});
