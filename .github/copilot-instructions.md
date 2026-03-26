# Portfolio Website - Copilot Instructions

## Project Overview
A modern, production-ready personal portfolio website built with React and TypeScript.

## Tech Stack
- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules with CSS Variables for theming
- **Animations**: Framer Motion
- **Icons**: React Icons

## Project Structure
```
src/
├── components/       # Reusable UI components
├── sections/         # Page sections (Hero, About, Skills, Projects, Contact)
├── context/          # React Context for theme management
├── hooks/            # Custom React hooks
├── types/            # TypeScript type definitions
├── data/             # Static data (projects, skills)
├── styles/           # Global styles and CSS variables
└── assets/           # Images and other static assets
```

## Features
- Responsive design for all screen sizes
- Dark/Light theme toggle with system preference detection
- Smooth scroll animations
- SEO optimized
- Accessible (WCAG compliant)
- Performance optimized with lazy loading

## Development Guidelines
- Use functional components with hooks
- Follow TypeScript best practices with strict typing
- Keep components small and focused
- Use CSS Modules for component-specific styles
- Implement proper error boundaries

## Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
