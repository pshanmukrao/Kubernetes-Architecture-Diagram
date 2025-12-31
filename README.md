# Kubernetes Architecture Diagram

This is a code bundle for Kubernetes Architecture Diagram. The original project is available at https://www.figma.com/design/mkVflJVG0EbknPSYESWeox/Kubernetes-Architecture-Diagram.

## Running the code

Run `npm install` to install the dependencies.

Run `npm run dev` to start the development server.

## Building for Production

Run `npm run build` to create a production build.

## Deploying to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

This repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages when you push to the `main` or `master` branch.

1. Make sure your repository is named correctly (the base path in `vite.config.ts` should match your repository name)
2. Go to your repository Settings → Pages
3. Under "Source", select "GitHub Actions"
4. Push your code to the `main` or `master` branch
5. The workflow will automatically build and deploy your site

**Important:** Update the base path in `vite.config.ts` to match your repository name. For example, if your repository is `my-kubernetes-diagram`, change:
```typescript
base: process.env.GITHUB_PAGES === 'true' ? '/my-kubernetes-diagram/' : '/',
```

### Option 2: Manual Deployment

1. Install `gh-pages`: `npm install --save-dev gh-pages`
2. Update the base path in `vite.config.ts` to match your repository name
3. Build the project: `npm run build`
4. Deploy: `npm run deploy`

Or manually:
1. Build: `npm run build`
2. Push the `dist` folder to the `gh-pages` branch

## Configuration

Before deploying, make sure to update the `base` path in `vite.config.ts` to match your GitHub repository name. This ensures all assets load correctly on GitHub Pages.