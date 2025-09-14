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
