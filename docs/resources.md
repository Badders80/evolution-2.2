# 📚 Evolution Stables - Resources & Build Guide

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and pnpm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Badders80/evolution-2.2.git
cd evolution-2.2

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## 🏗️ Build Steps

### Development

```bash
# Start dev server
pnpm dev

# Run tests
pnpm test

# Run linting
pnpm lint

# Format code
pnpm prettier
```

### Production Build

```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### Testing & Quality Gates

```bash
# Run all tests
pnpm test

# Run tests with coverage
pnpm test:coverage

# Run linting and formatting
pnpm lint && pnpm prettier
```

## 🎨 Design System

### Colors

- **Gold**: `#d4a964` - Primary brand color
- **Gray**: `#747474` - Secondary text
- **Background**: `#000000` - Dark theme background
- **Foreground**: `#ffffff` - Light text on dark

### Fonts

- **Headings**: Bw Gradual (serif)
- **Body**: IBM Plex Sans (sans-serif)

### Layout

- **Hero Section**: 1:1 aspect ratio
- **Content Sections**: 19:6 aspect ratio
- **Navigation**: Fixed header with brand colors

## 🧪 Testing Strategy

### Unit Tests

- Component testing with React Testing Library
- Jest for test runner and assertions
- Accessibility testing with @axe-core/react

### Quality Gates

- ESLint for code quality
- Prettier for code formatting
- Husky pre-commit hooks
- TypeScript for type safety

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

```bash
# Build the application
pnpm build

# The build output will be in the `.next` directory
# Deploy the `.next` folder and `public` folder to your hosting provider
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
# Add your environment variables here
# NEXT_PUBLIC_API_URL=your_api_url
```

### Tailwind Configuration

- Custom aspect ratios: `19/6`
- Brand colors and fonts configured
- Responsive breakpoints optimized

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Common Issues

**Build fails with ESLint errors:**

```bash
# Fix linting issues
pnpm lint --fix
```

**Tests failing:**

```bash
# Update snapshots if needed
pnpm test -- -u
```

**Port already in use:**

```bash
# Kill process on port 3000
npx kill-port 3000
```

## 📈 Performance Optimization

### Image Optimization

- Use Next.js `Image` component for automatic optimization
- Compress images with TinyPNG or similar tools
- Use WebP format when possible

### Bundle Analysis

```bash
# Analyze bundle size
pnpm build && npx @next/bundle-analyzer
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📞 Support

For questions or issues, please check:

1. This documentation
2. GitHub Issues
3. Project milestones in MILESTONES.md

---

## ✅ Stage 2 Validation (September 2025)

### Repo Integrity Confirmed

- **GitHub Repository**: https://github.com/Badders80/evolution-2.2
- **Latest Commit**: `7c969c5` - docs: update milestones for dev environment optimization
- **Vercel Deployment**: https://evolution-2-2.vercel.app (auto-deployed from main)
- **Quality Gates**: All passing (0 errors, 4 warnings)
- **Build Status**: ✅ Production build successful (3.6s)
- **Test Coverage**: ✅ All 12 tests passing

### Performance Optimizations Applied

- **VS Code**: File watcher exclusions for node_modules, .next, coverage
- **Package Manager**: pnpm install --no-optional for faster installs
- **Next.js**: NEXT_TELEMETRY_DISABLED=1 for better performance
- **Fonts**: Optimized loading with display=swap
- **Images**: Next.js Image component for Hero section

### Component Library Status

- **shadcn/ui**: ✅ Fully initialized with New York style
- **Available Components**: Button, Card, Input, Container, Hero, Section
- **Theme Integration**: CSS variables (--gold, --background, --foreground)
- **TypeScript**: Full type safety with component variants

### Deployment Pipeline

- **CI/CD**: GitHub → Vercel automatic deployment
- **Branch Strategy**: main = production, PRs = previews
- **Environment**: Node.js 18+, pnpm package manager
- **Build Time**: ~3.6s consistent performance
