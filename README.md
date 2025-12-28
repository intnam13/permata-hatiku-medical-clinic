# Permata Hatiku Medical Clinic Website

A modern booking website for Permata Hatiku Medical Clinic built with React, TypeScript, and Vite.

## Features

- 🏠 Home page with hero section
- 📋 Services page showcasing clinic services
- 📅 Appointment booking system
- ✅ Booking confirmation page
- 🎨 Modern, responsive UI

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd permata-hatiku-clinic-website/permata-hatiku-website
```

2. Install dependencies:
```bash
npm install
```

## Running the Site

### Development Mode

To run the development server with hot module replacement:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or the next available port). Open this URL in your browser to view the site.

The development server will automatically reload when you make changes to the code.

### Building for Production

To create a production build:

```bash
npm run build
```

This will:
- Type-check the TypeScript code
- Build the optimized production bundle
- Output the files to the `dist` directory

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build at `http://localhost:4173` (or the next available port).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview the production build
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
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
```

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting

## Development Notes

This template uses:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react) for Fast Refresh
- TypeScript with strict type checking
- ESLint for code quality

For more advanced ESLint configuration options, see the [Vite React TypeScript template documentation](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts).
