# Deployment Guide

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update the base path in `vite.config.ts`:**
   - Open `vite.config.ts`
   - Change the repository name in the base path to match your GitHub repository name
   - Example: If your repo is `my-kubernetes-diagram`, change:
     ```typescript
     base: process.env.GITHUB_PAGES === 'true' ? '/my-kubernetes-diagram/' : '/',
     ```

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages.

**Setup Steps:**

1. Push your code to GitHub
2. Go to your repository → Settings → Pages
3. Under "Source", select **"GitHub Actions"**
4. Make sure the base path in `vite.config.ts` matches your repository name
5. Push to `main` or `master` branch - deployment will happen automatically

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

## Important Notes

- **Base Path**: The base path in `vite.config.ts` must match your GitHub repository name for assets to load correctly
- **Repository Name**: If your repository name has different casing or spacing, update the base path accordingly
- **Root Domain**: If deploying to a custom domain (not GitHub Pages subdomain), set `base: '/'` in `vite.config.ts`

## Troubleshooting

### Assets not loading on GitHub Pages
- Check that the base path in `vite.config.ts` matches your repository name exactly
- Ensure the GitHub Actions workflow sets `GITHUB_PAGES: 'true'` (already configured)

### Build errors
- Make sure all dependencies are installed: `npm install`
- Check that Node.js version is 20 or higher
- Verify TypeScript is installed: `npm install --save-dev typescript @types/react @types/react-dom @types/node`

### TypeScript errors
- Run `npm install` to install all dependencies including TypeScript types
- The `tsconfig.json` file is configured for React 18 with the new JSX transform

