Permata Hatiku Medical Clinic Website

A modern booking website for Permata Hatiku Medical Clinic built with React, TypeScript, and Vite.

Features

🏠 Home page with hero section

📋 Services page showcasing clinic services

📅 Appointment booking system

✅ Booking confirmation page

🎨 Modern, responsive UI

Prerequisites

Before you begin, ensure you have the following installed:

Node.js
 (version 18 or higher)

npm
 (comes with Node.js) or yarn

Installation

Clone the repository:

git clone <repository-url>
cd permata-hatiku-clinic-website/permata-hatiku-website


Install dependencies:

npm install

Running the Site
Development Mode

To run the development server with hot module replacement:

npm run dev


The site will be available at http://localhost:5173 (or the next available port). Open this URL in your browser to view the site. The development server will automatically reload when you make changes to the code.

Building for Production

To create a production build:

npm run build


This will:

Type-check the TypeScript code

Build the optimized production bundle

Output the files to the dist directory

Preview Production Build

To preview the production build locally:

npm run preview


This will serve the production build at http://localhost:4173 (or the next available port).

Deploying to GitHub Pages

You can host your website on GitHub Pages using the following steps:

1. Install gh-pages
npm install --save-dev gh-pages

2. Add homepage to package.json

Add this line at the top level of package.json (replace with your GitHub username and repo name):

"homepage": "https://yourusername.github.io/permata-hatiku-website"

3. Add deploy scripts to package.json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}

4. Set base in vite.config.ts
export default defineConfig({
  base: "/permata-hatiku-website/",
  plugins: [react()],
});

5. Deploy

Run the deploy command:

npm run deploy


This will build your project and push the dist/ folder to the gh-pages branch.

Your site will be live at:

https://yourusername.github.io/permata-hatiku-website/

6. Updating the site

Whenever you make changes:

git add .
git commit -m "Update website"
git push origin main
npm run deploy

Available Scripts

npm run dev - Start the development server

npm run build - Build for production

npm run preview - Preview the production build

npm run lint - Run ESLint to check code quality

npm run lint:fix - Auto-fix linting issues

npm run deploy - Deploy the site to GitHub Pages

Project Structure
src/
├── components/      # Reusable React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   └── BookingForm.tsx
├── pages/          # Page components
│   ├── Home.tsx
│   ├── Services.tsx
│   ├── Appointment.tsx
│   └── BookingSuccess.tsx
├── App.tsx         # Main app component
└── main.tsx        # Application entry point

Technology Stack

React 19 - UI library

TypeScript - Type-safe JavaScript

Vite - Fast build tool and dev server

ESLint - Code linting

Development Notes

This template uses:

@vitejs/plugin-react
 for Fast Refresh

TypeScript with strict type checking

ESLint for code quality

For more advanced ESLint configuration options, see the Vite React TypeScript template documentation
.