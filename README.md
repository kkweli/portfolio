# Portfolio

Professional portfolio website for George Wanjohi - Site Reliability Engineer specializing in Platform Monitoring, Kubernetes Orchestration, and AI-driven Process Automation.

**Live Site**: <https://kkweli.github.io/portfolio>

## Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | React 18 + TypeScript |
| Build Tool | Vite |
| Styling | Tailwind CSS + shadcn/ui |
| Routing | React Router v6 |
| Deployment | GitHub Pages |

## Architecture

```text
src/
├── data/              # Centralized data layer
│   ├── personal.ts    # Contact & bio
│   ├── experience.ts  # Work history
│   ├── skills.ts      # Technical skills
│   ├── projects.ts    # GitHub projects
│   ├── education.ts   # Certifications
│   └── services.ts    # Service offerings
├── pages/             # Route components
├── components/        # Shared components
└── App.tsx            # Main app with routing
```

## Development

```bash
# Install dependencies
npm install

# Start dev server (localhost:8080)
npm run dev

# Build for production
npm run build
```

## Deployment

Automatic deployment to GitHub Pages via GitHub Actions on push to `main` branch.

**Configuration**:

- Base URL: `/portfolio/`
- SPA routing: Handled via `404.html` redirect
- Workflow: `.github/workflows/deploy.yml`

## Contact

- **GitHub**: [@kkweli](https://github.com/kkweli)
- **LinkedIn**: [wanjohigm](https://linkedin.com/in/wanjohigm)

---

© 2024 George Wanjohi
