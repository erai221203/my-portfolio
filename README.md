# Personal Portfolio

A modern, production-ready personal portfolio website built with React, TypeScript, and Vite.

## ✨ Features

- **Modern Design** - Clean, professional UI with smooth animations
- **Responsive** - Fully responsive design for all screen sizes
- **Dark/Light Theme** - Toggle between themes with system preference detection
- **Smooth Animations** - Powered by Framer Motion
- **Multi-Page Routing** - Skills and Certificates as separate pages
- **SEO Optimized** - Meta tags and semantic HTML
- **Accessible** - WCAG compliant with proper ARIA labels
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **TypeScript** - Full type safety throughout the codebase

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/erai221203/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Button/          # Button component
│   ├── Footer/          # Site footer
│   ├── LoadingSpinner/  # Loading indicator
│   ├── Navbar/          # Navigation bar
│   └── ScrollToTop/     # Scroll to top button
├── pages/               # Page components (React Router)
│   ├── HomePage/        # Main landing page
│   ├── SkillsPage/      # Skills page
│   └── CertificatesPage/# Certificates page
├── sections/            # Page sections
│   ├── Hero/            # Hero/landing section
│   ├── About/           # About me with Education & Experience
│   ├── Skills/          # Skills & technologies
│   ├── Projects/        # Project showcase
│   ├── Certificates/    # Certificate gallery with modal preview
│   └── Contact/         # Contact section
├── context/             # React Context providers
│   └── ThemeContext.tsx # Theme management
├── hooks/               # Custom React hooks
│   ├── useScroll.ts     # Scroll-related hooks
│   └── useMediaQuery.ts # Responsive design hooks
├── types/               # TypeScript type definitions
├── data/                # Static data (projects, skills, certificates)
├── styles/              # Global styles and CSS variables
public/
├── assets/
│   ├── images/
│   │   ├── Cert/        # Certificate images (SVG)
│   │   ├── clients/     # Client logos
│   │   ├── generated/   # Project card images
│   │   ├── logo/        # Service icons
│   │   └── me/          # Profile images
│   └── Eraianbu R.pdf   # Resume
```

## 🎨 Customization

### Personal Information

Edit `src/data/index.ts` to update your personal information:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Your Title',
  email: 'your.email@example.com',
  location: 'Your Location',
  bio: 'Your bio...',
  resumeUrl: '/assets/resume.pdf',
}
```

### Projects

Add your projects in `src/data/index.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Project description...',
    image: '/assets/images/generated/project.svg',
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project',
    featured: true,
    date: 'Jan 2025',
    tag: 'Web Development',
  },
]
```

### Certificates

Add certificates in `src/data/index.ts`:

```typescript
export const certificates: Certificate[] = [
  {
    title: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: 'Jan 2025',
    url: '/assets/images/Cert/certificate.svg',
    image: '/assets/images/Cert/certificate.svg',
  },
]
```

### Theme Colors

Customize colors in `src/styles/index.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #ec4899;
  /* ... more variables */
}
```

## 🧪 Load Testing

### Using Apache Bench (Pre-installed on macOS)

```bash
# Start dev server first
npm run dev

# In another terminal, run load test
# 1000 requests, 50 concurrent users
ab -n 1000 -c 50 http://localhost:5173/
```

### Using wrk (More powerful)

```bash
# Install
brew install wrk

# Run load test (30 seconds, 4 threads, 100 connections)
wrk -t4 -c100 -d30s http://localhost:5173/
```

### Using k6 (Modern load testing)

```bash
# Install
brew install k6

# Create loadtest.js
cat > loadtest.js << 'EOF'
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 50,
  duration: '30s',
};

export default function () {
  const res = http.get('http://localhost:5173/');
  check(res, { 'status is 200': (r) => r.status === 200 });
  sleep(1);
}
EOF

# Run test
k6 run loadtest.js
```

### Using Lighthouse (Performance Audit)

```bash
# Install Lighthouse CLI
npm install -g lighthouse

# Run audit
lighthouse http://localhost:5173 --view
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

### Deploy to Cloudflare Pages

1. Push your code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Connect your repository
4. Set build command: `npm run build`
5. Set output directory: `dist`

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

## 🛠️ Technologies

- **React 18** - UI Library
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **React Router** - Client-side Routing
- **Framer Motion** - Animations
- **React Icons** - Icon Library
- **CSS Modules** - Scoped Styling

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Made with ❤️ by [Eraianbu Rajkumar](https://github.com/erai221203)


