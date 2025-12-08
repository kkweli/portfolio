# George Wanjohi - Professional Portfolio

A modern, responsive portfolio website showcasing my expertise as a Site Reliability Engineer with 10+ years of experience in Financial Technology.

## 🚀 Live Demo

Visit the live site: [https://kkweli.github.io/portfolio](https://kkweli.github.io/portfolio)

## 📋 About

This portfolio showcases:
- **Professional Experience**: 10+ years in Site Reliability Engineering and Financial Technology
- **Technical Skills**: Platform Monitoring, Kubernetes, AI/ML, DevOps, and more
- **Real Projects**: 15+ GitHub repositories including SRE tools, AI/ML applications, and full-stack projects
- **Services Offered**: SRE Consulting, Observability Solutions, AI/ML Integration, DevOps Setup

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router
- **Deployment**: GitHub Pages

## 🏃 Local Development

### Prerequisites

- Node.js 20+ and npm

### Installation

```bash
# Clone the repository
git clone https://github.com/kkweli/portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The site will be available at `http://localhost:8080`

## 📦 Build

```bash
# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🚀 Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

1. Ensure GitHub Pages is enabled in repository settings
2. Set the source to "GitHub Actions"
3. Push to the `main` branch to trigger the deployment workflow

## 📁 Project Structure

```
portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── 404.html               # GitHub Pages SPA routing
│   └── ...                    # Static assets
├── src/
│   ├── components/            # Reusable components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── ui/               # shadcn/ui components
│   ├── data/                 # Centralized data layer
│   │   ├── personal.ts       # Personal information
│   │   ├── experience.ts     # Work experience
│   │   ├── skills.ts         # Technical skills
│   │   ├── projects.ts       # GitHub projects
│   │   ├── education.ts      # Education & certifications
│   │   └── services.ts       # Services offered
│   ├── pages/                # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx               # Main app component
│   └── main.tsx              # Entry point
├── index.html
├── vite.config.ts            # Vite configuration
└── package.json
```

## 🎨 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean, professional design with smooth animations
- **SEO Optimized**: Meta tags and semantic HTML
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Type Safe**: Full TypeScript implementation
- **Accessible**: ARIA labels and keyboard navigation support

## 📝 Updating Content

All content is centralized in the `src/data/` directory:

- **Personal Info**: Edit `src/data/personal.ts`
- **Experience**: Edit `src/data/experience.ts`
- **Skills**: Edit `src/data/skills.ts`
- **Projects**: Edit `src/data/projects.ts`
- **Education**: Edit `src/data/education.ts`
- **Services**: Edit `src/data/services.ts`

## 📧 Contact

- **Email**: wanjohi_gm@live.com
- **GitHub**: [github.com/kkweli](https://github.com/kkweli)
- **LinkedIn**: [linkedin.com/in/wanjohigm](https://linkedin.com/in/wanjohigm)
- **Location**: Nairobi, Kenya

## 📄 License

© 2024 George Wanjohi. All rights reserved.

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
